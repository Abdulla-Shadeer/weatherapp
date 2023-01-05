import useFetch from "../../controllers/Api/Api.js";

export default function TableRow(props) {
// getting data from custom hook
  const { data, error } = useFetch(props.id);

  //getting base uri of icons from .env
  const imgUrl = process.env.REACT_APP_ICON_URI;
  let dataArr = [];

  if (error) {
    console.log(error);
  } else if (data) {
    for (let values in data.list[0].weather[0]) {
      dataArr.push(data.list[0].weather[0][values]);
    }
  }

  return (
    data && (
      <tr>
        <td>{data.list[0].name}</td>
        {dataArr.map((item, i) => {
          
          //cheking current index to render image
          return i === 3 ? (
            <td key={item}>
              {" "}
              <img src={imgUrl + item + ".png"} alt={item} />{" "}
            </td>
          ) : (
            <td key={item}> {item} </td>
          );
        })}
      </tr>
    )
  );
}
