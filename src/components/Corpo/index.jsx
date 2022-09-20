import './styles.css';

export const Corpo = ({ resultado }) => {

  return (
    <div className='count-odas'>
      <p> {resultado.length} odas </p>

      <section>

        {resultado.map(odas => (
          <div key={odas._id} className="card-box">
            <div className="card-content">
              <h2 className="card-title">{odas.nome}</h2>
              <p className="card-author"><b>Nome: </b>{odas.usuario}</p>                
              <p className="data"><b>{odas.data_inclusao}</b></p>
              <p className="card-description" data-view="false">{odas.descricao}</p>
              <p className="tag"><b>Palavras-chave: </b>{odas.palavras_chave}.</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )

}