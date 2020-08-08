import PoppinsWoff2 from './fonts/Poppins-Regular.woff2';
import PoppinsWoff from './fonts/Poppins-Regular.woff';
import PoppinsTtf from './fonts/Poppins-Regular.ttf';

export const poppinsRegular = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local('Poppins'),
    local('Poppins-Regular'),
    url(${PoppinsWoff2}) format('woff2'),
    url(${PoppinsWoff}) format('woff'),
    url(${PoppinsTtf}) format('truetype')`,
};

export const nofont = {};
