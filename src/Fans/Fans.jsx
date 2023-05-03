import "./Fans.css"
export function Fans(){
    return(
        <>
            <section>
                <div className="fondo mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 mt-3">
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
                            <div className="col-12 col-md-2 mt-3 "></div>
                            <div className="col-12 col-md-5 mt-3">
                                <h5 className="text-white">¿Que dia murio avicii?</h5>
                                <br />
                                <h5 className="text-white">¿Cual fue su mayor exito?</h5>
                                <br />
                                <h5 className="text-white">¿Cual es la cancion que colaboro con feat. Aloe Blacc?</h5>
                                <br />
                                <h5 className="text-white">Cancion favorita de avicii</h5>
                                <br />
                                <h5 className="text-white">Que cancion fue la que colaboro avicii con ft. Rita Ora</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}