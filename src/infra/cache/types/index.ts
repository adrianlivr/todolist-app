import { ObjectLiteral } from '@shared/types/app/objectLiteral';

export interface CacheFunctions {
  set(key: string, value: any): void;
  get(key: string): ObjectLiteral | string | null;
  remove(key: string): void;
}
