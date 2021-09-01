import React, {useState, useEffect} from "react";
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState({ hits: [] });
  
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers({ hits: data });
      };
      fetchData();
    }, [setUsers]);
  
    return (
      <div className="user" >
        <ul  >
         <h3> Name </h3>
          {users.hits &&
            users.hits.map(item => (
            
                <span className="names">{item.name}</span>
                
            ))}
           </ul> 
           <ul>
           <h3> UserName </h3>
             {users.hits &&
            users.hits.map(item => (
             
                <span className="names">{item.username}</span>
               
            ))}
        </ul>
        <ul>
        <h3> Email </h3>
             {users.hits &&
            users.hits.map(item => (
             
                <span className="names">{item.email}</span>
               
            ))}
        </ul>
        <ul>
          <h3> Address </h3>
             {users.hits &&
            users.hits.map(item => (
              
                <span className="names">  {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</span>
               
            ))}
        </ul>
      </div>
    );
  }
export default UserList
/*import axios from 'axios';
import React, {useState,useEffect} from 'react';

const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([]);
    const [errer,setError]= useState(null);   
    
    useEffect(()=> {
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => setListOfUSer(res))
         .catch(err => console.log(err))
    },[]) 
    
    return (
        <div>
          
     {listOfUSer.data.map(pers=>(
         <li>
             {pers.username}
         </li>
     ))}
    
        </div>
    )
}

export default UserList*/
