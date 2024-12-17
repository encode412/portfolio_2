import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  width,
  border,
  backgroundColor,
  textColor,
  borderRadius,
  onClick,
  children,
  padding,
  className,
  cursor,
  type,
  isLoading = false,
  disabled,
}) => {
  const buttonStyle = {
    width,
    border,
    backgroundColor,
    color: textColor,
    borderRadius,
    padding,
    cursor,
  };

  return (
    <button
      style={buttonStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex items-center justify-center px-[10px] py-[30px] text-base font-semibold uppercase transition-all hover:scale-95 focus:outline-none md:text-xl`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  padding: PropTypes.string,
};

Button.defaultProps = {
  border: '1px solid #7E60BF',
  backgroundColor: '#7E60BF',
  textColor: '#ffffff',
  borderRadius: '5px',
  padding: '15px 30px',
  width: '',
};

export default Button;
