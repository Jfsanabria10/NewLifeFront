import axios from "axios"
import { useState } from "react"
import { Alert, Card, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { SignFormulario } from "../components/SignupFormulario.js"
import { SIGNUP_POST_ENDPOINT } from "../connections/helpers/endpoints.js"

const Signup= ()=>{

    const [errores, setErrores]= useState({})
    const navegar= useNavigate()

    const registro= async ({username, password, nombre, email})=>{

        const error={}
        setErrores(error)

        axios.post(SIGNUP_POST_ENDPOINT, {username, password, nombre, email},
            {headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}}
            ).then(respuesta=>{
                console.log(respuesta)
                navegar("/signin")
            }).catch(err=>{
                setErrores({crear: err.respuesta.data.message })
            })
    }

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Registrar usuario</h3>
                    <Card.Body>                   
                        {errores.crear && <Alert variant="danger">{errores.crear}</Alert>}
                        <SignFormulario errores={errores} callback={registro} />
                        <div className="mt-3">
                            <Link href="/signin">¿Ya tienes una cuenta? Iniciar sesion aqui.</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {Signup}