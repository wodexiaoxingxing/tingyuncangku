#### 2020-04-28	*Version:3.4.5*

######新增
1. 支持事务级线程剖析
2. 支持方法参数命名事务
3. 支持Jersey Client 2.0 ~ 2.30.1
4. 支持Spring Gateway 2.1.4.RELEASE ~ 2.2.2.RELEASE
5. 支持Spring Webflux 5.1.11.RELEASE ~ 5.2.5.RELEASE

######修复
1. 修复在Webflux下browser探针到后端的跨应用不正确的问题
2. 修复ReactorNetty拓扑展示不正确的问题
3. 修复ActiveMQ下没有采集字节数的问题及生产者获取不到ip端口的问题
4. 修复在调用HttpServletRequest.getParameter之前，URL参数命名事务无法使用URL参数的问题
5. 修复在SpringBoot的NettyWebServer下获取不到端口的问题
6. 修复当探针放在根目录下，探针无法启动的问题
7. 修复在Jetty7下获取不到Response状态码的问题
8. 修复在IBM J9下探针启动失败的问题
9. 修复WebLogic 10.3.6无法获取用户标识的问题
10. 修复在Dubbo的rest协议下业务方法调用失败的问题

######兼容
| AgentCollector | 平台  |
| ----           | ----  |
| 3.4.0          | 3.4.0 |


#### 2020-03-09	*Version:3.4.0*

######新增
1. 支持OneAgent工作模式，详见《OneAgent部署&管理手册》
2. 支持以下数据库连接池数据采集
   * Druid 0.2.4 ~ 1.1.21
   * Hikaricp 2.4.0 ~ 3.4.2
   * C3p0 0.9.5.1 ~ 0.9.5.5
   * WebLogic 10.3.6, 12.1, 12.2
3. 支持Jedis 2.6.3 ~ 2.10.2 连接池数据采集
4. 支持Alibaba RocketMQ 3.2.6，3.4.6
5. 支持Apache RocketMQ 4.4.0 ~ 4.6.1
6. 支持Kafka 2.0.x ~ 2.4.x
7. 支持Spring Kafka 2.2.0.RELEASE ~ 2.4.4.RELEASE
8. 支持Redisson 2.9.x ~ 2.15.x, 3.5.x ~ 3.12.x
9. 支持RabbitMQ 5.0.x ~ 5.8.x
10. 支持Spring RabbitMQ 2.2.0.RELEASE ~ 2.2.5.RELEASE

######改进
1. 为保证内存控制及事务采集达到最佳状态，资源保护功能在采样状态下自动调整事务采集频率。(注：报表上的事务采样率不在生效)
2. 当事务trace数超过3000后，优化内存继续占用的情况
3. 重构Alibaba Dubbo，适配 2.0.10+ (RMI协议 2.6.0+)
4. 重构Apache Dubbo，适配 2.7.2+（不支持RMI协议)

######修复
1. 修复在WebLogic下输出页面第一次不带Header时无法browser嵌码的问题
2. 修复探针采集不到通过defineClass方法生成的class信息的问题
3. 修复在个别Tomcat启动时报找不到Log方法的问题
4. 修复应用中使用Dubbo 2.7.2及以上版本，无法获取正确返回值的问题
5. 修复WebSphere 8没有跨应用的问题
6. 修复Jetty 6事务不释放的问题


#### 2020-02-04	*Version:3.3.3*

######新增
1. 支持Jdbc批量执行sql的性能采集

######改进
1. 溯源功能支持Logback(1.2+)、Log4j(1.2+)日志框架的异步模式
2. 针对多个应用进程共用一个探针的情况增加自动生成多日志目录的功能，默认不开启。如需开启，可以在tingyun.properties中增加以下配置：
```
    agent_log_auto_dir.enabled=true
```
注:
   * 默认支持同时100个应用进程共用一个探针，如果需要修改，可以在配置文件中增加以下配置：
 ```
     agent_log_auto_dir.size=100
 ```
   * 此功能不支持自动升级，需要手动更新探针目录并重启生效
   
