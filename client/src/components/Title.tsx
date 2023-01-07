const Title = (props: { title: string }): JSX.Element => {
  return (
    <div className='page-title-wrapper'>
      <div className='page-title-block'></div>

      <div className='page-title'>
        <div className='page-title-floating-block'></div>
        {props.title}
      </div>
    </div>
  );
};

export default Title;
