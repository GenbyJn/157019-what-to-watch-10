import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {RouteName} from '../../utils/common';

type LogoProps = {
  className?: string;
}

const Logo = ({className}: LogoProps): JSX.Element => (
  <div className="logo">
    <Link
      to={RouteName.Main}
      className={classNames('logo__link', className)}
      data-testid="logo"
    >
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);


export default Logo;
