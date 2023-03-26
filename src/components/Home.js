import Typed from 'react-typed';
const Home = () => {
  return (
    <div className="home">
      <h1>Logan J Levin</h1>
      <Typed
        className="typed"
        strings={['Full Stack Developer', 'Problem Solver', 'Lifelong Learner']}
        typeSpeed={100}
        backSpeed={100}
        loop
      />
    </div>
  );
};

export default Home;
