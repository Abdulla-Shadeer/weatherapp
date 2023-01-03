import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useJwt } from "react-jwt"

export default function useToken() {
    const [token, setToken] = useState("")
    const { decodedToken } = useJwt(token)
    const { getAccessTokenSilently } = useAuth0()
    const [loading, setLoading] = useState(true)
    const [permission, setPermission] = useState(null)

    const both = "view_mode:both"
    const table = "view_mode:table"
    const card = "view_mode:card"

    useEffect(() => {

        const getToken = async () => {

            const fetchNewToken = async () => {

                await getAccessTokenSilently()
                    .then(res => setToken(res))

                console.log("no token found, fetched new access token")
                localStorage.setItem("access_token", token)

                //setting permissions
                decodedToken&& decodedToken.permissions.map((item) => {
                    if (item === both) {
                        setPermission("both")
                    } else if (item === table) {
                        setPermission("Table")
                    } else if (item === card) {
                        setPermission("Card")
                    }
                    return null
                })
                setLoading(false)
            }

            const accessToken = localStorage.getItem("access_token")

            if (accessToken) {
                setToken(accessToken)
                console.log("access token found")

                if (decodedToken) {
                    //checking token expiry
                    var expirationDate = new Date(0);
                    expirationDate.setUTCSeconds(decodedToken.exp);
                    let result = expirationDate.valueOf() < new Date().valueOf();

                    //if token expired
                    if (result === true) {
                        fetchNewToken()

                        //if token not expired
                    } else {
                        //setting permissions
                        decodedToken.permissions.map((item) => {
                            if (item === both) {
                                setPermission("both")
                            } else if (item === table) {
                                setPermission("Table")
                            } else if (item === card) {
                                setPermission("Card")
                            }
                            return null
                        })
                        setLoading(false)
                    }
                }
            }
            //if not token found
            else {
                //fetching new token
                fetchNewToken()
            }
        }

        getToken()

    }, [getAccessTokenSilently, token, decodedToken])


    return { permission, loading }

}