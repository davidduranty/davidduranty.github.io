import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="home-container">
      
        
      
      <Logo />
      <Navigation />
      <div className="history">
        <h1>Notre Histoire:</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam
          sunt, nihil assumenda voluptates id consequuntur fuga, ut quod
          perferendis velit odio. Tempore animi nemo ducimus qui fuga quidem
          rerum ad exercitationem sit, nostrum delectus magni obcaecati aperiam
          sed illum sapiente alias eaque praesentium cum itaque molestias porro
          quo a. Possimus accusamus tempore odit magni corporis consequuntur,
          facilis facere quidem deleniti totam dignissimos quaerat explicabo,
          ipsam, at ipsa? At repellat doloribus quasi illum adipisci tenetur
          cumque expedita id quae numquam corrupti aliquid eos qui, perspiciatis
          vel a ducimus laudantium ipsum natus dicta corporis. Ducimus,
          provident, est laboriosam, molestiae odio eius amet soluta deserunt
          nihil numquam modi consequuntur alias illum voluptates consectetur
          repellat quod quisquam. Sint eligendi expedita aperiam eaque.
          Blanditiis nihil qui quisquam odit temporibus a cupiditate. Asperiores
          corporis, est quas quo eos eum maiores distinctio velit sed magnam
          beatae aliquam tempora natus veritatis, animi, dolorem ab. Esse
          commodi quibusdam nobis cum quis quam, eaque consectetur? Nulla, error
          pariatur odio a fugiat ut harum atque modi aspernatur quaerat natus
          dolor praesentium quasi doloribus. Vero ab placeat nemo praesentium
          alias sit suscipit doloribus cupiditate amet obcaecati totam in earum,
          doloremque quam nihil eligendi architecto laborum quo magni
          consequatur excepturi rem sint autem nisi. Cum eligendi deleniti,
          asperiores doloremque officiis iure repellendus, delectus consectetur
          neque accusantium beatae porro eveniet dolores veniam sunt
          reprehenderit laborum dicta quo perspiciatis harum. Quae aperiam velit
          ut, suscipit officiis aliquam laboriosam dolorem soluta amet. Nobis
          iusto nemo accusantium laudantium hic perferendis temporibus amet
          neque, dolore voluptatibus iure consectetur labore qui minus dolor.
          Quibusdam harum rerum commodi, saepe eveniet veritatis molestiae sit
          vero quo veniam voluptate similique consequuntur suscipit ad,
          reprehenderit enim voluptas ducimus ipsum sunt odit nostrum totam
          aliquam. Harum itaque a quos alias voluptate exercitationem animi
          quaerat iusto. Obcaecati magni incidunt voluptatibus fugiat accusamus
          expedita voluptatem.
        </p>
      </div>
      <h1>Présentation du bureau:</h1>
      <div className="container">
        <br />
        <div className="name">
          <h2>
            Philippe Goncalvez ---------------------------------- Président
          </h2>
          <br />
          <h2>
            Babeth ---------------------------------------------- Secrétaire
          </h2>
          <br />
          <h2>
            Jérémy ---------------------------------------------- Trésorier
          </h2>
          <br />
        </div>
        <div className="img-president">
          <img src="logo512.png" alt="" />
        </div>
      </div>
      <div className="organigramme">
        <h1>Organigramme:</h1>
      </div>
    </div>
  );
};

export default Home;
