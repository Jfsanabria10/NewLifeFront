import React, {useState} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap"
import moment from 'moment';

function CrearCitaFormulario({errores, callback, 
    cFecha="", cHora="", cConsulta="", cMedico="", cConsultorio="", 
    editable}) {

    const [fecha, setFecha]=useState(cFecha);
    const [hora]=useState(cHora);
    const [consulta]=useState(cConsulta);
    const [medico]=useState(cMedico);
    const [consultorio]=useState(cConsultorio);
   
    
    const enviar = (e) => {
        e.preventDefault();
        (!editable) ? callback({fecha, hora, consulta}) : callback({medico,consultorio})
    }

    return (
        <Form onSubmit={enviar}>        
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="fecha">              
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control 
                                type="date" 
                                value={moment(fecha).format('yyyy-MM-DD')} 
                                min={moment().format('yyyy-MM-DD')}
                                onChange={e=>setFecha(e.target.value)}
                                isInvalid={errores.fecha}                      
                            >                        
                            </Form.Control>          
                            
                            <Form.Control.Feedback type="invalid">
                                {errores.fecha}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>                           
                </Row>
            }
            {!editable &&
                    

                <Row>
                <Col md="6" xs="12">
                        <Form.Group controlId="idConsulta">
                            <Form.Label>Consulta</Form.Label>
                            <Form.Control 
                                as="select" 
                                type="select"
                                value={consulta}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Medicina General</option>
                                
                            </Form.Control>

                            <Form.Control.Feedback type="invalid">
                                {errores.consulta}
                            </Form.Control.Feedback>
                        </Form.Group>                   
                    </Col>
                    <Col md="6" xs="12">

                            <Form.Label>Medico</Form.Label>
                            <Form.Control 
                                as="select" 
                                type="select"
                                value={medico}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Edgar Flores</option>
                                <option value="2">Maria Gomez</option>
                                
                            </Form.Control>
                            </Col>
                    <Col md="6" xs="12">
                        <Form.Group controlId="idConsultorio">
                            <Form.Label>Consultorio</Form.Label>
                            <Form.Control 
                                as="select" 
                                type="select"
                                value={consultorio}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="1">402</option>
                                <option value="2">201</option>
                                
                            </Form.Control>

                            <Form.Control.Feedback type="invalid">
                                {errores.consulta}
                            </Form.Control.Feedback>
                        </Form.Group>                   
                    </Col>                            
                </Row>
            }
            {editable &&
                <div className="mt-3 mb-3">
                    <p> {fecha}</p>
                    <p> {hora}</p>
                    <p> {consulta}</p>
                    <p> {medico}</p>
                    <p> {consultorio}</p>
                </div>
            }
            
            <Button variant="primary" type="submit" className="mt-3">
                {!editable ? "Crear " : "Editar "}
                cita
            </Button>
        </Form>        
    )
}

export {CrearCitaFormulario}

