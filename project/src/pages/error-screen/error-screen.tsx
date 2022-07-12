import Logo from '../../components/logo/logo';

const ErrorScreen = ():JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">

      <Logo/>

    </header>

    <div className="sign-in user-page__content">
      <div className="sign-in__message">
        <p> 404 Not Found </p>
      </div>
    </div>

    <footer className="page-footer">

      <Logo/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default ErrorScreen;
