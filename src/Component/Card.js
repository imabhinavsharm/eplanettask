import React, {useState,useEffect} from 'react'
import './Styles/card.css'
import axios from 'axios';

const Card = () => {
  const [user, setuser] = useState([]);
  const [userMatch, setuserMatch] = useState([]);

  // fetching data
  useEffect(() => {
    const loadUser = async ()=>{
      const response = await axios.get("http://www.mocky.io/v2/5ba8efb23100007200c2750c");
      setuser(response.data);
    };
    loadUser();
  }, [])

  // filter data as per condition
 const searchUser = (text)=>{
   if(!text){
     setuserMatch([])
     
   }else{

    var matches = user.filter((val)=>{
       const regex = new RegExp(`${text}`,"gi")
       return val.name.match(regex) || val.address.match(regex)
     })
     setuserMatch(matches);
 

   }
 }
 
    return (
      <>
        
     <div className="parent">
<div className="child">
      <input type="text" placeholder="Search with name and address"
      onChange={(e)=>searchUser(e.target.value)}
      />
{
// show filter data 
 userMatch && userMatch.map((items)=>{
    return(
  <>
  <div className="cardParent" >
    <div className="cardChild" key={items.id}>
<h6>{items.name}</h6>
<h6>{items.address}</h6>
<h6>{items.pincode}</h6>

    </div>

  </div>
</>


)
})
}
</div>
</div>
      </>
    )    
}

export default Card
