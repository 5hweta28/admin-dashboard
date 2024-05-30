import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import { Link ,useNavigate} from 'react-router-dom'; 
import Axios from 'axios';
import video from '../../LoginAssets/grass.mp4';
import logo from '../../LoginAssets/leaf.png';
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo=useNavigate()

    const createUser = (event) => {
        event.preventDefault(); // Prevent the default form submission
        Axios.post('http://localhost:3002/register', {
            setEmail: email,
            setUserName: userName,
            setPassword: password
        }).then(() => {
            console.log('User has been created');
            navigateTo('/')
            setEmail('')
            setUserName('')
            setPassword('')
        }).catch((error) => {
            console.error('There was an error creating the user!', error);
        });
    }

    return (
        <div className='registerPage flex'>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className='videoDiv'>
                        <h2 className='title'>Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of Nature!!</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className='text'> Have an account</span>
                        <Link to={'/'}>
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
                </div> 
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Let Us Know You!!</h3>
                    </div>

                    <form className='form grid' onSubmit={createUser}>
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon'/>
                                <input type="text" id='email' placeholder='Enter email' onChange={(event) => setEmail(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">UserName</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' placeholder='Enter username' onChange={(event) => setUserName(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Register </span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <span className='forgotPassword'>
                            Forgot your Password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
