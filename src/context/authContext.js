import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //pendiente
    setCurrentUser({
      id: 1,
      name: "John Salchichon",
      profilePic:
        "https://pps.whatsapp.net/v/t61.24694-24/296055692_810944263664753_5806369544614715404_n.jpg?ccb=11-4&oh=01_AdSCmZijHz41ZuLVCBO-WiaJrL5Ni8J30lXbRmewTpSvPw&oe=639ABFEE",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};