import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered"  required/>
                        <label className="label">
                            <Link href="/login" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="text-center">
                            <Link to="/register" className="btn btn-link">New Here? Click To Register</Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;