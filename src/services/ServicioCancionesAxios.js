import axios from "axios";
export async function consultarConAxios() {
  //1. URL del servicio

  const IDARTISTA = "3YcBF2ttyueytpXtEzn1Za";
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`;

  //2. Contruyo la peticion

  const PETICION = {
    headers: { Authorization: TOKEN },
  };

  //4. Ordenar mi respuesta
  try {
    //3. Utilizamos la promesa encargada de consumir el api

    let respuesta = await axios.get(URI.PETICION);
    let canciones = respuesta.JSON;
    return canciones;
  } catch (error) {
    throw new error("sorry bro" + error);
  }
}
