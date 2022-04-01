import React, { useEffect, useState } from "react";

function Chat () {
  const [Chat, setChats] = useState([]);
  useEffect (() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data => setChats(data));
  })

    return (
      <div>
     {Chat.map((item) =>(
   
       <div key={item.id}> 
       <link to = {`/posts/${item.id}`} >
       {item.body}
       </link>
         </div>
         ))}
     </div> 
    )};    
  export default Chat;
  