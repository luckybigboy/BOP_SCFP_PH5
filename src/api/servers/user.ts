import { BaseApi as UserApi } from "front-api/src/user/api";
export * as UserType from "front-api/src/user/types";

const api = new UserApi(import.meta.env.VITE_APP_USER_GATWAY);

export const userApi = api;
