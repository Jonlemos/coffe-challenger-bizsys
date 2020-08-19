import React, { useState, useContext } from "react";
import Box from "../../components/Box/Box";
import qrCode from "../../assets/images/qrcode.png";
import "./Home.scss";

import { CoffeeRequestContext } from "../../contexts/CoffeeRequestContext";

const Home = () => {
  const { clients, setClients } = useContext(CoffeeRequestContext);

  return (
    <Box>
      <div className="container">
        <section className="wrapper">
          <div className="card1">
            <div>
              <img className="qr-code" src={qrCode} alt="qr-code" />
              <p className="text-dotes">...</p>
            </div>
            <div className="card-text">
              <h4>
                Scaneie o código acima e realize <br />o pedido de seu
                cafézinho.
              </h4>

              <h4>
                Você será avisado no painel <br />
                quando ele estiver pronto.
              </h4>
            </div>
          </div>

          <div className="card2">
            <section>
              <p>Venha retirar seu pedido</p>
              {clients.map(
                (item) =>
                  item.status === 1 && (
                    <h1 className="text-client" key={item.id}>
                      {item.name}
                    </h1>
                  )
              )}
            </section>

            <section className="text-done">
              <div>
                <p>Preparação</p>
                {clients.map(
                  (item) =>
                    item.status === 2 && (
                      <h4 className="text-client2" key={item.id}>
                        {item.name}
                      </h4>
                    )
                )}
              </div>

              <div>
                <p>Prontos</p>
                {clients.map(
                  (item) =>
                    item.status === 3 && (
                      <h4 className="text-client2" key={String(item.id)}>
                        {item.name}
                      </h4>
                    )
                )}
              </div>
            </section>
          </div>
        </section>
      </div>
    </Box>
  );
};

export default Home;
