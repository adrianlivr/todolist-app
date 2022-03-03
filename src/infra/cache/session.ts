import { CacheFunctions } from './types';

export const sessionCache: CacheFunctions = {
  set(key: string, value: any) {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    sessionStorage.setItem(key, val);
  },
  get(key: string) {
    const item = sessionStorage.getItem(key);
    if (!item) return null;

    try {
      const itemParsed = JSON.parse(item);
      return itemParsed;
    } catch (e) {
      return item;
    }
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
};
