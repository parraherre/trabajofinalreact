import { useState, useEffect } from "react"

export function Carga(){

    const [estaCargando,setCargando]=useState(true)
    const [tiempo,setTiempo]=useState(0)

    useEffect(function(){
        if(tiempo>0){
            setCargando(false)
        }else{
            setCargando(true)
        }
        
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)
    },5000)

    if(estaCargando){
        return(
            <>
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>ESTAMOS CARGANDO ESPERE O SI NO VALLASE</h3>
                        <img src="../../src/assets/Img/carga.gif" alt="" className="img-fluid mx-auto d-block"/>
                    </div>
                </div>
            </div>

            </>
        )
    }else{
        return(
            <>
            <h4>YA CARGAMOS TODO GRACIAS POR LA ESPERA</h4>
            </>
        )
    }
}