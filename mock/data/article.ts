import * as Mock from 'mockjs';
import { ArticleModel, BaseArticleModel } from '/@/api/model/ArticleModel';

function getMarkdownContent() {
  return (
    '# MarkdownContent Title1\n' +
    '\n' +
    'Describe Markdown Content\n' +
    '\n' +
    '---\n' +
    '\n' +
    "Let's run a Java programe.\n" +
    '\n' +
    '**Write it !**\n' +
    '\n' +
    '> HellWorld.java\n' +
    '\n' +
    '```java\n' +
    'public class HelloWorld\n' +
    '{\n' +
    '    public static void main(String[] args){\n' +
    '        System.out.println("HelloWorld")\n' +
    '    }\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '**Complie `HellWorld.java`**\n' +
    '\n' +
    '```bash\n' +
    'javac HelloWorld.java\n' +
    '```\n' +
    '\n' +
    '**Run `HelloWorld`**\n' +
    '\n' +
    '```bash\n' +
    'java HelloWorld\n' +
    '```\n' +
    '\n' +
    '## MarkDownContent Title2\n' +
    '\n' +
    'Describe a list\n' +
    '\n' +
    '- Item1\n' +
    '  \n' +
    '- Item2\n' +
    '  \n' +
    '  - Item3\n' +
    '    \n' +
    '  - Item4\n' +
    '    \n' +
    '\n' +
    '### MarkDownContent Title3\n' +
    '\n' +
    'Describe Links\n' +
    '\n' +
    '[This is a Link](Link)\n' +
    '\n' +
    '[This is a anchor](#MarkDownContent Title1)'
  );
}
export const getDetailsArticle = (): ArticleModel => {
  return {
    id: Mock.mock('@id'),
    title: '@ctitle',
    type: '@integer(1, 3)',
    author: '@cname()',
    cover: '@url',
    digest: '@cparagraph',
    top: Mock.mock('@boolean'),
    level: Mock.mock('@integer(0, 1)'),
    lastModification: '@date("yyyy-MM-dd")',
    readingAmount: Mock.mock('@integer'),
    visible: Mock.mock('@boolean'),
    content: getMarkdownContent(),
  };
};
export const getSimplerArticle = (): BaseArticleModel => {
  return {
    id: Mock.mock('@id'),
    title: '@ctitle',
    type: '@integer(1, 3)',
    author: '@cname()',
    cover: '@url',
    digest: '@cparagraph',
    top: Mock.mock('@boolean'),
    level: Mock.mock('@integer(0, 1)'),
    lastModification: '@date("yyyy-MM-dd")',
    readingAmount: Mock.mock('@integer'),
    visible: true,
  };
};
export const simplerArticle = (() => {
  return getSimplerArticle();
})();
export const simplerArticleList = ((): BaseArticleModel[] => {
  const result: BaseArticleModel[] = [];
  for (let index = 0; index < 20; index++) {
    result.push(getSimplerArticle());
  }
  return result;
})();

export const detailsArticle = ((): ArticleModel => {
  return getDetailsArticle();
})();

export const detailsArticleList = ((): ArticleModel[] => {
  const result: ArticleModel[] = [];
  for (let i = 0; i < 10; i++) {
    result.push(getDetailsArticle());
  }
  return result;
})();
