import { FormSchema } from '/@/components/Form';

export const organizationSettingsSchema: FormSchema[] = [
  {
    field: 'name',
    label: '公司名',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'phone',
    label: '手机号码',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'description',
    label: '描述',
    component: 'InputTextArea',
    colProps: { span: 18 },
  },
  {
    field: 'address',
    label: '地址',
    component: 'Input',
    colProps: { span: 18 },
  },
];
