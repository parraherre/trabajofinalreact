import "./Footer.css"
export function Footer() {
    return (
        <>
            
            <h1 className="text-center">REDES SOCIALES</h1>
            <div className="container iconos-footer">
                <div className="row">
                    <div className="col-12 col-md-4 mt-1">
                        <a href="https://www.instagram.com/avicii/?hl=es" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/instagram.png?alt=media&token=80d9a461-f11c-454f-8f33-d7c773c50740" alt="Instagram" className="img-fluid iconos" /></a>
                        <h2 className="texto">INTAGRAM</h2>
                    </div>
                    <div className="col-12 col-md-4 mt-1">
                        <a href="https://twitter.com/avicii?lang=bn"><img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/twitter.png?alt=media&token=3b94f61e-a623-44fb-b46f-3b3df1aef90a" alt="twitter" className="img-fuid iconos" /></a>
                        <h2 className="texto">TWITTER</h2>
                    </div>
                    <div className="col-12 col-md-4 mt-1">
                        <a href="https://www.facebook.com/avicii/?locale=es_LA"><img src="https://firebasestorage.googleapis.com/v0/b/musicasph-be862.appspot.com/o/facebook.png?alt=media&token=b9788185-b755-48ab-b2ff-486814e81b47" alt="facebook" className="img-fluid iconos" /></a>
                        <h2 className="texto">FACEBOOK</h2>
                    </div>
                </div>
            </div>
        </>
    )
}