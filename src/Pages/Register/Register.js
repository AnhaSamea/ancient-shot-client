import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
 
    const{createUser,signInWithGoogle} = useContext(AuthContext);

    const handleRegister= event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(res=>{
            const user= res.user;
            console.log(user);
            form.reset();
        })
        .catch(err=>console.error(err))
    }
    
    const handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then(res=>{
          const user = res.user;
          console.log(user);
      })
      .catch(error=>console.log(error));
  }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
              <h1 className='text-4xl font-bold text-center'>Register</h1>
            <form onSubmit={handleRegister} className="card-body py-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
              </div>
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
                <button className="btn bg-cyan-500 text-cyan-50 border-cyan-500" type='submit'>Register </button>
                <p className='text-center p-3'>Or, Register with</p>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost my-3"><FcGoogle className='h-8 w-6'></FcGoogle> <span className='ml-2'>Google</span></button>
              </div>
              <p className='p-5'>Already have an accout? Then <Link to='/login' className='text-cyan-500 '>Login</Link></p>
            </form>
          </div>
          
        </div>
      </div>
    );
};

export default Register;