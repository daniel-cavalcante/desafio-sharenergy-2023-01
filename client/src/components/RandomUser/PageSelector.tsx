const PageSelector = (props: { pages: number }): JSX.Element => {
  function increment() {}
  function decrement() {}

  return (
    <div id='random-user-page-selector'>
      <button className='page-selector-angle-button' onClick={decrement}>
        &lt;
      </button>
      <span>{Buttons(props.pages)}</span>
      <button className='page-selector-angle-button' onClick={increment}>
        &gt;
      </button>
    </div>
  );
};

const Buttons = (pages: number) => {
  function renderButtons(): JSX.Element[] {
    let buttons: JSX.Element[] = [];

    for (let i = 1; i <= pages; i++) {
      const button = (
        <button key={i} className='page-selector-number-button'>
          {i}
        </button>
      );
      buttons.push(button);
    }
    return buttons;
  }

  return <>{renderButtons()}</>;
};

export default PageSelector;
