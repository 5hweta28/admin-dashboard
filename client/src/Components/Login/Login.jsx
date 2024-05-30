import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import video from '../../LoginAssets/grass.mp4';
import logo from '../../LoginAssets/leaf.png';
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

const Login = () => {
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');

    const loginUser = (e) => {
        e.preventDefault(); // Prevent the default form submission

        Axios.post('http://localhost:3002/login', {
            setUserName: loginUserName,
            setPassword: loginPassword
        }).then((response) => {
            console.log(response);

            if (response.data.message || loginUserName === '' || loginPassword === '') {
                navigateTo('/');
                setLoginStatus('Credentials Not Matching!');
            } else {
                navigateTo('/dashboard');
            }
        }).catch((error) => {
            console.error('There was an error logging in!', error);
        });
    };

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage');
            setTimeout(() => {
                setStatusHolder('message');
            }, 4000);
        }
    }, [loginStatus]);

    return (
        <div className='loginPage flex'>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className='videoDiv'>
                        <h2 className='title'>Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of Nature!!</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className='text'>Don't have an account</span>
                        <Link to={'/register'}>
                            <button className='btn'>Sign Up</button>
                        </Link>
                    </div>
                </div> 
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!!</h3>
                    </div>

                    <form className='form grid' onSubmit={loginUser}>
                        <span className={statusHolder}>{loginStatus}</span>
                        <div className="inputDiv">
                            <label htmlFor="username">UserName</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' value={loginUserName} placeholder='Enter username' onChange={(event) => setLoginUserName(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' value={loginPassword} placeholder='Enter Password' onChange={(event) => setLoginPassword(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>
                        
                        <a href='/dashboard'>Dashboard</a>

                        <span className='forgotPassword'>
                            Forgot your Password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
