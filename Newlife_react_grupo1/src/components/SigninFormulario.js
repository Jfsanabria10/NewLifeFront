import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function SigninFormulario({errores, callback}) {

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState(""); 


    const enviarFormulario = (e) => {
        e.preventDefault();
        callback({username, password});
    }

    
    return (
        <Form onSubmit={enviarFormulario}>
            <Form.Group className="my-3" controlId="userName">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                    type="text"  
                    placeholder="Ingrese su usuario"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    isInvalid={errores.username}
                />
                <Form.Control.Feedback type="invalid">
                    {errores.username}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    isInvalid={errores.password}
                />
                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>
          
            <Button variant="primary" type="submit" className="mt-3">
                Iniciar sesión
            </Button>
        </Form>
    )
}

export {SigninFormulario}

