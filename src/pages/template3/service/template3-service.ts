// import axios from 'axios';
// import {BASE_URL_REST} from 'core/utils/env';

import {IPersonalData} from 'core/context';

export interface ITemplate3Service {
  getPersonalData: () => Promise<IPersonalData>;
}

const mockPersonalData = [
  {},
  {age: 18, sex: 'M'},
  {age: 40, sex: 'M'},
  {age: 51, sex: 'M'},
  {age: 18, sex: 'F'},
  {age: 40, sex: 'F'},
  {age: 51, sex: 'F'},
] as IPersonalData[];

export const Template3Service = (): ITemplate3Service => {
  return {
    getPersonalData: async (): Promise<IPersonalData> => {
      //   const {status} = await axios.get(`${BASE_URL_REST}/`);
      //   if (status === 200) {
      //     return Promise.resolve([]);
      //   }
      const dataFromFetch = Math.round(Math.random() * 6);
      return Promise.resolve(mockPersonalData[dataFromFetch]);
    },
  };
};
