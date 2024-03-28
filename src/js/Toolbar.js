import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import PropTypes from 'prop-types';

/**
 * Bundles the Toolbar
 */
function Toolbar(props) {
  const [inputValue, setInputValue] = useState(1);

  /**
   *
   * @param {*} value
   */
  const onChange = (value) => {
    const { viewer } = props;

    if (viewer) {
      viewer.scene.verticalExaggeration = Number(value);
      viewer.scene.verticalExaggerationRelativeHeight = Number(0);
    }

    setInputValue(value);
  };

  return (
    <React.Fragment>
      <div id="toolbar">
        <div className="header">Toolbar</div>
        <div className="sub-header">Terrain exaggeration</div>
        <Row>
          <Col span={12}>
            <Slider
              min={0}
              max={10}
              onChange={onChange}
              value={typeof inputValue === 'number' ? inputValue : 1}
              step={0.01}
              className={'exaggSlider'}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={0}
              max={10}
              style={{ margin: '0 16px' }}
              step={0.01}
              value={inputValue}
              onChange={onChange}
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

Toolbar.propTypes = {
  viewer: PropTypes.object
};

export default Toolbar;
