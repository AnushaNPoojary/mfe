import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';


export default ({history, onSignIn}) => {
  const generateClassName= createGenerateClassName({
    productionPrefix:"au"
  })
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history = {history}>
          <Switch>
            <Route path="/auth/signin/" >
              <SignIn onSignIn={onSignIn} />
              </Route >

            <Route path="/auth/signup/" >
              <SignUp  />
              
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
