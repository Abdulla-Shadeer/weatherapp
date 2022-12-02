import "./header.css";

export default function Header(){
    return(
        <div className="header-container" >
            
            <div className="logo">
                <img src="logo.png" alt="weatherapp"/>
                <h2>Weather App</h2>
            </div>

            <div className="add-city">
                <input type="text" placeholder="enter city"/>
                <button> Add city </button>
            </div>
        </div>
    )
}