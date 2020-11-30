import { useState} from "react";
import {Link} from 'react-router-dom';


const Auth = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className='auth-component'>
            <h1>Please sign in.</h1>
            
            <form className='auth-sign-in'>
            <input
            placeholder='Apple ID'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <section>
                <p>Your Apple ID is the email address you use to sign in to iTunes, the App Store, and iCloud.</p>
            </section>
            <button onClick={props.loginUser}>Sign In</button>
            </form>
            <p className='auth-text'>For your Apple ID or password?</p>
            <Link className='auth-registration-link' to={'/register'}>Don't have an Apple Id? Create one now.</Link>
        </div>
    )

}



export default Auth;


//button to login - componentDidMount
// useEffect(() => {
//     props.loginUser()
// }, [])