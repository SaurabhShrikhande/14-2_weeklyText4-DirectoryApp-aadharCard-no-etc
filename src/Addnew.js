import { useState , useEffect} from "react"

export default function Addnew() {
  const [emptycard, setemptycard] = useState(false);
  const [newdata , setnewdata] =useState([{}])
  const [tabledata , settabledata] = useState([]);


  useEffect(() => {
     //   settabledata(JSON.parse(localStorage.getItem("tabledata")))
  },[])

  function Newinfocard() {
      console.log("clicked")
     setemptycard (true);
  }
 
  function calculateAge(e) {
    const datearr = e.target.value.split("-");
    const ag = new Date().getFullYear() - datearr[0];
    setnewdata([{...newdata[0] , dob:e.target.value , age:ag}])
  }

  function savedata(e){
    e.preventDefault();
   // console.log("aftersave data");
   // console.log(newdata);
  //  console.log(tabledata);
     settabledata([...tabledata, newdata[0]])
      setnewdata([{}]);
     setemptycard(false);
  }

  useEffect(() => {
    // localStorage.setItem("tabledata", JSON.stringify(tabledata))
  },[tabledata])
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
        tabledata.map((item, idx) => {
                return (<div key={idx}>
        <div style={{ display: "flex", margin: "0px 20px", textAlign: "center" }}>
        <h4 style={{ width: "25%", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>{item.name}</h4>
        <h4 style={{ width: "19.5%", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>{item.dob}</h4>
        <h4 style={{ width: "21%", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>{item.aadhar}</h4>
        <h4 style={{ width: "17.5%", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>{item.mob}</h4>
        <h4 style={{ width: "7%", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>{item.age}</h4>
        <h4 style={{ width: "10%", border: "1px solid gray", padding: "5px 0px", margin:"0" }}>delete</h4>
      </div>
                </div> )
        })
      }
       

       {
        emptycard && <div style={{backgroundColor:"yellow", display:"flex", flexDirection:"column", alignItems:"center"}}>
           <h3 style={{margin : "10px 0 5px" , textAlign:"center"}}>Fill information for Adding New Person</h3>

           <div style={{ display: "flex", margin: "0px 20px", textAlign: "center"}}>
            <form style={{ display: "flex", margin: "0px 20px", textAlign: "center"}} onSubmit={savedata}>
          <input style={{ width: "25vw", border: "1px solid gray", padding: "5px 0px", textAlign: "center"}} type="text" placeholder="Name" onChange={(e) => setnewdata([{...newdata[0] , name:e.target.value}])} value={newdata[0].name} required/>
          <input style={{ width: "12vw", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="date" placeholder="Date of Birth" onChange={calculateAge} value={newdata[0].dob} required/>
          <input  style={{ width: "16vw", border: "1px solid gray", padding: "5px 0px" }} type="number" placeholder="Aadhar Number" min="100000000000" max="999999999999"  onChange={(e) => setnewdata([{...newdata[0] , aadhar:e.target.value}])} value={newdata[0].aadhar}  required/>
          <input  style={{ width: "14vw", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="number" placeholder="Mobile Number" min="1000000000" max="9999999999"  onChange={(e) => setnewdata([{...newdata[0] , mob:e.target.value}])} value={newdata[0].mob}  required/>
          <input  style={{ width: "5vw", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="number" placeholder="Age" disabled={true} value={newdata[0].age}  required/>
          <input  style={{ width: "8vw", border: "1px solid gray", padding: "5px 0px", textAlign: "center" }} type="submit" placeholder="Action" value="save" onClick={()=> {}}  required/>
          </form>
        </div>
        </div>
         
       }
    

      <button style={{ position: "absolute", bottom: "15px", right: "20px", backgroundColor: "#4472C4", color: "white", padding: "20px 40px" }} 
       onClick={Newinfocard}>Add</button>
    
    </div>
  </div>)
}