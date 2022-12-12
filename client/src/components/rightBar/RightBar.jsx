import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Sugerencias Para Ti</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://pps.whatsapp.net/v/t61.24694-24/311897655_854501248928998_4878681221772210682_n.jpg?ccb=11-4&oh=01_AdTkcv5GGVKlFDCJ63SeP3hP6SIPG0DemrE20uV1EmVb9A&oe=63A3D8FA" alt="" />
              <span>Pulpo Salvaje</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Eliminar</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://pps.whatsapp.net/v/t61.24694-24/224409394_519170190135519_7900745484081170179_n.jpg?ccb=11-4&oh=01_AdQ5W7RS5y040cZ_k1QXezzevWuwJHxMKo6aVMQ0je-cEQ&oe=639A9205" alt="" />
              <span>Bolillo Salvaje</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Eliminar</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Actividad reciente</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://pps.whatsapp.net/v/t61.24694-24/311897655_854501248928998_4878681221772210682_n.jpg?ccb=11-4&oh=01_AdTkcv5GGVKlFDCJ63SeP3hP6SIPG0DemrE20uV1EmVb9A&oe=63A3D8FA" alt="" />
              <p>
                <span>Pulpo Salvaje</span> Cambio su foto de perfil
              </p>
            </div>
            <span>Hace 2 minutos</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://pps.whatsapp.net/v/t61.24694-24/224409394_519170190135519_7900745484081170179_n.jpg?ccb=11-4&oh=01_AdQ5W7RS5y040cZ_k1QXezzevWuwJHxMKo6aVMQ0je-cEQ&oe=639A9205" alt="" />
              <p>
                <span>Bolillo Salvaje</span> Publico algo
              </p>
            </div>
            <span>Hace 3 minutos</span>
          </div>
        </div>
        <div className="item">
          <span>Donadores Online</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://pps.whatsapp.net/v/t61.24694-24/311897655_854501248928998_4878681221772210682_n.jpg?ccb=11-4&oh=01_AdTkcv5GGVKlFDCJ63SeP3hP6SIPG0DemrE20uV1EmVb9A&oe=63A3D8FA" alt="" />
              <div className="online" />
              <span>Pulpo Salavje</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
