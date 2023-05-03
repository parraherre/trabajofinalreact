import { Menu } from "../Shared/Menu/Menu"
import { Route, Routes, Link } from "react-router-dom"
import { Home } from "../Home/Home"
import { Shop } from "../Shop/Shop"
import { Music } from "../Music/Music"
import { Footer } from "../Shared/Footer/Footer"
import { Colaboraciones } from "../Colaboraciones/Colaboraciones"
import { Fans } from "../Fans/Fans"


export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/colaboraciones" element={<Colaboraciones />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path="/musica" element={<Music />} />
                <Route path="/fans" element={<Fans />} />
                
            </Routes>
            <Footer/>
        </>


    )
}