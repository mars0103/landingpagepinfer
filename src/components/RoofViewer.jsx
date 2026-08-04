import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { asset } from '../lib/asset'

const ROOF_BASE_SCALE = 1
const ROOF_FOCUS_SCALE = 1.08
const ROOF_FOCUS_HOLD = 500
const BASE_ROT_X = -0.32

const cloneMaterial = (material) => {
  const cloned = material.clone()
  // Painted steel roofing: metal base visible under paint, semi-gloss finish
  cloned.metalness = 0.45
  cloned.roughness = 0.52
  return cloned
}

const getEffectiveRoot = (model) => {
  let root = model
  while (root.children.length === 1 && !root.children[0].isMesh) root = root.children[0]
  return root
}

const findLayerRoot = (searchRoot, keywords) => {
  let matched = null
  searchRoot.traverse((obj) => {
    if (matched) return
    if (keywords.some((kw) => obj.name?.toLowerCase().includes(kw))) matched = obj
  })
  if (!matched) return null
  let cur = matched
  while (cur.parent && cur.parent !== searchRoot) cur = cur.parent
  return cur.parent === searchRoot ? cur : null
}

const isDescendantOf = (mesh, ancestor) => {
  if (!ancestor) return false
  let cur = mesh
  while (cur) {
    if (cur === ancestor) return true
    cur = cur.parent
  }
  return false
}

