import React from 'react';

const ReviewRow = ({review}) => {
    const {serviceName,message,customer} = review;
    return (
        <div>
             <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {/* <img src={user.photoURL} alt="Avatar Tailwind CSS Component" /> */}
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">Bangladesh</div>
            </div>
          </div>
        </td>

        <td>
         {serviceName}
          <br/>
         
        </td>
        <td>{message}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default ReviewRow;