import Child from "./Child";

const Parent = (props) => {
    return ( 
        <div>
            <h1> This is the Parent </h1>
            <h3> Vlaues name: {props.name} and lives in {props.location} </h3>
            <Child parentname ={props.name} parentlocation ={props.location} name = "Ram"/>
        </div>
     );
}
 
export default Parent;