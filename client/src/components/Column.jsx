import React from 'react';

/**
 * Column component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const Column = ({ children, style, ...rest }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      ...style,
    }}
    {...rest}>
    {children}
  </div>
);

export default Column;
