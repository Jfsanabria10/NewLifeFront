import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { ACTUALIZARCITA_PUT_ENDPOINT, CITADETALLE_GET_ENDPOINT } from '../connections/helpers/endpoints'
import {CrearCitaFormulario} from '../components/CrearCitaFormulario';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

function EditarCita() {

    const {id} = useParams();
    const [errores, setErrores]= useState({});
    const [cita, setCita]= useState(null);
    const navegar=useNavigate();


    useEffect(() =>{
        axios.get(`${CITADETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=>{
            setCita(respuesta.data);
        }).catch(error =>{
            navegar('/')
        })        
    }, [id, navegar]);

    const editar= async({consultorio, medico}) => {

        const error={};
        setErrores(error);

        axios.put(`${ACTUALIZARCITA_PUT_ENDPOINT}/${cita.idcita}`, {consultorio, medico})
        .then(respuesta=>{
            navegar("/");
        })
        .catch(err=>{
            setErrores({update: err.respuesta.data.message});
        })
        
    }

    return (

        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Editar Cita</h3>
                    <Card.Body>
                        {errores.update && <Alert variant="danger">{errores.update}</Alert>}

                        { partido && 
                            <CrearCitaFormulario 
                                errores={errores} 
                                callback={editar}
                                cFecha={cita.creado}
                                cHora={cita.citaEntity.hora}
                                cConsulta={cita.citaEntity.consulta}
                                cMedico={cita.citaEntity.medico}
                                cConsultorio={cita.citaEntity.consultorio}
                                editable={true}
                            ></CrearCitaFormulario>    
                        }                    
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {EditarCita}

