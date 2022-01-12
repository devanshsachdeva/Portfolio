import './App.css';
import AboutMe from './Screens/AboutMe/AboutMe';
import Contact from './Screens/Contact/Contact';
import Home from './Screens/Home/Home'
import NavigationBar from './Components/NavigationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeFooter from './Screens/Home/HomeFooter';
import Projects from './Screens/Projects/Projects';



function App() {
  return (
    <div className="App">
      <HomeFooter/>
    <Projects/>
    </div>
  );
}

export default App;
