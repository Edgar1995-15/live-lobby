import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
  }

export const NumberFormat = (num: number) => new Intl.NumberFormat("ru").format(Number(num));

const timestampInMilliseconds = new Date().getTime();

export const getImageSource = (tableId: number) => {
  switch (tableId) {
    case 8:
      return `https://static.livevegas.live/table4A.webp?v=${timestampInMilliseconds}`;
    case 10:
      return `https://static.livevegas.live/table4B.webp?v=${timestampInMilliseconds}`;
    case 11:
      return `https://static.livevegas.live/table8A.webp?v=${timestampInMilliseconds}`;
    case 13:
      return `https://static.livevegas.live/table8A.webp?v=${timestampInMilliseconds}`;
    case 14:
      return `https://static.livevegas.live/table8B.webp?v=${timestampInMilliseconds}`;
    case 23:
      return `https://static.livevegas.live/table4C.webp?v=${timestampInMilliseconds}`;
    case 24:
      return `https://static.livevegas.live/table5C.webp?v=${timestampInMilliseconds}`;
    case 29:
      return `https://static.livevegas.live/table5A.webp?v=${timestampInMilliseconds}`;
    case 30:
      return `https://static.livevegas.live/table5B.webp?v=${timestampInMilliseconds}`;
    case 33:
      return `https://static.livevegas.live/table3C.webp?v=${timestampInMilliseconds}`;
    case 47:
      return `https://static.livevegas.live/table7B.png?v=${timestampInMilliseconds}`;
    case 48:
      return `https://static.livevegas.live/table4Cx500.png?v=${timestampInMilliseconds}`;
    case 49:
      return `https://static.livevegas.live/table3Cx1000.png?v=${timestampInMilliseconds}`;
    case 50:
      return `https://static.livevegas.live/table5Cx2000.png?v=${timestampInMilliseconds}`;
    case 54:
      return `https://static.livevegas.live/table6Cx5000.png?v=${timestampInMilliseconds}`;
  }
};

export const getVideoSource = (tableId: number) => {

  switch (tableId) {
    case 8:
      return `https://static.livevegas.live/table4A.mp4?v=${timestampInMilliseconds}`;
    case 10:
      return `https://static.livevegas.live/table4B.mp4?v=${timestampInMilliseconds}`;
    case 11:
      return ``;
    case 13:
      return `https://static.livevegas.live/table8A.mp4?v=${timestampInMilliseconds}`;
    case 14:
      return `https://static.livevegas.live/table8B.mp4?v=${timestampInMilliseconds}`;
    case 23:
      return `https://static.livevegas.live/table4C.mp4?v=${timestampInMilliseconds}`;
    case 24:
      return `https://static.livevegas.live/table5C.mp4?v=${timestampInMilliseconds}`;
    case 29:
      return `https://static.livevegas.live/table5A.mp4?v=${timestampInMilliseconds}`;
    case 30:
      return `https://static.livevegas.live/table5B.mp4?v=${timestampInMilliseconds}`;
    case 33:
      return `https://static.livevegas.live/table3C.mp4?v=${timestampInMilliseconds}`;
    case 37:
      return `https://static.livevegas.live/table6C.mp4?v=${timestampInMilliseconds}`;
    case 47:
      return `https://static.livevegas.live/table7B.mp4?v=${timestampInMilliseconds}`;
    case 48:
      return `https://static.livevegas.live/table4Cx500.mp4?v=${timestampInMilliseconds}`;
    case 49:
      return `https://static.livevegas.live/table3Cx1000.mp4?v=${timestampInMilliseconds}`;
    case 50:
      return `https://static.livevegas.live/table5Cx2000.mp4?v=${timestampInMilliseconds}`;
    case 54:
      return `https://static.livevegas.live/table6Cx5000.mp4?v=${timestampInMilliseconds}`;
  }
};