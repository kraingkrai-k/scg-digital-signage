import {IconAccItem, IconAroundHome, IconDoctor, IconHomeCool, IconLandScape, IconRoof, IconSupport, IconTechnology, IconToilet} from "assets/icon/Icon";

export interface IListSolution {
    id: number
    icon: React.ReactNode
    text: string
}

const sizeIcon = {width: '40%', height: '40%', float: 'right'}

export const listSolution: IListSolution[] = [
    {
        id: 1,
        icon: <IconDoctor sx={{...sizeIcon}} />,
        text: "คลีนิค\nหมอบ้าน"
    },
    {
        id: 2,
        icon: <IconRoof sx={{...sizeIcon}} />,
        text: "หลังคาพลังงาน\nแสงอาทิตย์"
    },
    {
        id: 3,
        icon: <IconHomeCool sx={{...sizeIcon}} />,
        text: "ระบบ\nบ้านเย็น"
    },
    {
        id: 4,
        icon: <IconLandScape sx={{...sizeIcon}} />,
        text: "ตกแต่งภูมิทัศน์\nรอบบ้าน"
    },
    {
        id: 5,
        icon: <IconToilet sx={{...sizeIcon}} />,
        text: "ห้องน้ำ\nเพื่อสุขภาพ"
    },
    {
        id: 6,
        icon: <IconAroundHome sx={{...sizeIcon}} />,
        text: "พื้นที่\nนอกบ้าน"
    },
    {
        id: 7,
        icon: <IconSupport sx={{...sizeIcon}} />,
        text: "บริการผู้ช่วย"
    },
    {
        id: 8,
        icon: <IconTechnology sx={{...sizeIcon}} />,
        text: "สินค้าเทคโนโลยี"
    },
    {
        id: 9,
        icon: <IconAccItem sx={{...sizeIcon}} />,
        text: "เครื่องใช้\nสำหรับ\nคนรักบ้าน"
    },
]