import { ESPESSURAS, TELHAS } from '../data/telhas'

export default function SpecTable() {
  const metal = TELHAS.filter((t) => t.grupo === 'Metálicas')
  const termo = TELHAS.filter((t) => t.grupo === 'Termoacústicas')
  return (
    <section className="spec" id="especificacoes">
      <div className="spec-inner">
        <p className="cfg-kicker spec-kicker">Ficha técnica</p>
        <h2>Peso por metro<br /><span>de cada telha</span></h2>
        <p className="spec-sub">Aço Zincalume / Galvalume · peso em kg por metro linear, conforme a espessura da chapa.</p>

        <div className="spec-wrap">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Modelo</th>
                {ESPESSURAS.map((e) => <th key={e}>{e} mm</th>)}
              </tr>
            </thead>
            <tbody>
              {metal.map((t) => (
                <tr key={t.id}>
                  <th scope="row">{t.nome}</th>
                  {ESPESSURAS.map((e, i) => {
                    const j = t.espessuras ? t.espessuras.indexOf(e) : i
                    return (
                      <td key={e}>
                        {j >= 0 && t.kg[j] ? <>{t.kg[j]}<small> kg/m</small></> : <span className="spec-na">—</span>}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="spec-h3">Termoacústicas</h3>
        <div className="spec-wrap">
          <table className="spec-table spec-table--termo">
            <thead>
              <tr><th>Modelo</th><th>Perfis</th><th>Núcleo EPS</th></tr>
            </thead>
            <tbody>
              {termo.map((t) => (
                <tr key={t.id}>
                  <th scope="row">{t.nome}</th>
                  <td>{t.perfis.join(' · ')}</td>
                  <td>{t.eps.map((e) => `${e} mm`).join(' · ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="spec-note">Todas as telhas podem ser fabricadas em medidas e espessuras customizadas, no comprimento da sua obra.</p>
      </div>
    </section>
  )
}
