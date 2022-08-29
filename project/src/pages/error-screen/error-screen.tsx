import { Link } from 'react-router-dom';
import { Footer } from '../../components';
import Logo from '../../components/logo/logo';
import { RouteName } from '../../utils/common';

const ErrorScreen = ():JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">

      <Logo/>

    </header>

    <div className="sign-in user-page__content">
      <div className="sign-in__message">
        <p> 404 Not Found </p>
      </div>
      <Link to={RouteName.Main} className="to-back">
          Go to home page
      </Link>
    </div>

    <Footer/>

  </div>
);

export default ErrorScreen;
