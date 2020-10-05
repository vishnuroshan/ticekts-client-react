import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Tickets from './components/tickets';
import './App.css';

const Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyX1VkQnUxaGh1QiIsImVtYWlsIjoiZGV2YUBnLmNvbSIsImlhdCI6MTYwMTg4ODE2MSwiZXhwIjoxNjAyNDkyOTYxfQ.lNJCO55L1Y0ZH0NsXqXIxlWEHJ3W0hwQ-o6lnGTQ_dM'
const BASE_URL = 'http://localhost:8000';

async function getAllTickets() {
  try {
    let tickets = await axios({ method: 'GET', url: `${BASE_URL}/tickets/list`, headers: { Authorization } });
    return tickets.data.tickets;
  } catch (err) {
    console.log(err);
    return false;
  }

}

class App extends Component {
  state = { tickets: [], show: false };

  componentDidMount() {
    getAllTickets().then((tickets) => {
      console.log(tickets)
      this.setState({ tickets })
    });
  }
  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col>
              <Row>
                <Col>
                  {this.state.tickets.map(function (ticket) {
                    return <Tickets ticket={ticket} />
                  })}
                </Col>
              </Row>
            </Col>
            <Col>
              My tickets
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
