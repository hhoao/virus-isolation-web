import { HealthApi } from '/@/api/enum/HealthApi';
import { defHttp } from '/@/utils/http/axios';

export const getCovid19Status = () =>
  defHttp.request(
    {
      method: 'get',
      url: HealthApi.GET_COVID19_STATUS,
    },
    { withToken: false, isTransformResponse: false },
  );
