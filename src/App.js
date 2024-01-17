import './App.css';
import Addnew from './Addnew';
import { useState } from 'react';

function App() {
    const [ addnewp , setaddnewp] = useState(true);
    const [retrive , setretrive ] =  useState(false);
  return (
    <div className="App">
         <h1 style={{textAlign:"center", backgroundColor:"#4472C4", color:"white", padding:"20px", margin:"0"}}>Saurabh Shrikhande Directory App</h1>
         <div>
          <button className='btn' onClick={() => {setaddnewp(true); setretrive(false)}} >Add New Person</button>
          <button className='btn' onClick={() => {setaddnewp(false); setretrive(true)}}>Retrieve </button>
         </div>
         
          <div>
            {
                 addnewp && <Addnew/>
                  
            }

          
          </div>
    </div>
  );
}

export default App;
