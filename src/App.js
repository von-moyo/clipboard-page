import logo from './images/logo.svg';
import bg from './images/bg-header-desktop.png'
import './App.css';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section7a from './Section7a'
import Section7b from './Section7b'

function App() {
  return (
    <div className="App">
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} className="c" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section7a />
      <Section7b />
    </div>
  );
}

export default App;
