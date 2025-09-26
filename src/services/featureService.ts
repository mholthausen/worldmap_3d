/**
 * Service for querying feature details from the backend API
 */

export interface FeatureData {
  id: number;
  objectid?: string;
  gmlid?: string;
  gmlid_codespace?: string;
  name?: string;
  name_codespace?: string;
  description?: string;
}

export interface FeatureResponse {
  success: boolean;
  feature_id: string | number | bigint;
  data?: FeatureData;
  error?: string;
  message?: string;
}

const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Fetch feature details from the backend API
 * @param featureId - The feature ID to query
 * @returns Promise with feature data or error
 */
export const fetchFeatureDetails = async (featureId: string | number | bigint): Promise<FeatureResponse> => {
  try {
    // Convert bigint to string for URL
    const featureIdStr = featureId.toString();
    const response = await fetch(`${API_BASE_URL}/feature/${featureIdStr}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return {
          success: false,
          feature_id: featureId,
          error: 'Feature not found',
          message: `No feature found with ID: ${featureId}`
        };
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: FeatureResponse = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching feature details:', error);

    return {
      success: false,
      feature_id: featureId,
      error: 'Network or API error',
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

/**
 * Check if the backend API is available
 * @returns Promise with health status
 */
export const checkApiHealth = async (): Promise<{ status: string; available: boolean }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (response.ok) {
      const data = await response.json();
      return { status: data.status, available: true };
    } else {
      return { status: 'Error', available: false };
    }
  } catch (error) {
    console.warn('API health check failed:', error);
    return { status: 'Unavailable', available: false };
  }
};
