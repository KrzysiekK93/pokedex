import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Pokemons from './components/pokemons/Pokemons';
import Pokemon from './components/pokemon/Pokemon';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Container from '@material-ui/core/Container';
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/pokemon/:slug" component={Pokemon} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </Provider>
  );
}

export default App;
