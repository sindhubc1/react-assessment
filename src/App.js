import React, { useReducer } from 'react';
import './App.css';
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import CatalogContent from "./components/CatalogContent";
import DetailedProductPage from "./components/ProductDetailedPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext, reducer } from "./store";

function App() {
  console.log('app')
  const [value, dispatch] = useReducer(reducer);
  return (
    <AppContext.Provider value={{ value, dispatch }}>
    <Router>
    <div className="App">
      <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>

        <Switch>
            <Route path="/" exact component={CatalogContent} />
            <Route path="/detailedView/:id" component={DetailedProductPage} />
            {/* <Parent /> */}
          </Switch>
        
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
    </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
