const {REACT_APP_BASE_URL_REST, REACT_APP_IS_MOCKUP, REACT_APP_BASE_URL_MOBILE, REACT_APP_ZONE} = process.env;

export const BASE_URL_REST = REACT_APP_BASE_URL_REST;
export const BASE_URL_MOBILE = REACT_APP_BASE_URL_MOBILE;
export const ZONE = REACT_APP_ZONE;
export const IS_MOCKUP = REACT_APP_IS_MOCKUP === 'true';
