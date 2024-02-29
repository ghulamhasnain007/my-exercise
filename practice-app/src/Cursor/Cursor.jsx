import React, { useEffect, useState } from 'react';

const withMouse = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    // Return the WrappedComponent with additional props
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const panelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>{/* Corrected the typo in 'y' */}
      </div>
    </div>
  );
};

const pointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMouse(panelMouseLogger); // Corrected the component name to start with uppercase
const PointMouseTracker = withMouse(pointMouseLogger); // Corrected the component name to start with uppercase

function Cursor() {
  return (
    <div>
      <header>Little Lemon Restaurant</header> {/* Corrected the typo in 'Little' */}
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default Cursor;
