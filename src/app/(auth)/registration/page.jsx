"use client"

import { registerUser } from '@/app/actions/auth/registeruser';
import React from 'react';

const RegistrationPage = () => {


    const handleSubmit = async (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const payload = { email, password }
        console.log(payload)
        const result = await registerUser(payload);
        alert("Registration Successfully Done")
        console.log(result)
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Registration</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;