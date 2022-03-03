import { CacheFunctions } from './types';

export const localCache: CacheFunctions = {
  set(key: string, value: any) {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, val);
  },
  get(key: string) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
      const itemParsed = JSON.parse(item);
      return itemParsed;
    } catch (e) {
      return item;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
