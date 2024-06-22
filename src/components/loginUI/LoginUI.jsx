import React, { useEffect, useState } from 'react'
import Model from '../model/Model'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import "./Login.scss"

// Icons
import { Link, useNavigate } from 'react-router-dom'

const LoginUI = () => {
    let [signinModel, setSigninModel] = useState(false)
    let [signupModel, setSignupModel] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('x-auth-token')) {
            navigate('/')
        }
    }, [])

    return (
        <section className='logins'>
                <div className='login'>
                    <button onClick={() => setSignupModel(true)} className='btn btn1'>Create account</button>
                    {
                        signupModel ?
                            <Model close={setSignupModel}>
                                <SignUpForm />
                            </Model>
                            : <></>
                    }
                    <button onClick={() => setSigninModel(true)} className='btn btn2'>Sign in</button>
                    {
                        signinModel ?
                            <Model close={setSigninModel}>
                                <SignInForm />
                            </Model>
                            : <></>
                    }
                </div>
        </section>
    )
}

export default LoginUI
