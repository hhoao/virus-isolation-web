import { HealthApi } from '/@/api/enum/HealthApi';
import { defHttp } from '/@/utils/http/axios';
import { CovidFetchResult } from '/@/api/model/HealthModel';

export const getCovid19Status = () =>
  defHttp.request<CovidFetchResult>(
    {
      method: 'get',
      url: HealthApi.GET_COVID19_STATUS,
    },
    { withToken: false, isTransformResponse: false },
  );
