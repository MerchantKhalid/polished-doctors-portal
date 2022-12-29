import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
   const handleLogin = data=>{
        console.log(data)
   }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5 shadow-xl'>
                <h2 className='text-4xl text-center font-bold'>Login</h2>

                {/* React Hook Form */}
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input {...register("email",{
                            required:"Email address is required"
                        })} className="input input-bordered w-full max-w-xs"></input>
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",{
                            required:"Password is required",
                            minLength:{value:6,message:"Password Should be 6 Character long"}
                        })} className="input input-bordered w-full max-w-xs"></input>
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" value="Login" className='btn btn-accent w-full'></input>

                </form>
                <p className='mt-3'>New to Doctor's Portal?<Link className='text-secondary' to="/signup"> Create an account</Link></p>
                <div className='divider'>OR</div>
                <button className='mt-3 w-full btn btn-outline bordered-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default Login;