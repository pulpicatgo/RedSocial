import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //Temporal
  const posts = [
    {
      id: 1,
      name: "Pulpo Salvaje",
      userId: 1,
      profilePic:
        "https://pps.whatsapp.net/v/t61.24694-24/311442103_682401330104262_1781107697484717427_n.jpg?ccb=11-4&oh=01_AdSirYtDwISkdcl8eU8obZ7S7hVAN34hBeKLdElCph_O9w&oe=639A959F",
      desc: "Las transfusiones de sangre y hemoderivados salvan millones de vidas cada año.",
      img: "http://cdn.statcdn.com/Infographic/images/normal/25406.jpeg",
    },
    {
      id: 2,
      name: "Pulpo Salvaje",
      userId: 2,
      profilePic:
        "https://pps.whatsapp.net/v/t61.24694-24/311442103_682401330104262_1781107697484717427_n.jpg?ccb=11-4&oh=01_AdSirYtDwISkdcl8eU8obZ7S7hVAN34hBeKLdElCph_O9w&oe=639A959F",
      desc: "¡Hola! Busco donadores en la CDMX, mi hermana está muy enferma. En el hospital Fernando Quiroz. Gracias.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;