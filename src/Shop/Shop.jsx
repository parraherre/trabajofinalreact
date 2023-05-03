
import "./Shop.css"
export function Shop() {
    let productos = [
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/producto1.jpg?alt=media&token=af410b51-3f61-4b7d-9d68-8ae0156c3a81",
            nombre: "TIM LP",
            precio: "$29.00",
            descripcion: "",
            id: "1"
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/producto2.jpg?alt=media&token=e2c3b6c3-84ef-4352-8c97-b182d1b97db9",
            nombre: "TIM T-SHIRT",
            precio: "$30.00",
            descripcion: "LOGOS SERIGRAFIADOS EN PECHO Y ESPALDA LOS INGRESOS NETOS DE AVICII GENERADOS POR LA COMPRA DE ESTA CAMISETA SERÁN DONADOS* A LA FUNDACIÓN SIN FINES DE LUCRO TIM BERGLING EN APOYO A SU TRABAJO PARA, ENTRE OTRAS COSAS, ABORDAR PROBLEMAS DE ENFERMEDADES MENTALES Y AYUDAR A PREVENIR EL SUICIDIO. LAS COMPRAS NO SON DEDUCIBLES DE IMPUESTOS COMO UNA CONTRIBUCIÓN CARITATIVA POR PARTE DEL CONSUMIDOR/COMPRADOR. LA PARTICIPACIÓN DE CARIDAD NO IMPLICA RESPALDO, APROBACIÓN O RECOMENDACIÓN.",
            id:"2"
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/producto3.jpg?alt=media&token=7ff0b5d8-67a6-43c7-8d6f-69b1589fd75b",
            nombre: "TIM HOODIE",
            precio: "$55.00",
            descripcion: "LOGOS SERIGRAFIADOS EN PECHO Y ESPALDA LOS INGRESOS NETOS DE AVICII GENERADOS POR LA COMPRA DE ESTA CAMISETA SERÁN DONADOS* A LA FUNDACIÓN SIN FINES DE LUCRO TIM BERGLING EN APOYO A SU TRABAJO PARA, ENTRE OTRAS COSAS, ABORDAR PROBLEMAS DE ENFERMEDADES MENTALES Y AYUDAR A PREVENIR EL SUICIDIO. LAS COMPRAS NO SON DEDUCIBLES DE IMPUESTOS COMO UNA CONTRIBUCIÓN CARITATIVA POR PARTE DEL CONSUMIDOR/COMPRADOR. LA PARTICIPACIÓN DE CARIDAD NO IMPLICA RESPALDO, APROBACIÓN O RECOMENDACIÓN.",
            id:"3"
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/producto4.webp?alt=media&token=4fa46d99-d52f-455e-abcd-fbfd4897559d",
            nombre: "TIM CD",
            precio: "$19.98",
            descripcion: "LOGOS SERIGRAFIADOS EN PECHO Y ESPALDA LOS INGRESOS NETOS DE AVICII GENERADOS POR LA COMPRA DE ESTA CAMISETA SERÁN DONADOS* A LA FUNDACIÓN SIN FINES DE LUCRO TIM BERGLING EN APOYO A SU TRABAJO PARA, ENTRE OTRAS COSAS, ABORDAR PROBLEMAS DE ENFERMEDADES MENTALES Y AYUDAR A PREVENIR EL SUICIDIO. LAS COMPRAS NO SON DEDUCIBLES DE IMPUESTOS COMO UNA CONTRIBUCIÓN CARITATIVA POR PARTE DEL CONSUMIDOR/COMPRADOR. LA PARTICIPACIÓN DE CARIDAD NO IMPLICA RESPALDO, APROBACIÓN O RECOMENDACIÓN.",
            id:"4"
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/producto5.webp?alt=media&token=f4f505d3-140e-4ba2-a911-e7f0b79ec618",
            nombre: "TIM LONG SLEEVE T-SHIRT",
            precio: "$40.00",
            descripcion: "LOGOS SERIGRAFIADOS EN PECHO Y ESPALDA LOS INGRESOS NETOS DE AVICII GENERADOS POR LA COMPRA DE ESTA CAMISETA SERÁN DONADOS* A LA FUNDACIÓN SIN FINES DE LUCRO TIM BERGLING EN APOYO A SU TRABAJO PARA, ENTRE OTRAS COSAS, ABORDAR PROBLEMAS DE ENFERMEDADES MENTALES Y AYUDAR A PREVENIR EL SUICIDIO. LAS COMPRAS NO SON DEDUCIBLES DE IMPUESTOS COMO UNA CONTRIBUCIÓN CARITATIVA POR PARTE DEL CONSUMIDOR/COMPRADOR. LA PARTICIPACIÓN DE CARIDAD NO IMPLICA RESPALDO, APROBACIÓN O RECOMENDACIÓN.",
            id:"5"
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/producto6.webp?alt=media&token=0f1af806-7710-4d65-9bb8-50609e88a304",
            nombre: "TIM HAT",
            precio: "30.00",
            descripcion: "LOGOS SERIGRAFIADOS EN PECHO Y ESPALDA LOS INGRESOS NETOS DE AVICII GENERADOS POR LA COMPRA DE ESTA CAMISETA SERÁN DONADOS* A LA FUNDACIÓN SIN FINES DE LUCRO TIM BERGLING EN APOYO A SU TRABAJO PARA, ENTRE OTRAS COSAS, ABORDAR PROBLEMAS DE ENFERMEDADES MENTALES Y AYUDAR A PREVENIR EL SUICIDIO. LAS COMPRAS NO SON DEDUCIBLES DE IMPUESTOS COMO UNA CONTRIBUCIÓN CARITATIVA POR PARTE DEL CONSUMIDOR/COMPRADOR. LA PARTICIPACIÓN DE CARIDAD NO IMPLICA RESPALDO, APROBACIÓN O RECOMENDACIÓN.",
            id:"6"

        }

    ]
    return (

        <>
            <section>


                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/imagentienda1.jpg?alt=media&token=19bcbe00-5c4a-45cd-9353-c7743279792a" className="d-block w-100 " alt="foto1" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/imagentienda2.jpg?alt=media&token=f0f4d998-2f83-4b8c-9af9-1c966f2f5f78" className="d-block w-100" alt="foto2" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/imagentienda3.jpg?alt=media&token=03bc68c6-1c1c-420e-8fe2-619fdf187c41" className="d-block w-100" alt="foto3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>

            </section>
            <section>
                <div className="row row-cols-1 row-cols-md-2 g-3 w-100">
                    {
                        productos.map(function (producto) {
                            return (
                                <div key={producto.id} >
                                    <div className="col h-90">
                                        <div className="card">
                                            <img src={producto.foto} alt="" className=" w-100" />
                                            <h2 className="text-center">{producto.nombre}</h2>
                                            <h5 className="text-center">{producto.descripcion}</h5>
                                            <h2 className="text-success text-center">{producto.precio}</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tienda mt-5 mb-5"></div>
            </section>
        </>
    )
}