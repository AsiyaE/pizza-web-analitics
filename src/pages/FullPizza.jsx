import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63b5cb8258084a7af3a08c7f.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка ...';
  }

  return (
    <div className="container full-pizza">
      <div className="about-pizza">
        <img src={pizza.imageUrl} alt="пицца" />
        <div className="about-pizza-text">
          <h2>{pizza.title}</h2>
          <div className="about-pizza-ingredients">
            {pizza.ingredients.map((ingredient) => (
              <p key={ingredient}>{ingredient} </p>
            ))}
          </div>
          <h4 className="pizza-price">от {pizza.price} ₽</h4>
        </div>
      </div>
      <Link to="/" className="button button--outline  button--add go-back-btn button-back">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>

        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