######修复
1. 修复Browser嵌码中探针写入的Cookie被页面应用解码后，导致页面异常的情况
2. 修复单次请求中数据库调用次数超过事务深度限制后，部分临时数据仍在增加问题
3. 修复探针在SpringBoot的应用中启动后，无法上传部分classes信息的问题
4. 修复在业务系统拓扑中无法展示Dubbo跨应用调用关系的问题

#### 2019-11-04	*Version:3.3.1*

######新增
1. 支持Spring Gateway 2.0.0.RELEASE ~ 2.1.3.RELEASE 
2. 支持Spring Webflux 5.0.4.RELEASE ~ 5.1.10.RELEASE (不支持 5.1.2.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE) 
3. 支持Okhttp 4.0.0 ~ 4.2.2

######改进
1. 针对WebSphere（IBM JDK）下探针无法启动的问题, 新增加Json协议(需配合3.3.1版本的Collector使用)发送数据, 如需开启Json协议数据, 可在tingyun.properties中增加以下配置:
```
    sendType=json
```

######修复
1. 修复探针采集异常栈及CauseBy过深导致内存占用过大的问题, 默认限制采集最大栈深2000
2. 修复应用使用Weblogic自带的数据库连接池, 探针采集不到sql的问题
3. 修复应用使用War包部署方式的情况下, 探针不上报Class信息的问题
4. 修复报表上自定义嵌码搜索类时显示的Cglib类, 屏蔽Cglib类信息
5. 修复子线程实例化后没有立即执行，异步事务可能关联不上的问题
6. 修复3.3.0探针在WebSphere 8.5上采集不到事务的问题
7. 修复3.3.0探针在Jetty6容器下事务无法释放的问题
8. 修复探针在ActiveMQ的ReplyTo场景下没有跨应用问题
9. 修复HttpClient3.1异常采集的位置和外部调用的位置不一致的问题


#### 2019-09-20	*Version:3.3.0*

######新增
1. 支持apache版本的Dubbo 2.7.2、2.7.3
2. 支持以下容器的Servlet3.0异步方式：
   * Tomcat  6.0.0 ~ 9.0.20
   * Jetty   8.0.0.M3 ~ 9.4.20.v20190813(不支持9.1.1v20140108, 9.3.0.x, 9.4.0.x)
   * Resin   4.0.09 ~ 4.0.62(不支持4.0.14， 4.0.15)
   * Wildfly 8.0.0.Final ~ 8.2.1.Final
   * Jboss   7.0.2.Final ~ 7.1.1.Final
   * Weblogic  12.2.1, 12.2.1.1, 12.2.1.2
   * Glassfish 3.1.1 ~ 4.1.2
   
######改进
1. 优化探针Metaspace使用情况
2. 实例端口初始化，优先容器端口，如无容器则取应用服务端口
3. 为防止Netty插件适配非容器场景后可能造成事务释放延迟或无事务，默认禁用Netty插件。如有使用Netty作为容器的场景，可在tingyun.properties中增加如下配置启用插件：
```
    class_transformer.tingyun-netty-plugin-3.2.5.enabled=true
    class_transformer.tingyun-netty-plugin-3.4.enabled=true
    class_transformer.tingyun-netty-plugin-3.8.enabled=true
    class_transformer.tingyun-netty-plugin-4.0.0.enabled=true
    class_transformer.tingyun-netty-plugin-4.0.8.enabled=true
```

######修复
1. 修复探针链接网络出现问题时日志输出到应用日志里的问题
2. 修复Oracle Jdk下Wildfly，Jboss因为未配置LogManager无法启动的问题
3. 修复Jdbc插件在某些应用中报找不到插件工具类的问题
4. 修复在Jboss7下报找不到探针Api类的问题
5. 修复对后台线程配置自定义嵌码并作为事务入口的情况下，事务命名为URI/的问题
6. 修复探针上报Jmx数据时有时无的问题
7. 修复HttpClient被并发使用时无跨应用的问题

