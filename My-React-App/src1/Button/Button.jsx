// import style from "./Button.module.css"

function Button(){
    const styles = {
        
            backgroundColor: 'rgba(43, 152, 255, 0.857)',
            color: 'white',
            padding: '8px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
        
    }
    return(
        <>
        {/* // <button className=button>click me</button> */}
        {/* // <button className={style.button}>click me</button> */}
        <button style={styles}>click me</button>
        </>
    );
}

export default Button