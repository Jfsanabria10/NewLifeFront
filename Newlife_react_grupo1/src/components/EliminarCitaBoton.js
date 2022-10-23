import axios from "axios"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ELIMINARCITA_DELETE_ENDPOINT } from "../connections/helpers/endpoints"

function EliminarCitaBoton({id, fecha, consulta}){

    const navegar= useNavigate()

    const eliminar= async ()=>{

        axios.delete(`${ELIMINARCITA_DELETE_ENDPOINT}/${id}`
          ).then(respuesta=>{
          navegar("/")
        }).catch(err=>{
            console.error(err)
        })
    }

    const crearAlerta= ()=>{
        
      const titulo= `Eliminar Cita \n ¿Desea eliminar la cita ${fecha} - ${consulta}?`

      return (window.confirm(titulo) == true) ? eliminar() : ()=>{}
    }

    return (
        <Button
          variant="danger" size="sm" onClick={crearAlerta}
        >
          Eliminar
        </Button>
      )
}

export {EliminarCitaBoton}