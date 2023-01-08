import { useState } from "react";
import Title from "../Title";

const CatStatusCode = () => {
  const [statusCode, setStatusCode] = useState("0");

  return (
    <div>
      <Title title={"codename: cat"} />
      <div id='status-code-display-wrapper'>
        <StatusCode
          changeStatusCode={(n: number) => setStatusCode(n.toString())}
        />
        <CatDisplay statusCode={statusCode} />
      </div>
    </div>
  );
};

const StatusCode = (props: { changeStatusCode: (n: number) => void }) => {
  const [codeInput, setCodeInput] = useState<string>("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.changeStatusCode(Number(codeInput));
    setCodeInput("");
  }
  function handleChange(e: React.FormEvent) {
    setCodeInput((e.target as HTMLTextAreaElement).value);
  }
  return (
    <div id='status-code-bar'>
      <form onSubmit={handleSubmit}>
        <label>insert a number from 1 to 600</label>
        <input
          type='number'
          id='status-code-input'
          className='input'
          name='keywords'
          value={codeInput}
          autoComplete='off'
          placeholder='Status Code'
          onChange={handleChange}
        ></input>
        <button className='button' type='submit'>
          get cat!
        </button>
      </form>
    </div>
  );
};

const CatDisplay = (props: { statusCode: string }) => {
  return (
    <div id='cat-image-wrapper'>
      <img
        id='cat-image'
        src={`http://localhost:5000/api/v1/status-code/${props.statusCode}`}
        alt={`Cat number ${props.statusCode}.`}
      />
    </div>
  );
};

export default CatStatusCode;
