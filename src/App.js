import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UniversityList from './UniversityList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/list/:country">
            <UniversityList/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
