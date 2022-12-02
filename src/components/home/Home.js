import Header from "../header/header.js"
import Card from "../card/card.js"
import cities from "../../cities.json"
import "./../card/card.css"

export default function Home(){
    return(
        <>
            <Header />
            <div className="card-container">
            {
                cities.map((item)=>{
                    return(
                        
                        <Card 
                        key = {item.CityCode}
                        id = {item.CityCode}
                        />
                        
                    )
                })
            }
            </div>
        </>
    )
}