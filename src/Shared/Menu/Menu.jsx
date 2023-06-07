import { Link } from "react-router-dom"
import './Menu.css'
export function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg menu navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/navbar.png?alt=media&token=df5eecba-69a7-42ae-a60d-3d66fc1ce6c0" alt="foto" className="foto" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/colaboraciones">Colaboraciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tienda">Tienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fans">Fans</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hook">Hook</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/musica">musica</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}