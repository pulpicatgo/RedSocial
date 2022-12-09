import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Contactame!, puedo ayudarte si aun lo necesitas",
      name: "Bolillo Salvaje",
      userId: 1,
      profilePicture:
        "https://pps.whatsapp.net/v/t61.24694-24/224409394_519170190135519_7900745484081170179_n.jpg?ccb=11-4&oh=01_AdQ5W7RS5y040cZ_k1QXezzevWuwJHxMKo6aVMQ0je-cEQ&oe=639A9205",
    },
    {
      id: 2,
      desc: "Te mandare mensaje!!",
      name: "Pulpo Salvaje",
      userId: 2,
      profilePicture:
        "https://pps.whatsapp.net/v/t61.24694-24/311442103_682401330104262_1781107697484717427_n.jpg?ccb=11-4&oh=01_AdSirYtDwISkdcl8eU8obZ7S7hVAN34hBeKLdElCph_O9w&oe=639A959F",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Escribe un comentario" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;