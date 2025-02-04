import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
  <Container fluid>
    <Row>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-bag text-warning"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="contratos">
                  <p className="card-category">Contratos Activos</p>
                  <Card.Title as="h4">3</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-redo mr-1"></i>
              Actualizar Ahora
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-money-coins text-success"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="ingresos">
                  <p className="card-category">Ingresos</p>
                  <Card.Title as="h4">$ 100'600.345</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="far fa-calendar-alt mr-1"></i>
              Último día
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-tag-content text-danger"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="ofertas">
                  <p className="card-category">Ofertas Disponibles</p>
                  <Card.Title as="h4">23</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="far fa-clock-o mr-1"></i>
              En la última hora
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-favourite-28 text-primary"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="conexiones">
                  <p className="card-category">Conexiones</p>
                  <Card.Title as="h4">+45K</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-redo mr-1"></i>
              Actualizar Ahora
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Comportamiento del Mercado</Card.Title>
            <p className="card-category">Desempeño de 24 horas</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartHours">
              <ChartistGraph
                data={{
                  labels: [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                  ],
                  series: [
                    [287, 385, 490, 492, 554, 586, 698, 695],
                    [67, 152, 143, 240, 287, 335, 435, 437],
                    [23, 113, 67, 108, 190, 239, 307, 308],
                  ],
                }}
                type="Line"
                options={{
                  low: 0,
                  high: 800,
                  showArea: false,
                  height: "245px",
                  axisX: {
                    showGrid: false,
                  },
                  lineSmooth: true,
                  showLine: true,
                  showPoint: true,
                  fullWidth: true,
                  chartPadding: {
                    right: 50,
                  },
                }}
                responsiveOptions={[
                  [
                    "screen and (max-width: 640px)",
                    {
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0];
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Producto 1 <i className="fas fa-circle text-danger"></i>
              Producto 2 <i className="fas fa-circle text-warning"></i>
              Producto 3
            </div>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-history"></i>
              Actualizado hace 3 minutos
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col md="4">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Estadísticas del Mercado</Card.Title>
            <p className="card-category">Rendimiento del último mes</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
              <ChartistGraph
                data={{
                  labels: ["40%", "20%", "40%"],
                  series: [40, 20, 40],
                }}
                type="Pie"
              />
            </div>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Producto 1 <i className="fas fa-circle text-danger"></i>
              Producto 2 <i className="fas fa-circle text-warning"></i>
              Producto 3
            </div>
            <hr></hr>
            <div className="stats">
              <i className="far fa-clock"></i>
              Campaña enviada hace 2 días
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Ventas de 2017</Card.Title>
            <p className="card-category">Todos los productos incluyendo impuestos</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartActivity">
              <ChartistGraph
                data={{
                  labels: [
                    "Ene",
                    "Feb",
                    "Mar",
                    "Abr",
                    "May",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dic",
                  ],
                  series: [
                    [
                      542,
                      443,
                      320,
                      780,
                      553,
                      453,
                      326,
                      434,
                      568,
                      610,
                      756,
                      895,
                    ],
                    [
                      412,
                      243,
                      280,
                      580,
                      453,
                      353,
                      300,
                      364,
                      368,
                      410,
                      636,
                      695,
                    ],
                  ],
                }}
                type="Bar"
                options={{
                  seriesBarDistance: 10,
                  axisX: {
                    showGrid: false,
                  },
                  height: "245px",
                }}
                responsiveOptions={[
                  [
                    "screen and (max-width: 640px)",
                    {
                      seriesBarDistance: 5,
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0];
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Tesla Model S <i className="fas fa-circle text-danger"></i>
              BMW Serie 5
            </div>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-check"></i>
              Información de datos certificada
            </div>
          </Card.Footer>
        </Card>
      </Col>
          <Col md="6">
  <Card className="card-tasks">
    <Card.Header>
      <Card.Title as="h4">Tareas</Card.Title>
      <p className="card-category">Desarrollo de agenda</p>
    </Card.Header>
    <Card.Body>
      <div className="table-full-width">
        <Table>
          <tbody>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Firmar contrato
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-488980961">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-506045838">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultChecked
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Revisar correos eléctronicos
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-537440761">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-21130535">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultChecked
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Revisar inventario
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-577232198">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-773861645">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultChecked
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Revisar contratos
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-422471719">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-829164576">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>Leer Documentación</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-160575228">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-922981635">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultValue=""
                      disabled
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>Otra tarea</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-938342127">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-119603706">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card.Body>
    <Card.Footer>
      <hr></hr>
      <div className="stats">
        <i className="now-ui-icons loader_refresh spin"></i>
        Actualizado hace 3 minutos
      </div>
    </Card.Footer>
  </Card>
</Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
