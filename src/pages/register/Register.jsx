import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Blouaa prros</h1>
          <p>
            La red social #1 para sufrir y hacer proyectos :D
          </p>
          <span>¿Ya tienes cuenta?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrarse</h1>
          <form>
            <input type="text" placeholder="Nombre de Usuario" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Nombre" />
            <button>Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register