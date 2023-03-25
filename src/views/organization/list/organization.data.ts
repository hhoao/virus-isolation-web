import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '组织名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: 120,
  },
  {
    title: '电话号码',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '组织名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const organizationFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '组织名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入组织名',
        min: 3,
      },
    ],
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    required: true,
  },
  {
    field: 'avatar',
    label: '头像',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '描述',
    component: 'InputTextArea',
    required: true,
  },
];
