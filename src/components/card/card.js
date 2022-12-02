import { useState } from "react";
import "./card.css";
//import MakeAlert from "../test.js";

export default function Card(params) {

    var [name, setName] = useState("");
    var [country, setCountry] = useState("");
    var [temperature, setTemperature] = useState("");
    var [description, setDescription] = useState("");
    var [time, setTime] = useState("");
    var [humidity, setHumidity] = useState("");
    var [pressure, setPressure] = useState("");
    var [visibility, setVisibility] = useState("");
    var [tempMin, setTempMin] = useState("");
    var [tempMax, setTempMax] = useState("");
    var [speed, setSpeed] = useState("");
    var [degree, setDegree] = useState("");
    var [icon, setIcon] = useState("");
    var [preview, setPreview] = useState(false);

    const api = ""
    const url = "https://api.openweathermap.org/data/2.5/group?id=" + params.id + "&units=metric&appid="+api+"";
    fetch(url).then((Response) => Response.json()).then((data) => {
        setName(data.list[0].name);
        setCountry(data.list[0].sys.country);
        setTemperature(data.list[0].main.temp);
        setDescription(data.list[0].weather[0].description);
        setIcon(data.list[0].weather[0].icon)
        setTime(data.list[0].dt);
        setHumidity(data.list[0].main.humidity)
        setPressure(data.list[0].main.pressure)
        setVisibility(data.list[0].visibility / 1000)
        setTempMin(data.list[0].main.temp_min)
        setTempMax(data.list[0].main.temp_max)
        setSpeed(data.list[0].wind.speed)
        setDegree(data.list[0].wind.deg)
    })




    var a = new Date(time * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var ampm = "";

    function getStamp() {

        if (hour >= 12) {
            ampm = "pm";
        } else {
            ampm = "am"
        }
    }
    getStamp();
    var localTime = hour + ':' + min + ampm + ' ' + date + ' ' + month + ' ';

    function handleClick(ev) {
        setPreview(true)
    }

    function closePreview() {
        setPreview(false)
    }


    return (<>
        {
            preview &&
            <div className="preview">
                <img src="arrow.png" alt="close" className="close" onClick={closePreview} />
                <div className="cardPreview" id={params.id}>
                    <div className="top-row-preview" >
                        <div className="left-col">
                            <span className="country">
                                {name}, {country}
                            </span>
                            <p>
                                {localTime}
                            </p>
                        </div>
                    </div>

                    <div className="bottom-row-preview">

                        <div className="desc-preview">
                            <img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="" />
                            <span className="desc" > {" " + description} </span>
                        </div>

                        <div className="right-col-preview">
                            <span>
                                <span className="temp">
                                    {temperature}
                                    <sup>o</sup></span>
                                <span className="temp"> C </span>
                            </span>
                            <br />
                            <br />
                            <span>
                                min temp : <span> {" " + tempMin}
                                    <sup>o</sup></span>
                                <span> C </span>
                            </span>
                                <br/>
                            <span>
                                max temp : <span> {" " + tempMax}
                                    <sup>o</sup></span>
                                <span> C </span>
                            </span>
                        </div>
                    </div>


                    <div className="bottom-row">
                        <div style={{ "borderRight": "1px solid gray" }}>
                            <p style={{ "lineHeight": "1.8" }}>
                                pressure : {pressure}hPa<br />
                                humidity : {humidity}%<br />
                                visibility : {visibility}Km<br />
                            </p>
                        </div>

                        <div style={{ "borderRight": "1px solid gray", "padding": "4%" }}>
                            <img src="wind_speed.png" alt="" />
                            <p style={{ "margin": "0" }}> {speed}m/s {degree} degree </p>
                        </div>

                        <div>
                            <p style={{ "lineHeight": "1.8" }}>
                                sunrise : <br />
                                sunset : <br />
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        }

        {/* ============================= card list ======================= */}

        <div className="card" id={params.id} onClick={(e) => { handleClick(e.currentTarget.id) }}>
            <div className="top-row" >
                <div className="left-col">
                    <span className="country">
                        {name}, {country}
                    </span>
                    <p>
                        {localTime}
                    </p>
                    <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center", "marginTop": "10px" }}>
                        <img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="" />
                        <span className="desc" > {" " + description} </span>
                    </div>
                </div>
                <div className="right-col" >
                    <span>
                        <span className="temp">
                            {temperature}
                            <sup>o</sup></span>
                        <span className="temp"> C </span>
                    </span>
                    <br />
                    <br />
                    <span>
                        min temp : <span> {" " + tempMin}
                            <sup>o</sup></span>
                        <span> C </span>
                    </span>

                    <span>
                        max temp : <span> {" " + tempMax}
                            <sup>o</sup></span>
                        <span> C </span>
                    </span>
                </div>
                <div>

                </div>
            </div>

            <div className="bottom-row">
                <div style={{ "borderRight": "1px solid gray" }}>
                    <p style={{ "lineHeight": "1.8" }}>
                        pressure : {pressure}hPa<br />
                        humidity : {humidity}%<br />
                        visibility : {visibility}Km<br />
                    </p>
                </div>

                <div style={{ "borderRight": "1px solid gray", "padding": "4%" }}>
                    <img src="wind_speed.png" alt="" />
                    <p style={{ "margin": "0" }}> {speed}m/s {degree} degree </p>
                </div>

                <div>
                    <p style={{ "lineHeight": "1.8" }}>
                        sunrise : <br />
                        sunset : <br />
                    </p>
                </div>

            </div>
        </div>
    </>
    )
}