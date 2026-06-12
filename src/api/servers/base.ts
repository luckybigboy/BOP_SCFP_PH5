import { BaseApi } from "front-api/src/scfp-v2/api";
export * as BaseType from "front-api/src/scfp-v2/types";

const base = new BaseApi(import.meta.env.VITE_APP_GATWAY);

export const baseApi = base;
