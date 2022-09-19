import './styles.css'
export const Footer = () => {
    return (

            <footer>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
               
                <section className='footer-content'>    
                    <div className="footer-btn">
                        <p>IFMS Dourados – Trabalho de Frameworks2 | Desenvolvido por Nícolas Kurz Chimenes Silva e Rômulo Romanholi Pereira</p>
                    </div>
                    
                    <ul className="socials-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </section>
            </footer>
    )
}