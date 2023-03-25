import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '是否启用',
    dataIndex: 'status',
    edit: true,
    editable: true,
    editComponent: 'Switch',
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
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const positionFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入名称',
        min: 3,
      },
    ],
  },
  {
    field: 'description',
    label: '描述',
    component: 'InputTextArea',
    span: 100,
    required: true,
  },

  {
    field: 'status',
    label: '是否启用',
    component: 'Switch',
    required: false,
  },
];
