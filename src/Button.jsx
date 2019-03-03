import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => (props.index === -1 ? '100%' : 'initial')};
  background-color: ${props => (props.index === -1 ? '#f1894f' : '#474a59')};
  color: #fff;
  border-color: ${props => (props.index === -1 ? '#f1894f' : '#474a59')};
`;
const Button = props => {
  const { onClick, value, label, index } = props;
  return (
    <StyledButton
      onClick={e => onClick(e, value)}
      className="calculator-button"
      value={value}
      index={index}
      type="button"
      tabIndex={index === 0 ? '0' : -1}
    >
      {value === 'sqrt' ? <span>&#8730;</span> : label}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default Button;
