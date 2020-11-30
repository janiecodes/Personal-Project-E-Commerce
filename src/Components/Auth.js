import { useEffect } from "react";


const Auth = (props) => {

    useEffect(() => {
        props.loginUser()
    }, [])
}

export default Auth;