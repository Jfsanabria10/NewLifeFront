import axios from "axios"
import jwt_decode from "jwt-decode"
import { usuario } from "../states/sliceReducers"
import { SIGNIN_POST_ENDPOINT } from "./helpers/endpoints"
import { setAutenticacionToken } from "./helpers/token"


export const autenticacion= (datos) => dispatch =>{

    return new Promise((resolver, rechazar)=>{
        
        axios.post(SIGNIN_POST_ENDPOINT, datos, 
            {headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}}
        ).then(respuesta=>{
            
            const {authorization}= respuesta.headers

            localStorage.setItem('token', authorization)            

            setAutenticacionToken(authorization)

            const decodificado= jwt_decode(authorization)

            dispatch(usuario({usuario: decodificado, conectado: true}))

            resolver(respuesta)
            
        }).catch(err=>{
            rechazar(err)
        })
    }) 
}

export const cerrarSersion= ()=> dispatch =>{

    localStorage.removeItem('token')

    setAutenticacionToken(false)

    dispatch(usuario({usuario:{}, conectado: false}))
}