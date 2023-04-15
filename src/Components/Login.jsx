import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signIn,SignInWithGoogle} = useContext(AuthContext);


    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email,password)
        .then(res=>{
            const logedUser = res.user;
            console.log(logedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

    const handleGoogleLogIn=()=>{
        SignInWithGoogle()
        .then(res=>{
            console.log(res);
        })
        .catch(er=>{
            console.log(er);
        })
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
                            <Link to="/login" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="text-center">
                            <Link to="/register" className="btn btn-link">New Here? Click To Register</Link>
                        </label>
                        <div className="text-center">
                            <button onClick={handleGoogleLogIn} className="btn btn-info">log In With Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;