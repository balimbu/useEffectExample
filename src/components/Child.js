import GrandChild from "./GrandChild";

const Child = (props) => {
    return ( 
        <div>
            <h2> Child component </h2>
            <h4> Values from Parent parent name {props.parentname},
                 parent location {props.parentlocation}
            </h4>
            Values from Child {props.name}
            <GrandChild grandname={props.parentname} grandlocation= {props.parentlocation}
            parentname= {props.name} name="Sameer" />
        </div>
     );
}
 
export default Child;
<div>
    <h2> Child component </h2>
    <h4> Values </h4>
</div>