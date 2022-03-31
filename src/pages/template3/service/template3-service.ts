// import axios, {AxiosInstance} from 'axios';
// import {BASE_URL_REST} from 'core/utils/env';

export interface ITemplate3Service {
  getPersonalData: () => Promise<any>;
}

const mockPersonalData = [{}, {age: 18, sex: 'M'}, {age: 20, sex: 'F'}] as any;

export const Template3Service = (): ITemplate3Service => {
  return {
    getPersonalData: async (): Promise<any> => {
      //   const {status} = await axios.get(`${BASE_URL_REST}/`);
      //   if (status === 200) {
      //     return Promise.resolve([]);
      //   }
      const dataFromFetch = Math.round(Math.random() * 2);
      return Promise.resolve(mockPersonalData[dataFromFetch]);
    },
  };
};
