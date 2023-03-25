# 新冠防疫快验智能助手

为解决疫情蔓延导致高校和各公司人员健康状况不稳定而引起的公司管理效率大幅降低问题，我们将设计新冠防疫信息快验智能助手。新冠防疫信息快验智能助手实现高校及公司其下人员健康状态的管理的信息化，系统化，规范化和自动化，从而达到提高高校及公司人员新冠防疫信息健康管理的效率，新冠防疫信息快验智能助手是能够将人员防疫二维码状态、人员近期出入地区、人员核酸和疫苗信息、全国近期防疫消息和地区疫情防控信息进行一体化的管理系统，该助手不仅能用于管理当前成员新冠信息，对于其他相应的疾病或即将出现的疾病以及人员以外出现的身体健康状态也能及时进行监控以及管理。

# 需求分析

1. 实现人员信息增删该查、登陆、注册、安全防护基本功能。
2. 实现人员二维码的生成、扫描管理。
3. 实现通过人员二维码生成扫描对近期出入地区、对接其他平台接口管理。
4. 通过获取其他平台信息或者人员登记信息以查看人员核酸和疫苗信息功能。
5. 通过记录全国实时或其他平台信息疫情防疫消息，及时推送该消息给客户和地区疫情防控信息查看功能。

功能：

- [ ] 后台
  - [ ] 登陆注册功能
  - [ ] 角色管理
    - [ ] 资源管理
  - [ ] 人员管理
  - [ ] 人员信息管理
  - [ ] 组织管理
  - [ ] 推送文章管理
    - [ ] 文章标签管理
    - [ ] 文章目录管理
  - [ ] 职位管理
- [ ] 前台
  - [ ] 账户管理：
  - [ ] 登陆注册功能
  - [ ] 创建组织功能
  - [ ] 人员职业管理
  - [ ] 多级领导，各层领导管理
  - [ ] 权限：
  - [ ] 通用：
    - [ ] 管理个人信息
    - [ ] 接收消息
    - [ ] 领导：
      - [ ] 下发通知
      - [ ] 查看属下人员信息
    - [ ] 普通人员：
  - [ ] 扫码记录
    -[ ] 二维码
      - [ ] 二维码生成
      - [ ] 扫码跳转
      - [ ] 扫码记录：
        - [ ] 人员地点
        - [ ] 人员信息
  - [ ] 推送功能：
    - [ ] 疫情防疫消息（需要爬虫抓取）
    - [ ] 通知管理
    - [ ] 最新资讯
      - [ ] 展示功能
      - [ ] 搜索功能

建立数据库:

1. 成员表
2. 组织表
3. 权限表
4. 资讯表(ES)
5. 通知记录(MONGO)
6. 通知标题

技术选型：

1. Springboot后端开发框架
  1. Mysql 关系型数据库，处理大部分数据
  2. MongoDB NoSQL 处理文档记录型数据
  3. 使用 Mysql 数据存储，Mysql->Logstash->ElasticSearch 数据转移，ElasticSearch、IK 分词器提供中文分词文档搜索。
  4. Mybatis、MybatisPlus、SpringData 持久层框架、它支持自定义 SQL、存储过程以及高级映射。
  5. 使用 FileBeat + Aspject AOP + ElasticSearch+ Kiana 进行日志收集可视化数据。
  6. RabbitMQ 消息通知。
  7. 使用 JWT、SpringSecurity 动态资源权限管理。
  8. 使用 RESTFul API、Swagger、SpringDoc 框架管理 API 文档，使用 Junit5。
  9. 进行单元测试、使用 Vue 框架前端后台开发、使用 Nginx 反向代理端口文件。
  10. Actuator系统监控。
2. Vue3前端开发框架
3. 使用 Docker、GitAction 自动化测试构建部署、Git 版本管理、ApiFox接口管理。
4. Penpot原型设计、Drawio进行数据库ER图设计
5. Future:
  1. 微信小程序
  2. Flutter App框架
  3. SpringCloud、Kubernetes微服务监控系统管理
  4. 消息对接、定时消息任务、优化代码、系统管理。
  5. 事务数据库优化、JVM调优。

尽力能做就做吧! 😂
