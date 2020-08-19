import React, { createContext, useState } from "react";

export const CoffeeRequestContext = createContext();

export default ({ children }) => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Jonathan",
      email: "lemos.anjos@gmail.com",
      tel: "11981402541",
      amount: 1,
      status: 1,
    },
    {
      id: 2,
      name: "Bizsys",
      email: "Bizsys@bizsys.com",
      tel: "1122445588",
      amount: 1,
      status: 2,
    },
    {
      id: 3,
      name: "Github",
      email: "Githubs@github.com",
      tel: "1155887777",
      amount: 1,
      status: 3,
    },
  ]);

  const providerValue = {
    clients,
    setClients,
  };

  return (
    <CoffeeRequestContext.Provider value={providerValue}>
      {children}
    </CoffeeRequestContext.Provider>
  );
};
// const ClientData = ({ children }) => {
//   const [clients, setClients] = useState([
//     { id: 1, name: "Jonathan", status: 1 },
//     { id: 2, name: "Bizsys", status: 2 },
//     { id: 3, name: "Github", status: 3 },
//   ]);

//   const SaveData = (saves) => {
//     const newClient = {
//       id: clients.length + 1,
//       Client: clients.name,
//       status: 1,
//     };
//     setClients([...clients, setClients]);
//   };
// };
