import Header from "../Header/Header.js";
import Card from "../Card/Card.js";
import Footer from "../Footer/Footer.js";
import Table from "../Table/Table.js";
import "./../Card/card.css";
import "./home.css";
import cities from "../../cities.json";
import useToken from "../../controllers/Token/ValidateToken.js";
import { useEffect, useState } from "react";

export default function Home() {
  let [option, setOption] = useState("Card");
  const { permission, loading } = useToken();

  useEffect(() => {
    if (!loading) {
      // assigning user permission for view mode
      if (permission === "Card") {
        setOption("Card");
        document.getElementById("options").disabled = true;
      } else if (permission === "Table") {
        setOption("Table");
        document.getElementById("options").disabled = true;
      } else if (permission === "both") {
        document.getElementById("options").disabled = false;
      }
    }
  }, [permission, setOption, option, loading]);

  return (
    <>
      <Header />

      {/* select view mode */}
      <div className="options">
        <label htmlFor="option"> Select display format </label>
        <select
          id="options"
          name="option"
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="Card" id="card">
            Card
          </option>
          <option value="Table" id="table">
            Table
          </option>
        </select>
      </div>

      {/* rendering view mode based on assigned permission for the user */}
      {option === "Card" ? (
        <div className="card-container">
          {cities.map((item) => {
            return <Card 
            key={item.CityCode} 
            id={item.CityCode} 
            />;
          })}
        </div>
      ) : (
        <Table />
      )}
      <Footer />
    </>
  );
}
