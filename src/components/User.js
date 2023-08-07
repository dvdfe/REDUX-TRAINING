import React from "react";
import { useSelector } from 'react-redux';
import userReducer from '../reducers/user.reducer';

const User = () => {

const user = useSelector((state) => state.userReducer);
console.log(user)

  return (
    <div className="user-container">
      <div className="user">
        <h3>{user.pseudo}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age : {user.age} ans</p>
        <p>Like(s) : {user.likes}</p>
      </div>
    </div>
  );
};

export default User;
