import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CREARCITA_POST_ENDPOINT } from '../connections/helpers/endpoints';
import {CrearCitaFormulario} from '../components/CrearCitaFormulario';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

function CrearCita() {

    const [errores, setErrores]= useState({});
    const navegar=useNavigate();

    const crear= async ({fecha, consultorio, medico}) => {

        const errores={};
        setErrores(errores);
       
        axios.post(CREARCITA_POST_ENDPOINT, {fecha, consultorio, medico}
            ).then(response=>{
                navegar(`/cita/${response.data.idCita}`);
        })
        .catch(error=>{
            setErrores({new: error.response.data.message});
        })
    }

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Crear Cita</h3>
                    <Card.Body>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                        <CrearCitaFormulario errores={errores} callback={crear} editable={false}/>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearCita}
