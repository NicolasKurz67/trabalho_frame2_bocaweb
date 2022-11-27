import './styles.css';

export const Corpo = ({ resultado }) => {

  return (
    <div className='container-root'>

      <div className="contador">
        <p className='count-odas'> {resultado.length} ODAS</p>
      </div>
      
      <section>
        {resultado.map(odas => (
          <div key={odas._id} className="card-box">
            <div className="card-content">
              <h2 className="card-title">{odas.nome}</h2>
              <p className="card-author"><b>Nome do Usuário: </b>{odas.usuario}</p>                
              <p className="data"><b>Data: {odas.data_inclusao}</b></p>
              <p className="card-description" data-view="false">{odas.descricao}</p>
              <p className="tag"><b>Palavras-chave: </b>{odas.palavras_chave}.</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}