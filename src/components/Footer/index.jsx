import './styles.css'
export const Footer = () => {
    return (
        <footer>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <section className='footer-content'>
                <div className='footer-creds'>
                    <p>IFMS Dourados – Trabalho de Frameworks2 | Desenvolvido por Nícolas Kurz Chimenes Silva e Rômulo Romanholi Pereira</p>
                </div>

                <div className='footer-icons'>
                    <ul className="socials-icons">
                        <li><i className="fa brands fa-facebook"></i></li>
                        <li><i className="fa brands fa-instagram"></i></li>
                        <li><i className="fa brands fa-google"></i></li>
                        <li><i className="fa fa-youtube"></i></li>
                        <li><i className="fa fa-linkedin-square"></i></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}