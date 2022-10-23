import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { CITASCREADAS_GET_ENDPOINT } from "../connections/helpers/endpoints"
import {CitaCard} from "../components/CitaCard"

const CitasCreadas= ()=>{

    const [citas, setCitas] = useState([])
    const [buscando, setBuscando] = useState(true)

    useEffect(()=>{
        axios.get(CITASCREADAS_GET_ENDPOINT)
        .then(respuesta=>{
            setCitas(respuesta.data)
            setBuscando(false)
        }).catch(e=>{
            console.error(e)
            setBuscando(false)
        })
    },[])

    return (
    <Container className="mt-3 mb-3">
        <Row className="justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                <h3 className="text-center">Citas creadas</h3>
                <Card.Body>                   
                    {buscando ? "Cargando..." : (citas.length===0 && "No hay citas disponibles")}
                    {citas.map(cita => 
                        <CitaCard key={cita.idCita} cita={cita} editable={false}/>)
                    }
                </Card.Body>
            </Col>
        </Row>
    </Container>
    )
}

export {CitasCreadas}