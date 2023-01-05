import "./table.css";
import useFetch from "../../controllers/Api/Api.js";
import cities from "../../cities.json";
import TableRow from "./TableRow.js";
import Loader from "../Loader/Loader.js";

export default function Table() {
  const keysArr = [];
  const { data, error } = useFetch(cities[0].CityCode);

  if (data) {
    // storing key names into an array
    for (const key in data.list[0].weather[0]) {
      keysArr.push(key.toString());
    }
  } else if (error) {
    console.log(error);
  }

  return data ? (
    <div className="tables-container">
      <table border="1">
        <tbody>
          <tr>
            <th>City</th>
            {keysArr.map((item) => {
              return <th key={item}> {item} </th>;
            })}
          </tr>
          {cities.map((item) => {
            return <TableRow key={item.CityCode} id={item.CityCode} />;
          })}
        </tbody>
      </table>
    </div>
  ) : (
    // if no data
    <Loader />
  );
}
