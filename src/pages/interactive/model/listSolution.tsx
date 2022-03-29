import {IconAccItem, IconAroundHome, IconDoctor, IconHomeCool, IconLandScape, IconRoof, IconSupport, IconTechnology, IconToilet} from "assets/icon/Icon";

export interface IListSolution {
    id: number
    icon: any
    text: string
}

export const listSolution: IListSolution[] = [
    {
        id: 1,
        icon: IconDoctor,
        text: "คลีนิค\nหมอบ้าน"
    },
    {
        id: 2,
        icon: IconRoof,
        text: "หลังคาพลังงาน\nแสงอาทิตย์"
    },
    {
        id: 3,
        icon: IconHomeCool,
        text: "ระบบ\nบ้านเย็น"
    },
    {
        id: 4,
        icon: IconLandScape,
        text: "ตกแต่งภูมิทัศน์\nรอบบ้าน"
    },
    {
        id: 5,
        icon: IconToilet,
        text: "ห้องน้ำ\nเพื่อสุขภาพ"
    },
    {
        id: 6,
        icon: IconAroundHome,
        text: "พื้นที่\nนอกบ้าน"
    },
    {
        id: 7,
        icon: IconSupport,
        text: "บริการผู้ช่วย"
    },
    {
        id: 8,
        icon: IconTechnology,
        text: "สินค้าเทคโนโลยี"
    },
    {
        id: 9,
        icon: IconAccItem,
        text: "เครื่องใช้\nสำหรับ\nคนรักบ้าน"
    },
]