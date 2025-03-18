import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'Welcome ot the new blog';
  const likes = 50;
  const link = "http://wwww.google.com"

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
