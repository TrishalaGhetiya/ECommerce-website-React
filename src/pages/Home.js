import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const Home = (props) => {
  return (
    <Container>
    <h1 style={{textAlign:'center'}}>TOURS</h1>
    <div>
        <Table>
        <tr>
          <td>JUL16</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THEATRE</td>
          <td>
            <Button variant="primary">BUY TICKETS</Button>
          </td>
        </tr>
        <tr>
          <td>JUL19</td>
          <td>TORONTO,ON</td>
          <td>BUDWEISER STAGE</td>
          <td>
            <Button variant="primary">BUY TICKETS</Button>
          </td>
        </tr>
        <tr>
          <td>JUL22</td>
          <td>BRISTOW, VA</td>
          <td>JIGGY LUBE LIVE</td>
          <td>
            <Button variant="primary">BUY TICKETS</Button>
          </td>
        </tr>
        <tr>
          <td>JUL29</td>
          <td>PHOENIX, AZ</td>
          <td>AK-CHIN PAVILION</td>
          <td>
            <Button variant="primary">BUY TICKETS</Button>
          </td>
        </tr>
        <tr>
          <td>AUG 2</td>
          <td>LAS VEGAS, NV</td>
          <td>T-MOBILE ARENA</td>
          <td>
            <Button variant="primary">BUY TICKETS</Button>
          </td>
        </tr>
        <tr>
          <td>AUG 7</td>
          <td>CONCORD, CA</td>
          <td>CONCORD PAVILION</td>
          <td>
            <Button variant="primary">BUY TICKETS</Button>
          </td>
        </tr>
      </Table>
      </div>
     
    </Container>
  );
};

export default Home;
