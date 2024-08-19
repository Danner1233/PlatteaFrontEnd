import axios from "axios";


export const getProductos = async () =>
   await axios.get("http://localhost:4000/api/producto")

