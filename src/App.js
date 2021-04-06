import logo from './logo.svg';
import Clock from './components/Clock/Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="region fullscreen below"></div>
      
      <div className="region top bar">
        <div className="container"></div>
        <div className="region top left"><Clock/></div>
        <div className="region top center"></div>
        <div className="region top right"></div>
      </div>
      
      <div className="region upper third"><div className="container"></div></div>
      
      <div className="region middle center"><div className="container"><img className="App-logo" src={logo} alt="" srcset=""/></div></div>
      
      <div className="region lower third"><div className="container"><br/></div></div>
      
      <div className="region bottom bar">
        <div className="region bottom left"></div>
        <div className="region bottom center"></div>
        <div className="region bottom right"></div>
      </div>
      
      <div className="region fullscreen above"></div>
  </div>
  );
}

export default App;
