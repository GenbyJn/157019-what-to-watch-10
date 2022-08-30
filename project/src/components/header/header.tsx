import { FormEvent, PropsWithChildren } from 'react';
import { Link, useMatch } from 'react-router-dom';
import classNames from 'classnames';
import { RouteName } from '../../utils/common';
import { logoutAction } from '../../store/api-actions';
import { selectAuthStatus, selectAvatar } from '../../store/auth-slice/selectors';
import { AuthorizationStatus } from '../../utils/common';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Logo from '../logo/logo';

type HeaderProps = PropsWithChildren<{
  className?: string;
}>

const Header = ({className, children}: HeaderProps): JSX.Element => {
  const isLoginPath = useMatch(RouteName.SignIn);
  const authStatus = useAppSelector(selectAuthStatus);
  const avatarUrl = useAppSelector(selectAvatar);
  const dispatch = useAppDispatch();

  const handleLogout = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className={classNames('page-header', className)}>
      <Logo/>

      {children}

      {
        !isLoginPath &&
        <ul className="user-block">
          {
            authStatus === AuthorizationStatus.Auth
              ? (
                <>
                  <li className="user-block__item">
                    <Link
                      to={RouteName.MyList}
                      className="user-block__avatar"
                    >
                      <img
                        src={avatarUrl}
                        alt="User avatar"
                        width="63"
                        height="63"
                      />
                    </Link>
                  </li>
                  <li className="user-block__item">
                    <div
                      className="user-block__link"
                      onClick={handleLogout}
                    >
                      Sign out
                    </div>
                  </li>
                </>
              )
              : (
                <li className="user-block__item">
                  <Link to={RouteName.SignIn} className="user-block__link">Sign in</Link>
                </li>
              )
          }
        </ul>
      }
    </header>
  );
};

export default Header;
