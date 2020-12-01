import {useState} from "react";
import {Link} from 'react-router-dom';
import {getUser} from '../redux/userReducer'
import {connect} from 'react-redux'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Auth = ({getUser}) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault()
        const {
            email,
            password,
        } = state;

    try {
        const user = await axios.post(`auth/login`, {email, password})
        getUser(user.data)
        history.push('/')
    }catch(error){
        console.log(error)
    }
    }
    const changeHandler = e => setState({...state, [e.target.name]: e.target.value})
    return(
        <div className='auth-component'>
            <h1>Please sign in.</h1>
            
            <form className='auth-sign-in' onSubmit={(e) => loginUser(e)}>
            <input
            placeholder='Apple ID'
            name='email'
            onChange={(e) => changeHandler(e)}
            />
            <input
            placeholder='Password'
            name='password'
            onChange={(e) => changeHandler(e)}
            />
            <section>
                <p>Your Apple ID is the email address you use to sign in to iTunes, the App Store, and iCloud.</p>
            </section>
            <button type='submit'>Sign In</button>
            </form>
            <p className='auth-text'>For your Apple ID or password?</p>
            <Link className='auth-registration-link' to={'/register'}>Don't have an Apple Id? Create one now.</Link>
        </div>
    )

}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Auth);



//button to login - componentDidMount
// useEffect(() => {
//     props.loginUser()
// }, [])