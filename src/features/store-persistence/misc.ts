import { STORE_PREFIX } from "@constants/storage";

export const getStoreKey = (name: string) => STORE_PREFIX + name;
