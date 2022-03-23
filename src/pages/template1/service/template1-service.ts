import {AxiosInstance} from "axios";

export interface ITemplate1 {
    getTemp: () => Promise<any[]>
    getPm: () => Promise<any[]>
}

export const Template1 = (axiosInstance: AxiosInstance): ITemplate1 => {
    return {
        getTemp: async (): Promise<any[]> => {
            return Promise.resolve([])

        },
        getPm: async (): Promise<any[]> => {
            return Promise.resolve([])

        }
    }
}
