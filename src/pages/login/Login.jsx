import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {

  const {login} = useContext(AuthContext);
  
  const handleLogin = () =>{
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Blouaa prros</h1>
          <p>
            La red social #1 para sufrir y hacer proyectos :D
          </p>
          <span>Ya te nos uniste?</span>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Nombre de Ususario" />
            <input type="text" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login