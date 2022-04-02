import {IMLPersonalData, IPersonalData} from 'core/context';
import axios from 'axios';

export interface ITemplate3Service {
  getPersonalData: () => Promise<IPersonalData>;
}

const mockPersonalData = [
  {},
  {'age': 'empty', 'gender': 'empty'},
  {'age': 'young', 'gender': 'Male'},
  {'age': 'young', 'gender': 'Female'},
  {'age': 'middle_range', 'gender': 'Male'},
  {'age': 'middle_range', 'gender': 'Female'},
  {'age': 'old', 'gender': 'Male'},
  {'age': 'old', 'gender': 'Female'}
] as IMLPersonalData[];

export const Template3Service = (): ITemplate3Service => {
  const dataConverter = (data: IMLPersonalData) => {
    let age = 30;
    let sex = 'F';
    switch (data.age) {
      case 'empty': return {} as IPersonalData
      case 'young': age = 30; break;
      case 'middle_range': age = 40; break;
      case 'old': age = 50; break;
    }
    switch (data.gender) {
      case 'empty': return {} as IPersonalData
      case 'Male': sex = 'M'; break;
      case 'Female': sex = 'F'; break;
    }
    return {
      age, sex
    } as IPersonalData
  }

  return {
    getPersonalData: async (): Promise<IPersonalData> => {

      // mock
      if (true) {
        const dataFromFetch = Math.round(Math.random() * 7);
        return Promise.resolve(dataConverter(mockPersonalData[dataFromFetch]));
      }

      const {status, data} = await axios.get(`http://192.168.1.168:8001/genderage`);
      if (status === 200) {
        console.log(data)
        return Promise.resolve(dataConverter(data));
      }
      return Promise.reject('API Error')

    },
  };
};
