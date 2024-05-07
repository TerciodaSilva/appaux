
import { Component } from "react"
import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './style/PlanCustomerStyle.scss';


class PlanCustomer extends Component {
  render() {

    const { data } = this.props;

    return (
      <Container className="container-custumer">
        <Container className="container-price">
          <h1> { data.name } </h1>
          <p id="description">  
            { data.description } 
          </p>
          <p><strong> { data.price } </strong></p>
        </Container>
        
        <Container className="container-status">
          { data.isCurrencyPlan ? (
            <Container className="currency-plan">
              { data.labelStatus }
            </Container>
          ) : (
            <Button variant="outlined" className="button-change-plan"> 
              { data.labelStatus } 
            </Button>
          )}
        </Container>
      </Container>
    ) 
  }
}

export default PlanCustomer;