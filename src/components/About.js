import "./About.scss";
import selfie from "../img/selfie.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img src={selfie} alt="logan-profile" />
        <div>
          <p>
            Since an early age I have been a tech enthusiast. Tinkering with
            electornics, exploring software features and building my own gaming
            PC were all hobbies during high school. But not unil I took my first
            Computer Science class in college did I fall in love with solving
            problems with computers. Though my career has taken a different
            course, coding has always been my primary hobby and passion and that
            is why I'm making the career change to software desvelopment.
          </p>
          <p>
            When I'm not finding novel solutions to computer problems I can be
            found cooking delicious food, rollerblading, playing Dungeons &
            Dragons, PC games or chess.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
