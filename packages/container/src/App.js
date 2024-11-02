import React, {lazy, Suspense} from 'react';
// import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Progress from './components/Progress';
// import AuthApp from "./components/AuthApp";
import { useState } from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const MarketingLazy = lazy(()=>import('./components/MarketingApp'))
const AuthLazy = lazy(()=>import('./components/AuthApp'))


export default () => {
  const [ isSignedIn, setIsSignedIn] = useState(false)
  const generateClassName= createGenerateClassName({
    productionPrefix:"co"
  })
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
    <div>
        <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
        <Switch>
        {/* <Route path="/auth" component={AuthLazy}/> */}
        <Route path="/auth">
          <AuthLazy  onSignIn={()=>setIsSignedIn(true)}/>

        </Route>
        <Route path="/" component={MarketingLazy}/>
       </Switch>

        </Suspense>
       
      </div>
      
    </StylesProvider>
      
    </BrowserRouter>
  );
};
