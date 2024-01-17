import { useState } from "react"
export default function Retrive(){
   const [inputval , setinputval] = useState("");

   const dataa =  JSON.parse(localStorage.getItem("tabledata"));
  console.log(dataa);
   const [filterarr , setfilterarr] = useState([]);
    function filt(e){
        e.preventDefault();
        let filterdata = dataa.filter((item) =>  item.aadhar === inputval);
         setfilterarr([...filterdata]);
    }



    return (<div>
         <div style={{ border: "1px solid black", margin: "0px 50px 50px", minHeight: "70vh"}}>
      <h3 style={{ border: "1px solid black", margin: "0", display: "inline-block", padding: "20px  50px" }}>Retrieve Information</h3>
    
    <form  style={{margin:"40px" , display:"flex"}}>
        <input type="number" min="100000000000" max={999999999999} style={{fontSize:"40px"}} onChange={(e) => {setinputval(e.target.value)}} value={inputval}/>
        <button style={{ backgroundColor: "#4472C4", color: "white", padding: "20px 40px" }} onClick={filt}
         >Find</button>
    </form>
   
   {
      filterarr.length ===0 &&   <h1 style={{textAlign:"center"}}>No Date</h1>
   }
    
    {
          filterarr.map((item, idx) => {
            return <div key={idx} style={{margin:"10px" , padding:"10px" , border:"1px solid black"}}>
                  <h3>Name : {item.name}</h3>
                  <h3>DOB : {item.dob}</h3>
                  <h3>Aadhar no : {item.aadhar}</h3>
                  <h3>Mobile no : {item.mob}</h3>
                  <h3>Age : {item.age}</h3>
            </div>
          })
    }

    </div>

    </div>)
}