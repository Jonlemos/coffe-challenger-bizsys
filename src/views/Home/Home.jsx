import React, { useState } from "react";
import Box from "../../components/Box/Box";
import qrCode from "../../assets/images/qrcode.png";
import "./Home.scss";

const Home = () => {
  const [preparing, setPreparing] = useState([]);
  const [ready, setReady] = useState([]);
  const [data, setData] = useState([]);

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
              {/* {data.map((item) => (
                <h1 className="text-client" key={String(item.id)}>
                  {item.name}
                </h1>
              ))} */}
              <h1>Jonathan</h1>
            </section>

            <section className="text-done">
              <div>
                <p>Preparação</p>
                {/* {preparing.map((item) => (
                  <p className="text-client2" key={String(item.id)}>
                    {item.name}
                  </p>
                ))} */}
                <h4>Felipe</h4>
              </div>

              <div>
                <p>Prontos</p>
                {/* {ready.map((item) => (
                  <p className="text-client2" key={String(item.id)}>
                    {item.name}
                  </p>
                ))} */}
                <h4>Rafael</h4>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Box>
  );
};

export default Home;
