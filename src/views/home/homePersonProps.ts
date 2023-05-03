import { FormSchema } from '/@/components/Form';

export const personSettingsSchema: FormSchema[] = [
  {
    field: 'username',
    label: '账户名',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'nickname',
    label: '账户昵称',
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
    field: 'sex',
    label: '性别',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'signature',
    label: '个性签名',
    component: 'InputTextArea',
    colProps: { span: 18 },
  },
  {
    field: 'school',
    label: '学校',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'company',
    label: '公司',
    component: 'Input',
    colProps: { span: 18 },
  },
  {
    field: 'tags',
    label: '标签',
    component: 'ApiTreeSelect',
    colProps: { span: 18 },
  },
];
