function List(props){

    // const fruits = ["Apple", "Banana", "Pineapple", "Coconut"];
    // return (fruits);

    // let fruits = [
    //     {id:1, name:"Apple", calories: 10},
    //     {id:2, name:"Banana", calories: 20}, 
    //     {id:3, name:"Pineapple", calories: 15}, 
    //     {id:4, name:"Coconut", calories: 30}];

    // alert(fruits[1].name.localeCompare(fruits[0].name)); think it like a bubble sort pass the function which return 1 if a, b is ordered and -1 if need swap for ordering 

    // fruits.sort((a, b)=> a.name.localeCompare(b.name));
    // fruits.sort((a, b)=> b.name.localeCompare(a.name));

    const fruits = props.items;
    fruits.sort((a, b)=> a.calories - b.calories);
    // fruits.sort((a, b)=> b.calories - a.calories);

    

    // const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 18);
    // fruits = lowCaloriesFruits; 
    
    
    const fruitsList = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; {fruit.calories}</li>)


    return(
        <>
        <h3>
            {props.category}
        </h3>
        <ol className="list-items">
            {fruitsList}
        </ol>
        </>
        
    )
}

List.defaultProps = {
    category: "Category",
    // not working
}
export default List