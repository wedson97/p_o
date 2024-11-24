import { Table, Row, Col, Container } from 'react-bootstrap';
import './TabelasLayout.css';

const TabelasLayout = () => {
  return (
    <Container className="my-4">
      <Row className="mb-4">
      <Col md={6}>
          <div className="table-container1 fixed-height">
          <div
            className="table-container fixed-height"
            style={{
              backgroundColor: "blue",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            teste
          </div>
          <div className="table-container fixed-height">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th style={{ width: '150px' }}>Coluna Central</th>
                  <th style={{ width: '150px' }}>Valores</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20)].map((_, index) => (
                  <tr key={index}>
                    <td>Central {index + 1}</td>
                    <td>Valor {index + 1}</td>
                  </tr>
                ))}
              </tbody>
            </Table>  
          </div>
            
          </div>
        </Col>

        <Col md={6}>
          <div className="table-container1 fixed-height">
          <div
            className="table-container fixed-height"
            style={{
              backgroundColor: "blue",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            teste
          </div>
          <div className="table-container fixed-height">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th style={{ width: '150px' }}>Coluna Central</th>
                  <th style={{ width: '150px' }}>Valores</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20)].map((_, index) => (
                  <tr key={index}>
                    <td>Central {index + 1}</td>
                    <td>Valor {index + 1}</td>
                  </tr>
                ))}
              </tbody>
            </Table>  
          </div>
            
          </div>
        </Col>
      </Row>

      {/* Terceira tabela no centro */}
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="table-container1 fixed-height">
          <div
            className="table-container fixed-height"
            style={{
              backgroundColor: "blue",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            teste
          </div>
          <div className="table-container fixed-height">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th style={{ width: '150px' }}>Coluna Central</th>
                  <th style={{ width: '150px' }}>Valores</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20)].map((_, index) => (
                  <tr key={index}> 
                    <td >Orçamento:{index + 1}</td>
                    <td>Cliente: {index + 1}</td>
                  </tr>
                ))}
              </tbody>
            </Table>  
          </div>
            
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default TabelasLayout;
