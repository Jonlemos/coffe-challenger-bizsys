import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./CoffeeRequest.scss";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import { CoffeeRequestContext } from "../../contexts/CoffeeRequestContext";

export default () => {
  const [counter, setCounter] = useState(1);

  const { push } = useHistory();

  const { clients, setClients } = useContext(CoffeeRequestContext);

  const { register, handleSubmit, errors } = useForm();

  const handleSubmitForm = (data) => {
    const { name, email, tel } = data;

    const dataSend = {
      id: clients.length + 1,
      name,
      email,
      tel,
      amount: counter,
      status: 1,
    };

    setClients([...clients, dataSend]);

    push("/");
  };

  const handleButtonMin = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const handleButtonMax = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container-coffee">
      <header className="banner">
        <div className="amount-pedido">
          <div className="coffee-title">Café Expresso</div>
          <div className="couter-section">
            <div className="text-amount">
              {counter < 10 ? "0" + counter : counter}
            </div>
            <button className="btn-min-max" onClick={handleButtonMin}>
              -
            </button>
            <button className="btn-min-max" onClick={handleButtonMax}>
              +
            </button>
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="form-div">
          <input
            placeholder="Nome"
            className="input"
            name="name"
            ref={register({
              required: "Digite seu nome",
            })}
          />

          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            placeholder="Email"
            className="input"
            name="email"
            ref={register({
              required: "Digite seu email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Digite um endereço de email válido",
              },
            })}
          />

          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            placeholder="Telefone"
            className="input"
            name="tel"
            type="tel"
            minLength={10}
            maxLength={11}
            ref={register({
              required: "Digite seu telefone",
              pattern: {
                value: /[0-9]$/i,
                message: "Digite um telefone válido",
              },
            })}
          />

          {errors.tel && <p className="error">{errors.tel.message}</p>}
        </div>

        <button type="submit" className="btn-generate">
          Deslize para realizar o Pedido{" "}
          <Icon className="alig-arrow" path={mdiArrowRight} size={1} />
        </button>
      </form>
    </div>
  );
};
