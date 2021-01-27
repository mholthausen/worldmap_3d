/**
 * @constant cesiumToken The CesiumToken generated by https://cesium.com/ion/tokens
 */
export const cesiumToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZTk4OGI5Ny0wZDZkLTQ1YWYtY' +
  'WNjZi0xZGIzZGRiMDhjMTkiLCJpZCI6NDMwMCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI' +
  '6MTU2OTQ4ODEwNH0.vlHoIIaINsSQC4nlYqFbzTOBLIRxOXjz1T2oPcwI7-o';

export const viewerConfig = {
  geocoder: true,
  skyAtmosphere: false,
  shouldAnimate: false,
  animation: true,
  baseLayerPicker: false,
  fullscreenButton: false,
  homeButton: true,
  infoBox: false,
  sceneModePicker: true,
  selectionIndicator: true,
  navigationHelpButton: true,
  imageryProvider: false,
  skyBox: false
};

export const wms_nw_dop = {
  url: 'https://www.wms.nrw.de/geobasis/wms_nw_dop',
  layers: 'nw_dop_rgb',
  parameters: {
    format: 'image/png'
  }
};

export const czml_cgn_cathedral = [
  {
    id: 'document',
    name: 'Location of Photobox',
    version: '1.0'
  },
  {
    id: 'babylonIdCologneCathedral',
    name: 'Cologne Cathedral',
    position: {
      cartographicDegrees: [6.9568, 50.941287, 105.0]
    },
    ellipsoid: {
      radii: {
        cartesian: [5.0, 5.0, 5.0]
      },
      fill: true,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 255]
          }
        }
      }
    }
  }
];

export default cesiumToken;
