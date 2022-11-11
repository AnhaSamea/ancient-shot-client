import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ReviewDetails = ({review}) => {
    const {serviceName,message,customer} = review;
    const {user} = useContext(AuthContext);
    return (
        <div>
<div className="overflow-x-auto w-full">
  <table className="table w-full my-8 shadow-2xl">
  
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        
        <th className='text-center'>Name</th>
        <th className='text-center'>Service Name</th>
        <th className='text-center'>Review</th>
        
        
      </tr>
    </thead>
    <tbody>
     
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              {
            user?.photoURL && <img className='rounded-full w-8 h-8 flex mt-2' src={user.photoURL} alt="" /> 
        }
              </div>
            </div>
            <div>
              <div className="font-bold text-center p-2">{customer}</div>
              <div className="text-sm opacity-50">BD</div>
            </div>
          </div>
        </td>
        <td className='text-center p-2'>
          {serviceName}
          <br/>
          {/* <span className="badge badge-ghost badge-sm"></span> */}
        </td>
        <td className='text-center p-2'>{message}</td>
        
      </tr>
      
    </tbody>
   

    
  </table>
</div>
        </div>
    );
};

export default ReviewDetails;