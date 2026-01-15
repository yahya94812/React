import ProfilePic from "./assets/blank.svg"

function Card(){
    return(
        <div className="card">
            {/* <img src="https://placehold.co/100" alt="profile picture" /> */}
            <img className="card-img" src={ProfilePic} alt="profile picture" />
            <h1 className="card-title">Bro Code</h1>
            <p className="card-text">i am Mohammed Yahya currently learning react</p>
        </div>
    );
}

export default Card