import List from "./List.jsx"

function App(){

  let fruits = [
    {id:1, name:"Apple", calories: 10},
    {id:2, name:"Banana", calories: 20}, 
    {id:3, name:"Pineapple", calories: 15}, 
    {id:4, name:"Coconut", calories: 30}];
  
    let vegetables = [
      {id:5, name:"pp", calories: 10},
      {id:6, name:"ana", calories: 20}, 
      {id:7, name:"neap", calories: 15}, 
      {id:8, name:"oco", calories: 30}];
    

  return(
    <>

    {fruits.length>0 ?<List items={fruits} category = "Fruits" /> : null}

    {vegetables.length>0 && <List items={vegetables} category = "vegetable" />}
    {/* condition && expression */}

    </>
  )
}

export default App