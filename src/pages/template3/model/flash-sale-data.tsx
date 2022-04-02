import dayjs, {Dayjs} from 'dayjs';

// @ts-ignore
import flashSaleVideo from 'assets/video/flash_sale.mp4';

export interface IFlashSale {
  meta: string;
  start: Dayjs;
  end: Dayjs;
  video: any;
}

export const flashSaleData: IFlashSale[] = [
  {
    meta: '11.15 - 12.00',
    start: dayjs().set('hour', 11).set('minute', 15),
    end: dayjs().set('hour', 12).set('minute', 0),
    video: flashSaleVideo,
  },
  {
    meta: '14.15 - 15.00',
    start: dayjs().set('hour', 14).set('minute', 15),
    end: dayjs().set('hour', 15).set('minute', 0),
    video: flashSaleVideo,
  },
  {
    meta: '18.00 - 18.45',
    start: dayjs().set('hour', 18).set('minute', 0),
    end: dayjs().set('hour', 18).set('minute', 45),
    video: flashSaleVideo,
  },
];
