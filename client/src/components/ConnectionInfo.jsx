import React, { useState, useEffect } from 'react';

const { HOST, PORT } = window.config;

/**
 * ConnectionInfo component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const ConnectionInfo = ({ connectedState }) => {
  const [isVisible, setIsVisible] = useState(true);

  const backgroundColor = connectedState === true
    ? 'green'
    : connectedState.error
      ? 'red'
      : 'black';
  const stateStr = connectedState === true
    ? `Connected to ${HOST}:${PORT}`
    : connectedState.error
      ? `Error: ${connectedState.error}`
      : 'Connecting...';

  // When connectedState changes
  useEffect(() => {
    setTimeout(() => setIsVisible(connectedState !== true), 1000);
  }, [connectedState]);
  
  return (
    <div style={{
      display: isVisible ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: 35,
      color: 'white',
      backgroundColor,
    }}>
      <div style={{ paddingLeft: 10 }}>
        {stateStr}
      </div>
    </div>
  );
};

export default ConnectionInfo;
