import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //temporal
  const stories = [
    {
      id: 1,
      name: "Regina",
      img: "https://scontent.fgdl10-1.fna.fbcdn.net/v/t1.6435-9/78249018_3220189558054626_8537231379023265792_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG0Ywe2n5J3ahw1Vrj3sRr3I-IybZi6hcoj4jJtmLqFyshM4Hwinp_v-GcrhxRlKmxAQHZaXAmwZyCabzFpi744&_nc_ohc=M_fguX_v5m8AX9W0dhk&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfC7UGy2RGUSLRjvHL-2y5_iChi8lyUx4IH2wo66mHwKYA&oe=63B566B3",
    },
    {
      id: 2,
      name: "Jesus",
      img: "https://scontent.fgdl10-1.fna.fbcdn.net/v/t1.6435-9/75371733_3207453972661518_8366532048487186432_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH3iTXTufx10mguIrAg_Sy6CgawDtYLe6kKBrAO1gt7qYOK_HEVkEe19OYlvmGd8zdsbn7rAo88KopyKArAuRF9&_nc_ohc=xTiHGmDlnS4AX-2SUjw&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfDXhqb-3EHU5wceAuuPpaRTVQCy2fXYP330fhOZWXfREw&oe=63B554B4",
    },
    {
      id: 3,
      name: "Gilberto",
      img: "https://scontent.fgdl10-1.fna.fbcdn.net/v/t1.6435-9/76714008_3207387242668191_5868735500432441344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHHpHK7MZd5CeRfgvQZblwCZlUF_sW7OHpmVQX-xbs4emLXJn90c8dEh2HBINFjJf8EskbY541O1TjPGjOKUQKH&_nc_ohc=A3NcZ1ydKwIAX9Sw6j7&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfDrDX4bzc8t8qcqPTYE-euL5JO1ioKmWwfbZBIUp5PdDA&oe=63B55993",
    },
    {
      id: 4,
      name: "Samael",
      img: "https://scontent.fgdl10-1.fna.fbcdn.net/v/t1.18169-9/27657589_1845824242157838_2776312156994745444_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFWzpAApa4WQRpxKc0l8jGo7nbc4zoZknHudtzjOhmScWOn-zCJvxdNvlG_XJue6MBVbZCQYAudphxQtHK77BP9&_nc_ohc=Pxzjd0aRb8sAX_84ybU&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfB50b-oUnWpGZs-u5pl0c4_eSaNobiNbthUk-9Y_XJ24w&oe=63B54B4B",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories