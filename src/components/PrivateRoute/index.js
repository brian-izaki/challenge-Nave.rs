import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
import PAGES_ROUTE from '../../utils/pagesRoute';

export default function PrivateRoute({ children, token, ...attr }) {
  return (
    <Route
      {...attr}
      render={({ location }) => (token ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: PAGES_ROUTE.login,
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.string.isRequired,
};
