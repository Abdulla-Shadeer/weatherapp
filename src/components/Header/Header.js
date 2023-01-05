import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";

export default function Header() {
  const { user, logout } = useAuth0();

  return (
    <>
      <div className="user">
        {" "}
        <p>
          {" "}
          <img src={user.picture} alt="profile" /> Hello, {user.name}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("access_token");
            logout({ returnTo: window.location.reload() });
          }}
        >
          Logout
        </button>
      </div>

      <div className="header-container">
        <div className="logo">
          <img src="logo.png" alt="weatherapp" />
          <h2> Weather App </h2>
        </div>

        {user.role === "admin" ? (
          <div className="add-city">
            <input type="text" placeholder="enter city" />
            <button> Add city </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
