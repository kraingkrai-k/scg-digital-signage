import {AxiosInstance} from "axios";

export interface IInteractiveService {
    getTemp: () => Promise<any[]>
    getPm: () => Promise<any[]>
}

export const InteractiveService = (axiosInstance: AxiosInstance): IInteractiveService => {
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
