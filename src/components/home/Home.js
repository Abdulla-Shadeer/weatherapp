import Header from "../header/header.js"
import Card from "../card/card.js"
import cities from "../../cities.json"
import "./../card/card.css"
import Footer from "../footer/footer.js"
import { useState } from "react"
import Table from "../table/table.js"
import "./home.css"

export default function Home() {
    const [option, setOption] = useState("Card")


    return (
        <>
            <Header />
            <div className="options">
                <label htmlFor="option"> Select display format </label>
                <select name="option" onChange={e => setOption(e.target.value)}>
                    <option value="Card">
                        Card
                    </option>
                    <option value="Table">
                        Table
                    </option>
                </select>
            </div>

            {option === "Card" ?

                <div className="card-container">
                    {
                        cities.map((item) => {

                            return (
                                <Card
                                    key={item.CityCode}
                                    id={item.CityCode}
                                />
                            )

                        })
                    }
                </div>
                :
                    <Table/>
            }
            <Footer />
        </>
    )
}