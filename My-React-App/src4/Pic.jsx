function Pic(){
    const imgUrl = "./src/assets/react.svg"
    const handelClick = (e) => e.target.style.display = "none";
    return(
        <img onClick={(e)=>handelClick(e)} src={imgUrl}></img>
    )
}
export default Pic