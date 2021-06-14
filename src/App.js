import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import WorkedWith from './components/pages/WorkedWith'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
    <>
    <BrowserRouter>
    {/* <Burger/>
    <Switch> */}
    {/* <Route exact path="/">
    <Main/>
    <Main2/>
    </Route> */} 
    <Route exact path="/worked">
      <WorkedWith/>
    </Route>
    <Route exact path="/">
    <Contact/>
    </Route>
    </BrowserRouter>
    </>
    </>
  );
}

export default App;
