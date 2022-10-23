import { Badge, Button, Card } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import moment from "moment"
import { EliminarCitaBoton } from "./EliminarCitaBoton"

const CitaCard= ({cita, editable})=>{

    return (
        <Card className="mt-3 mb-3">
            <Card.Header className="mi-card">
                {cita.tomada ? 
                        <Badge className="mi-badge-tomada">Tomada</Badge> 
                        : 
                        <Badge className="mi-badge-pendiente">Pendiente</Badge>
                }
                { editable ?
                    <div>
                        <Button variant="primary" size="sm" className="me-2"
                                as={NavLink} to={`/editarcita/${cita.idCita}`}
                        >
                            Editar
                        </Button>
                        <EliminarCitaBoton id={cita.idCita}
                                                cita={cita.citaEntity}
                                                />
                    </div>
                    :""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link to={`/cita/${cita.idCita}`}>
                        {cita.citaEntity}
                    </Link>
                </Card.Title>            
                <Card.Text>
                    Fecha: {moment(cita.fecha).format("D[/]MM[/]YYYY")}
                </Card.Text>
                <Card.Text>
                    Creado por {cita.usuarioEntity.nombre}, {moment(cita.creado).fromNow()}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export {CitaCard}