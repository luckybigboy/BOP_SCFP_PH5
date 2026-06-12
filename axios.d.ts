import type { AxiosResponse } from "axios";

/** 扩展axios库的配置项及 业务类型 */
declare module "axios" {
  interface AxiosRequestConfig {
    /** 接口报错时是否显示警告， 默认开启  */
    errorTip?: boolean;
    /** 接口报错时点击确定的回调 */
    errorCallback?: (error: any) => void;
    /** 接口返回数据处理 */
    responseHook?: (res: AxiosResponse) => void;
    /** 接口成功时是否显示提示， 默认开启 */
    successTip?: boolean | string;
    /** 是否需要携带token */
    withToken?: boolean;
    /** 返回loading 状态 */
    progress?: (loading: boolean) => void;
  }
}
