import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Provides the div for the Cesium globe
 */
function Globe(props) {
  const cesiumContainer = useRef('cesiumContainer');

  return (
    <React.Fragment>
      <div
        ref={cesiumContainer}
        id={props.cesiumContainerId}
        className="box"
      ></div>
    </React.Fragment>
  );
}

Globe.propTypes = {
  viewer: PropTypes.object,
  cesiumContainerId: PropTypes.string
};

export default Globe;
