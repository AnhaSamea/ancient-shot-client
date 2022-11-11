import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

    const {signIn,signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit= event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(res=>{
            const user= res.user;
            console.log(user);
            form.reset();
            // setError('');
            navigate(from, {replace:true})
            // navigate('/')
        })
        .catch(err=>{
          console.error(err);
          // setError(error.message);
        })
        
    }

    const handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then(res=>{
          const user = res.user;
          console.log(user);
          navigate(from, {replace:true})
      })
      .catch(error=>console.log(error));
  }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
              <h1 className='text-4xl font-bold text-center'>Login</h1>
            <form onSubmit={handleSubmit} className="card-body py-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-500 text-cyan-50 border-cyan-500" type='submit'>Login</button>
                {/* <p className='text-red-600'>{error}</p> */}
                <p className='text-center p-3'>Or, Login with</p>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost my-3"><FcGoogle className='h-8 w-6'></FcGoogle> <span className='ml-2'>Google</span></button>
                
              </div>
              <p className='p-5'>Don't have an accout? Then <Link to='/register' className='text-cyan-500 '>Register</Link></p>
            </form>
         
          </div>
          
        </div>
      </div>
    );
};

export default Login;