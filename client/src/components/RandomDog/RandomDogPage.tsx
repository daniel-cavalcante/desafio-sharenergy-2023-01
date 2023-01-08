import { useState } from "react";
import Title from "../Title";

function RandomDog() {
  const [rerender, setRerender] = useState(false);

  const getDog = () => {
    setRerender(!rerender);
  };

  return (
    <div>
      <Title title={"random doggo"} />
      <div id='random-dog-wrapper'>
        <DogDisplay getDog={getDog} />
        <button id='dog-refresh-button' className='button' onClick={getDog}>
          get dog!
        </button>
      </div>
    </div>
  );
}

const DogDisplay = (props: { getDog: () => void }) => {
  return (
    <div id='dog-image-wrapper' onClick={props.getDog}>
      <img
        id='dog-image'
        src={`http://localhost:5000/api/v1/refresh-dog?time=${new Date()}`}
        alt={"Random dog."}
      />
    </div>
  );
};

export default RandomDog;
