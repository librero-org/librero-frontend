import './footer-style.css'

export function FooterComponent() {
  return (
    <div>
    <div className="footer-div">
        <div className="footer-container">
            <ul>
                <li>
                    <img src="assets/img/librero_logo.svg" alt=""/>
                </li>
            </ul>
            <ul>
                <li>
                    <h2>Acerca de</h2>
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, volupt        atem? Nostrum
                    quidem
                    cum omnis? Modi temporibus praesentium atque delectus magnam!
                </li>
            </ul>
            <ul>
                <li>
                    <h2>Follow me</h2>
                </li>
                <li>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <footer className="footer">
        <h6>Libreria Copyright <i className="far fa-copyright"></i></h6>
    </footer>
    </div>
  )
}
