import useFetch from "../../controllers/api/api.js"

export default function TableRow(props) {

    const { data, error } = useFetch(props.id)
    const imgUrl = process.env.REACT_APP_ICON_URI;
    let valueArr = []

    if (error) {
        console.log(error)
    }
    else if(data){
        for (let values in data.list[0].weather[0]){
        valueArr.push(data.list[0].weather[0][values])
        }
    }

    return (
        data &&
            <tr>
                <td>{data.list[0].name}</td>
                {
                    valueArr.map((item, i) => {
                        return (
                            i === 3 ?
                                <td key={item}> <img src={imgUrl + item + ".png"} alt={item} /> </td> :
                                <td key={item}> {item} </td>
                        )
                    })
                }
            </tr>
    )
}