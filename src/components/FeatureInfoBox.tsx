import React from 'react';
import { Drawer, Typography, Descriptions, Tag, Space, Alert } from 'antd';
import { InfoCircleOutlined, BugOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export interface FeatureData {
  objectid?: string;
}

export interface FeatureInfoData {
  featureId: string | number | bigint;
  databaseData?: FeatureData;
  loading?: boolean;
  error?: string;
  apiError?: boolean;
}

interface FeatureInfoBoxProps {
  visible: boolean;
  onClose: () => void;
  featureInfo: FeatureInfoData | null;
}

const FeatureInfoBox: React.FC<FeatureInfoBoxProps> = ({
  visible,
  onClose,
  featureInfo
}) => {
  if (!featureInfo) {
    return (
      <Drawer
        title="Feature Information"
        placement="right"
        onClose={onClose}
        open={visible}
        width={450}
        mask={false}
      >
        <Alert
          message="No Feature Selected"
          description="Click on a 3D building feature to view its information."
          type="info"
          showIcon
        />
      </Drawer>
    );
  }

  const {
    featureId,
    databaseData,
    loading,
    error,
    apiError
  } = featureInfo;

  return (
    <Drawer
      title={
        <Space>
          <InfoCircleOutlined />
          <span>Feature Information</span>
        </Space>
      }
      placement="right"
      onClose={onClose}
      open={visible}
      width={450}
      mask={false}
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>

        {/* 3D Tileset Properties */}
        <div>
          <Title level={4}>
            <Space>
              <Tag color="blue">3D Tileset</Tag>
            </Space>
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Feature ID">
              <Text code>{featureId}</Text>
            </Descriptions.Item>
          </Descriptions>
        </div>

        {/* Loading State */}
        {loading && (
          <Alert
            message="Loading database information..."
            type="info"
            showIcon
          />
        )}

        {/* Error States */}
        {error && (
          <Alert
            message={apiError ? "Backend API Unavailable" : "Database Error"}
            description={error}
            type="error"
            showIcon
            icon={<BugOutlined />}
          />
        )}

        {/* Database Information */}
        {databaseData && !loading && !error && (
          <div>
            <Title level={4}>
              <Space>
                <Tag color="green">CityDB</Tag>
              </Space>
            </Title>
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label="Object ID">
                <Text code style={{ wordBreak: 'break-all' }}>
                  {databaseData.objectid || 'N/A'}
                </Text>
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Space>
    </Drawer>
  );
};

export default FeatureInfoBox;
