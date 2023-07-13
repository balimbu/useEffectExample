import { useEffect, useState } from "react";

const Users = () => {

    let[jsonData, setJsonData] = useState([]);

    useEffect( ()=>{
        //URL: https://reqres.in/api/users?page=2 for data
        async function fetchUsers(){
            let response = await fetch('https://reqres.in/api/users?page=2');
            // convert response into JSON format
            let respJSON = await response.json();
            console.log(respJSON); // display data
            setJsonData(respJSON.data); // storing data in state
        }

        fetchUsers(); // function call
    });

    return ( 
        <div> 
            <h1> Welcome to users page </h1>
            <h1> check console </h1>
            {
                jsonData.map( (elem) => <h4> {elem.email} </h4> )
            }
        </div>
     );
}
 
export default Users; 
