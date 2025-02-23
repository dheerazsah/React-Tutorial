import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome ot the new blog';
  const likes = 50;
  const link = "http://wwww.google.com"

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
