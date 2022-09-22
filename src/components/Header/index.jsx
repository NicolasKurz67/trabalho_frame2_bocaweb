import './styles.css';

export const Header = ({ search, buscaODA }) => {
    return (
        <div className="menu">
            <div className="space-logo">
                <img src="/images/logo.png" alt="Logo do Bocaweb" width="100" height="auto"></img>
                <span>BocaWeb</span>
            </div>

            <nav className='space-nav'>
                <div className="search-box">
                    <div className='link-item'>
                        <li><span>Início</span></li>
                        <li><span>Suporte</span></li>
                    </div>
                    <div className='space-search-box'>
                        <div className='search-box-input'>
                            <input
                                name='busca'
                                type='text'
                                value={search}
                                placeholder='Pesquisar ODA'
                                onChange={buscaODA}
                                className="search-txt"
                                autoComplete='off'
                            />
                        </div>
                        <span className="search-btn">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}