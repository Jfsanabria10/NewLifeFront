import axios from "axios"
import { useEffect, useState } from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import { CITADETALLE_GET_ENDPOINT } from "../connections/helpers/endpoints.js"
import { useNavigate, useParams } from "react-router-dom"
import moment from "moment"

const CitaDetalle= ()=>{

    const [cita, setCita] = useState(null)
    const {id}= useParams()
    const navegar= useNavigate()


    useEffect(()=>{
        axios.get(`${CITADETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=>{
            setCita(respuesta.data)
        }).catch(e=>{
            navegar(-1)
        })
    },[id, navegar])

    
    return (
    <Container className="mt-3 mb-3">
        <Row className="justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                <h3 className="text-center">Detalle cita</h3>
                {cita && (
                    <Card className="mt-3 mb-3">
                        <Card.Header className="mi-card">
                            {cita.citaEntity.consulta} - {cita.citaEntity.consultorio}
                            {cita.tomada ? 
                                    <Badge className="mi-badge-tomada">Tomada</Badge> : 
                                    <Badge className="mi-badge-pendiente">Pendiente</Badge>
                            }                        
                        </Card.Header>
                        <Card.Body>
                            <p>
                                Medico
                                <Badge className="mi-badge-medico">{cita.medico}</Badge> 
                                -
                                <Badge className="mi-badge-consultorio">{cita.consultorio}</Badge> 
                                Consultorio
                            </p>
                            Fecha: {moment(partido.fecha).format("D[/]MM[/]YYYY")}    
                        </Card.Body>
                        <Card.Footer>
                            Creado por {cita.usuarioEntity.nombre}, {moment(cita.creado).fromNow()}
                        </Card.Footer>
                    </Card>
                )}
            </Col>
        </Row>
    </Container>
    )
}

export {CitaDetalle}