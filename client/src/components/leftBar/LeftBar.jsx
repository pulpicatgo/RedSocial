import "./leftBar.scss"
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"

import { useContext } from "react"
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Match donantes</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Solicitantes y altriustas</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Plaquetas</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Consultas</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Recuerdos</span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default LeftBar;