import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stellt das div für den Cesium-Globus bereit
 */
class Globe extends React.PureComponent {
  render() {
    const { cesiumContainerId } = this.props;

    return (
      <React.Fragment>
        <div ref="cesiumContainer" id={cesiumContainerId} className="box"></div>
      </React.Fragment>
    );
  }
}

Globe.propTypes = {
  viewer: PropTypes.object,
  cesiumContainerId: PropTypes.string
};

export default Globe;
