import React, { useState } from "react";
export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: "Paulo"
  })
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider> // a primeira chave é do javascript e a segunda significa que está recebendo um objeto
  );
};
