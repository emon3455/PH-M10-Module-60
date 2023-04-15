import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {user, createUser} = useContext(AuthContext);
    console.log(createUser);

    const handleRegistration=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);

        createUser(email,password)
        .then(result=>{
            const registerdUser = result.user;
            console.log(registerdUser);
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <form onSubmit={handleRegistration} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">

                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="text-center">
                            <Link to="/login" >Already Have an Account? <button className="btn btn-link">Click To Login</button> </Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;