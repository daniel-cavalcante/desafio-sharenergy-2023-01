import { useEffect, useState } from "react";
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
        <DogDisplay />
        <RefreshDog getDog={getDog} />
      </div>
    </div>
  );
}

const RefreshDog = (props: { getDog: () => void }) => {
  return (
    <div id='dog-refresh-button-wrapper'>
      <button id='dog-refresh-button' className='button' onClick={props.getDog}>
        get dog!
      </button>
    </div>
  );
};

const DogDisplay = () => {
  return (
    <div id='dog-image-wrapper'>
      <img
        id='dog-image'
        src={`http://localhost:5000/api/v1/refresh-dog?time=${new Date()}`}
        alt={"Random dog image."}
      />
    </div>
  );
};

export default RandomDog;
