import { useAuth0 } from "@auth0/auth0-react"
import "./login.css"


export default function Login() {
    const { loginWithRedirect } = useAuth0()

    return (
        <div className="login">
            <h1>Please login to view the application</h1>
            <button onClick={loginWithRedirect}> Login with Auth0 </button>
        </div>
    )
}