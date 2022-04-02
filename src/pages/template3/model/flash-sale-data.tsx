
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
  },
  {
    meta: '12.00 - 14.00',
    start: dayjs().toDate().setHours(12),
    end: dayjs().toDate().setHours(14),
    video: flashSaleVideo
  },
  {
    meta: '14.00 - 16.00',
    start: dayjs().toDate().setHours(14),
    end: dayjs().toDate().setHours(16),
    video: flashSaleVideo
  },
];
