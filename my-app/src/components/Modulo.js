import { Component } from "react"

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import './style/Modulo.scss';

class Modulo extends Component {

  data = {
    name: "Tablet",
    price: "R$ 239,00*/ mês",
    contracts: {
      isContract: true,
      label: "Plano Atual",
      nextLevel: {
        exist: true,
        name: "Level 2"
      }
    }
  }

  render() {
   return (
    <Container className="container-module">
      {this.data.contracts.isContract && (
        <Container class="container-cancel">
          <a> cancelar </a>
        </Container>
      )}

      <Container>
        <h1> {this.data.name}  </h1>
        <p>  {this.data.price} </p>
      </Container>

      {this.data.contracts.isContract ? (
        <Container class="container-level">

          <Container className="currency-plan" fullWidth={true}>
            {this.data.contracts.label}
          </Container>

          {this.data.contracts.nextLevel.exist && (
            <Button variant="outlined" fullWidth={true}> 
              {this.data.contracts.nextLevel.name}
            </Button>
          )}
        
        </Container>
      ) : (
        <Button variant="outlined" fullWidth={true}> 
          contratar 
        </Button>
      )}

    </Container>
   ) 
  }
}

export default Modulo;