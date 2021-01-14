import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  const Name = () => {
    return <div>This is your name</div>
  }
  return (
    <div className="App">
      <h1>React Router</h1>
      <Switch>
      <Route exact path='/'>
        <p>This is our home page</p>
      </Route>
      <Route exact path='/about' component={About} />
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/contact/name' component={Name}/>
      <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
