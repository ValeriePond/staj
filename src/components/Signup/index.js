import React, { useState } from 'react';
import styles from './Signup.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import { Link } from 'react-router-dom';

export const Signup = () => {
  const [name, SetName] = useState('');
  const [password, SetPassword] = useState('');
  const history = useHistory();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:8000/signup', {
          name,
          password,
        })
        .then((res) => {
          if (res.data == 'exist') {
            alert('User already exists');
          } else if (res.data == 'notexist') {
            /*<Redirect to="/success" />;
            <Redirect push to="/success" />;*/
            history.push({
              pathname: '/success',
              state: { referrer: '/signup' },
            });
          }
        })
        .catch((e) => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const handlePasswordChange = (e) => {
    const plainTextPassword = e.target.value;

    // Генерация соли (salt)
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      // Хеширование пароля с использованием соли
      bcrypt.hash(plainTextPassword, salt, (err, hash) => {
        // Теперь 'hash' содержит зашифрованный пароль
        // Вы можете использовать 'hash' в вашем коде, например, для отправки на сервер
        console.log(hash);
      });
    });

    // Обновление состояния
    SetPassword(plainTextPassword);
  };

  return (
    <div className="background">
      <div className="overlay">
        <div>
          <h1>Регистрация нового пользователя</h1>
          <p className="text">Введите свои данные чтобы зарегистрироваться</p>
          <form action="POST">
            <input
              required
              minLength="8"
              type="name"
              placeholder="Имя"
              onChange={(e) => {
                SetName(e.target.value);
              }}></input>

            <input
              required
              type="password"
              placeholder="Пароль"
              onChange={handlePasswordChange}></input>
          </form>
          <button type="submit" className="buttonRegistration" onClick={submit}>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
