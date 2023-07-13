import { useEffect, useState } from "react";

const Check1 = () => {

    let [counter, setCounter] = useState(0);
    let [title, setTitle] = useState('my title');

    useEffect( ()=>{
        console.log('hello from useEffect no dependencies')
    }); 

    useEffect( ()=> {
        console.log('hello from use effect empty array')
    }, []);

    useEffect( ()=> {
        console.log('hello from use efect with counter ')
          
       if(counter % 2 == 0){
        document.body.style.backgroundColor = "pink";
       }
       else{
        document.body.style.backgroundColor = "lightblue";
       }
    }, [counter]);

    let clickHandler1 = () =>{
        counter++;
        setCounter(counter);
       
    //    if(counter % 2 == 0){
    //     document.body.style.backgroundColor = "pink";
    //    }
    //    else{
    //     document.body.style.backgroundColor = "lightblue";
    //    }

    }

    let clickHandler2 = ()=>{
        counter = counter + 2;
         
    //    if(counter % 2 == 0){
    //     document.body.style.backgroundColor = "pink";
    //    }
    //    else{
    //     document.body.style.backgroundColor = "lightblue";
    //    }

    }

    let changeTitleHandler = () =>{
        setTitle('Changed title');
    }

    useEffect( ()=>{
        document.title = title;
        console.log('hello from title use effect ')
    },[title]);

    // presentation part of the code
    return (  
        <div>
            <h2> Check 1 </h2>
            <button onClick = {clickHandler1}> +1 Click to increment</button> {counter}
            <button onClick = {clickHandler2}> +2 Click to increment</button> {counter}
            <button onClick ={changeTitleHandler}> Click to change title </button> {counter}
        </div>
    );
}
 
export default Check1;