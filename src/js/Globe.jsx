import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';


/**
 * Provides the div for the Cesium globe
 */
function Globe(props) {
  const cesiumContainer = useRef('cesiumContainer');
  const { showPhotobox } = useSelector((state) => state.showPhotobox);
  const pbClassName = `box${showPhotobox ? ' no-display' : ''}`;

  return (
    <React.Fragment>
      <div
        ref={cesiumContainer}
        id={props.cesiumContainerId}
        className={pbClassName}
      ></div>
    </React.Fragment>
  );
}

Globe.propTypes = {
  viewer: PropTypes.object,
  cesiumContainerId: PropTypes.string
};

export default Globe;
