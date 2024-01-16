import { useState } from "react"

export default function Addnew() {
  const [emptycard, setemptycard] = useState(false);
  const [newdata , setnewdata] =useState([{}])

  function Newinfocard() {
      console.log("clicked")
     setemptycard (true);
  }
 
  function calculateAge(e) {
    const datearr = e.target.value.split("-");
    const ag = new Date().getFullYear() - datearr[0];
    setnewdata([{...newdata , dob:e.target.value , age:ag}])
  }

  function savedata(){
    setemptycard(false);
  }
  // console.log(emptycard)

  return (<div style={{ marginTop: "0" }}>
    <div style={{ border: "1px solid black", margin: "0px 50px 50px", minHeight: "70vh", position: "relative" }}>
      <h3 style={{ border: "1px solid black", margin: "0", display: "inline-block", padding: "20px  50px" }}>Add New Person</h3>

      <div style={{ display: "flex", margin: "20px 20px 0px", textAlign: "center" }}>
        <h4 style={{ width: "25%", backgroundColor: "#4472C4", color: "white", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>Name</h4>
        <h4 style={{ width: "19.5%", backgroundColor: "#4472C4", color: "white", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>Date of birthday</h4>
        <h4 style={{ width: "21%", backgroundColor: "#4472C4", color: "white", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>Aadhar Number</h4>
        <h4 style={{ width: "17.5%", backgroundColor: "#4472C4", color: "white", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>Mobile Number</h4>
        <h4 style={{ width: "7%", backgroundColor: "#4472C4", color: "white", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>Age</h4>
        <h4 style={{ width: "10%", backgroundColor: "#4472C4", color: "white", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>Action</h4>
      </div>


       {
        emptycard && <div style={{backgroundColor:"yellow"}}>
           <h3 style={{margin : "10px 0 5px" , textAlign:"center"}}>Fill information for Adding New Person</h3>

           <div style={{ display: "flex", margin: "0px 20px", textAlign: "center"}}>
            <form style={{ display: "flex", margin: "0px 20px", textAlign: "center"}} onSubmit={savedata}>
          <input style={{ width: "25%", border: "1px solid gray", padding: "5px 0px", textAlign: "center"}} type="text" placeholder="Name" onChange={(e) => setnewdata([{...newdata , name:e.target.value}])} value={newdata[0].name} required/>
          <input style={{ width: "19.5%", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="date" placeholder="Date of Birth" onChange={calculateAge} value={newdata[0].dob} required/>
          <input  style={{ width: "21%", border: "1px solid gray", padding: "5px 0px" }} type="number" placeholder="Aadhar Number" min="100000000000" max="999999999999"  onChange={(e) => setnewdata([{...newdata , aadhar:e.target.value}])} value={newdata[0].aadhar}  required/>
          <input  style={{ width: "17.5%", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="number" placeholder="Mobile Number" min="1000000000" max="9999999999"  onChange={(e) => setnewdata([{...newdata , mob:e.target.value}])} value={newdata[0].mob}  required/>
          <input  style={{ width: "7%", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="number" placeholder="Age" disabled={true} value={newdata[0].age}  required/>
          <input  style={{ width: "10%", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="submit" placeholder="Action" value="save"  required/>
          </form>
        </div>
        </div>
         
       }
    

      <button style={{ position: "absolute", bottom: "15px", right: "20px", backgroundColor: "#4472C4", color: "white", padding: "20px 40px" }} 
       onClick={Newinfocard}>Add</button>
    
    </div>
  </div>)
}