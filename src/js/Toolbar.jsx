import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Typography, Divider } from "antd";
import PropTypes from "prop-types";
import { Cartesian3, Math as CesiumMath } from "cesium";
import { appVersion, cesiumVersion, babylonVersion } from "../version";

const { Paragraph, Link, Text } = Typography;

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

  const flyUnderground = () => {
    const { viewer } = props;

    if (viewer) {
      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(6.957177, 50.934689, -308.83),
        orientation: {
          heading: CesiumMath.toRadians(24.46),
          pitch: CesiumMath.toRadians(3.15),
          roll: 0.0,
        },
      });
    }
  };

  return (
    <React.Fragment>
      <div id="toolbar">
        <div className="header">Toolbar</div>
        <div className="sub-header">Demo Application</div>
        <Row>
          <Typography size="small">
            <Paragraph>
              <Text className="toolbar-text-strong">App Version:</Text>{" "}
              <Text className="toolbar-text">{appVersion}</Text>
              <br />
              <Text className="toolbar-text-strong">Cesium Version:</Text>{" "}
              <Text className="toolbar-text">{cesiumVersion}</Text>
              <br />
              <Text className="toolbar-text-strong">
                BabylonJS Version:
              </Text>{" "}
              <Text className="toolbar-text">{babylonVersion}</Text>
            </Paragraph>
            <Paragraph className="toolbar-text">
              This is a demonstration application.
            </Paragraph>
            <Paragraph className="toolbar-text">
              The red dot at Cologne Cathedral opens a 360° view via BabylonJS
              when clicked.
            </Paragraph>
            <Paragraph className="toolbar-text">
              In addition, the DWD precipitation radar of the last 24 hours is
              integrated and can be controlled via the time slider.
            </Paragraph>
            <Paragraph>
              <Link onClick={flyUnderground} className="toolbar-link">
                Click here to fly underground and view the imported tunnel
                model.
              </Link>
            </Paragraph>
          </Typography>
        </Row>
        <Divider />
        <div className="sub-header">Terrain exaggeration</div>
        <Row>
          <Col span={12}>
            <Slider
              min={0}
              max={10}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 1}
              step={0.01}
              className={"exaggSlider"}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={0}
              max={10}
              style={{ margin: "0 16px" }}
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
  viewer: PropTypes.object,
};

export default Toolbar;
