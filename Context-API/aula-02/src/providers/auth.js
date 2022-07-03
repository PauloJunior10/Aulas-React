import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: ""
  })

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if(userStorage){
        setUser(JSON.parse(userStorage)) // está salva como string no servidor, por isso usamos o json para converter em objeto javascript
    } else {
        setUser({
            name: "", // caso não tenha nada no servidor ele retorna o objeto com uma string vazia.
        })
    }
  },[])
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider> // a primeira chave é do javascript e a segunda significa que está recebendo um objeto
  );
};


export const useAuth = () => React.useContext(AuthContext)