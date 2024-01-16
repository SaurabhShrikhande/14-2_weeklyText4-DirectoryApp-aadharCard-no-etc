import { useState } from "react"

export default function Addnew(){
      let [Emptycardd , setemptycard] =  useState([{name : 'a'}, {name : 'a'}]);
    
    
    function Newinfocard(){
      //  console.log("clicked")
             let updated =  Emptycardd.map((item) => {return {...item , name:'b'}})
             setemptycard(updated);
       }

    return (<div style={{marginTop:"0"}}>
           <div style={{border: "1px solid black" , margin:"0px 50px 50px", minHeight:"70vh", position:"relative"}}>
            <h3 style={{border: "1px solid black" , margin:"0", display:"inline-block" , padding:"20px  50px"}}>Add New Person</h3>
            
            <div style={{display:"flex", margin: "20px", textAlign:"center"}}>
               <h4 style={{width:"25%", backgroundColor:"#4472C4", color:"white" , border:"1px solid gray", padding:"5px 0px"}}>Name</h4>
               <h4  style={{width:"19.5%", backgroundColor:"#4472C4", color:"white" , border:"1px solid gray" , padding:"5px 0px"}}>Date of birthday</h4>
               <h4  style={{width:"21%", backgroundColor:"#4472C4", color:"white" , border:"1px solid gray", padding:"5px 0px"}}>Aadhar Number</h4>
               <h4  style={{width:"17.5%", backgroundColor:"#4472C4", color:"white" , border:"1px solid gray", padding:"5px 0px"}}>Mobile Number</h4>
               <h4  style={{width:"7%", backgroundColor:"#4472C4", color:"white" , border:"1px solid gray", padding:"5px 0px"}}>Age</h4>
               <h4 style={{width:"10%", backgroundColor:"#4472C4", color:"white" , border:"1px solid gray", padding:"5px 0px"}}>Action</h4>
            </div>


            <button style={{position:"absolute" , bottom:"15px" , right:"20px", backgroundColor:"#4472C4" , color:"white", padding:"20px 40px"}}

               
            
               
              {  ...Emptycardd.map((item, idx) => 
                    (<div key={idx}>
                        <h1>{item.name}</h1>
                    </div>)
            )
              }
            // {...emptycard.map((item,idx)=>)}
    
                         

            onClick={Newinfocard}>Add</button>
            
           </div>
    </div>)
}