<template>
  <PageWrapper contentClass="flex" contentFullHeight dense fixedHeight>
    <BasicTable :searchInfo="searchInfo" @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增文章</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看文章详情',
              onClick: handleView.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑文章',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此文章',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <AccountModal @register="register" @success="handleUpdateSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import AccountModal from './ArticleModal.vue';

  import { columns, searchFormSchema } from './article.data';
  import { useGo } from '/@/hooks/web/usePage';
  import {
    addArticleApi,
    deleteArticleApi,
    getArticlePageListApi,
    updateArticleApi,
  } from '/@/api/article';
  import { ArticleParam } from '/@/api/model/ArticleModel';

  const go = useGo();
  const [register, { openModal }] = useModal();
  const searchInfo = reactive<Recordable>({});
  const [registerTable, { reload, updateTableDataRecord }] = useTable({
    title: '文章列表',
    api: getArticlePageListApi,
    rowKey: 'id',
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    handleSearchInfoFn(info) {
      console.log('handleSearchInfoFn', info);
      return info;
    },
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });

  function handleCreate() {
    go('/essay/writing');
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record: ArticleParam) {
    record.id &&
      deleteArticleApi(record.id, { id: record.id }).then(() => {
        reload();
      });
  }

  function handleUpdateSuccess({ isUpdate, values }) {
    if (isUpdate) {
      if (!values.id) return;
      updateArticleApi(values.id, values);
      // 不刷新表格直接更新内部数据。
      // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
      updateTableDataRecord(values.id, values);
    } else {
      addArticleApi(values);
      reload();
    }
  }

  function handleView(record: Recordable) {
    go('/user/account_detail/' + record.id);
  }
</script>
