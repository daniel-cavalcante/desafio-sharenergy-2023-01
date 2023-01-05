import axios from "axios";

function Home() {
  const getResponse = async () => {
    const response = await axios.get("/");
    console.log(response);
  };

  return (
    <div>
      <button onClick={getResponse}>click me!</button>
    </div>
  );
}

export default Home;
