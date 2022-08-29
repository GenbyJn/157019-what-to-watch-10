import './style.css';

const Loader = (): JSX.Element => (
  <div className='loader'>
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
);

export default Loader;

