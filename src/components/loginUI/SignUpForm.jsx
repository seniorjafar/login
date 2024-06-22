import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import axios from '../../api'
import { toast } from 'react-toastify'
import "./SignUp.scss"

const initialState = {
    FirstName: "",
    LastName: "",
    phones: "",
    UserName: "",
    password: "",
}

const SignUpForm = () => {
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)

    const navigate = useNavigate()

    const handleSignup = e => {
        e.preventDefault()
        formData.phones = [formData.phones]
        axios
            .post("/auth/user/sign-up", formData)
            .then(res => {
                localStorage.setItem("x-auth-token", res.data.data.token)
                navigate("/")
                localStorage.setItem("user-data", JSON.stringify(res.data.data.user))
                toast.success(res.data.message)
            })

    }
    return (
        <>
            <form className='sign_modal' onSubmit={handleSignup}>
                <div className='sign_modalClose'>
                    <h2 className='sign_text'>Create your account</h2>
                    <div className='sign_inp'>
                        <input required onChange={handleChange} value={formData.UserName} name='UserName' className='' type="text" placeholder='Username' />
                        <input required onChange={handleChange} value={formData.FirstName} name='FirstName' className='' type="text" placeholder='Firstname' />
                        <input required onChange={handleChange} value={formData.LastName} name='LastName' className='' type="text" placeholder='Lastname' />
                    </div>
                    <div className='sign_inp'>
                        <input required onChange={handleChange} value={formData.phones} name='phones' className='' type="tel" placeholder='Phone' />
                        <input required onChange={handleChange} value={formData.password} name='password' className='' type="text" placeholder='Password' />
                    </div>
                    <div className='btns'>
                        <button className='btn'>Next</button>
                        <button className='btn'>Forgot password?</button>

                    </div>
                    <p className=''>Don't have an account? <Link className='' to={'/'}>Sign In</Link></p>

                </div>
            </form>
        </>
    )
}

export default SignUpForm
