import { useState} from "react";

const Register = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [country, setCountry] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [areaCode, setAreaCode] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    return (
        <div>
            <div className='register-nav-bar'>
                <div className='register-nav-bar-left'>
                    <h3> Apple ID</h3>
                </div>
                <div className='register-nav-bar-right'>
                    <h6>Sign In</h6>
                    <h6>Create Your Apple ID</h6>
                    <h6>FAQ</h6>
                </div>
            </div>
            <div className='register-header'>
                <h1>Create Your Apple ID</h1>
            </div>
            <form>
                <div className='register-form-text'>
                    <p>One Apple ID is all you need to access all Apple services.</p>
                    <p>Already have an Apple ID? Find it here ></p>
                </div>
                <div className='register-name-input'>
                    <input
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='register-country-input'>
                    <p>COUNTRY/REGION</p>
                    <input
                    placeholder="United States"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    />
                    <input
                    placeholder="Birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
                <div className='register-email-input'>
                    <input
                    placeholder='name@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='register-phone-input'>
                    <input
                    placeholder='+1 (United States)'
                    value={areaCode}
                    type='number'
                    onChange={(e) => setAreaCode(e.target.value)}
                    />
                    <input
                    placeholder='Phone number'
                    value={phoneNumber}
                    type='number'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <p>Be sure to enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</p>
                <div className='register-checkbox'>
                    <p>Verify with:</p> 
                    <input
                    className='checkbox-text-message'
                    type='checkbox'
                    />
                    <p>Text message</p>
                    <input
                    className='checkbox-phone-number'
                    type='checkbox'
                    />
                    <p>Phone call</p>
                </div>
                <button>Continue</button>

            </form>
        
        </div>
    )




}

export default Register;