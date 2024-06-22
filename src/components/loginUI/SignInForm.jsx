import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import { toast } from 'react-toastify'
import "./SignIn.scss"

// InitialState
const initialState = {
    UserName: "",
    password: "",
}

const SignInForm = () => {
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)

    const navigate = useNavigate()

    const handleSignin = e => {
        e.preventDefault()
        axios
            .post('/auth/sign-in', formData)
            .then(res => {
                localStorage.setItem("x-auth-token", res.data.data.token)
                localStorage.setItem("user-data", JSON.stringify(res.data.data.user))
                navigate("/")
                toast.success(res.data.message)
            })
            .catch((err) => toast.error('Username or password is incorrect.'))

    }
    return (
        <>
            <form className='sign_modal' onSubmit={handleSignin}>
                <div className='sign_modalClose'>
                    <h2 className='sign_text'>Sign In</h2>
                    <div className='sign_input'>
                        <input required onChange={handleChange} value={formData.UserName} name='UserName'  type="text" placeholder='Username' />
                    </div>
                    <div className='sign_input'>
                        <input required onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' />
                    </div>
                    <div className='btns'>
                        <button className='btn'>Next</button>
                    <button className='btn'>Forgot password?</button>
                    </div>
                    <p className=''>Don't have an account? <Link className='' to={'/'}>Sign up</Link></p>

                </div>
            </form>
        </>
    )
}

export default SignInForm
