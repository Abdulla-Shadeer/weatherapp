import Header from "../header/header.js"
import Card from "../card/card.js"
import cities from "../../cities.json"
import "./../card/card.css"
import Footer from "../footer/footer.js"
import Table from "../table/table.js"
import "./home.css"
import useToken from "../../controllers/token/validateToken.js"
import { useEffect, useState } from "react"

export default function Home() {
    let [option, setOption] = useState("Card")
    const { permission, loading } = useToken()

    useEffect(() => {

        if (!loading) {
            if (permission === "Card") {
                setOption("Card")
                document.getElementById("options").disabled = true

            } else if (permission === "Table") {
                setOption("Table")
                document.getElementById("options").disabled = true

            } else if (permission === "both") {
                document.getElementById("options").disabled = false
            }
        }

    }, [permission, setOption, option, loading])




    return (
        <>
            <Header />
            <div className="options">
                <label htmlFor="option"> Select display format </label>
                <select id="options" name="option" onChange={e => setOption(e.target.value)}>
                    <option value="Card" id="card">
                        Card
                    </option>
                    <option value="Table" id="table">
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
                <Table />
            }
            <Footer />
        </>
    )
}