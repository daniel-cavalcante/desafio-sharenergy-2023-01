const Title = (props: { title: string }): JSX.Element => {
  return (
    <div className='page-title-wrapper'>
      <div className='page-title-block'></div>

      <div className='page-title-outer'>
        <div className='page-title-inner'>
          <div className='page-title-text'>{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
