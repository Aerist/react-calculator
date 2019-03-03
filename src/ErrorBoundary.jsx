import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true, errorMessage: error, info });
  }

  render() {
    const { hasError, errorMessage, info } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{errorMessage}</p>
          <p>{info}</p>
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ErrorBoundary;
