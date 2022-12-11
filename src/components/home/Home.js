import Header from "../header/header.js"
import Card from "../card/card.js"
import cities from "../../cities.json"
import "./../card/card.css"
import Footer from "../footer/footer.js"

export default function Home() {

    setInterval(() => {
        cities.map(item =>
            localStorage.removeItem(item.CityCode.toString())
        )
    }, 1000 * 60 * 5)

    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}