export default function RoofViewer({ modelPath, topColor, bottomColor, layer }) {
  const containerRef = useRef(null)
  const stateRef = useRef(null)
  const layerRef = useRef(layer)
  const freeRotRef = useRef(false)
  const [isReady, setIsReady] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [freeRot, setFreeRot] = useState(false)

  useEffect(() => { layerRef.current = layer }, [layer])

  const toggleFreeRot = () => {
    const next = !freeRotRef.current
    freeRotRef.current = next
    setFreeRot(next)
    // Sync pointer.rotationX to current model X so entering free-rot feels seamless
    const state = stateRef.current
    if (next && state) {
      state.pointer.rotationX = state.modelGroup.rotation.x
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 100)
    const loader = new GLTFLoader()
    const topMaterials = new Set()
    const bottomMaterials = new Set()
    const modelGroup = new THREE.Group()
    const pointer = {
      active: false,
      startX: 0, startY: 0,
      rotationX: BASE_ROT_X,
      rotationY: -0.52,
    }
    const zoom = { targetScale: ROOF_BASE_SCALE, releaseAt: 0 }
    const flip = { x: layerRef.current === 'bottom' ? Math.PI : 0 }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    scene.add(modelGroup)
    scene.add(new THREE.HemisphereLight(0xdde8f0, 0x4a5260, 1.6))
    const keyLight = new THREE.DirectionalLight(0xfff8f0, 2.2)
    keyLight.position.set(4, 6, 5)
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0xd0e4f8, 1.0)
    rimLight.position.set(-4, 1, -3)
    scene.add(rimLight)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6)
    fillLight.position.set(0, -2, 4)
    scene.add(fillLight)

    camera.position.set(0, 1.85, 3.1)
    camera.lookAt(0, 0, 0)

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    let animationId
    const animate = () => {
      const now = performance.now()
      if (zoom.targetScale > ROOF_BASE_SCALE && now > zoom.releaseAt) zoom.targetScale = ROOF_BASE_SCALE
      const zoomSpeed = zoom.targetScale > modelGroup.scale.x ? 0.13 : 0.065
      modelGroup.scale.setScalar(modelGroup.scale.x + (zoom.targetScale - modelGroup.scale.x) * zoomSpeed)

      modelGroup.rotation.y += (pointer.rotationY - modelGroup.rotation.y) * 0.08

      if (freeRotRef.current) {
        // Free rotation: follow pointer.rotationX directly, no bob
        modelGroup.rotation.x += (pointer.rotationX - modelGroup.rotation.x) * 0.08
      } else {
        // Locked view: ease back to base angle + flip, with subtle float
        const targetRotX = BASE_ROT_X + flip.x
        modelGroup.rotation.x += (targetRotX + Math.sin(now * 0.0012) * 0.022 - modelGroup.rotation.x) * 0.06
      }

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    const onPointerDown = (e) => {
      // Ignore clicks on overlay buttons — let them handle their own events
      if (e.target.closest('.btn-360')) return
      pointer.active = true
      pointer.startX = e.clientX
      pointer.startY = e.clientY
      container.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e) => {
      if (!pointer.active) return
      const dx = e.clientX - pointer.startX
      const dy = e.clientY - pointer.startY
      pointer.rotationY += dx * 0.01
      if (freeRotRef.current) {
        pointer.rotationX += dy * 0.01
      }
      pointer.startX = e.clientX
      pointer.startY = e.clientY
    }
    const onPointerUp = (e) => {
      pointer.active = false
      container.releasePointerCapture(e.pointerId)
    }

    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerup', onPointerUp)
    window.addEventListener('resize', resize)

    stateRef.current = { topMaterials, bottomMaterials, zoom, pointer, flip, modelGroup }

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene
        const effectiveRoot = getEffectiveRoot(model)
        const topRoot = findLayerRoot(effectiveRoot, ['cima', 'superior', 'top'])
        const botRoot = findLayerRoot(effectiveRoot, ['baixo', 'inferior', 'bottom'])

        model.traverse((object) => {
          if (!object.isMesh) return
          const isTop = isDescendantOf(object, topRoot)
          const isBot = isDescendantOf(object, botRoot)
          if (Array.isArray(object.material)) {
            object.material = object.material.map((mat) => {
              const m = cloneMaterial(mat)
              if (isTop) topMaterials.add(m)
              if (isBot) bottomMaterials.add(m)
              return m
            })
          } else if (object.material) {
            object.material = cloneMaterial(object.material)
            if (isTop) topMaterials.add(object.material)
            if (isBot) bottomMaterials.add(object.material)
          }
        })

        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        const largestSide = Math.max(size.x, size.y, size.z)
        model.position.sub(center)
        model.scale.multiplyScalar(3.55 / largestSide)
        modelGroup.add(model)
        modelGroup.position.y = -0.03
        modelGroup.rotation.set(BASE_ROT_X + flip.x, pointer.rotationY, 0.08)

        topMaterials.forEach((mat) => { if (mat?.color) mat.color.set(topColor || '#ffdf00') })
        bottomMaterials.forEach((mat) => { if (mat?.color) mat.color.set(bottomColor || '#b8b8b8') })

        resize()
        setIsReady(true)
      },
      undefined,
      () => setLoadError(true),
    )

    resize()
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement)
      stateRef.current = null
    }
  }, [modelPath])

  useEffect(() => {
    const state = stateRef.current
    if (!state || !topColor) return
    state.topMaterials.forEach((mat) => { if (mat?.color) { mat.color.set(topColor); mat.needsUpdate = true } })
    state.zoom.targetScale = ROOF_FOCUS_SCALE
    state.zoom.releaseAt = performance.now() + ROOF_FOCUS_HOLD
  }, [topColor])

  useEffect(() => {
    const state = stateRef.current
    if (!state || !bottomColor) return
    state.bottomMaterials.forEach((mat) => { if (mat?.color) { mat.color.set(bottomColor); mat.needsUpdate = true } })
    state.zoom.targetScale = ROOF_FOCUS_SCALE
    state.zoom.releaseAt = performance.now() + ROOF_FOCUS_HOLD
  }, [bottomColor])

  useEffect(() => {
    layerRef.current = layer
    const state = stateRef.current
    if (!state) return
    state.flip.x = layer === 'bottom' ? Math.PI : 0
    // Exit free-rot when switching layers so the flip animates cleanly
    if (freeRotRef.current) {
      freeRotRef.current = false
      setFreeRot(false)
    }
    state.zoom.targetScale = ROOF_FOCUS_SCALE
    state.zoom.releaseAt = performance.now() + ROOF_FOCUS_HOLD
  }, [layer])

  return (
    <div
      ref={containerRef}
      className={`roof-3d-card${isReady ? ' is-ready' : ''}${freeRot ? ' is-free-rot' : ''}`}
      data-cursor="MOVA O MODELO 3D"
      aria-label="Modelo 3D da telha"
    >
      {!isReady && (
        <div className="roof-3d-fallback">
          {loadError ? 'Não foi possível carregar o modelo 3D' : 'Carregando modelo 3D'}
        </div>
      )}
      {isReady && (
        <button
          className={`btn-360${freeRot ? ' is-active' : ''}`}
          type="button"
          aria-label="Vista 360° — rotação livre"
          aria-pressed={String(freeRot)}
          onClick={toggleFreeRot}
        >
          <img src={asset('assets/icone 360.svg')} alt="" aria-hidden="true" className="icon-360" />
          Vista 360°
        </button>
      )}
    </div>
  )
}
