function Button(){
    // const handelClick = () => {
    //     alert ("OUCH!")
    // }
    let count = 0;
    const handelClick2 = (name) => {
        count ++;
        if(count < 3){
            console.log(`${name} you click me ${count} times`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
        // alert (`${name} don't click me`);
    }
    const handelPress = (e)=>{
        console.log(e);
        e.target.textContent = "Hmm!";
    }
    return(
        <>
        <button onClick={handelClick2}>Click me</button>
        {/* <button onClick={handelClick2("yahya")}>Click me</button> //automatically execute the callback function */}
        <button onClick={()=>{
            handelClick2("yahya");
        }}>Click me</button> 
        <hr></hr>
        <button onClick={(e)=> handelPress(e)}>Press me</button>
        </>
    );e
}

export default Button