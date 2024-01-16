import './App.css';
import Addnew from './Addnew';

function App() {
  return (
    <div className="App">
         <h1 style={{textAlign:"center", backgroundColor:"#4472C4", color:"white", padding:"20px", margin:"0"}}>Saurabh Shrikhande Directory App</h1>
         <div>
          <button className='btn'>Add New Person</button>
          <button className='btn'>Retrieve </button>
         </div>
         
          <div>
         <Addnew/>
          </div>
    </div>
  );
}

export default App;
