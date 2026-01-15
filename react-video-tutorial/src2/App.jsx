// import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
function App(){
  return(
    <>
    {/* <Student name={"yahya"} age={"hi"} isStudent={true}/>
    <Student name={"yahya"} age={20} isStudent={7}/>
    <Student />  */}
    <UserGreeting isLoggedIn={true} username="yahya"/>

    </>
  );
}

export default App