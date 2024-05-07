import PlanCustomer from './components/PlanCustomer'
import Modulo from './components/Modulo'
import Grid from '@mui/material/Grid';

function App() {
  const dataList = [
    {
      name: "STARTER",
      description: "Todos os recursos exceto NFC-e, APP do garçom e autoatendimento",
      price: "R$ 239,00*/ mês",
      isCurrencyPlan: false,
      labelStatus: "Mudar Plano"
    },
    {
      name: "ADVANCED",
      description: "Todos os recursos exceto APP do garçom e autoatendimento",
      price: "R$ 329,00*/ mês",
      isCurrencyPlan: true,
      labelStatus: "Plano Atual"
    },
    {
      name: "PREMIUM",
      description: "Todos os recursos disponíveis",
      price: "R$ 419,00*/ mês",
      isCurrencyPlan: false,
      labelStatus: "Mudar Plano"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1> Seu Plano </h1>
        <Grid container spacing={4} justifyContent="center">
          {
            dataList.map(data => {
                return (
                  <Grid item xs={3} md={2}>
                    <PlanCustomer data={data} />
                  </Grid> 
                );
              })
          }
        </Grid>
        <h1>Modulos</h1>

        <Grid container spacing={24} justifyContent="start">
          <Grid item xs={12} md={2}>
            <Modulo />
          </Grid> 
          <Grid item xs={12} md={2}>
            <Modulo />
          </Grid> 
        </Grid>

        
      </header>
    </div>
  );
}

export default App;
