<template>
  <div :class="prefixCls" class="h-2/3 flex flex-col">
    <div class="my-4">
      <span class="font-bold text-xl">最新资讯</span>
      <a class="float-right">所有资讯 ></a>
    </div>
    <div class="overflow-y-auto border-solid border rounded-lg mb-4">
      <div class="w-full h-full overflow-y-scroll">
        <a-skeleton class="my-4 mx-6" :loading="loading" active avatar :paragraph="{ rows: 10 }" />
        <a-card v-show="!loading" v-for="item of articleListData" :key="item" class="mb-30px">
          <div class="font-bold mb-10px text-st text-current text-lg">
            <span class="hover:text-green-800 hover:cursor-pointer" @click="viewArticle">
              {{ item.title }}
            </span>
          </div>
          <div
            class="clear-both overflow-hidden overflow-ellipsis text-gray-500"
            style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5"
          >
            <img
              v-if="!loading && item.cover && isUrl(item.cover)"
              :src="item.cover"
              alt="logo"
              class="float-left h-3/4 w-2/7 m-2"
              @error="
                () => {
                  item.cover = '';
                }
              "
            />
            <article
              class="md-description text-base hover:cursor-pointer hover:text-gray-400"
              v-html="item.content"
              @click="viewArticle"
            ></article>
          </div>
          <p class="text-base mt-4">
            <a-space>
              <span> <LikeOutlined /></span>
              <span> <StarOutlined /></span>
              <span> <MessageOutlined /></span>
              <span> {{ item.lastModification }}</span>
            </a-space>
          </p>
        </a-card>
        <div>
          <a-pagination
            v-model:current="page.pageNum"
            :total="page.total"
            show-quick-jumper
            @change="pageOnChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue';
  import { getDetailsArticles } from '/@/api/article';
  import { BaseArticleModel, DetailArticleModelPageParams } from '/@/api/model/DetailArticleModel';
  import showdown from 'showdown';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { BasicPageParams } from '/@/api/model/BaseModel';
  import { useGo } from '/@/hooks/web/usePage';
  import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons-vue';
  import { isUrl } from '/@/utils/is';

  const articleListData = ref<BaseArticleModel[]>([]);
  const loading = ref<boolean>(true);
  const page = reactive<BasicPageParams>({
    pageNum: 1,
    pageSize: 10,
    total: 100,
  });
  let { prefixCls } = useDesign('home-main-article-list');
  let converter = new showdown.Converter({ metadata: true });
  converter.setFlavor('github');
  const go = useGo();
  const viewArticle = (id) => {
    go(`/article/${id}`);
  };
  function pageOnChange(pageNum, pageSize) {
    getArticlePageList({ pageNum, pageSize });
  }
  async function getArticlePageList(pageParam: DetailArticleModelPageParams) {
    await getDetailsArticles(pageParam).then((res) => {
      page.pageNum = res.pageNum;
      page.pageSize = res.pageSize;
      page.totalPage = res.totalPage;
      page.total = Number(res.total);
      for (let article of res.list) {
        article.content = converter.makeHtml(article.content);
        articleListData.value.push(article);
      }
    });
    loading.value = false;
  }
  function init() {
    getArticlePageList({ pageNum: 1, pageSize: 10 });
  }

  onMounted(() => {
    init();
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-home-main-article-list';
  .@{prefix-cls} {
    .ant-card {
      margin-bottom: 10px;
    }

    .md-description {
      * {
        font-size: 1em;
        margin: 0px;
      }
    }
  }
</style>
