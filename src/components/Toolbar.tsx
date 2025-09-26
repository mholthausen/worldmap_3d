import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Typography, Divider, Checkbox, Space } from "antd";
import { Cartesian3, Math as CesiumMath, Viewer } from "cesium";
import { appVersion, cesiumVersion, babylonVersion } from "../version.ts";

const { Paragraph, Link, Text } = Typography;

interface ToolbarProps {
  viewer?: Viewer | null;
  tilesetStylingEnabled?: boolean;
  onTilesetStylingChange?: (enabled: boolean) => void;
}

/**
 * Bundles the Toolbar
 */
const Toolbar: React.FC<ToolbarProps> = ({ viewer, tilesetStylingEnabled, onTilesetStylingChange }) => {
  const [inputValue, setInputValue] = useState<number>(1);

  /**
   * Handle terrain exaggeration change
   */
  const onChange = (value: number | null): void => {
    if (value === null) return;

    if (viewer) {
      viewer.scene.verticalExaggeration = Number(value);
      viewer.scene.verticalExaggerationRelativeHeight = Number(0);
    }

    setInputValue(value);
  };

  /**
   * Handle tileset styling checkbox change
   */
  const handleTilesetStylingChange = (checked: boolean): void => {
    if (onTilesetStylingChange) {
      onTilesetStylingChange(checked);
    }
  };

  const flyUnderground = (): void => {
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
          <Typography className="toolbar-text">
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
        <Divider />
        <div className="sub-header">3D Tiles Styling</div>
        <Row>
          <Col span={24}>
            <Checkbox
              checked={tilesetStylingEnabled}
              onChange={(e) => handleTilesetStylingChange(e.target.checked)}
            >
              <span className="toolbar-text">Enable feature categorization</span>
            </Checkbox>
          </Col>
        </Row>

        {tilesetStylingEnabled && (
          <Row style={{ marginTop: "12px" }}>
            <Col span={24}>
              <div className="toolbar-text" style={{ marginBottom: "8px", fontSize: "12px", fontWeight: "bold" }}>
                Feature Categories:
              </div>
              <Space direction="vertical" size="small" style={{ width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", fontSize: "11px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#FF0000",
                      marginRight: "8px",
                      border: "1px solid #ccc"
                    }}
                  ></div>
                  <span className="toolbar-text">1 - 711.227</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "11px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#00FF00",
                      marginRight: "8px",
                      border: "1px solid #ccc"
                    }}
                  ></div>
                  <span className="toolbar-text">711.228 - 1.422.455</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "11px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#0000FF",
                      marginRight: "8px",
                      border: "1px solid #ccc"
                    }}
                  ></div>
                  <span className="toolbar-text">1.422.456 - 2.133.683</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "11px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#FFFF00",
                      marginRight: "8px",
                      border: "1px solid #ccc"
                    }}
                  ></div>
                  <span className="toolbar-text">2.133.684 - 2.844.910</span>
                </div>
              </Space>
            </Col>
          </Row>
        )}
      </div>
    </React.Fragment>
  );
};

export default Toolbar;
