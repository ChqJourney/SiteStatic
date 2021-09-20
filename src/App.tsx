import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import { Head } from './layouts/head';
import { Main } from './layouts/main';
import { Landing } from './pages/landing';
import { Mobile } from './pages/mobile';
import { Test } from './pages/test';

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Mobile/>
      </Route>
      <Route path="/">
        <Head/>
        <Main>
          <Route path="/test">
            <Test/>
          </Route>
          <Route path="/landing">
            <Landing/>
          </Route>
          <Route path="/">
            <Redirect to="/landing"/>
          </Route>
        </Main>

      </Route>
    </Switch>
  );
}

export default App;
