import {AxiosInstance} from "axios";

export interface ITemplate2Service {
    getTemp: () => Promise<any[]>
    getPm: () => Promise<any[]>
}

export const Template2Service = (axiosInstance: AxiosInstance): ITemplate2Service => {
    return {
        getTemp: async (): Promise<any[]> => {
            return Promise.resolve([])

        },
        getPm: async (): Promise<any[]> => {
            // const {
            //     data,
            //     status
            // } = await axiosInstance.get('https://ah3gx2g2pf.execute-api.ap-southeast-1.amazonaws.com/prod?edge_id=demo')
            // if (status !== 200) {
            //     return []
            // }
            // return data.data
            return Promise.resolve([])

        }
    }
}
