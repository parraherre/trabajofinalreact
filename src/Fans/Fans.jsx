import "./Fans.css"
export function Fans(){
    return(
        <>
            <section>
                <div className="fondo mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 mt-3">
                                <form>
                                    <label htmlFor="usuario" className="form-label text-white">Usuario</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="basic-addon1" />
                                    </div>
                                    <label htmlFor="fecha" className="form-label text-white">Fecha de nacimiento</label>
                                    <div class="input-group mb-3">
                                        <input type="date" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlfor="email" class="form-label text-white">Dirección de correo electrónico</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label text-white">Contraseña</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" class="btn btn-success">Iniciar sesion</button>
                                </form>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-4 mt-3 text-white">
                                <h5>¿Que dia murio avicii?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>20 de abril de 2018
                                <br />
                                <input type="radio" className="mt-3"/>1 de abril de 2010
                                <br />
                                <input type="radio" className="mt-3"/>20 de enero de 2023
                                <br />
                            </div>
                            <div className="col-12 col-md-4 mt-3 text-white">
                                <h5>¿Cual fue su mayor exito?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Levels
                                <br />
                                <input type="radio" className="mt-3"/>hey brother
                                <br />
                                <input type="radio" className="mt-3"/>no se
                            </div>
                            <div className="col-12 col-md-4 mt-3 text-white">
                                <h5>¿Cual es la cancion que colaboro con feat. Aloe Blacc?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Wake Me Up
                                <br />
                                <input type="radio" className="mt-3"/>hey brother
                                <br />
                                <input type="radio" className="mt-3"/>you make me
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-6 mt-3 text-white">
                                <h5>Que cancion colaboro con feat. Aluna George</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Wake Me Up
                                <br />
                                <input type="radio" className="mt-3"/>What Would I Change It To
                                <br />
                                <input type="radio" className="mt-3"/>Lonely Together
                            </div>
                            <div className="col-12 col-md-6 mt-3 text-white">
                                <h5>Donde nacio avicii</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Estocolmo, Suecia
                                <br />
                                <input type="radio" className="mt-3"/>Medellin,colombia
                                <br />
                                <input type="radio" className="mt-3"/>los angeles,california
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}