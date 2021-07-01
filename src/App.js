import "./App.scss";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Home from './components/Home';
import Logo from './components/Logo';

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar />
        <Logo />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' component={Shop}/>
        </Switch>
      </main>
    </Router>
  );      
}

export default App;
