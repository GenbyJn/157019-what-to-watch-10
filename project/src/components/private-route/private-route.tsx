import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/auth-slice/selectors';
import { AppRoute, AuthorizationStatus } from '../../utils/common';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
};

export default PrivateRoute;
