import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Content from './components/content/content'

// the root of the world
// >imagine app
function App() {
  return (
    <div className="App"> 
      <Sidebar/>
      <Content/>
    </div>
  );
}


export default App;
