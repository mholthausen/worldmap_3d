import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Viewer } from 'cesium';
import { RootState } from './store/index';

interface GlobeProps {
  viewer?: Viewer | null;
  cesiumContainerId: string;
}

/**
 * Provides the div for the Cesium globe
 */
const Globe: React.FC<GlobeProps> = ({ cesiumContainerId }) => {
  const cesiumContainer = useRef<HTMLDivElement>(null);
  const { showPhotobox } = useSelector((state: RootState) => state.showPhotobox);
  const pbClassName = `box${showPhotobox ? ' no-display' : ''}`;

  return (
    <React.Fragment>
      <div
        ref={cesiumContainer}
        id={cesiumContainerId}
        className={pbClassName}
      ></div>
    </React.Fragment>
  );
};

export default Globe;