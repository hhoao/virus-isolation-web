import { defHttp } from '/@/utils/http/axios';
import { SystemApi } from '/@/api/enum/SystemApi';

/**
 * @description: Trigger ajax error
 */

export const fireErrorApi = () => defHttp.get({ url: SystemApi.Error });
