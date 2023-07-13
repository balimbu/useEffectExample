const GrandChild = (props) => {
    return ( 
        <div>
            <h1> Grand Child </h1>
            <h3> Values from Grand Parent name - {props.grandname} and location - {props.grandlocation} </h3>
            <h3> Values from Child name = {props.parentname} and location - {props.parentlocation} </h3>
            <h3> Values from Grand Child - {props.name}</h3>

        </div>
     );
}
 
export default GrandChild;

// this is example of prop drilling