######已知问题
1. 3.1.0 ~ 3.3.0 版本的探针暂不支持 WebSphere（IBM JDK），预计下个版本修复。  
    如果当前正在使用WebSphere（IBM JDK）建议使用3.0.1探针，对应的Agent Collector版本3.0.0，平台版本3.0.0  
2. 如果子线程实例化后没有立即执行，可能出现异步事务关联不上的问题，预计下个版本修复


#### 2019-07-01	*Version:3.2.1*

######新增
1. 支持抓取JDBC驱动中的executeUpdate的受影响行数
2. 支持报表配置中的“忽略异常类”设置，可忽略事务中抛出的指定异常或错误

######改进
1. 修改上传JDBC数据库地址格式，目前采用IP地址方式，之前采用host name方式

######修复
1. 修复在某些情况下，数据库插件造成应用死锁的问题
2. 修复在资源保护或者探针未连接到Collector情况下，探针造成内存泄露的问题
3. 修复单个应用容器中部署多应用情况下，应用命名不正确的问题

######已知Bug
1. 应用开启Browser自动嵌码，Tomcat、Weblogic容器在Chunk输出页面的情况下可能引起页面白屏


#### 2019-05-20	*Version:3.2.0*

######新增
1. 支持报表配置自定义类和方法嵌码，并上传对应的嵌码状态
2. 新增用户信息获取方式，所有获取方式支持getter chain
    * 方法参数
    * 方法返回值
    * 当前对象
    * Http Response Header
    * Web request path
3. 支持多个用户信息获取方式同时生效，并根据获取方式的优先级确认最终用户信息
4. 新增数据项数据获取方式，所有获取方式支持getter chain
    * Web request query string
    * Http request header
    * Http Post parameter
    * Http response header
    * Servlet session attribute
    * Web request URL
    * Web request path
5. 支持Feign插件，支持版本**9.5.0**到**10.2.3**
6. 支持Spring cloud openfeign插件，支持版本**2.0.0.RELEASE**到**2.1.1.RELEASE**

######改进
1. 优化探针连接方式，减少网络策略的开通

######修复
1. 修复ContextType获取失败时导致browser探针无法获取TINGYUN_DATA的问题


#### 2019-04-17	*Version:3.1.2*

######修复
1. 修复在资源保护情况下概率性出现类初始化失败的问题


#### 2019-04-12	*Version:3.1.1*

######修复
1. 修复在Servlet3.0异步情况下，应用概率性丢失请求参数的问题


#### 2019-03-27	*Version:3.1.0*

######新增
1. 支持CXF 3.1
2. 支持Glassfish Jersey 2.9
3. 支持Sun Jersey 1.19

######改进
1. 优化通信协议，大幅提高TPS，降低CPU使用率
2. 优化数据项功能，支持接口调用
3. 优化自定义嵌码功能，支持自动擦除无用的嵌码

######修复
1. 修复资源保护下采样率不准的问题
2. 修复探针部分性能指标丢失的问题
3. 修复Dubbo结合Spring动态代理使用后，事务命名不正确的问题
4. 修复采集Spring Boot的jar包时空指针的问题


#### 2019-02-18	*Version:3.0.1*

######新增
1. 对用户溯源采集的用户标识增加数据处理支持

######改进
1. 支持在接口中使用Spring注解的事务命名
2. 增强Browser嵌码的兼容性

######修复
1. 修复获取不到Glassfish版本号的问题
2. 修复异步请求下时间统计不正确的问题
3. 修复获取Resin端口不正确的问题
4. 修复Weblogic EJB调用的事务无法采集的问题
5. 修复获取不到Wildfly8版本号的问题
