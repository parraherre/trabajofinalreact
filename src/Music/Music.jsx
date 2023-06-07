import { ObtenerToken } from "../services/ServicioCanciones.js"
import { consultarCanciones } from "../services/ServicioCanciones.js"
import { useState, useEffect } from "react"

import './Music.css'

export function Music() {

    const [canciones, setCanciones] = useState(null)
    const [estacargando, setEstacargando] = useState(true)
    const [token, setToken] = useState(null)



    useEffect(function () {
        ObtenerToken().then(respuesta => {
            console.log(respuesta)
            setToken(respuesta.access_token)
        })
    }, [])


    useEffect(function () {
        if (token) {
            console.log(token)
            consultarCanciones(token).then(function (respuesta) {
                console.log(respuesta);
                setCanciones(respuesta.tracks);
                setEstacargando(false)
            })
        }

    }, [token]);

    if (estacargando) {
        return (
            <>
                <h1>ESTA CARGANDO EL CONTENIDO</h1>
            </>
        )

    } else {
        return (
            <>
            <img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/bannermusica.jpg?alt=media&token=7a0d68a6-3005-4e9b-b5f0-a9fb49ef4e57" alt="" className="w-100" />
                
                    <div className="container my-5">
                        <div className="row row-cols-1 row-cols-md-2 g-3">
                            {
                                canciones.map(function (cancion) {
                                    return (

                                        <div className="col">
                                            <div className="card bg-dark border-info h-100 shadow p-3">
                                                <h2 className="text-center text-white ">{cancion.name}</h2>
                                                <img src={cancion.album.images[1].url} alt="" />
                                                <audio className="w-100 my-2" controls src={cancion.preview_url}></audio>
                                                <h3 className=" text-center text-white">Popularidad:<br></br>{cancion.popularity}</h3>
                                            </div>


                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                <div className="fondo"></div>
            </>
        )
    }

}