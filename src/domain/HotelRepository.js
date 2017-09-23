import Rakuten from '../lib/Rakuten';

import ENV from '../../config/env';

const RAKUTEN_APP_ID = ENV.RAKUTEN_API_KEY;

// eslint-disable-next-line
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then((result) => {
      console.log(result);
    });
};
