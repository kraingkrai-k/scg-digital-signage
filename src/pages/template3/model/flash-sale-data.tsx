
import dayjs from 'dayjs';

// @ts-ignore
import flashSaleVideo from 'assets/video/flash_sale.mp4';

export interface IFlashSale {
  meta: string;
  start: number;
  end: number;
  video: any
}

export const flashSaleData: IFlashSale[] = [
  {
    meta: '10.00 - 12.00',
    start: dayjs().toDate().setHours(10),
    end: dayjs().toDate().setHours(12),
    video: flashSaleVideo
  }
];
