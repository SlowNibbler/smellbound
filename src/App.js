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

// write a function that takes a string and returns a string
// >imagine function
// >imagine string
// >imagine return
// >imagine string

// write a function that takes a string and returns a string split into an array of characters
function splitStringIntoArray(string){
  return string.split('')
}


export default App;
