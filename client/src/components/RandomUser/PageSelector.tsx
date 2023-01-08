const PageSelector = (props: {
  pages: number;
  currentPage: number;
  changePage: (page: number) => void;
  decrement: () => void;
  increment: () => void;
}): JSX.Element => {
  return (
    <div id='random-user-page-selector'>
      <button className='page-selector-angle-button' onClick={props.decrement}>
        &lt;
      </button>
      <span>
        {Buttons({
          pages: props.pages,
          currentPage: props.currentPage,
          changePage: props.changePage,
        })}
      </span>
      <button className='page-selector-angle-button' onClick={props.increment}>
        &gt;
      </button>
    </div>
  );
};

const Buttons = (props: {
  pages: number;
  currentPage: number;
  changePage: (page: number) => void;
}) => {
  function renderButtons(): JSX.Element[] {
    let buttons: JSX.Element[] = [];

    for (let i = 1; i <= props.pages; i++) {
      const button = (
        <button
          key={i}
          className={
            "page-selector-number-button" +
            (i === props.currentPage ? "-selected" : "")
          }
          onClick={() => props.changePage(i)}
        >
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
