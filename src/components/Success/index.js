import React from 'react';
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <div className="overlay">
      <div>
        <h1 className="confirmation"> Вы успешно зарегистрировались</h1>
        <button className="buttonConfirm">
          <Link to="/signup">Выйти</Link>
        </button>
      </div>
    </div>
  );
};
