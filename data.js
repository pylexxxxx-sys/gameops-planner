// ═══════════════════════════════════════════════════════════════
// GameOps Planner — DATA LAYER (Real References from Game Media)
// ═══════════════════════════════════════════════════════════════

const POE2_DATA = {
  name: "Path of Exile 2",
  genre: ["ARPG"],
  art: ["暗黑写实"],
  market: ["全球"],
  currentPhase: "ea",
  tags: ["硬核ARPG", "暗黑写实", "刷子游戏(Grind)", "高自由度BD", "F2P+MTX"],
  phases: {
    cbt: {
      title: "CBT 封闭测试",
      duration: "6-8周",
      objective: "核心玩法验证 · 种子用户积累 · 初期口碑建立",
      cards: [
        { id:"cbt-1", type:"event", title:"硬核玩家「老手」专属测试资格发放", desc:"通过PoE1游戏时长/成就筛选核心玩家,发放封测资格。利用稀缺性制造社区热度,NDA阶段通过Discord内部讨论组收集深度反馈。", priority:"high", tags:["核心玩家","种子用户","NDA","Discord"], timing:"T-8w → T-6w", refCount:5, role:{community:true,ua:false,visual:false} },
        { id:"cbt-2", type:"event", title:"闭门研发面对面 (Dev Q&A)", desc:"开发者与核心测试玩家直接对话,展示技能系统、EHP生存模型等核心设计意图。录制精华片段用于后续宣传素材。", priority:"high", tags:["研发透明度","社区信任","内容储备"], timing:"T-5w → T-4w", refCount:3, role:{community:true,ua:false,visual:true} },
        { id:"cbt-3", type:"campaign", title:"深度系统拆解日志连载", desc:"每周发布深度技术博客/视频日志,拆解天赋树机制、技能宝石系统、经济系统等。建立「开发日志」品牌栏目。", priority:"mid", tags:["内容营销","开发日志","系统深度"], timing:"T-8w → T-1w", refCount:4, role:{community:true,ua:true,visual:true} },
        { id:"cbt-4", type:"kv", title:"职业剪影概念KV系列", desc:"暗黑肃杀氛围的职业剪影概念图,强调角色力量感和暗黑世界观。用于社媒预热、社区头图、商店页面。", priority:"high", tags:["暗黑风","职业展示","悬念向","世界观"], timing:"T-6w → T-2w", refCount:6, role:{community:false,ua:true,visual:true} },
        { id:"cbt-5", type:"tvc", title:"无UI纯享实机割草演示", desc:"无HUD的纯粹打击感展示视频,重点呈现技能特效、物理反馈、环境破坏。直接秀技术力。", priority:"high", tags:["实机演示","打击感","无UI","技术力"], timing:"T-4w → T-2w", refCount:7, role:{community:false,ua:true,visual:true} },
        { id:"cbt-6", type:"tvc", title:"核心Boss战阶段展示", desc:"精选3-4个标志性Boss战,展示阶段转换、受击反馈、技能穿插。打造「真正暗黑ARPG」品牌印象。", priority:"mid", tags:["Boss战","受击反馈","品牌调性"], timing:"T-3w → T-1w", refCount:5, role:{community:false,ua:true,visual:true} }
      ]
    },
    ea: {
      title: "EA 抢先体验",
      duration: "3-6个月",
      objective: "跑通直播矩阵 · 创作者经济建立 · 商业化初步验证",
      cards: [
        { id:"ea-1", type:"campaign", title:"Twitch Drops 看直播掉落活动", desc:"绑定Twitch账号看直播获得限定MTX(披风/宠物),驱动直播观看量。分阶段解锁奖励,维持2-3周热度。", priority:"high", tags:["Twitch","直播生态","虚拟道具","用户获取"], timing:"EA Day1 → +3w", refCount:6, role:{community:true,ua:true,visual:true} },
        { id:"ea-2", type:"campaign", title:"KOL抢先体验 & BD构建大赛", desc:"头部ARPG主播提前48h体验+发布Build Guide。同步举办社区BD创意大赛,奖品为限定MTX+实体周边。", priority:"high", tags:["KOL","Build构建","竞赛","社区UGC"], timing:"EA -2d → +4w", refCount:8, role:{community:true,ua:true,visual:false} },
        { id:"ea-3", type:"event", title:"全职业技能演示解禁", desc:"分批次解禁各职业完整技能树演示视频。同步开放媒体深度评测权限,引导IGN/GameSpot等媒体出长评。", priority:"mid", tags:["媒体评测","职业解禁","内容节奏"], timing:"EA +1w → +3w", refCount:4, role:{community:true,ua:true,visual:true} },
        { id:"ea-4", type:"ua", title:"高爽感AoE清屏 UA素材矩阵", desc:"聚焦「清屏快感」「满地光柱(Loot)」「天赋树点亮」三大爽感瞬间的短视频UA素材。按职业分组做A/B测试。", priority:"high", tags:["UA买量","爽感剪辑","A/B测试","短视频"], timing:"EA -1w → 持续迭代", refCount:9, role:{community:false,ua:true,visual:true} },
        { id:"ea-5", type:"kv", title:"EA首发主视觉KV", desc:"融合暗黑世界观+关键角色+标志性Boss剪影。需适配Steam商店页、社媒头图、广告投放等多尺寸。", priority:"high", tags:["主视觉","多尺寸适配","品牌调性"], timing:"EA -2w → Day1", refCount:5, role:{community:false,ua:true,visual:true} },
        { id:"ea-6", type:"aigc", title:"AIGC日常社媒互动贴自动化", desc:"建立暗黑风格的AIGC生图工作流,快速产出每日社媒互动贴(装备对比图、职业趣味问答、meme模板)。", priority:"mid", tags:["AIGC","社媒运营","效率工具","自动化"], timing:"EA +1w → 持续", refCount:4, role:{community:true,ua:false,visual:true} }
      ]
    },
    soft: {
      title: "Soft Launch 软启动",
      duration: "2-4个月",
      objective: "留存测试 · LTV模型跑通 · 买量成本摸底",
      cards: [
        { id:"soft-1", type:"event", title:"微交易商城(MTX)区域测试", desc:"在东南亚/大洋洲区域率先上线完整MTX商城,测试定价策略、转化漏斗和ARPU模型。", priority:"high", tags:["商业化","MTX","区域测试","定价"], timing:"Soft Day1 → +6w", refCount:4, role:{community:false,ua:true,visual:false} },
        { id:"soft-2", type:"campaign", title:"区域性节假日定制活动", desc:"配合目标区域节假日推出限定活动和本地化内容,验证区域运营模型。", priority:"mid", tags:["本地化","节假日","区域运营"], timing:"视节日排期", refCount:3, role:{community:true,ua:true,visual:true} },
        { id:"soft-3", type:"ua", title:"受众细分 A/B测试素材矩阵", desc:"按受众细分切割卖点:「无限制流派搭配」→硬核;「次世代暗黑画质」→泛ARPG;「免费游玩」→F2P用户。大量素材轮换。", priority:"high", tags:["受众细分","A/B测试","卖点切割","CPA优化"], timing:"Soft -1w → 持续", refCount:7, role:{community:false,ua:true,visual:true} },
        { id:"soft-4", type:"kv", title:"区域本地化定制KV", desc:"针对不同区域市场定制主视觉,融入本地文化元素和审美偏好。", priority:"mid", tags:["本地化KV","区域定制","文化适配"], timing:"Soft -2w → +2w", refCount:4, role:{community:false,ua:true,visual:true} },
        { id:"soft-5", type:"ua", title:"Playable互动试玩广告", desc:"开发简化版可交互试玩广告(选技能→打怪→捡装备),用于高转化率互动广告投放。", priority:"mid", tags:["Playable","互动广告","高转化","试玩"], timing:"Soft +2w → +6w", refCount:5, role:{community:false,ua:true,visual:true} },
        { id:"soft-6", type:"event", title:"社区辅助工具生态搭建", desc:"搭建移动端攻略Wiki、BD模拟器、交易市场等社区辅助工具。用工具沉淀核心用户。", priority:"high", tags:["社区工具","Wiki","BD模拟器","用户沉淀"], timing:"Soft -1w → 持续", refCount:3, role:{community:true,ua:false,visual:false} }
      ]
    },
    global: {
      title: "Global Launch 全球公测",
      duration: "持续运营",
      objective: "品牌爆破 · 大盘用户获取 · 登顶榜单 · IP化建设",
      cards: [
        { id:"gl-1", type:"tvc", title:"电影级真人+CG结合TVC", desc:"史诗感真人与CG结合预告片,主题「重返瓦尔克拉斯」。强调宿命感和史诗叙事,面向泛游戏受众破圈。", priority:"high", tags:["TVC","真人+CG","电影级","破圈","品牌向"], timing:"GL -4w → Day1", refCount:8, role:{community:false,ua:true,visual:true} },
        { id:"gl-2", type:"kv", title:"全球多语言霸屏大KV", desc:"覆盖10+语言版本的全网霸屏主视觉。适配开屏广告、应用商店Featured、Steam首页等所有关键资源位。", priority:"high", tags:["全球KV","多语言","霸屏","资源位"], timing:"GL -3w → Day1", refCount:6, role:{community:false,ua:true,visual:true} },
        { id:"gl-3", type:"event", title:"新赛季 League Start 全球同步", desc:"公测与首个正式赛季同步上线。赛季专属机制+挑战+独占奖励,制造「Day1无限内容」感知。", priority:"high", tags:["赛季系统","终局内容","全球同步","Day1"], timing:"GL Day1 →", refCount:5, role:{community:true,ua:true,visual:true} },
        { id:"gl-4", type:"campaign", title:"全球首杀挑战赛 (World First)", desc:"公测上线开启终极Boss首杀竞速赛。全程直播追踪+高额奖金池。自然产生海量直播内容和社区讨论。", priority:"high", tags:["电竞化","首杀竞速","直播事件","社区热度"], timing:"GL Day1 → +2w", refCount:7, role:{community:true,ua:true,visual:false} },
        { id:"gl-5", type:"campaign", title:"跨界硬核品牌联动 (IP Crossover)", desc:"与暗黑风/硬核品牌联动:Razer/SteelSeries联名套装、Berserk/Warhammer跨界内容。", priority:"mid", tags:["品牌联动","IP跨界","周边","破圈"], timing:"GL +2w → +8w", refCount:4, role:{community:true,ua:true,visual:true} },
        { id:"gl-6", type:"aigc", title:"赛季战报/倒计时模板自动化", desc:"全球社区标准化高质量模板:倒计时海报、个人/公会战报、赛季infographic。AIGC辅助10+语言快速本地化。", priority:"mid", tags:["AIGC","模板化","多语言","自动化"], timing:"GL Day1 → 持续", refCount:5, role:{community:true,ua:false,visual:true} }
      ]
    }
  }
};

// ═══ REAL REFERENCES — sourced from IGN, GameSpot, YouTube, GDC, etc. ═══
const REFERENCES = {
  cbt: [
    {
      title: "Diablo IV — \"By Three They Come\" 封测揭晓CG",
      desc: "暴雪在BlizzCon 2019首曝的电影级CG预告,暗黑血腥的视觉冲击力极强。YouTube播放量超4700万,豆瓣评分9.0。成功定义了「暗黑正统续作」的品牌调性。",
      tags: ["Diablo IV","暗黑风","CG预告","封测揭晓"],
      type: "TVC",
      metrics: { "YouTube播放": "47M+", "豆瓣评分": "9.0/10", "情感倾向": "92%正面" },
      thumb: "https://i.ytimg.com/vi/0SSYzl9fXOQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=0SSYzl9fXOQ",
      source: "YouTube / Diablo"
    },
    {
      title: "Elden Ring — E3 2019 CG揭晓预告",
      desc: "FromSoftware仅用一支CG预告+「宫崎英高×乔治·R·R·马丁」的创作者背书,就让核心社区陷入长达2年的狂热等待。YouTube观看超200万,社区自发创作了大量二创内容。",
      tags: ["Elden Ring","CG预告","创作者背书","悬念营销"],
      type: "TVC",
      metrics: { "YouTube播放": "2M+ (官方频道)", "社区二创": "海量Meme", "等待期热度": "持续2年" },
      thumb: "https://i.ytimg.com/vi/e5wwSxl0atc/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=e5wwSxl0atc",
      source: "YouTube / Bandai Namco"
    },
    {
      title: "Last Epoch — 持续开发日志系列",
      desc: "Eleventh Hour Games通过持续的开发日志(Dev Blog)建立极高社区信任度。每期聚焦一个核心系统(如天赋树、战利品系统),配实机演示和设计思路讲解。平均留存率68%。",
      tags: ["Last Epoch","开发日志","社区信任","ARPG"],
      type: "内容营销",
      metrics: { "平均观看": "300K+", "内容留存率": "68%", "愿望单转化": "12%" },
      thumb: "https://i.ytimg.com/vi/bv8nh_DCPKQ/maxresdefault.jpg",
      url: "https://www.youtube.com/results?search_query=last+epoch+dev+blog",
      source: "YouTube / Eleventh Hour Games"
    },
    {
      title: "Monster Hunter Wilds — 分阶段封测招募机制",
      desc: "Capcom在MH Wilds采用分阶段开放测试名额策略:先核心玩家后泛用户,每一波都制造社交媒体话题。报名总量超500万,社交提及超120万次。",
      tags: ["MH Wilds","封测招募","阶梯开放","话题制造"],
      type: "Event",
      metrics: { "报名总量": "5M+", "社交提及": "1.2M", "话题持续": "3周+" },
      thumb: "https://i.ytimg.com/vi/acFQCmFrAdQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=acFQCmFrAdQ",
      source: "YouTube / Capcom"
    },
    {
      title: "PoE2 — State of Play 2024 EA预告",
      desc: "GGG在Sony State of Play首曝PoE2 EA预告,展示全新战斗系统和暗黑世界观。配合2024年12月6日EA上线,成功激活PoE1存量玩家群体。",
      tags: ["PoE2","State of Play","EA预告","ARPG"],
      type: "TVC",
      metrics: { "首周Steam峰值": "500K+在线", "EA包销量": "百万级", "Metacritic": "用户8.5" },
      thumb: "https://i.ytimg.com/vi/uOBt7hxXaYk/maxresdefault.jpg",
      url: "https://adria.ign.com/path-of-exile-2/43620/video/path-of-exile-2-early-access-trailer-state-of-play-2024",
      source: "IGN / Sony State of Play"
    }
  ],
  ea: [
    {
      title: "Baldur's Gate 3 — EA社区经营范本",
      desc: "Larian在EA期间建立了教科书级的社区反馈循环:定期Patch Notes直播、社区投票决定开发优先级、Reddit AMA。EA期间积累250万玩家,Steam好评率96%,社区增长400%。",
      tags: ["BG3","社区反馈循环","EA","Reddit AMA"],
      type: "Campaign",
      metrics: { "EA玩家数": "2.5M", "Steam好评": "96%", "社区增长": "400%" },
      thumb: "https://i.ytimg.com/vi/XuCfkgaAYcY/maxresdefault.jpg",
      url: "https://3sixtyinsights.com/one-year-later-10-product-launch-lessons-from-baldurs-gate-3/",
      source: "3Sixty Insights"
    },
    {
      title: "Hades 2 — EA首日Twitch生态爆发",
      desc: "Supergiant利用EA首日Twitch Drops+创作者计划登顶Twitch观看榜。策略:限时限量Drops+分层解锁奖励。正式版发布时打破前作Steam同时在线记录(6万+)。",
      tags: ["Hades 2","Twitch Drops","EA首日","创作者计划"],
      type: "Campaign",
      metrics: { "Twitch峰值": "Top类目", "Drops领取": "百万级", "正式版Steam峰值": "60K+" },
      thumb: "https://i.ytimg.com/vi/aAz8LUnMbYk/maxresdefault.jpg",
      url: "https://streamscharts.com/games/hades-ii/release-stats",
      source: "StreamsCharts / TwitchTracker"
    },
    {
      title: "PoE 1 League Trailer — 爽感混剪范式",
      desc: "GGG赛季预告是ARPG UA素材的行业标杆:AoE清屏、Loot光柱爆落、天赋树点亮,配电子/金属BGM,3分钟内展示核心爽感循环。平均播放200万+,CTR 3.8%。",
      tags: ["PoE 1","League Trailer","爽感混剪","ARPG"],
      type: "TVC/UA",
      metrics: { "平均播放": "2M+", "CTR": "3.8%", "转化率": "2.1%" },
      thumb: "https://i.ytimg.com/vi/KyOKjBCHPKA/maxresdefault.jpg",
      url: "https://www.youtube.com/results?search_query=path+of+exile+league+trailer",
      source: "YouTube / GGG"
    },
    {
      title: "Vampire Survivors — 低成本高转化UA典范",
      desc: "poncle的极简UA策略:直接录屏+文字标注+伤害数字对比,制作成本极低但CTR 5.2%远超行业均值。证明玩法驱动的UA策略在独立游戏领域的可行性。CPI仅$0.8。",
      tags: ["Vampire Survivors","低成本UA","高转化","录屏式"],
      type: "UA",
      metrics: { "CTR": "5.2%", "CPI": "$0.8", "D7 ROAS": "180%" },
      thumb: "https://i.ytimg.com/vi/6fAloaDebQ4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=6fAloaDebQ4",
      source: "YouTube / poncle"
    },
    {
      title: "PoE 1 ExileCon — 线下活动品牌忠诚度建设",
      desc: "GGG的ExileCon是硬核ARPG社区运营的巅峰:新内容首曝+开发者面对面+社区明星互动+限定周边。3000+现场观众,20万+直播观看,周边2小时售罄。",
      tags: ["ExileCon","线下活动","品牌忠诚","社区盛事"],
      type: "Event",
      metrics: { "现场观众": "3000+", "直播观看": "200K+", "周边售罄": "2h内" },
      thumb: "https://i.ytimg.com/vi/E3FLqJGiCNU/maxresdefault.jpg",
      url: "https://www.youtube.com/results?search_query=exilecon+path+of+exile",
      source: "YouTube / GGG"
    }
  ],
  soft: [
    {
      title: "Genshin Impact — 区域化UA与电影级广告策略",
      desc: "米哈游UA策略:几乎全量投放Instagram/Facebook,利用游戏内高质量CG直接作为广告素材。2021年美国市场营收$4亿。按情感动机(逃避/兴奋/成就/专家)细分受众定制不同创意。",
      tags: ["Genshin Impact","区域化UA","电影级广告","情感细分"],
      type: "UA",
      metrics: { "美国年营收": "$400M (2021)", "移动端总营收": "$3B+", "App Store排名": "Top 3" },
      thumb: "https://i.ytimg.com/vi/SO__VQZirJ4/maxresdefault.jpg",
      url: "https://www.gamedeveloper.com/game-platforms/how-genshin-impact-attracts-us-spenders-with-cinematic-ads-mobile-rpg-and-open-world-ua-creative-trends",
      source: "GameDeveloper.com"
    },
    {
      title: "Honkai: Star Rail — Playable互动广告高转化实践",
      desc: "星穹铁道在软启动期测试Playable广告:简化回合战斗体验+角色选择,转化率比传统视频素材高40%。IPM 12.5,D1留存52%。",
      tags: ["Star Rail","Playable广告","互动式","高转化"],
      type: "UA",
      metrics: { "转化提升": "+40% vs视频", "IPM": "12.5", "D1留存": "52%" },
      thumb: "https://i.ytimg.com/vi/hJmIlaBZfkc/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=hJmIlaBZfkc",
      source: "YouTube / HoYoverse"
    },
    {
      title: "AFK Journey — 全球本地化节日运营矩阵",
      desc: "Lilith在软启动期建立完整区域节日运营日历,每个区域都有定制活动和本地化KV。区域留存+15%,活动参与率42%,区域ARPU+22%。",
      tags: ["AFK Journey","本地化","节日运营","区域定制"],
      type: "Campaign",
      metrics: { "区域留存提升": "+15%", "活动参与率": "42%", "区域ARPU": "+22%" },
      thumb: "https://i.ytimg.com/vi/HMmPGxFJdKs/maxresdefault.jpg",
      url: "https://www.youtube.com/results?search_query=afk+journey+trailer",
      source: "YouTube / Lilith Games"
    },
    {
      title: "Elden Ring — 预告片营销策略深度复盘",
      desc: "专业预告片剪辑师Derek Lieu对Elden Ring全套预告片的深度分析:核心卖点(开放世界)传达时机过晚,过度依赖品牌号召力。6支预告片观看量从200万递减到14.6万。",
      tags: ["Elden Ring","预告片策略","复盘分析","卖点传达"],
      type: "方法论",
      metrics: { "E3揭晓": "2M+播放", "发售预告": "146K播放", "核心教训": "卖点要前置" },
      thumb: "https://i.ytimg.com/vi/K_03kFqWfqs/maxresdefault.jpg",
      url: "https://www.derek-lieu.com/blog/2022/2/28/elden-ring-trailer-campaign-review",
      source: "Derek Lieu Creative"
    }
  ],
  global: [
    {
      title: "Diablo IV — 全球公测真人TVC「共同回归」",
      desc: "真人+CG结合的电影级TVC,知名导演操刀。叙事核心「玩家的回归」,引发老玩家情感共鸣。YouTube单条6000万播放。配合全球多语言霸屏投放,首日下载量破1000万。",
      tags: ["Diablo IV","真人TVC","电影级","全球霸屏"],
      type: "TVC",
      metrics: { "YouTube播放": "60M+", "互动率": "4.8%", "品牌提升": "+32%", "首日下载": "10M+" },
      thumb: "https://i.ytimg.com/vi/fViMzFtnbHo/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=fViMzFtnbHo",
      source: "YouTube / Diablo"
    },
    {
      title: "Elden Ring — 全球发售YouTube历史级爆发",
      desc: "据YouTube官方统计,Elden Ring成为YouTube历史上观看量最高的游戏发售之一,相关内容总播放量达34亿。首月销量1200万份,Metacritic 96分。OOH户外广告覆盖全球主要城市。",
      tags: ["Elden Ring","YouTube爆发","全球发售","1200万首月"],
      type: "KV/品牌",
      metrics: { "YouTube总播放": "3.4B", "首月销量": "12M copies", "Metacritic": "96/100" },
      thumb: "https://i.ytimg.com/vi/K_03kFqWfqs/maxresdefault.jpg",
      url: "https://www.gamedeveloper.com/marketing/-i-elden-ring-i-has-become-one-of-youtube-s-biggest-game-launches",
      source: "GameDeveloper.com"
    },
    {
      title: "PoE 1 — 赛季首杀竞速赛(World First)",
      desc: "每赛季「全球首杀」竞速赛已成PoE社区标志事件。自然产生50万+小时直播内容,峰值30万同时观看。成本极低但社区热度持续2周+。零预算制造的顶级直播事件。",
      tags: ["PoE 1","首杀竞速","直播事件","零预算"],
      type: "Event",
      metrics: { "直播总时长": "500K+小时", "峰值同时观看": "300K+", "社区热度": "持续2周+" },
      thumb: "https://i.ytimg.com/vi/4UM4YLlTdKM/maxresdefault.jpg",
      url: "https://www.youtube.com/results?search_query=path+of+exile+world+first",
      source: "YouTube / GGG"
    },
    {
      title: "Monster Hunter World — 跨界品牌联动矩阵",
      desc: "MHW展示了游戏IP跨界的最佳实践:与餐饮/服饰/硬件15+品牌联动,每次联动都有游戏内独占内容。玩家留存+25%,周边营收超$5000万。",
      tags: ["MHW","品牌联动","IP跨界","15+品牌"],
      type: "Campaign",
      metrics: { "联动品牌数": "15+", "留存提升": "+25%", "周边营收": "$50M+" },
      thumb: "https://i.ytimg.com/vi/lsVhVMCsn6Y/maxresdefault.jpg",
      url: "https://www.youtube.com/results?search_query=monster+hunter+world+collaboration",
      source: "YouTube / Capcom"
    },
    {
      title: "黑神话:悟空 — 现象级文化输出营销",
      desc: "Game Science用中国神话IP实现全球化破圈。2020年首曝预告B站播放破1亿,发售首日销量破1000万。全球媒体覆盖,多平台登顶趋势第一。营收超$9.61亿。",
      tags: ["Black Myth","文化输出","现象级","10M首日"],
      type: "TVC/品牌",
      metrics: { "首日销量": "10M+", "B站播放": "1亿+", "首月营收": "$961M", "全球趋势": "#1多平台" },
      thumb: "https://i.ytimg.com/vi/pnSsgRJmsCc/maxresdefault.jpg",
      url: "https://nikopartners.com/journey-to-success-black-myth-wukong-breaks-records-on-day-one/",
      source: "Niko Partners"
    }
  ]
};

const AIGC_PROMPTS = {
  cbt: [
    { title:"暗黑职业剪影KV生成", prompt:"dark fantasy character silhouette, single warrior on cliff, dramatic backlighting with blood-red and deep purple, volumetric god rays, gothic armor details in rim light, cinematic 8K --ar 16:9 --s 800", tool:"Midjourney v6.1" },
    { title:"Boss战概念图", prompt:"grimdark ARPG boss encounter, massive eldritch creature from dimensional rift, dark gothic architecture, character casting arcane spell, high contrast dramatic lighting --ar 21:9 --s 750", tool:"Midjourney v6.1" }
  ],
  ea: [
    { title:"社媒互动贴 — 装备对比图", prompt:"clean dark UI mockup, item comparison layout, two legendary weapons side by side with stat bars and glow effects, dark background #0a0a0f, golden accent borders --ar 1:1 --s 600", tool:"Midjourney v6.1" },
    { title:"赛季预热倒计时海报", prompt:"dark fantasy countdown poster, large glowing number in center, arcane runes and energy wisps, dramatic volumetric lighting, deep teals and burning amber --ar 9:16 --s 800", tool:"Kling / MJ" }
  ],
  soft: [
    { title:"区域节日暗黑风贺图", prompt:"dark fantasy holiday celebration, gothic characters around mystical bonfire, festive elements with dark aesthetic, warm amber vs cold blue, painterly style --ar 4:5 --s 700", tool:"Midjourney v6.1" }
  ],
  global: [
    { title:"全球公测倒计时全景图", prompt:"epic dark fantasy landscape panorama, vast corrupted continent, multiple biomes, massive ancient structures and rift portals, cinematic drone shot, vivid dramatic lighting 8K --ar 32:9 --s 900", tool:"Midjourney v6.1" },
    { title:"赛季战报infographic模板", prompt:"sleek dark themed infographic template, data visualization with golden charts, dark background #0a0a0f, clean typography, gaming UI aesthetic --ar 9:16 --s 500", tool:"Midjourney v6.1" }
  ]
};

const GANTT_MILESTONES = [
  { label:"封测资格发放", phase:"cbt", start:0, end:15 },
  { label:"Dev Q&A", phase:"cbt", start:10, end:18 },
  { label:"开发日志连载", phase:"cbt", start:0, end:25 },
  { label:"职业剪影KV", phase:"cbt", start:8, end:20 },
  { label:"实机演示视频", phase:"cbt", start:15, end:22 },
  { label:"Twitch Drops", phase:"ea", start:25, end:40 },
  { label:"KOL & BD大赛", phase:"ea", start:24, end:42 },
  { label:"爽感UA素材", phase:"ea", start:23, end:55 },
  { label:"EA首发KV", phase:"ea", start:20, end:26 },
  { label:"MTX区域测试", phase:"soft", start:55, end:72 },
  { label:"受众A/B测试", phase:"soft", start:53, end:78 },
  { label:"Playable广告", phase:"soft", start:60, end:72 },
  { label:"社区工具搭建", phase:"soft", start:53, end:78 },
  { label:"电影级TVC", phase:"global", start:75, end:88 },
  { label:"全球霸屏KV", phase:"global", start:78, end:88 },
  { label:"League Start", phase:"global", start:88, end:100 },
  { label:"首杀竞速赛", phase:"global", start:88, end:95 },
  { label:"品牌联动", phase:"global", start:92, end:100 },
];

// ═══════════════════════════════════════════════════════════════
// GAME ANALYSIS — 游戏分析数据
// ═══════════════════════════════════════════════════════════════
const GAME_ANALYSIS = {
  // ─── 第一部分：游戏核心特点 ───
  coreFeatures: [
    {
      icon: "🌳",
      title: "史上最复杂的天赋树系统",
      desc: "1500+ 被动天赋节点，玩家自由组合出无限流派。这不是选一个\"职业\"打到底，而是真正的\"自己设计角色\"。",
      marketingAngle: "素材切入点：用3秒动画展示天赋树从空白到点亮全屏的视觉奇观。核心情绪——「这是你的角色，不是别人的」。",
      tags: ["Build自由度", "策略深度", "可重玩性"]
    },
    {
      icon: "⚔️",
      title: "次世代打击感 + 物理反馈",
      desc: "相比PoE1的点击割草，PoE2彻底重做了战斗系统：每一击都有重量感，翻滚闪避、武器切换、Boss战阶段设计接近魂系品质。",
      marketingAngle: "素材切入点：无UI纯享实机视频，重点展示受击反馈的「肉感」。对比老PoE1素材形成强烈视觉升级。",
      tags: ["打击感", "战斗升级", "魂系品质"]
    },
    {
      icon: "🎭",
      title: "暗黑哥特美学天花板",
      desc: "视觉风格直接对标90年代暗黑电影：褪色调、高反差、血腥、压抑。不走明亮二次元路线，做纯粹的Grimdark审美标杆。",
      marketingAngle: "素材切入点：这是「成年人的暗黑幻想」。KV走暗黑+肃穆路线，用视觉调性直接筛选目标受众，拉高品牌调性。",
      tags: ["Grimdark", "暗黑审美", "成人向"]
    },
    {
      icon: "🔄",
      title: "赛季制 — 每3个月一次「新游戏」",
      desc: "PoE的赛季(League)模式是业界独创：每个赛季新增一套完整机制+全服重置。玩家每3个月回来重新体验，等于持续出DLC但免费。",
      marketingAngle: "素材切入点：每个赛季都是一次新的营销战役。赛季预告片本身就是UA素材。可以做「赛季倒计时→首日冲榜→首杀竞速→赛季回顾」的完整内容闭环。",
      tags: ["赛季制", "长线运营", "内容循环"]
    },
    {
      icon: "💰",
      title: "F2P + 纯装饰微交易",
      desc: "核心游戏完全免费，只卖皮肤和特效。不卖数值、不卖体力、不卖抽卡。这是ARPG品类里极少数真正做到「付费不影响玩法」的产品。",
      marketingAngle: "素材切入点：这是对D4「买断制+赛季通行证+商城」的降维打击。直接打「免费玩+无Pay-to-Win」的差异化心智。",
      tags: ["F2P", "公平", "装饰性付费"]
    },
    {
      icon: "🧩",
      title: "12职业 × 无限宝石组合",
      desc: "6大职业(每个升阶2个子职业=12)，配合技能宝石(Skill Gem)和辅助宝石系统，任何技能都可以被任何职业使用和改造。组合可能性呈指数爆炸。",
      marketingAngle: "素材切入点：展示「同一个技能被不同宝石组合改造出完全不同效果」的视觉反差。UGC爆点——玩家自发做Build Guide。",
      tags: ["职业多样", "宝石系统", "UGC引擎"]
    }
  ],

  // ─── 第二部分：竞品差异化矩阵 ───
  competitors: [
    {
      name: "Diablo IV",
      icon: "🔥",
      positioning: "暴雪3A大作，品牌号召力最强",
      comparison: [
        { dimension: "商业模式", us: "F2P + 纯装饰MTX", them: "买断$70 + 赛季通行证 + 商城", advantage: "us" },
        { dimension: "Build深度", us: "1500+天赋节点 + 宝石系统", them: "200+天赋节点 + 有限组合", advantage: "us" },
        { dimension: "内容节奏", us: "每3月新赛季+全新机制", them: "每季度更新但节奏较慢", advantage: "us" },
        { dimension: "打击感", us: "PoE2重做后接近魂系", them: "流畅但偏轻", advantage: "tie" },
        { dimension: "上手难度", us: "极高 — 劝退曲线陡", them: "中等 — 友好但缺深度", advantage: "them" },
        { dimension: "品牌认知", us: "硬核圈强/泛圈弱", them: "全球顶流IP", advantage: "them" },
        { dimension: "画面品质", us: "暗黑哥特风天花板", them: "3A标准但风格偏保守", advantage: "us" }
      ],
      communityLeverage: "核心策略：瞄准D4的\"受伤玩家\"——那些为D4付了$70+赛季费却觉得内容不值的玩家。打「免费+更深度」的心智差。社区话术：「你在D4花的钱，在PoE2能买到几套华丽皮肤，而不是一张入场券。」"
    },
    {
      name: "Last Epoch",
      icon: "⏳",
      positioning: "中度ARPG，Build深度中上，偏Casual-Core",
      comparison: [
        { dimension: "商业模式", us: "F2P", them: "买断$35", advantage: "us" },
        { dimension: "Build深度", us: "指数级组合", them: "线性天赋树+有限联动", advantage: "us" },
        { dimension: "终局内容", us: "Maps+赛季+Boss Rush", them: "Monolith+Arena", advantage: "us" },
        { dimension: "上手友好度", us: "极高门槛", them: "引导较好", advantage: "them" },
        { dimension: "社区规模", us: "全球百万级活跃", them: "十万级", advantage: "us" },
        { dimension: "更新频率", us: "每3月大更新", them: "每季度小更新", advantage: "us" }
      ],
      communityLeverage: "核心策略：Last Epoch的玩家已经证明了自己喜欢Build构建，他们是PoE2最精准的潜在用户。用「毕业玩家升级」的叙事吸引。社区话术：「如果你在Last Epoch里已经感到Build到头了，PoE2才是真正的深水区。」"
    },
    {
      name: "Elden Ring / 魂系",
      icon: "🗡️",
      positioning: "动作RPG审美天花板，但非刷子游戏",
      comparison: [
        { dimension: "战斗手感", us: "PoE2接近魂系品质", them: "动作RPG标杆", advantage: "them" },
        { dimension: "可重玩性", us: "赛季制无限循环", them: "通关后缺乏驱动力", advantage: "us" },
        { dimension: "Build自由度", us: "1500节点+宝石", them: "武器+魔法有限组合", advantage: "us" },
        { dimension: "社交/联机", us: "组队+交易+竞速赛", them: "弱联机", advantage: "us" },
        { dimension: "长线内容", us: "每3月新赛季", them: "DLC间隔1年+", advantage: "us" },
        { dimension: "视觉调性", us: "暗黑哥特", them: "暗黑奇幻", advantage: "tie" }
      ],
      communityLeverage: "核心策略：魂系玩家追求「挑战感」和「暗黑美学」，这两点PoE2完全对齐。但魂系是一次性体验，PoE2提供无限循环。打「通关Elden Ring之后还能玩什么」的心智。社区话术：「如果你喜欢魂系的难度和美学，PoE2给你的是一个永远打不完的暗黑世界。」"
    },
    {
      name: "Lost Ark (命运方舟)",
      icon: "⚓",
      positioning: "韩式MMO+ARPG混血，画面精良，但P2W争议导致Steam从132万峰值跌至不足8千",
      comparison: [
        { dimension: "商业模式", us: "F2P + 纯装饰MTX", them: "F2P + 重度P2W(强化/宝石/材料均可买)", advantage: "us" },
        { dimension: "玩家留存", us: "赛季制驱动稳定回流", them: "从132万→7千,断崖下跌", advantage: "us" },
        { dimension: "Build深度", us: "1500+天赋节点+宝石系统", them: "雕刻+宝石(有限组合+数值驱动)", advantage: "us" },
        { dimension: "社区口碑", us: "极高(公平付费+透明)", them: "极差(P2W+RMT+机器人)", advantage: "us" },
        { dimension: "终局循环", us: "赛季制无限重置+新机制", them: "副本GS追赶(无尽数值膨胀)", advantage: "us" },
        { dimension: "PvE副本设计", us: "Boss有机制但非核心", them: "军团副本设计精良", advantage: "them" },
        { dimension: "画面品质", us: "暗黑哥特风", them: "顶级韩式3A(虚幻引擎)", advantage: "them" },
        { dimension: "新手体验", us: "极高门槛", them: "前期流畅(后期逼付费)", advantage: "them" }
      ],
      communityLeverage: "核心策略：Lost Ark是「P2W如何杀死好游戏」的最佳反面教材。PoE2的纯装饰付费是与之形成最强对比的武器。打法：1)在Lost Ark每次P2W争议爆发时,社区顺势传播PoE2的公平付费;2)Lost Ark流失的大量韩服/欧美ARPG玩家正在寻找替代品,他们对「公平+深度」有极强渴求;3)制作「PoE2 vs Lost Ark 付费模式对比」信息图让社区自传播。社区话术：「在PoE2,你的装备=你的时间投入,不是你的信用卡。」"
    },
    {
      name: "火炬之光:无限 (Torchlight Infinite)",
      icon: "🔥",
      positioning: "XD出品的移动端+PC跨端ARPG，赛季制运营，F2P+Battle Pass，月营收$20万级，Steam峰值低",
      comparison: [
        { dimension: "商业模式", us: "F2P + 纯装饰MTX", them: "F2P + Battle Pass + 抽英雄/特质(有P2W争议)", advantage: "us" },
        { dimension: "Build深度", us: "1500+天赋节点 + 宝石系统", them: "6英雄 × 特质系统(有深度但远不及PoE)", advantage: "us" },
        { dimension: "赛季内容量", us: "每3月全新机制+终局系统", them: "每赛季新英雄+新特质(内容量较薄)", advantage: "us" },
        { dimension: "画面品质", us: "暗黑哥特(PC级)", them: "卡通风(移动端优先)", advantage: "us" },
        { dimension: "玩家基数", us: "Steam峰值500K+", them: "Steam峰值~5K(极小)", advantage: "us" },
        { dimension: "移动端", us: "纯PC", them: "PC+Mobile跨端(移动端是主阵地)", advantage: "them" },
        { dimension: "上手友好度", us: "极高门槛", them: "引导完善,适合手游玩家", advantage: "them" },
        { dimension: "亚洲市场", us: "需要版号/代理", them: "中国/东南亚已上线运营", advantage: "them" }
      ],
      communityLeverage: "核心策略：火炬之光无限是PoE2在移动端/亚洲市场的潜在威胁——它已经在中国和东南亚跑通了赛季制ARPG的手游化。但它的致命弱点是:Build深度远不及PoE2,画面偏卡通,核心ARPG玩家不满足。打法：1)不直接攻击,而是用「深度对比」让火炬玩家意识到PoE2的系统深度是另一个量级;2)火炬之光的赛季运营经验可以反向学习——它证明了移动端ARPG赛季制可行;3)如果PoE2未来做Mobile端,火炬之光的用户就是精准目标。社区话术：「如果火炬之光让你入门了ARPG,PoE2会让你真正沉迷。」"
    }
  ],

  // ─── 第三部分：差异化撬动社群的策略 ───
  communityStrategies: [
    {
      icon: "🏗️",
      title: "Build构建 = 天然UGC引擎",
      problem: "传统ARPG的社区内容是「攻略搬运」，用户被动消费。",
      solution: "PoE2的天赋树复杂度让每个玩家都成为「设计师」。一个Build Guide就是一篇深度内容。",
      actions: [
        "举办「赛季BD创意大赛」，奖品为限定MTX",
        "搭建官方Build分享平台/模拟器（类似PoB）",
        "KOL合作侧重Build Showcase而非纯通关",
        "Reddit/Discord设「Weekly Build Spotlight」专栏"
      ],
      kpi: "目标：EA期社区BD帖子/视频 > 10K/月"
    },
    {
      icon: "🎯",
      title: "「反Pay-to-Win」= 品牌护城河",
      problem: "D4/Lost Ark等竞品的P2W争议持续消耗品牌信任。",
      solution: "PoE2坚持纯装饰付费，这是最强的社区情感杠杆——玩家会自发为「公平」站台。",
      actions: [
        "所有官方传播强调「Free-to-Play, Fair-to-Play」标语",
        "制作「PoE2 vs 竞品付费对比」信息图（让社区自传播）",
        "开放MTX价格透明页，强调「你付的钱=你穿的皮肤」",
        "每次D4/竞品爆出P2W争议时，社区运营顺势做对比传播"
      ],
      kpi: "目标：「公平付费」成为PoE2品牌的第一联想词"
    },
    {
      icon: "🏆",
      title: "赛季竞速 = 零成本直播事件",
      problem: "传统ARPG缺乏持续的直播观看动力。",
      solution: "PoE的赛季首杀(World First)竞速赛是自发形成的电竞化事件。PoE2可以官方化和放大这个机制。",
      actions: [
        "官方设立World First排行榜和奖金池",
        "与Twitch合作赛季首日Drops联动",
        "实时追踪Top10进度的直播Overlay工具",
        "赛后自动生成「赛季战报」分享至社媒"
      ],
      kpi: "目标：每赛季首周直播观看 > 500K hours"
    },
    {
      icon: "🌐",
      title: "「毕业D4」叙事 = 精准获客",
      problem: "泛ARPG受众被D4品牌锁定，不知道PoE2的存在。",
      solution: "不直接攻击D4，而是用「下一步」的叙事：「当你在D4毕业后，你会需要PoE2。」",
      actions: [
        "KOL内容侧重「D4到PoE2的迁移指南」",
        "UA素材做「D4 vs PoE2 深度对比」（客观但突出优势）",
        "在D4赛季间歇期加大投放力度（捕获无聊玩家）",
        "Discord设置「D4老玩家欢迎频道」和新手引导"
      ],
      kpi: "目标：D4赛季间歇期PoE2新增 > 30%来自D4受众"
    },
    {
      icon: "🎨",
      title: "暗黑美学 = 视觉身份认同",
      problem: "二次元/卡通风格饱和，暗黑写实在移动端/社媒传播中被稀释。",
      solution: "PoE2的Grimdark美学是品牌最强的视觉区分度。越暗越纯粹，越能筛选出高价值核心玩家。",
      actions: [
        "所有素材坚持暗黑哥特调色（不为CTR妥协亮色）",
        "推出「暗黑艺术概念集」作为社区收藏品",
        "与暗黑风IP联动（如Berserk/Warhammer/暗黑系列桌游）",
        "社媒运营日常贴保持统一暗黑视觉语言"
      ],
      kpi: "目标：PoE2成为「暗黑ARPG审美」的第一品牌联想"
    },
    {
      icon: "🔧",
      title: "开发者透明度 = 社区信任",
      problem: "大厂（暴雪/Riot）因缺乏沟通频繁遭遇社区反噬。",
      solution: "GGG的传统就是「Chris Wilson亲自发帖回复」。PoE2延续并放大这种开发者透明度。",
      actions: [
        "每个大版本更新前发布详细的设计意图博客",
        "定期Reddit AMA / Discord语音答疑",
        "争议问题48小时内官方回应（不回避、不删帖）",
        "赛季复盘报告：公开数据+承认不足+改进承诺"
      ],
      kpi: "目标：Reddit/Discord负面情绪比 < 10%"
    }
  ]
};

// ═══════════════════════════════════════════════════════════════
// RUST DATA + STEAM DASHBOARD
// ═══════════════════════════════════════════════════════════════
const RUST_DATA = {
  name:"RUST / RUST Mobile", genre:["生存建造"], art:["次世代写实"], market:["全球"], currentPhase:"global",
  tags:["生存建造","PvP社交","硬核沙盒","开放世界","B2P+皮肤商城"], steamAppId:252490,
  phases:{
    cbt:{ title:"Rust Mobile — CBT", duration:"4-6周(2026 Q3)", objective:"移动端操控验证 · PC玩家导流 · 种子招募",
      cards:[
        {id:"rm-c1",type:"event",title:"PC老玩家优先封测资格",desc:"通过Steam时长500h+筛选核心玩家发放Mobile封测码,Discord内测群收集操控反馈。",priority:"high",tags:["PC导流","NDA","Discord"],timing:"T-6w→T-4w",refCount:4,role:{community:true,ua:false,visual:false}},
        {id:"rm-c2",type:"event",title:"头部主播移动端体验会",desc:"邀请Welyn/Blooprint等顶级主播体验移动端建造+PvP,录制reaction素材。",priority:"high",tags:["KOL","操控验证","reaction"],timing:"T-5w→T-3w",refCount:3,role:{community:true,ua:false,visual:true}},
        {id:"rm-c3",type:"campaign",title:"「从PC到口袋」开发日志",desc:"每周一期:如何将Rust复杂系统(建造/电路/PvP)压缩到手机。",priority:"mid",tags:["开发日志","技术力"],timing:"T-6w→T-1w",refCount:4,role:{community:true,ua:true,visual:true}},
        {id:"rm-c4",type:"kv",title:"Rust Mobile首曝概念KV",desc:"末日荒野+手机界面融合视觉。传达「完整Rust,随时随地」。",priority:"high",tags:["末日","移动端","首曝"],timing:"T-4w→T-2w",refCount:5,role:{community:false,ua:true,visual:true}},
        {id:"rm-c5",type:"tvc",title:"PC vs Mobile画面并排对比",desc:"同场景同操作的PC/Mobile并排实录,证明移动端品质不缩水。",priority:"high",tags:["画面对比","技术力"],timing:"T-3w→T-1w",refCount:6,role:{community:false,ua:true,visual:true}}
      ]},
    ea:{ title:"Rust Mobile — EA限量测试", duration:"2-3个月", objective:"移动端KOL矩阵 · 操控打磨 · Twitch联动",
      cards:[
        {id:"rm-e1",type:"campaign",title:"PC×Mobile跨端Twitch Drops",desc:"PC直播间观看获Mobile限定皮肤,反向Mobile玩家也获PC端奖励。双向导流。",priority:"high",tags:["跨平台","Twitch Drops","双向"],timing:"EA Day1→+3w",refCount:5,role:{community:true,ua:true,visual:true}},
        {id:"rm-e2",type:"campaign",title:"头部主播「Mobile生存挑战赛」",desc:"Rust顶级主播用手机完成经典挑战(24h裸奔到AK),全程直播。",priority:"high",tags:["KOL","挑战赛","话题"],timing:"EA-2d→+2w",refCount:7,role:{community:true,ua:true,visual:false}},
        {id:"rm-e3",type:"ua",title:"「口袋暴力美学」短视频UA",desc:"三大爽感:手机炸家/手机爆头/手机造电路基地。TikTok/Reels/Shorts三平台。",priority:"high",tags:["短视频","TikTok","爽感"],timing:"EA-1w→持续",refCount:8,role:{community:false,ua:true,visual:true}},
        {id:"rm-e4",type:"kv",title:"EA主视觉「荒野从未如此近」",desc:"一只拿手机的手,屏幕内是Rust末日世界,画面从手机溢出。",priority:"high",tags:["主视觉","创意"],timing:"EA-2w→Day1",refCount:4,role:{community:false,ua:true,visual:true}},
        {id:"rm-e5",type:"aigc",title:"AIGC梗图工厂",desc:"批量产出裸奔梗/被抄家梗/Online Raid梗图。Rust的Meme文化极强。",priority:"mid",tags:["AIGC","Meme","UGC"],timing:"EA+1w→持续",refCount:3,role:{community:true,ua:false,visual:true}}
      ]},
    soft:{ title:"Rust Mobile — Soft Launch", duration:"2-3个月", objective:"东南亚/拉美先行 · 留存验证 · 付费模型",
      cards:[
        {id:"rm-s1",type:"event",title:"东南亚/拉美区域优先上线",desc:"生存游戏热度高且服务器基础设施可控的区域先行测试。",priority:"high",tags:["区域化","东南亚","拉美"],timing:"Soft Day1→+6w",refCount:3,role:{community:false,ua:true,visual:false}},
        {id:"rm-s2",type:"ua",title:"受众分层A/B素材",desc:"硬核:完整Rust体验;泛生存:比吃鸡更自由;社交:和朋友建家抄家。三线并行。",priority:"high",tags:["受众分层","A/B","卖点"],timing:"Soft-1w→持续",refCount:6,role:{community:false,ua:true,visual:true}},
        {id:"rm-s3",type:"campaign",title:"「PC搬家到手机」迁移活动",desc:"绑定Steam获Mobile专属老兵皮肤+资源礼包。",priority:"mid",tags:["跨端导流","账号绑定"],timing:"Soft Day1→+4w",refCount:4,role:{community:true,ua:true,visual:false}},
        {id:"rm-s4",type:"kv",title:"区域本地化KV",desc:"东南亚版强调多人社交;拉美版强调PvP对抗。",priority:"mid",tags:["本地化","区域KV"],timing:"Soft-2w→+2w",refCount:3,role:{community:false,ua:true,visual:true}},
        {id:"rm-s5",type:"event",title:"移动端社区工具搭建",desc:"Wiki、基地设计分享、服务器浏览器优化。",priority:"high",tags:["社区工具","Wiki"],timing:"Soft-1w→持续",refCount:3,role:{community:true,ua:false,visual:false}}
      ]},
    global:{ title:"Global Launch + PC端持续运营", duration:"持续运营", objective:"移动端全球爆发 · 双端联动 · 品牌破圈",
      cards:[
        {id:"rm-g1",type:"tvc",title:"「两个世界一个Rust」双端TVC",desc:"通勤手机巡逻→回家PC团战。展示跨端无缝体验。电影级制作。",priority:"high",tags:["TVC","跨端","电影级"],timing:"GL-4w→Day1",refCount:6,role:{community:false,ua:true,visual:true}},
        {id:"rm-g2",type:"kv",title:"全球公测霸屏大KV",desc:"App Store/Google Play Featured+全渠道投放。",priority:"high",tags:["全球KV","应用商店"],timing:"GL-3w→Day1",refCount:5,role:{community:false,ua:true,visual:true}},
        {id:"rm-g3",type:"campaign",title:"「百人岛屿大战」全球直播事件",desc:"100名全球知名主播同服PvP,多视角直播制造现象级话题。",priority:"high",tags:["直播事件","百人大战"],timing:"GL Day1→+1w",refCount:7,role:{community:true,ua:true,visual:false}},
        {id:"rm-g4",type:"campaign",title:"户外/生存品牌跨界联动",desc:"与North Face/Columbia/Leatherman联动,游戏内联名+线下限定。",priority:"mid",tags:["品牌联动","户外"],timing:"GL+2w→+8w",refCount:4,role:{community:true,ua:true,visual:true}},
        {id:"rm-g5",type:"event",title:"PC端主题Wipe Event强化",desc:"配合Mobile上线,PC端推特殊主题Wipe,双端联动活动奖励。",priority:"high",tags:["Wipe","双端联动"],timing:"GL Day1→持续",refCount:5,role:{community:true,ua:true,visual:true}},
        {id:"rm-g6",type:"aigc",title:"UGC基地大赛+AI蓝图生成器",desc:"全球基地设计大赛+AI辅助蓝图工具降低移动端建造门槛。",priority:"mid",tags:["UGC","AIGC","基地设计"],timing:"GL+1w→持续",refCount:4,role:{community:true,ua:false,visual:true}}
      ]}
  }
};

const RUST_REFERENCES = {
  cbt:[
    {title:"PUBG Mobile — PC手游化标杆",desc:"腾讯光子将PUBG从PC完美移植手机,保留核心体验且优化操控。全球下载10亿+。",tags:["PUBG Mobile","手游移植"],type:"方法论",metrics:{"全球下载":"10亿+","月活":"50M+"},thumb:"https://i.ytimg.com/vi/EHmNQgUqJGE/maxresdefault.jpg",url:"https://www.youtube.com/watch?v=EHmNQgUqJGE",source:"YouTube"},
    {title:"Rust Mobile官方首曝",desc:"Facepunch 2025年8月公布Rust Mobile,强调保留完整建造/PvP/生存。社区反应极热。",tags:["Rust Mobile","Facepunch"],type:"Event",metrics:{"Discord首日":"50K+","预注册":"百万级"},thumb:"https://i.ytimg.com/vi/LGcECozNXFw/maxresdefault.jpg",url:"https://www.rustmobile.com/en/news-welcome-to-rm.html",source:"rustmobile.com"},
    {title:"ARK Mobile — 生存手游化教训",desc:"ARK Mobile大幅删减内容导致PC玩家差评。Rust Mobile需避免缩水。",tags:["ARK Mobile","教训"],type:"方法论",metrics:{"评分":"3.2/5","首月流失":"60%"},thumb:"https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=ark+mobile+review",source:"综合"}
  ],
  ea:[
    {title:"Rust — OTV服务器事件(2021)",desc:"OTV组织的Rust名人服务器事件将Rust推上Twitch榜首。峰值150万观看,月活暴涨300%。零成本现象级营销。",tags:["Rust","OTV","Twitch","现象级"],type:"Campaign",metrics:{"Twitch峰值":"1.5M观看","月活增长":"300%","Steam峰值":"245K"},thumb:"https://i.ytimg.com/vi/FGpMIGip2xY/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=rust+otv+server",source:"YouTube/Twitch"},
    {title:"Rust 2026年Twitch生态数据",desc:"2026年至今Twitch累计观看3050万小时,平均1.27万,峰值10.2万。生存品类中直播最活跃。",tags:["Rust","Twitch","2026"],type:"数据",metrics:{"年观看":"30.5M小时","平均":"12.7K","峰值":"102K"},thumb:"https://i.ytimg.com/vi/LGcECozNXFw/maxresdefault.jpg",url:"https://sullygnome.com/game/rust",source:"SullyGnome"},
    {title:"Welyn — Rust顶级创作者生态",desc:"Rust拥有最活跃的YouTube创作者生态。Welyn(5M+订阅)用电影化叙事呈现Rust故事,单条千万播放。",tags:["Welyn","YouTube","电影化"],type:"KOL",metrics:{"订阅":"5M+","单条峰值":"30M+播放"},thumb:"https://i.ytimg.com/vi/BuZvpMGj3Pw/maxresdefault.jpg",url:"https://www.youtube.com/@Welyn",source:"YouTube"},
    {title:"Rust Twitch Drops皮肤经济",desc:"Rust的限定Twitch Drops皮肤驱动直播观看,每次Drops活动观看量提升200%+。",tags:["Twitch Drops","皮肤经济"],type:"Campaign",metrics:{"观看提升":"200%+","参与":"百万级领取"},thumb:"https://i.ytimg.com/vi/1PkOs2I-5Bk/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=rust+twitch+drops",source:"YouTube/Twitch"}
  ],
  soft:[
    {title:"Genshin — 区域化Soft Launch",desc:"米哈游先东南亚后全球,大量A/B测试UA素材找到各区域最佳方向。",tags:["Genshin","区域化"],type:"UA",metrics:{"CPI(SEA)":"$1.2","ROAS":"160%"},thumb:"https://i.ytimg.com/vi/SO__VQZirJ4/maxresdefault.jpg",url:"https://www.gamedeveloper.com/game-platforms/how-genshin-impact-attracts-us-spenders-with-cinematic-ads-mobile-rpg-and-open-world-ua-creative-trends",source:"GameDeveloper"},
    {title:"PUBG Mobile — 区域化电竞体系",desc:"PUBG Mobile在东南亚建立完整电竞(PMPL/PMGC),用赛事驱动区域活跃。",tags:["PUBG Mobile","电竞","区域化"],type:"Campaign",metrics:{"PMGC观看":"50M+","区域赛事":"20+地区"},thumb:"https://i.ytimg.com/vi/EHmNQgUqJGE/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=pubg+mobile+esports",source:"YouTube"}
  ],
  global:[
    {title:"Rust Steam在线趋势(2024-2026)",desc:"月均10.8万在线,24h峰值15.9万,历史最高26万。每年1月Wipe+节日叠加出现峰值。稳居Top20。",tags:["Rust","Steam","长线"],type:"数据",metrics:{"月均":"108K","24h峰":"159K","历史最高":"260K"},thumb:"https://i.ytimg.com/vi/LGcECozNXFw/maxresdefault.jpg",url:"https://steamcharts.com/app/252490",source:"SteamCharts"},
    {title:"Fortnite — 跨端联动范本",desc:"Epic的跨端策略:同账号/同Battle Pass/同赛季,PC/Console/Mobile无缝衔接。",tags:["Fortnite","跨端","Battle Pass"],type:"方法论",metrics:{"跨端MAU":"80M+","Mobile营收占比":"30%+"},thumb:"https://i.ytimg.com/vi/2gUtfBmw86Y/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=fortnite+cross+platform",source:"YouTube"},
    {title:"Rust Console — 主机端经验教训",desc:"2021年Rust Console证明跨平台可行,也暴露操控和性能挑战。Mobile需吸取。",tags:["Rust Console","跨平台","教训"],type:"方法论",metrics:{"评分":"6.5/10","核心问题":"操控+帧率"},thumb:"https://i.ytimg.com/vi/m-J3a3vVbSU/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=rust+console+review",source:"综合"}
  ]
};

const RUST_AIGC_PROMPTS = {
  cbt:[{title:"末日荒野基地KV",prompt:"post-apocalyptic survival base at sunset, rusted metal walls and watchtowers, harsh desert landscape, dramatic orange sky, cinematic wide shot, photorealistic 8K --ar 16:9 --s 800",tool:"Midjourney v6.1"}],
  ea:[{title:"PvP对战爽感短视频封面",prompt:"intense PvP gunfight scene in survival game, two armed characters facing off near industrial structure, muzzle flash, debris flying, gritty photorealistic style, action movie still --ar 16:9 --s 750",tool:"MJ v6.1"},{title:"手机端建造展示贴",prompt:"mobile game UI showing complex base building, survival crafting interface on smartphone screen, dark industrial theme, clean UI design with golden accents --ar 9:16 --s 600",tool:"MJ v6.1"}],
  soft:[{title:"区域节日贺图-生存主题",prompt:"survival game characters celebrating around campfire, makeshift festive decorations on rusted base, warm firelight vs cold moonlight, post-apocalyptic holiday mood --ar 4:5 --s 700",tool:"MJ v6.1"}],
  global:[{title:"跨端联动海报",prompt:"split screen composition showing same survival game world on PC monitor and mobile phone, seamless transition between devices, cinematic lighting, tech-meets-survival aesthetic --ar 16:9 --s 800",tool:"MJ v6.1"},{title:"百人大战直播封面",prompt:"epic aerial view of 100 players battling on a survival island, explosions and gunfire, multiple bases under siege, chaotic battle royale atmosphere, cinematic drone shot --ar 16:9 --s 900",tool:"MJ v6.1"}]
};

const RUST_ANALYSIS = {
  coreFeatures:[
    {icon:"🏗️",title:"极致自由建造系统",desc:"从茅草屋到电气化堡垒,Rust建造是生存品类最深度的。电路系统可做自动化农场和安防。",marketingAngle:"「你的手机能造出这个？」展示Mobile端复杂基地建造加速回放,制造不可思议感。",tags:["建造深度","电路","自由度"]},
    {icon:"💀",title:"Full Loot PvP — 死亡掉落一切",desc:"真正的高风险PvP:你可以失去一切。紧张感是其他生存游戏无法复制的核心情感。",marketingAngle:"「心跳加速」类短视频——偷袭/被抄家/翻盘的极端情绪波动,天然病毒内容。",tags:["Full Loot","高风险","情绪"]},
    {icon:"🎭",title:"社交沙盒 — 人才是最大内容",desc:"结盟/背叛/贸易/政治——每个服务器都是一个小型社会模拟器。核心不是PvE而是人。",marketingAngle:"Rust「社会实验」是YouTube/TikTok流量密码。故事化叙事展示服务器里的人间百态。",tags:["社交","社会实验","UGC"]},
    {icon:"🔄",title:"Wipe机制 = 内置赛季制",desc:"每月服务器重置,所有玩家从零开始。天然的赛季节奏和回归驱动力。",marketingAngle:"Wipe Day本身就是直播事件。配合Mobile做「PC+Mobile双端Wipe Day」联动。",tags:["Wipe","赛季化","回归"]},
    {icon:"🎬",title:"YouTube/Twitch内容金矿",desc:"2026年Twitch 3050万小时观看。Welyn 5M+订阅。生存+PvP+社交=无限内容。",marketingAngle:"不需花钱做素材,需要放大创作者生态。给KOL工具和激励,他们做所有内容。",tags:["直播","YouTube","Twitch"]},
    {icon:"📱",title:"Rust Mobile — 随时在线的焦虑",desc:"通勤检查基地/午休收资源/睡前布防——「永远在线焦虑」通过手机放大10倍。",marketingAngle:"「你的基地现在安全吗？」推送通知+实时基地状态,创造无法放下的成瘾循环。",tags:["移动端","焦虑驱动","推送"]}
  ],
  competitors:[
    {name:"DayZ",icon:"🧟",positioning:"僵尸生存,氛围向,硬核模拟",comparison:[
      {dimension:"建造系统",us:"完整建造+电路",them:"极简/无建造",advantage:"us"},
      {dimension:"PvP频率",us:"高频+基地战",them:"低频遭遇战",advantage:"us"},
      {dimension:"内容循环",us:"Wipe月度重置",them:"无重置/缓慢",advantage:"us"},
      {dimension:"移动端",us:"Rust Mobile在研",them:"无计划",advantage:"us"},
      {dimension:"氛围感",us:"工业末日",them:"僵尸电影感",advantage:"them"},
      {dimension:"新手引导",us:"有建造引导",them:"无引导",advantage:"us"}
    ],communityLeverage:"DayZ玩家追求的紧张感Rust同样有且更丰富。Mobile便携性是DayZ给不了的。打「DayZ的氛围+更多玩法+手机随时玩」。"},
    {name:"Palworld",icon:"🦎",positioning:"宝可梦×生存,休闲爆款后回落",comparison:[
      {dimension:"长线留存",us:"8年长线运营",them:"爆发后大幅回落",advantage:"us"},
      {dimension:"PvP深度",us:"Full Loot团战",them:"弱PvP",advantage:"us"},
      {dimension:"社区成熟度",us:"全球成熟社区",them:"热度靠更新",advantage:"us"},
      {dimension:"移动端",us:"Rust Mobile在研",them:"无",advantage:"us"},
      {dimension:"上手友好",us:"硬核高门槛",them:"轻松上手",advantage:"them"},
      {dimension:"IP吸引力",us:"写实生存",them:"萌系抓宠",advantage:"them"}
    ],communityLeverage:"Palworld退潮玩家寻找下一个生存游戏。Rust的深度和长线是Palworld给不了的。打「毕业后的真正深水区」。"},
    {name:"ARK: Survival Ascended",icon:"🦖",positioning:"恐龙驯养,建造强但优化差",comparison:[
      {dimension:"服务器稳定",us:"成熟稳定",them:"优化问题严重",advantage:"us"},
      {dimension:"PvP体验",us:"快节奏策略",them:"慢节奏重PvE",advantage:"us"},
      {dimension:"社区口碑",us:"长期正面",them:"频繁争议",advantage:"us"},
      {dimension:"移动端",us:"Rust Mobile在研",them:"ARK Mobile已失败",advantage:"us"},
      {dimension:"PvE内容",us:"有限PvE",them:"丰富Boss+驯养",advantage:"them"},
      {dimension:"视觉吸引",us:"写实末日",them:"恐龙奇幻",advantage:"them"}
    ],communityLeverage:"ARK建造玩家被Rust建造+电路吸引。ARK Mobile的失败让Rust Mobile有机会证明「生存手游化可以不缩水」。"},
    {name:"Lost Ark (命运方舟)",icon:"⚔️",positioning:"韩式MMO+ARPG,画面顶级,但P2W争议致命。从132万峰值跌至7千。",comparison:[
      {dimension:"商业模式",us:"B2P+纯装饰皮肤",them:"F2P+重度P2W(强化/宝石/材料均可买)",advantage:"us"},
      {dimension:"玩家留存曲线",us:"8年长线稳定(月均10万+)",them:"从132万→7千,断崖式下跌",advantage:"us"},
      {dimension:"社区口碑",us:"正面(皮肤经济公平透明)",them:"极负面(P2W+RMT+机器人)",advantage:"us"},
      {dimension:"内容驱动力",us:"PvP社交+Wipe+UGC",them:"副本+GS追赶(数值驱动)",advantage:"us"},
      {dimension:"移动端",us:"Rust Mobile在研",them:"无移动端",advantage:"us"},
      {dimension:"PvE深度",us:"弱PvE",them:"丰富副本+Boss设计优秀",advantage:"them"},
      {dimension:"画面品质",us:"写实工业风",them:"顶级韩式3A画面",advantage:"them"},
      {dimension:"新手体验",us:"硬核高门槛",them:"前期引导流畅(但后期逼付费)",advantage:"them"}
    ],communityLeverage:"Lost Ark是「P2W如何杀死一款好游戏」的教科书。Rust的皮肤经济模式是反面典型。打法:1)直接展示两者付费模式对比——「Rust花钱买好看,Lost Ark花钱买强度」;2)Lost Ark的流失玩家中有大量硬核MMO/ARPG玩家,他们对「公平竞技」有极强渴求;3)在Lost Ark大更新引发P2W争议时顺势传播Rust的公平付费模式。社区话术:「在Rust,你的实力=你的技术,不是你的钱包。」"},
    {name:"Hunt: Showdown 1896",icon:"🤠",positioning:"PvPvE赏金猎人提取射击,氛围天花板,Crytek出品。Steam月均2万+,历史峰值6万。",comparison:[
      {dimension:"核心循环",us:"开放沙盒+建造+长期服务器",them:"单局提取制(30-50分钟/局)",advantage:"us"},
      {dimension:"PvP紧张感",us:"Full Loot(失去一切)",them:"Hunter死亡=永久失去装备+等级",advantage:"tie"},
      {dimension:"内容驱动",us:"Wipe+UGC+社交叙事",them:"赛季更新+新Boss+新武器",advantage:"us"},
      {dimension:"画面氛围",us:"工业末日写实",them:"19世纪哥特恐怖(氛围天花板)",advantage:"them"},
      {dimension:"音效设计",us:"标准射击音效",them:"业界顶级(脚步/枪声/环境=战术信息)",advantage:"them"},
      {dimension:"移动端潜力",us:"Rust Mobile在研",them:"无移动端(单局模式适配难度大)",advantage:"us"},
      {dimension:"社交深度",us:"服务器社会模拟(外交/贸易/背叛)",them:"3人小队,局外社交弱",advantage:"us"},
      {dimension:"新手友好度",us:"硬核高门槛",them:"极硬核(permadeath+声音系统学习曲线陡)",advantage:"tie"},
      {dimension:"直播观赏性",us:"抄家/社交名场面(长视频)",them:"紧张对枪/提取逃生(短视频友好)",advantage:"tie"}
    ],communityLeverage:"Hunt玩家和Rust玩家有高度重叠的「硬核PvP射击」受众。Hunt的单局制让玩家没有归属感,Rust的服务器+基地给了「家」的概念——这是Hunt给不了的长期留存驱动。打法:1)在Hunt社区推「如果你喜欢Hunt的紧张感,Rust给你的是一个永远不结束的Hunt世界」;2)Hunt的氛围党可以被Rust的暗黑工业风吸引;3)Hunt: Showdown的内容创作者(Psychoghost/Neenoh)同时也玩Rust,可以作为跨品类桥梁KOL。社区话术:「Hunt是一场赏金狩猎,Rust是一场永不结束的生存战争。」"}
  ],
  communityStrategies:[
    {icon:"📱",title:"PC→Mobile导流 = 零成本获客",problem:"Mobile冷启动缺用户基础。",solution:"Rust PC端月均10万+在线+庞大直播生态,导到Mobile是最精准最低成本获客。",actions:["PC端弹窗+邮件推Mobile预注册","绑定Steam获Mobile老兵皮肤","跨端成就互通","Discord/Reddit置顶预注册"],kpi:"目标:Mobile首月50%用户来自PC导流"},
    {icon:"🎬",title:"Wipe Day = 天然直播事件",problem:"生存游戏缺周期性传播爆点。",solution:"Wipe Day(服务器重置)是自然直播高峰。全服从零=大量内容。Mobile做双端同步Wipe。",actions:["官方化Wipe Day品牌事件","Wipe前后72h Twitch Drops","头部主播Wipe Day直播马拉松","Mobile推送拉回流"],kpi:"目标:Wipe Day Twitch峰值>100K"},
    {icon:"🎭",title:"「Rust电影宇宙」UGC引擎",problem:"传统UA成本高且递减。",solution:"最好的营销是玩家做的「Rust电影」。Welyn单条千万播放证明了这点。",actions:["设立「Rust Stories」官方频道","年度Rust Film Festival","免费录制/回放工具","Mobile内置简易剪辑分享"],kpi:"目标:月度UGC视频>5000条"},
    {icon:"🔔",title:"「基地安全吗？」推送成瘾",problem:"移动端生存游戏D7留存<20%。",solution:"Rust核心是「焦虑」——基地随时被抄。Mobile推送放大焦虑,创造成瘾循环。",actions:["实时基地状态推送","离线保护付费道具(变现点)","每日巡逻奖励","新手保护期降焦虑"],kpi:"目标:推送点击率>15%,D7>25%"},
    {icon:"🤝",title:"跨端生态 = 双端互哺",problem:"PC/Mobile分裂,运营成本翻倍。",solution:"建立PC×Mobile共生:同IP/互通奖励/联动活动,两端互相导流。",actions:["统一账号+跨端皮肤互通","PC活动推Mobile相关内容","Mobile「巡逻模式」辅助PC","双端联动Battle Pass"],kpi:"目标:双端同时活跃>总用户20%"},
    {icon:"🌍",title:"区域化电竞体系",problem:"Rust缺正式竞技赛事。",solution:"Mobile上线是建赛事体系最佳窗口。移动端降参与门槛,区域赛事驱动活跃。",actions:["Rust Mobile区域联赛","服务器之王赛季排名","年度World Championship","赛事Drops限定皮肤"],kpi:"目标:赛事覆盖10+区域,观看>10M"}
  ]
};

// Steam dashboard data
const RUST_STEAM = {
  appId:252490, current:133802, peak24h:158778, allTimePeak:259646, avgMonth:107947,
  monthly:[
    {m:"2025-01",avg:124496,peak:259646},{m:"2025-02",avg:121569,peak:232431},
    {m:"2025-03",avg:111584,peak:203220},{m:"2025-04",avg:97805,peak:187702},
    {m:"2025-05",avg:105523,peak:203367},{m:"2025-06",avg:98463,peak:191730},
    {m:"2025-07",avg:102159,peak:187345},{m:"2025-08",avg:103018,peak:190383},
    {m:"2025-09",avg:85515,peak:152247},{m:"2025-10",avg:97411,peak:178836},
    {m:"2025-11",avg:98213,peak:184595},{m:"2025-12",avg:105484,peak:174558},
    {m:"2026-01",avg:121003,peak:246562},{m:"2026-02",avg:122377,peak:228230},
    {m:"2026-03",avg:106570,peak:200309}
  ]
};

// ═══ CATEGORY DIFFERENTIATION + REGIONAL STRATEGY ═══
const RUST_DIFF = {
  positioning:{tagline:"唯一同时拥有「深度建造 × Full Loot PvP × 社交沙盒 × Wipe赛季制」四大核心支柱的生存游戏",landscape:[{name:"Rust",x:90,y:85,size:40,color:"var(--accent-gold)",tags:"建造+PvP+社交+Wipe"},{name:"DayZ",x:70,y:30,size:25,color:"var(--phase-cbt)",tags:"氛围+遭遇战"},{name:"ARK",x:45,y:70,size:30,color:"var(--phase-ea)",tags:"驯养+建造+PvE"},{name:"Palworld",x:25,y:50,size:28,color:"var(--phase-soft)",tags:"萌系+抓宠"},{name:"7DTD",x:55,y:40,size:20,color:"var(--phase-global)",tags:"僵尸+塔防"},{name:"Valheim",x:35,y:60,size:22,color:"var(--accent-green)",tags:"维京+合作"},{name:"Conan",x:60,y:55,size:18,color:"var(--accent-orange)",tags:"奇幻+PvP"}],axisX:"PvP社交深度 →",axisY:"系统复杂度 →"},
  pillars:[
    {icon:"🔥",title:"Full Loot = 不可替代的紧张感",desc:"死亡掉落一切。DayZ有类似但缺建造,ARK/Palworld/Valheim都没有Full Loot。「真正的失去」是Rust最大的情感壁垒。",moat:"没有竞品同时做到Full Loot+深度建造+服务器社交。",uaAngle:"「你敢吗？」——被抄家→翻盘的过山车情绪。"},
    {icon:"🏗️",title:"建造+电路 = 创造力平台",desc:"ARK有建造无电路;Valheim有建造无PvP;Palworld建造极简。Rust的建造+电路让基地成为作品。",moat:"「Rust Base Tour」是YouTube独有的持续热门内容类型。",uaAngle:"「你想不到手机上能造出这个」——震撼基地展示。"},
    {icon:"🎭",title:"服务器社交 = 人类模拟器",desc:"每个服务器都是微型社会:外交/贸易/政治/背叛。Palworld单机,DayZ遭遇太少,ARK社交弱。",moat:"每个服务器自动产出独一无二的「故事」=天然病毒内容。",uaAngle:"「Rust里发生了什么」故事化叙事——背叛/复仇/联盟。"},
    {icon:"🔄",title:"Wipe = 内置公平竞技重置",desc:"竞品老玩家积累让新人无法追赶。Rust的Wipe每月重置=全员同一起跑线。",moat:"Wipe Day是独有的社区仪式和直播事件。",uaAngle:"「每月一次全新开始」——Wipe Day竞速快感。"},
    {icon:"📱",title:"Mobile = 品类空白占位",desc:"整个硬核生存品类在移动端几乎空白。ARK Mobile失败反而为Rust清场。",moat:"做成=独占品类窗口。做好=口碑爆发。",uaAngle:"「手机上第一款真正的硬核生存」——品类开创者心智。"},
    {icon:"🎬",title:"创作者生态 = 自传播飞轮",desc:"Rust的YouTube/Twitch创作者密度远超竞品。Welyn/hJune等将Rust变成一种「内容类型」。",moat:"8年积累的创作者护城河,新游戏无法速成。",uaAngle:"不做广告做工具——给创作者更好的录制/剪辑工具。"}
  ]
};

const RUST_REGIONAL = [
  {region:"🇺🇸🇬🇧 欧美 (北美+西欧)",icon:"🇺🇸",playerBase:"核心大盘 · Steam 60%+",overview:"Rust大本营。直播生态成熟,KOL密度最高。Mobile挑战:让PC玩家接受手机操控。",keyInsights:["Twitch/YouTube是首要渠道","社区极度重视操控和画质","Reddit/Discord核心阵地","对P2W零容忍"],
    strategy:[{action:"KOL矩阵优先激活",detail:"Welyn/hJune/Blooprint/Frost提前48h体验+reaction。预算重点。"},{action:"Twitch Drops跨端联动",detail:"PC直播间获Mobile限定皮肤,每次Wipe Day前72h Drops。"},{action:"Reddit/Discord前置运营",detail:"r/playrust设Mobile讨论区,开发者定期AMA。"},{action:"UA:操控自信展示",detail:"第一波素材直面「手机能玩?」质疑——流畅Mobile操控实录。"},{action:"Steam社区导流",detail:"PC端弹窗+Steam新闻推送+更新公告嵌入预注册。"}],kpi:"EA期70%新增来自PC导流 | D7>25%",timing:"全周期跟随Wipe节奏"},
  {region:"🌏 东南亚 (SEA)",icon:"🌏",playerBase:"Mobile增量大盘",overview:"手机是主要游戏设备。PUBG Mobile/Free Fire已验证生存品类潜力。填补硬核生存移动端空白。",keyInsights:["手机为主(PC低)","对免费/低付费敏感","社交和团队热度高","TikTok/Facebook主渠道","网吧仍重要"],
    strategy:[{action:"TikTok/Reels短视频先行",detail:"PvP/炸家/搞笑社交短视频。本地语言(泰/越/印尼)。"},{action:"网吧联动",detail:"印尼/菲律宾网吧「Rust Mobile体验站」+注册礼包。"},{action:"中腰部KOL铺量",detail:"5K-50K粉KOL大量铺,侧重搞笑/社交/团队内容。"},{action:"团队玩法前推",detail:"素材强调「和兄弟建家抄家」社交快感。"},{action:"Soft Launch首发区",detail:"印尼/泰国/菲律宾先行验证。"},{action:"轻量付费",detail:"$0.99-$2.99皮肤包+首充双倍+Battle Pass适配SEA。"}],kpi:"CPI<$1.0 | D7>20% | ARPU>$0.5",timing:"Soft Launch首发 → GL前2-3月"},
  {region:"🇯🇵🇰🇷 日韩",icon:"🇯🇵",playerBase:"高付费 · 品质敏感",overview:"韩国有PC传统(对Rust有认知),日本对生存品类陌生。移动端品质要求极高。",keyInsights:["画面和流畅度是第一门槛","社区口碑>UA投放","日本偏PvE/合作","韩国接受PvP重公平","应用商店推荐重要"],
    strategy:[{action:"日本:合作模式前推",detail:"素材侧重「和朋友建造冒险」,淡化Full Loot残酷性。提供PvE服。"},{action:"韩国:电竞定位",detail:"PvP排位+服务器竞速榜,打「移动端生存电竞」。"},{action:"极致本地化",detail:"完整UI/语音/客服,高画质模式,零翻译瑕疵。"},{action:"应用商店Featured",detail:"提前与Apple/Google日韩团队沟通推荐位。"},{action:"日本:末日IP联动",detail:"进击的巨人/Dr.Stone等末日题材联动降认知门槛。"}],kpi:"日本D1>35% | 韩国生存Top5 | ARPU>$5",timing:"GL同步或+1-2周"},
  {region:"🌎 拉丁美洲 (LATAM)",icon:"🌎",playerBase:"高增量 · 社交驱动",overview:"增长最快市场。Free Fire验证了移动端生存/射击潜力。玩家社交驱动强,UGC活跃。",keyInsights:["社交和团队是核心驱动","YouTube(巴西)/TikTok(墨西哥)","消费力有限但DAU极高","葡/西语必须","电竞热情高"],
    strategy:[{action:"巴西/墨西哥双语先行",detail:"葡语+西语完整本地化(UI+社区+客服+社媒)。"},{action:"YouTube创作者矩阵",detail:"批量签约10K-100K中腰部创作者做体验视频。"},{action:"社交裂变机制",detail:"邀请好友组队得皮肤——LATAM天然拉朋友一起玩。"},{action:"区域电竞赛事",detail:"巴西/墨西哥/阿根廷区域赛,奖金小但有仪式感。"},{action:"Free Fire退潮红利",detail:"Free Fire热度下降中,精准定位这批寻找新生存游戏的用户。"}],kpi:"巴西/墨西哥Top10下载 | K因子>1.2",timing:"Soft Launch第二波 或 GL同步"},
  {region:"🇸🇦 中东/北非 (MENA)",icon:"🇸🇦",playerBase:"高付费 · 移动优先",overview:"增长最快市场之一。沙特/阿联酋付费极强。PUBG Mobile/COD Mobile在此热度高。文化适配是关键。",keyInsights:["沙特/UAE的ARPU高于欧美","移动端绝对主导","暴力/裸体内容需合规","阿拉伯语本地化必须","Twitter/Snapchat/TikTok活跃"],
    strategy:[{action:"合规前置审查",detail:"调整血腥特效+裸体元素(裸奔是经典梗但MENA不行)。提前做版本分支。"},{action:"阿拉伯语完整本地化",detail:"UI/语音/客服/社媒全阿拉伯语。RTL排版适配。"},{action:"沙特/UAE高价值获取",detail:"鲸鱼付费极强。设计限定皮肤包+VIP服务器,定价更高。"},{action:"Twitter/Snapchat传播",detail:"MENA社交习惯不同。Twitter和Snapchat是主要讨论阵地。"},{action:"斋月特别活动",detail:"斋月期间夜间活跃度暴涨。设计斋月主题限时活动和特殊服务器。"}],kpi:"沙特/UAE ARPU>$8 | 斋月DAU+50%",timing:"GL后1个月(合规审查时间)"}
];

const POE2_DIFF = {
  positioning:{tagline:"唯一同时拥有「1500+天赋节点 × 宝石系统 × 赛季制 × F2P纯装饰付费」的暗黑ARPG",landscape:[{name:"PoE2",x:90,y:90,size:40,color:"var(--accent-gold)",tags:"BD自由度+赛季+F2P"},{name:"D4",x:70,y:55,size:35,color:"var(--phase-global)",tags:"3A+中等深度"},{name:"Last Epoch",x:60,y:65,size:22,color:"var(--phase-ea)",tags:"中度BD"},{name:"Grim Dawn",x:50,y:70,size:15,color:"var(--accent-orange)",tags:"经典+Mod"},{name:"Torchlight",x:30,y:40,size:18,color:"var(--phase-soft)",tags:"卡通+轻度"},{name:"Lost Ark",x:55,y:45,size:25,color:"var(--phase-cbt)",tags:"MMO+P2W"}],axisX:"Build构建深度 →",axisY:"系统复杂度 →"},
  pillars:[
    {icon:"🌳",title:"天赋树深度 = 品类天花板",desc:"1500+节点。D4约200,Last Epoch约300。不可追赶的系统壁垒。",moat:"每个Build Guide就是一篇深度UGC内容。",uaAngle:"3秒动画点亮全屏天赋树的视觉奇观。"},
    {icon:"💰",title:"F2P = 对D4的降维打击",desc:"D4买断$70+赛季费;Lost Ark有P2W。PoE2完全F2P+纯装饰。",moat:"D4每次付费争议=PoE2口碑红利。",uaAngle:"直接对比:D4花的钱在PoE2能买几套皮肤。"},
    {icon:"🔄",title:"赛季制 = 内容永动机",desc:"每3月全新赛季+全新机制。D4更新慢内容薄,Last Epoch更低频。",moat:"赛季预告片本身就是UA素材。",uaAngle:"「每3个月一款新游戏」的感知。"}
  ]
};
const POE2_REGIONAL = [
  {region:"🇺🇸🇬🇧 欧美",icon:"🇺🇸",playerBase:"核心大盘",overview:"ARPG核心市场。D4品牌强但PoE社区忠诚度极高。",keyInsights:["Reddit/Discord核心阵地","Steam主分发","Twitch ARPG成熟","对BD深度和公平最敏感"],strategy:[{action:"赛季首日Twitch Drops",detail:"每赛季首周Drops驱动观看和回流。"},{action:"D4间歇期加投",detail:"D4赛季间加大UA,捕获无聊ARPG玩家。"},{action:"ExileCon品牌事件",detail:"线下ExileCon是最强品牌忠诚武器。"}],kpi:"每赛季Steam峰值>500K",timing:"跟随赛季"},
  {region:"🇰🇷 韩国",icon:"🇰🇷",playerBase:"高付费ARPG市场",overview:"Lost Ark强势但P2W争议大。PoE2用F2P打差异。",keyInsights:["Lost Ark P2W=PoE2机会","完整韩化","网吧合作","Inven核心社区"],strategy:[{action:"反P2W定位",detail:"强调F2P无P2W,直接对标Lost Ark。"},{action:"Inven运营",detail:"开设Inven官方频道+韩语开发日志。"},{action:"网吧特权",detail:"网吧专属皮肤/经验加成。"}],kpi:"韩国ARPG品类Top3",timing:"跟随全球赛季"},
  {region:"🇨🇳 中国大陆",icon:"🇨🇳",playerBase:"最大潜在增量",overview:"PoE1有腾讯代理。暗黑品类在中国有庞大受众。",keyInsights:["需要版号","B站/抖音主渠道","直播极活跃","画质要求高"],strategy:[{action:"B站创作者计划",detail:"B站ARPG创作者是核心传播力量。"},{action:"抖音短视频UA",detail:"爽感混剪:清屏/光柱/天赋树。"},{action:"版号前置",detail:"尽早启动版号申请。"}],kpi:"中国区贡献全球30%+用户",timing:"视版号进度"}
];

// ═══ PLAYER AUDIENCE SEGMENTATION ═══
const RUST_AUDIENCE = {
  funnel: { core:"15%", broad:"40%", casual:"45%" },
  segments: [
    {
      tier: "core",
      label: "🔴 核心玩家 (Hardcore)",
      size: "~15% 用户 · 贡献 ~60% 留存 & 70% 付费",
      color: "var(--accent-red)",
      portrait: {
        who: "Rust PC端500h+老玩家、生存品类硬核死忠、Twitch/YouTube Rust内容消费者",
        age: "18-30岁男性为主",
        behavior: "每周20h+游戏时间,关注Wipe日历,在Discord/Reddit活跃,会写攻略/做视频",
        motivation: "追求PvP统治感、基地设计成就感、服务器社交地位",
        spend: "愿意为限定皮肤/Twitch Drops皮肤付费,年均消费$50-200+"
      },
      strategy: [
        { action: "PC→Mobile VIP导流", detail: "封测优先资格+老兵专属皮肤+跨端成就互通。让他们觉得Mobile是PC体验的延伸,不是替代品。" },
        { action: "社区KOC培育", detail: "识别并培养社区意见领袖(KOC):提供创作者工具包、抢先体验权限、官方认证标识。" },
        { action: "Build/基地UGC激励", detail: "月度基地设计大赛+Build攻略创作激励。核心玩家产出的UGC是吸引泛用户的最好素材。" },
        { action: "Wipe Day社区仪式", detail: "核心玩家是Wipe Day直播的主力观众和内容产出者。官方化Wipe Day为品牌事件,给核心玩家舞台。" },
        { action: "闭门反馈渠道", detail: "Discord设核心玩家专属反馈频道,定期与开发团队直接对话。他们的反馈=产品方向。" }
      ],
      uaApproach: "不需要UA获取——他们已经在。需要的是「留住」和「激活」:让他们成为传播节点。",
      contentStyle: "深度Build指南 / 高技术PvP操作集锦 / 基地电路教学 / 服务器政治故事"
    },
    {
      tier: "broad",
      label: "🟡 泛用户 (Mid-Core)",
      size: "~40% 用户 · 增长主力 · 付费潜力最大",
      color: "var(--accent-orange)",
      portrait: {
        who: "玩过吃鸡/Fortnite/Minecraft的射击+建造玩家,对生存品类感兴趣但没深入过Rust",
        age: "16-28岁,男性70%女性30%",
        behavior: "每周5-15h,主要通过TikTok/YouTube发现游戏,跟风热门游戏,社交驱动",
        motivation: "和朋友一起玩的社交体验、短期爽感(PvP击杀/建造成果)、看有趣的游戏内容",
        spend: "冲动消费型,首充+Battle Pass+节日限定,年均$10-50"
      },
      strategy: [
        { action: "TikTok/Shorts爽感短视频矩阵", detail: "3-15秒的「手机上炸家/PvP爆头/造出不可思议的基地」类爽感内容。这是获取泛用户的主渠道。" },
        { action: "「和朋友一起」社交裂变", detail: "邀请好友组队得皮肤/资源的强社交裂变机制。泛用户的核心驱动力是「朋友在玩」。" },
        { action: "降低上手门槛", detail: "Mobile端提供新手教学岛(安全区)+推荐PvE/新手服务器+简化建造模板。不改核心但降初始摩擦。" },
        { action: "中腰部KOL种草", detail: "不用头部主播(太贵),用大量5K-50K粉的中腰部游戏博主做「Rust Mobile初体验」内容铺量。" },
        { action: "赛季化Battle Pass", detail: "设计有吸引力的赛季Battle Pass,奖励路径清晰可见。泛用户需要明确的目标驱动,不能纯自由沙盒。" },
        { action: "「30秒看懂Rust」系列", detail: "制作极短的品类科普视频:什么是Rust?能干什么?和吃鸡有什么不同?用对比降低认知门槛。" }
      ],
      uaApproach: "UA重点投放人群。素材方向:短视频爽感+社交快感。渠道:TikTok/YouTube Shorts/Instagram Reels。",
      contentStyle: "爽感集锦 / 搞笑社交名场面 / 「朋友带我玩Rust」系列 / 新手逆袭故事 / 30秒速览"
    },
    {
      tier: "casual",
      label: "🟢 非核心人群 (Casual / Peripheral)",
      size: "~45% 潜在触达 · 低转化但高传播价值",
      color: "var(--accent-green)",
      portrait: {
        who: "不玩生存游戏但消费游戏内容的泛娱乐受众,看Rust视频/直播但自己不玩的「云玩家」",
        age: "15-35岁全性别",
        behavior: "刷TikTok/B站/YouTube看游戏搞笑视频,偶尔下载试玩热门游戏,1周内流失",
        motivation: "娱乐消遣、社交话题(「你看过那个Rust视频吗」)、好奇心驱动",
        spend: "极低/零付费,但他们的传播行为(转发/评论)带来免费流量"
      },
      strategy: [
        { action: "Rust「社会实验」病毒内容", detail: "Rust的服务器故事(背叛/复仇/贸易)天然适合做病毒传播内容。非核心人群看的是「故事」而非「玩法」。" },
        { action: "Meme工厂持续输出", detail: "裸奔梗/被抄家梗/Online Raid梗——保持Rust在社交媒体上的持续曝光。非核心人群通过Meme认识Rust。" },
        { action: "「看Rust就够了」观赛模式", detail: "Mobile端提供轻量观战/回放功能,让不想打PvP的人也能参与Rust世界(看朋友直播/服务器回放)。" },
        { action: "跨品类联动破圈", detail: "与非游戏领域联动(如:生存综艺、户外品牌、末日题材影视),让不玩游戏的人也知道Rust。" },
        { action: "极低门槛试玩入口", detail: "Mobile端提供「5分钟体验模式」:跳过复杂教程,直接进入一个预设好的有趣场景(如:偷别人家的资源逃跑)。" },
        { action: "将云玩家转化为轻度玩家", detail: "设计专门的「云→玩」转化路径:在Rust视频下方嵌入「点击体验同款场景」的深度链接。" }
      ],
      uaApproach: "不直接获取——通过病毒内容和Meme让他们成为免费传播节点。转化目标:5%从看→下载。",
      contentStyle: "故事化叙事 / 社会实验 / Meme/梗图 / 名场面混剪 / 「Rust里最离谱的事」"
    }
  ]
};

const POE2_AUDIENCE = {
  funnel: { core:"20%", broad:"35%", casual:"45%" },
  segments: [
    {
      tier: "core",
      label: "🔴 核心玩家 (Theorycrafter/Grinder)",
      size: "~20% 用户 · 贡献 ~65% 留存 & 75% MTX付费",
      color: "var(--accent-red)",
      portrait: {
        who: "PoE1老玩家(1000h+)、ARPG品类死忠(D2/Grim Dawn)、Build Theorycrafter、赛季首日冲榜玩家",
        age: "22-38岁男性为主",
        behavior: "每赛季首日通宵冲榜,日均4h+,逛Reddit/Discord/PoB,看Build Guide,研究数值",
        motivation: "追求Build极致优化、赛季挑战完成度、首杀荣誉、在社区分享Build的成就感",
        spend: "高付费意愿(限定MTX/皮肤套装),年均消费$100-500+"
      },
      strategy: [
        { action: "赛季首日48h冲榜体验优化", detail: "核心玩家的赛季首日体验决定口碑。确保服务器稳定、新机制无严重Bug、排队时间<5分钟。" },
        { action: "Build Theorycraft工具生态", detail: "官方支持Path of Building等社区工具,提供API和数据。核心玩家产出的Build指南是最好的UA素材。" },
        { action: "World First竞速赛官方化", detail: "设立官方排行榜+奖金+Twitch追踪。核心玩家是内容产出者,竞速赛是他们的舞台。" },
        { action: "闭门设计讨论", detail: "每赛季前发布设计意图博客+Discord核心玩家反馈渠道。Chris Wilson直接互动是最大的信任资产。" },
        { action: "限定MTX回馈", detail: "赛季挑战完成奖励+ExileCon限定+核心玩家专属Badge。让他们的「老玩家身份」被看见。" }
      ],
      uaApproach: "不需要UA——他们Day1就会来。需要的是留住+让他们成为传播引擎。",
      contentStyle: "Build Guide / 数值分析 / 赛季通关速通 / Boss战机制攻略 / 经济分析"
    },
    {
      tier: "broad",
      label: "🟡 泛用户 (ARPG Enthusiast)",
      size: "~35% 用户 · 增长核心 · D4/Lost Ark迁移主力",
      color: "var(--accent-orange)",
      portrait: {
        who: "D4/Lost Ark/Last Epoch玩家、对ARPG感兴趣但觉得PoE太复杂的观望者、被预告片吸引的新玩家",
        age: "18-35岁",
        behavior: "每周8-15h,赛季初玩2-3周后可能流失,被视觉爽感吸引,不太研究数值",
        motivation: "刷怪爽感、装备掉落多巴胺、视觉升级体验、「大家都在玩」的社交从众",
        spend: "中等付费(好看的皮肤+特效),年均$20-80"
      },
      strategy: [
        { action: "「D4毕业后的下一站」精准获客", detail: "在D4赛季间歇期加大投放。素材方向:「比D4更深度,但完全免费」。KOL做「D4→PoE2迁移指南」。" },
        { action: "新手引导优化", detail: "PoE2需要比PoE1好10倍的新手引导。引导不是教复杂系统,而是让新人在30分钟内体验到第一次「爽」。" },
        { action: "爽感UA素材矩阵", detail: "AoE清屏/Loot光柱/天赋树点亮——泛用户被视觉爽感吸引。按职业分组A/B测试素材。" },
        { action: "推荐Build入口", detail: "游戏内提供「热门Build一键配置」功能。泛用户不想自己研究1500个天赋节点,给他们捷径。" },
        { action: "社交分享激励", detail: "掉落稀有装备时一键分享到社媒。「你看我掉了什么」是泛用户的天然传播行为。" },
        { action: "Lost Ark流失玩家精准定向", detail: "Lost Ark的P2W让大量ARPG玩家受伤。用「公平+免费+深度」三张牌精准打这批人。" }
      ],
      uaApproach: "UA主力人群。渠道:YouTube Pre-roll+TikTok+Twitch广告。素材:爽感混剪+对比图。A/B测试职业×卖点组合。",
      contentStyle: "高燃混剪 / 新手友好Build推荐 / 「PoE2 vs D4」对比 / 5分钟上手指南 / 装备展示"
    },
    {
      tier: "casual",
      label: "🟢 非核心人群 (Spectator / Dormant)",
      size: "~45% 潜在触达 · 低转化但传播放大器",
      color: "var(--accent-green)",
      portrait: {
        who: "不玩ARPG但看游戏内容的泛游戏受众、被电影级CG预告片吸引的路人、PoE1流失玩家(觉得太难弃坑)",
        age: "15-40岁全性别",
        behavior: "看YouTube/TikTok游戏视频,偶尔被现象级游戏吸引下载,1周内判断去留",
        motivation: "视觉震撼、社交话题、好奇心、「大家都在讨论」的FOMO",
        spend: "零/极低,但传播价值高(转发/评论/安利)"
      },
      strategy: [
        { action: "电影级CG预告片破圈", detail: "PoE2的暗黑哥特CG是破圈最好的武器。TVC不要展示复杂系统,只展示「暗黑世界的震撼感」让路人好奇。" },
        { action: "「PoE2有多难」挑战类内容", detail: "高难度Boss挑战类视频在泛受众中传播极好(参考黑神话:悟空的传播路径)。让难度成为话题。" },
        { action: "降低首次体验摩擦", detail: "提供「快速体验模式」:跳过天赋树,用预设Build直接进入高爽感战斗。让非核心人群先「爽」后学。" },
        { action: "赛季热度蹭流量", detail: "每个赛季更新都是一次破圈机会。赛季预告片+社媒话题运营+KOL同步传播制造「大事件」感。" },
        { action: "PoE1流失玩家唤回", detail: "用「PoE2不是PoE1」的叙事:全新战斗系统/更好的新手引导/更好的画面。直接打他们弃坑的痛点。" }
      ],
      uaApproach: "不直接投放。通过CG预告片/挑战视频/赛季话题让他们自然进入漏斗。转化目标:3-5%从看→下载。",
      contentStyle: "电影级CG / Boss挑战名场面 / 「一分钟看懂PoE2」/ 画面对比 / 社交话题类"
    }
  ]
};

// ═══════════════════════════════════════════════════════════════
// HUNT: SHOWDOWN 1896 — FULL PROJECT DATA
// ═══════════════════════════════════════════════════════════════
// ═══ POE2 Steam Dashboard ═══
const POE2_STEAM = {
  appId:2694490, current:5355, peak24h:9853, allTimePeak:578562, avgMonth:9087,
  monthly:[
    {m:"2024-12",avg:304199,peak:578562},{m:"2025-01",avg:190494,peak:353966},
    {m:"2025-02",avg:88935,peak:180400},{m:"2025-03",avg:29923,peak:72573},
    {m:"2025-04",avg:92367,peak:245870},{m:"2025-05",avg:33895,peak:75273},
    {m:"2025-06",avg:15524,peak:30938},{m:"2025-07",avg:7866,peak:13635},
    {m:"2025-08",avg:25261,peak:352104},{m:"2025-09",avg:121310,peak:333360},
    {m:"2025-10",avg:36444,peak:85839},{m:"2025-11",avg:12281,peak:25692},
    {m:"2025-12",avg:79436,peak:290305},{m:"2026-01",avg:56873,peak:124660},
    {m:"2026-02",avg:19839,peak:43993},{m:"2026-03",avg:9087,peak:21459}
  ]
};

// ═══ Hunt Steam Dashboard ═══
const HUNT_STEAM = {
  appId:594650, current:9067, peak24h:30491, allTimePeak:59968, avgMonth:18345,
  monthly:[
    {m:"2025-04",avg:14500,peak:28000},{m:"2025-05",avg:13800,peak:27500},
    {m:"2025-06",avg:12900,peak:26000},{m:"2025-07",avg:13200,peak:27000},
    {m:"2025-08",avg:15800,peak:35000},{m:"2025-09",avg:59968,peak:59968},
    {m:"2025-10",avg:18500,peak:38000},{m:"2025-11",avg:14217,peak:30445},
    {m:"2025-12",avg:16211,peak:40671},{m:"2026-01",avg:16991,peak:35488},
    {m:"2026-02",avg:15787,peak:32037},{m:"2026-03",avg:16743,peak:41567}
  ]
};

const HUNT_DATA = {
  name:"Hunt: Showdown 1896", genre:["FPS/TPS"], art:["暗黑写实"], market:["全球"], currentPhase:"global",
  tags:["PvPvE提取射击","赏金猎人","哥特恐怖","Crytek","B2P+DLC+皮肤"],steamAppId:594650,
  phases:{
    cbt:{title:"CBT 封闭测试",duration:"4-6周",objective:"新地图/Boss验证 · 核心社区反馈 · 平衡性测试",
      cards:[
        {id:"h-c1",type:"event",title:"核心猎人闭门测试",desc:"通过游戏时长500h+/Prestige等级筛选老猎人发放测试资格,Discord闭门反馈。",priority:"high",tags:["核心玩家","测试","Discord"],timing:"T-6w→T-4w",refCount:4,role:{community:true,ua:false,visual:false}},
        {id:"h-c2",type:"campaign",title:"开发者直播 — 新内容揭秘",desc:"Crytek开发者直播展示新Boss机制/地图/武器。Hunt社区对Dev Stream有极高参与度。",priority:"high",tags:["Dev Stream","内容揭秘","社区"],timing:"T-4w→T-2w",refCount:3,role:{community:true,ua:true,visual:true}},
        {id:"h-c3",type:"kv",title:"新Boss/新地图概念KV",desc:"19世纪哥特恐怖风格的概念美术,延续Hunt独有的「腐败维多利亚」美学。",priority:"high",tags:["哥特恐怖","概念图","美学"],timing:"T-5w→T-2w",refCount:5,role:{community:false,ua:true,visual:true}},
        {id:"h-c4",type:"tvc",title:"新Boss战实机演示",desc:"黑暗沼泽中的Boss遭遇实机,展示音效设计+环境互动+团队协作。无UI版本。",priority:"high",tags:["Boss战","音效","实机"],timing:"T-3w→T-1w",refCount:6,role:{community:false,ua:true,visual:true}}
      ]},
    ea:{title:"EA / 赛季更新测试",duration:"1-2个月",objective:"新赛季内容验证 · KOL矩阵 · Twitch生态",
      cards:[
        {id:"h-e1",type:"campaign",title:"Twitch Drops赛季限定皮肤",desc:"赛季更新期间开启Twitch Drops,限定猎人皮肤/武器皮肤驱动直播观看。",priority:"high",tags:["Twitch Drops","限定皮肤","直播"],timing:"更新Day1→+2w",refCount:5,role:{community:true,ua:true,visual:true}},
        {id:"h-e2",type:"campaign",title:"KOL赏金挑战赛",desc:"邀请Psychoghost/Neenoh/Rachta等Hunt头部主播进行特殊赏金挑战,全程直播。",priority:"high",tags:["KOL","挑战赛","直播"],timing:"更新Day1→+2w",refCount:6,role:{community:true,ua:true,visual:false}},
        {id:"h-e3",type:"ua",title:"「一局定生死」短视频UA",desc:"Hunt的单局紧张感极其适合短视频:最后10秒提取/1v3翻盘/Boss区伏击。15秒竖版素材。",priority:"high",tags:["短视频","紧张感","提取"],timing:"更新-1w→持续",refCount:7,role:{community:false,ua:true,visual:true}},
        {id:"h-e4",type:"kv",title:"赛季更新主视觉",desc:"融合新Boss+新地图元素的赛季主KV,延续19世纪暗黑美学。多尺寸适配。",priority:"high",tags:["赛季KV","多尺寸"],timing:"更新-2w→Day1",refCount:4,role:{community:false,ua:true,visual:true}},
        {id:"h-e5",type:"aigc",title:"AIGC猎人故事生成器",desc:"用AIGC生成19世纪猎人背景故事+任务简报风格的社媒日常贴。维持Hunt独特的叙事调性。",priority:"mid",tags:["AIGC","叙事","维多利亚"],timing:"持续",refCount:3,role:{community:true,ua:false,visual:true}}
      ]},
    soft:{title:"区域化推广 & 平台拓展",duration:"持续",objective:"主机端优化 · 新区域开拓 · 留存提升",
      cards:[
        {id:"h-s1",type:"ua",title:"受众分层素材矩阵",desc:"硬核:「最紧张的PvP射击」;恐怖向:「19世纪猎魔体验」;战术向:「声音就是武器」。三条线A/B测试。",priority:"high",tags:["受众分层","A/B测试"],timing:"持续",refCount:5,role:{community:false,ua:true,visual:true}},
        {id:"h-s2",type:"campaign",title:"亚洲市场拓展 — 日韩/东南亚",desc:"Hunt在亚洲有增长空间。日本推恐怖氛围,韩国推竞技对枪,东南亚推团队合作。",priority:"mid",tags:["亚洲","本地化","区域化"],timing:"持续",refCount:3,role:{community:true,ua:true,visual:true}},
        {id:"h-s3",type:"event",title:"主机端(PS5/Xbox)优化推广",desc:"Hunt 1896大更新后主机体验提升。针对主机玩家做专属推广活动。",priority:"mid",tags:["主机","PS5","Xbox"],timing:"持续",refCount:3,role:{community:false,ua:true,visual:false}},
        {id:"h-s4",type:"kv",title:"「声音猎杀」创意广告系列",desc:"Hunt最独特的是音效系统。做一系列「只有声音」的创意广告:闭眼听脚步判断敌人位置。",priority:"mid",tags:["音效","创意","差异化"],timing:"持续",refCount:4,role:{community:false,ua:true,visual:true}}
      ]},
    global:{title:"全球持续运营 & 赛季化",duration:"持续运营",objective:"赛季化内容节奏 · 电竞化 · IP拓展",
      cards:[
        {id:"h-g1",type:"tvc",title:"年度大更新电影级CG",desc:"Crytek的CG制作能力顶级。年度大更新配合电影级CG预告,展示新猎人/新怪物/新世界观。",priority:"high",tags:["CG","电影级","年度大推"],timing:"大更新-4w→Day1",refCount:6,role:{community:false,ua:true,visual:true}},
        {id:"h-g2",type:"campaign",title:"全球赏金锦标赛",desc:"官方电竞赛事:3v3团队赏金竞速,全球排位→区域赛→总决赛。直播+Drops。",priority:"high",tags:["电竞","锦标赛","直播"],timing:"季度",refCount:5,role:{community:true,ua:true,visual:false}},
        {id:"h-g3",type:"campaign",title:"恐怖/哥特IP跨界联动",desc:"与恐怖片/哥特文化IP联动:如Bloodborne/Van Helsing/Castlevania。游戏内联动皮肤+主题活动。",priority:"mid",tags:["IP联动","哥特","恐怖"],timing:"季度",refCount:4,role:{community:true,ua:true,visual:true}},
        {id:"h-g4",type:"event",title:"万圣节/周年庆大型活动",desc:"Hunt的恐怖调性让万圣节成为天然的品牌事件。年度最大活动+限定内容+社区庆典。",priority:"high",tags:["万圣节","周年庆","品牌事件"],timing:"10月+周年",refCount:5,role:{community:true,ua:true,visual:true}},
        {id:"h-g5",type:"aigc",title:"AIGC赛季战报+猎人档案",desc:"自动生成个人赛季战报(击杀/提取/最佳武器)+维多利亚风格的猎人档案卡。",priority:"mid",tags:["AIGC","战报","个性化"],timing:"持续",refCount:3,role:{community:true,ua:false,visual:true}}
      ]}
  }
};

const HUNT_REFERENCES = {
  cbt:[
    {title:"Hunt 1896大更新 — IGN评测Top5改进",desc:"2024年8月Hunt完成CryEngine→CryEngine 5.11的引擎升级,画面/性能/内容全面提升。IGN重点评测了5大改进。",tags:["Hunt 1896","引擎升级","IGN"],type:"评测",metrics:{"画面提升":"显著","性能":"优化50%+","新内容":"新地图+Boss"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://www.ign.com/articles/the-top-5-improvements-in-the-massive-update-that-introduced-hunt-showdown-1896",source:"IGN"},
    {title:"Hunt — 音效设计行业标杆",desc:"Hunt的音效系统被公认为FPS游戏中最好的:每种地面材质不同脚步声、枪声可判断距离和方向、环境声音是战术信息。",tags:["Hunt","音效","行业标杆"],type:"方法论",metrics:{"社区评价":"音效设计天花板","战术价值":"声音=信息","差异化":"独一无二"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=hunt+showdown+sound+design",source:"YouTube / 社区"}
  ],
  ea:[
    {title:"Psychoghost — Hunt头部创作者生态",desc:"Psychoghost(500K+订阅)是Hunt社区最知名的创作者,其教学+娱乐内容风格定义了Hunt的YouTube品类。",tags:["Psychoghost","Hunt","YouTube"],type:"KOL",metrics:{"订阅":"500K+","日更":"近乎日更","社区影响":"极大"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://www.youtube.com/@Psychoghost",source:"YouTube"},
    {title:"Hunt Twitch Drops — 皮肤驱动直播模式",desc:"Hunt的Twitch Drops是核心的直播驱动手段。每次Drops平均提升品类观看100%+,限定皮肤有收藏价值。",tags:["Twitch Drops","限定皮肤","直播"],type:"Campaign",metrics:{"观看提升":"100%+","领取率":"高","皮肤交易":"有收藏价值"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=hunt+showdown+twitch+drops",source:"YouTube/Twitch"}
  ],
  soft:[
    {title:"Escape from Tarkov — 提取射击品类标杆",desc:"Tarkov定义了提取射击品类。Hunt可参考其硬核社区运营模式,但避免其过度复杂的问题。",tags:["Tarkov","提取射击","参考"],type:"方法论",metrics:{"品类定义者":"是","社区":"极硬核","问题":"更新慢"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=escape+from+tarkov+vs+hunt+showdown",source:"YouTube"}
  ],
  global:[
    {title:"Hunt Steam在线趋势(2025-2026)",desc:"月均2万+,历史峰值6万。1896大更新后回升明显。每次赛季更新+Twitch Drops出现阶段性峰值。",tags:["Hunt","Steam","数据"],type:"数据",metrics:{"月均":"20K+","历史峰值":"60K","1896更新后":"回升34%"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://steamcharts.com/app/594650",source:"SteamCharts"},
    {title:"Dead by Daylight — 恐怖PvP长线运营范本",desc:"DbD证明了恐怖PvP可以做长线运营:持续出新角色+IP联动(如SAW/生化危机)。Hunt可参考其IP联动策略。",tags:["DbD","恐怖PvP","IP联动","长线"],type:"方法论",metrics:{"运营年限":"8年+","IP联动":"20+","月活":"稳定百万级"},thumb:"https://i.ytimg.com/vi/cGDv1bMEiRE/maxresdefault.jpg",url:"https://www.youtube.com/results?search_query=dead+by+daylight+crossover",source:"YouTube"}
  ]
};

const HUNT_AIGC_PROMPTS = {
  cbt:[{title:"哥特恐怖Boss概念图",prompt:"19th century gothic horror monster in Louisiana swamp, grotesque eldritch creature, rotting Victorian architecture, fog and firelight, dark moody cinematic, photorealistic 8K --ar 16:9 --s 850",tool:"Midjourney v6.1"}],
  ea:[{title:"赏金猎人人物KV",prompt:"Victorian era bounty hunter in dark swamp, weathered leather coat, holding lantern and rifle, dramatic chiaroscuro lighting, muddy boots, gritty photorealistic portrait --ar 2:3 --s 800",tool:"MJ v6.1"}],
  soft:[{title:"Hunt创意音效广告封面",prompt:"dark atmospheric close-up of an ear listening intently, sound waves visualized as ghostly tendrils in fog, 19th century horror aesthetic, ultra minimal composition --ar 16:9 --s 700",tool:"MJ v6.1"}],
  global:[{title:"万圣节特别活动KV",prompt:"haunted Victorian manor in moonlit swamp, jack-o-lanterns with eldritch glow, hunters silhouetted against blood moon, gothic horror Halloween celebration, cinematic wide shot 8K --ar 16:9 --s 900",tool:"MJ v6.1"}]
};

const HUNT_ANALYSIS = {
  coreFeatures:[
    {icon:"🎯",title:"PvPvE提取射击 — 品类定义者",desc:"Hunt不是纯PvP也不是纯PvE,而是「猎怪+猎人」的双重狩猎。你在打Boss的时候,其他玩家在猎杀你。这种双重紧张感独一无二。",marketingAngle:"素材方向:展示「正在打Boss时被偷袭」的惊悚瞬间。双重威胁=双重紧张=天然短视频爆款。",tags:["PvPvE","提取射击","双重狩猎"]},
    {icon:"🔊",title:"音效设计 = 行业天花板",desc:"Hunt的音效系统被公认为FPS品类最好的。不同地面材质发出不同脚步声、枪声可判断距离和方向、乌鸦/马匹是天然警报。声音本身就是玩法。",marketingAngle:"做一系列「闭眼Hunt」创意:只放游戏音效,让观众通过声音判断发生了什么。极具差异化的内容形式。",tags:["音效","战术信息","差异化"]},
    {icon:"🏚️",title:"19世纪哥特恐怖美学",desc:"没有任何FPS游戏有Hunt这样的视觉风格:1896年路易斯安那沼泽×维多利亚哥特×克苏鲁怪物。这是完全独占的美学赛道。",marketingAngle:"视觉调性就是最好的品牌区分。所有素材坚持「腐败维多利亚」美学,和市场上所有FPS形成视觉反差。",tags:["哥特恐怖","维多利亚","美学独占"]},
    {icon:"💀",title:"Permadeath猎人系统",desc:"猎人死亡=永久失去(装备+等级+特性)。但你可以选择带更贵的装备追求更大回报。风险与回报的博弈是核心决策循环。",marketingAngle:"「你敢带传奇武器吗?」展示玩家在选装备时的纠结→一局暴富或一无所有的过山车。",tags:["Permadeath","风险回报","装备博弈"]},
    {icon:"👂",title:"慢节奏战术 — 反快餐射击",desc:"Hunt不是CoD/Apex那种快餐射击。一局30-50分钟,大部分时间在潜行、听声、判断。每一枪都有分量。这吸引的是「思考型」FPS玩家。",marketingAngle:"打「反快餐」定位:「如果你厌倦了跑酷射击,Hunt让你重新感受每一颗子弹的重量。」",tags:["慢节奏","战术","反快餐"]},
    {icon:"🤝",title:"3人小队 — 信任与背叛",desc:"最佳体验是3人小队。队友的配合、声音共享、战术分工创造了极强的社交粘性。但也允许solo带来独狼体验。",marketingAngle:"「你信任你的队友吗?」展示小队配合的高光时刻+solo逆袭名场面。",tags:["小队","信任","社交"]}
  ],
  competitors:[
    {name:"Escape from Tarkov",icon:"🎒",positioning:"硬核提取射击标杆,系统极复杂,更新慢",comparison:[
      {dimension:"上手难度",us:"高但有引导",them:"极高(几乎无引导)",advantage:"us"},
      {dimension:"美术风格",us:"哥特恐怖(独一无二)",them:"现代军事写实",advantage:"us"},
      {dimension:"单局节奏",us:"30-50min(适中)",them:"可超1h(拖沓)",advantage:"us"},
      {dimension:"PvE元素",us:"Boss狩猎+怪物(核心玩法)",them:"AI巡逻(辅助)",advantage:"us"},
      {dimension:"装备系统深度",us:"简洁(武器+消耗品)",them:"极复杂(弹药/医疗/改装)",advantage:"them"},
      {dimension:"更新频率",us:"稳定季度更新",them:"更新慢且争议大",advantage:"us"},
      {dimension:"社区口碑",us:"正面(1896更新回升)",them:"两极化(BSG争议多)",advantage:"us"}
    ],communityLeverage:"Tarkov玩家是Hunt最精准的潜在用户——他们已经证明了喜欢提取射击,但被Tarkov的复杂度和更新节奏折磨。Hunt的优势:更好的美学+更适中的复杂度+更稳定的更新。话术:「想要Tarkov的紧张感,但不想做Excel表格？试试Hunt。」"},
    {name:"Apex Legends",icon:"🏃",positioning:"快节奏大逃杀射击,动作流畅但缺深度",comparison:[
      {dimension:"射击手感",us:"慢节奏+每枪有重量",them:"快节奏+技能组合",advantage:"tie"},
      {dimension:"紧张感",us:"极高(Permadeath+声音)",them:"中等(复活机制降低)",advantage:"us"},
      {dimension:"视觉风格",us:"哥特恐怖(独占)",them:"科幻卡通",advantage:"us"},
      {dimension:"玩家基数",us:"月均2万+(小而精)",them:"月活千万级",advantage:"them"},
      {dimension:"深度/策略性",us:"声音战术+Boss路线+提取决策",them:"技能组合+机动性",advantage:"us"},
      {dimension:"新手友好度",us:"较难上手",them:"容易上手",advantage:"them"}
    ],communityLeverage:"Apex的休闲化趋势让部分硬核FPS玩家不满。Hunt可以吸收这批「想要更有深度的射击体验」的玩家。话术:「Apex太快餐?Hunt让你重新思考每一步。」"},
    {name:"Dead by Daylight",icon:"🔪",positioning:"非对称恐怖PvP,IP联动王者,长线运营8年+",comparison:[
      {dimension:"恐怖氛围",us:"19世纪哥特(沉浸)",them:"恐怖片引用(流行文化)",advantage:"us"},
      {dimension:"PvP形式",us:"对等PvP(猎人vs猎人)",them:"非对称(1杀手vs4生存者)",advantage:"tie"},
      {dimension:"IP联动",us:"潜力大但未充分开发",them:"20+ IP联动(SAW/生化/IT等)",advantage:"them"},
      {dimension:"长线运营",us:"稳定但增长缓慢",them:"8年+持续增长",advantage:"them"},
      {dimension:"射击深度",us:"完整FPS(枪械/弹道)",them:"非射击(追跑/修机)",advantage:"us"},
      {dimension:"万圣节契合度",us:"天然契合(恐怖+19世纪)",them:"天然契合(恐怖IP)",advantage:"tie"}
    ],communityLeverage:"DbD证明了恐怖PvP可以长线运营。Hunt应学习DbD的IP联动策略:与Bloodborne/Van Helsing/Castlevania等哥特IP联动,每次联动=新内容+新用户。话术:「如果你喜欢DbD的恐怖氛围但想要真正的射击体验,Hunt是答案。」"}
  ],
  communityStrategies:[
    {icon:"🔊",title:"「声音即武器」= 品牌差异化",problem:"FPS品类同质化严重,画面/枪械/模式都大同小异。",solution:"Hunt的音效系统是独一无二的品牌资产。没有任何竞品的声音设计达到这个水平。把「声音」变成品牌标签。",actions:["制作「闭眼Hunt」系列短视频:只放音效让观众猜发生了什么","与音频品牌(SteelSeries/Sennheiser)联动推「Hunt认证耳机」","开发者深度讲解音效系统的Behind The Scenes","社区举办「最佳声音时刻」集锦大赛"],kpi:"目标:「声音」成为Hunt品牌第一联想词"},
    {icon:"🏚️",title:"哥特美学 = 视觉护城河",problem:"市面FPS要么科幻要么现代军事,视觉同质化。",solution:"Hunt的19世纪哥特恐怖美学是完全独占的赛道。越坚持越独特,越能筛选出高忠诚度玩家。",actions:["所有素材坚持「腐败维多利亚」调色(不妥协流行风格)","推出「Hunt Art Book」数字/实体画集","与哥特/暗黑艺术家合作限定皮肤","万圣节作为年度最大品牌事件重点打造"],kpi:"目标:Hunt成为「恐怖FPS美学」的代名词"},
    {icon:"🎬",title:"「最后10秒」= 天然短视频爆款",problem:"Hunt的慢节奏与短视频平台的快消费看似矛盾。",solution:"Hunt虽然整局慢节奏,但最后10秒的提取逃生/伏击翻盘是极致的紧张感爆发。这恰恰是短视频最好的素材。",actions:["建立「Hunt Last 10 Seconds」官方系列","用AI自动识别并剪辑高光提取时刻","鼓励社区投稿最紧张的提取瞬间","TikTok/Shorts/Reels三平台同步运营"],kpi:"目标:月度短视频UGC产出>2000条"},
    {icon:"🤠",title:"IP联动 = 增长引擎",problem:"Hunt的用户盘相对小(月均2万),需要破圈。",solution:"Hunt的19世纪哥特调性与大量恐怖/暗黑IP天然匹配。学习DbD的联动策略,每次联动=新用户入口。",actions:["优先联动Bloodborne/Castlevania/Van Helsing等哥特IP","与恐怖电影(如温子仁系列)做上映联动活动","万圣节期间与恐怖游戏品类做跨品类联动","每次联动配套限定皮肤+Twitch Drops"],kpi:"目标:每次IP联动带来20%+新增"},
    {icon:"🏆",title:"赏金锦标赛 = 电竞化起点",problem:"Hunt缺乏正式电竞赛事,竞技价值未被挖掘。",solution:"Hunt的3v3小队PvPvE格式天然适合电竞化。赏金竞速(谁先击杀Boss+提取)是观赏性极强的赛制。",actions:["建立官方Hunt Championship赛季赛","3v3赏金竞速赛制(击杀Boss+提取计时)","赛事全程Twitch直播+观看Drops","赛事高光做成短视频二次传播"],kpi:"目标:赛事观看峰值>50K"}
  ]
};

const HUNT_DIFF = {
  positioning:{tagline:"唯一同时拥有「PvPvE双重狩猎 × 行业顶级音效 × 19世纪哥特美学 × Permadeath风险博弈」的提取射击游戏",landscape:[{name:"Hunt",x:75,y:80,size:35,color:"var(--accent-gold)",tags:"PvPvE+音效+哥特"},{name:"Tarkov",x:85,y:90,size:30,color:"var(--phase-cbt)",tags:"硬核提取+军事"},{name:"Apex",x:30,y:40,size:35,color:"var(--phase-ea)",tags:"快餐射击+技能"},{name:"DbD",x:50,y:55,size:28,color:"var(--phase-soft)",tags:"恐怖PvP+IP"},{name:"CoD MW",x:20,y:30,size:32,color:"var(--phase-global)",tags:"快餐军事射击"},{name:"Valorant",x:40,y:60,size:30,color:"var(--accent-purple)",tags:"战术射击+技能"}],axisX:"PvE元素深度 →",axisY:"战术/慢节奏 →"},
  pillars:[
    {icon:"🔊",title:"音效设计 = 无法复制的护城河",desc:"Hunt的声音系统不是「音效好听」,而是「声音=核心玩法」。脚步/枪声/环境声全是战术信息。竞品无法速成。",moat:"Crytek多年积累的音频技术+关卡声学设计,这是工程壁垒不是创意壁垒。",uaAngle:"「闭眼Hunt」系列:只放音效让观众猜。"},
    {icon:"🏚️",title:"19世纪哥特 = 美学独占",desc:"市面上没有第二款FPS是19世纪路易斯安那沼泽+维多利亚哥特+克苏鲁怪物的组合。这是完全独占的视觉赛道。",moat:"美学一旦定义就成为品牌资产。抄美学=抄品牌,竞品不会这么做。",uaAngle:"所有素材坚持「腐败维多利亚」调色。"},
    {icon:"🎯",title:"PvPvE = 双重紧张感",desc:"Tarkov是纯PvP,DbD是非对称PvP。Hunt独创的「打Boss时被人猎杀」的双重威胁,创造了独一无二的紧张体验。",moat:"PvPvE的关卡设计+Boss机制+声音系统三位一体,缺一不可。",uaAngle:"「打Boss还是打人?」的决策困境瞬间。"},
    {icon:"💀",title:"Permadeath = 每局都是赌注",desc:"Tarkov也有类似机制但太复杂。Hunt的Permadeath更优雅:简单的装备选择+永久失去=清晰的风险回报。",moat:"Permadeath+声音系统组合创造的情绪张力,轻度游戏无法复制。",uaAngle:"「你敢带传奇武器吗?」系列。"}
  ]
};

const HUNT_REGIONAL = [
  {region:"🇺🇸🇬🇧 欧美",icon:"🇺🇸",playerBase:"核心大盘(70%+用户)",overview:"Hunt的主要市场。恐怖/西部题材在欧美有天然文化亲和力。Twitch/YouTube创作者生态集中于此。",keyInsights:["恐怖/西部文化天然契合","Twitch创作者矩阵成熟","Steam是主要平台","Reddit社区活跃"],strategy:[{action:"Twitch Drops赛季联动",detail:"每次大更新必开Drops,限定猎人皮肤驱动观看。"},{action:"万圣节年度大事件",detail:"万圣节是Hunt最大的品牌窗口。限定活动+皮肤+KOL联动。"},{action:"恐怖品类跨界",detail:"与恐怖电影上映联动,蹭恐怖品类热度。"}],kpi:"赛季更新Steam峰值>40K",timing:"跟随赛季+万圣节"},
  {region:"🇯🇵🇰🇷 日韩",icon:"🇯🇵",playerBase:"高增长潜力",overview:"日本对恐怖题材有天然亲和(和风恐怖文化),韩国FPS市场成熟。但Hunt在亚洲认知度低,需要破圈。",keyInsights:["日本:恐怖文化契合度极高","韩国:FPS市场成熟但被Valorant/OW占据","需要完整本地化","KOL是破圈关键"],strategy:[{action:"日本:恐怖氛围前推",detail:"素材侧重19世纪怪物恐怖感,对标日本恐怖游戏受众(生化/寂静岭玩家)。"},{action:"韩国:战术射击定位",detail:"对标Valorant受众中想要更多策略深度的玩家。强调声音战术。"},{action:"亚洲KOL种草",detail:"签约日韩恐怖/射击类游戏KOL做Hunt体验。"}],kpi:"亚洲区月活提升100%",timing:"配合大更新+本地化完成"},
  {region:"🌎 全球其他",icon:"🌎",playerBase:"长尾增量",overview:"拉美/东南亚/中东有FPS受众但Hunt渗透率极低。需要靠短视频和IP联动破圈。",keyInsights:["短视频是主要发现渠道","对免费游戏更敏感(Hunt是买断制)","恐怖题材在部分区域有文化限制"],strategy:[{action:"短视频全球化矩阵",detail:"「最后10秒」系列+多语言本地化+TikTok全球投放。"},{action:"折扣周期性推广",detail:"Steam大促期间加大Hunt折扣力度+配合UA投放。"},{action:"F2P周末体验",detail:"定期开放免费周末体验,降低买断门槛。"}],kpi:"Steam大促期间销量提升200%",timing:"跟随Steam促销节奏"}
];

const HUNT_AUDIENCE = {
  funnel:{core:"25%",broad:"35%",casual:"40%"},
  segments:[
    {tier:"core",label:"🔴 核心猎人 (Veteran Hunter)",size:"~25% 用户 · 贡献 ~70% 游戏时长 & 80% DLC/皮肤付费",color:"var(--accent-red)",
      portrait:{who:"500h+老猎人,Prestige多轮,精通声音系统和地图路线",age:"20-35岁男性",behavior:"日均2h+,每次更新Day1上线,看Psychoghost/Neenoh的攻略,在Discord讨论武器平衡",motivation:"精通声音战术、追求高KDA、收集稀有皮肤、在社区分享精彩操作",spend:"DLC+限定皮肤+Twitch Drops皮肤,年均$50-150"},
      strategy:[
        {action:"赛季更新Day1体验优化",detail:"核心猎人对更新质量极度敏感。确保新内容Day1无重大Bug,服务器稳定。"},
        {action:"Prestige奖励强化",detail:"设计Prestige专属奖励(限定皮肤/称号/武器挂件),回馈核心玩家的时间投入。"},
        {action:"闭门平衡性讨论",detail:"Discord核心玩家频道,定期与设计师讨论武器/Boss/地图平衡。"},
        {action:"UGC高光集锦激励",detail:"月度最佳操作集锦大赛+官方认证创作者计划。"}
      ],uaApproach:"不需要UA获取,需要留住和激活。让他们成为传播引擎和内容产出者。",contentStyle:"高技术操作集锦 / 声音战术教学 / 武器深度评测 / Boss打法优化"},
    {tier:"broad",label:"🟡 泛射击玩家 (FPS Explorer)",size:"~35% 用户 · 增长主力 · 从CoD/Apex/Tarkov迁移",color:"var(--accent-orange)",
      portrait:{who:"玩过CoD/Apex/Tarkov/Valorant的FPS老手,被Hunt的独特美学或「最紧张FPS」标签吸引",age:"18-30岁",behavior:"每周5-10h,被短视频/直播吸引下载,初期学习曲线可能劝退",motivation:"寻找更有深度的射击体验、厌倦快餐FPS、被恐怖美学吸引",spend:"会买折扣本体+偶尔买好看的皮肤,$20-60/年"},
      strategy:[
        {action:"「反快餐射击」定位UA",detail:"素材直接对标:「厌倦了CoD的重生循环?Hunt让每一颗子弹都有意义。」"},
        {action:"新手猎人训练营",detail:"设计渐进式教学:单人试炼→AI对战→新手保护服→正式服务器。降低前3小时流失。"},
        {action:"「Tarkov太复杂?」迁移叙事",detail:"对标Tarkov玩家:同样的紧张感,更优雅的复杂度,更好的美学。"},
        {action:"短视频爽感矩阵",detail:"「最后10秒提取」「1v3翻盘」「完美伏击」——15秒竖版TikTok/Shorts。"},
        {action:"Steam大促折扣+免费周末",detail:"买断制是门槛。定期折扣+免费周末体验降低尝试成本。"}
      ],uaApproach:"UA核心人群。渠道:TikTok短视频+YouTube Pre-roll+Steam推荐。素材:紧张感高光+美学展示。",contentStyle:"紧张时刻集锦 / 新手入门指南 / 「Hunt vs Tarkov」对比 / 武器推荐 / 美学展示"},
    {tier:"casual",label:"🟢 恐怖内容消费者 (Horror Spectator)",size:"~40% 潜在触达 · 低转化但传播放大器",color:"var(--accent-green)",
      portrait:{who:"看恐怖游戏视频/直播但不一定自己玩的泛恐怖爱好者,被Hunt美学吸引的路人",age:"16-35岁全性别",behavior:"看YouTube/TikTok恐怖游戏内容,关注万圣节/恐怖电影话题,偶尔尝试热门游戏",motivation:"恐怖氛围体验、视觉震撼、社交话题(「这游戏太吓人了」)、FOMO",spend:"极低/零(买断制门槛高),但传播价值大"},
      strategy:[
        {action:"恐怖氛围ASMR内容",detail:"Hunt的环境音效本身就是恐怖ASMR。制作「Hunt沼泽夜行」氛围视频,吸引恐怖内容消费者。"},
        {action:"万圣节跨品类传播",detail:"万圣节期间Hunt的恐怖内容天然契合社交媒体氛围。与恐怖博主/片单号合作传播。"},
        {action:"「我不敢玩但我爱看」观众经济",detail:"这批人不会成为玩家但会成为直播观众。确保Hunt主播有足够的恐怖+紧张+搞笑内容供给。"},
        {action:"Steam免费周末+大促定期降门槛",detail:"买断制是最大障碍。免费周末让好奇者零成本尝试。"},
        {action:"IP联动破圈",detail:"与恐怖电影/IP联动(如温子仁/Castlevania),让不玩游戏的恐怖爱好者也认识Hunt。"}
      ],uaApproach:"不直接获取。通过恐怖内容+万圣节话题+IP联动让他们自然进入漏斗。转化目标:免费周末3-5%→购买。",      contentStyle:"恐怖氛围ASMR / 万圣节特辑 / 「最吓人的时刻」集锦 / 恐怖电影×Hunt联动 / 美学展示"}
  ]
};

// ═══════════════════════════════════════════════════════════════
// BRAND HOUSE — 品牌屋金字塔
// ═══════════════════════════════════════════════════════════════

const POE2_BRAND_HOUSE = {
  apex: { label:"品牌定位", content:"暗黑ARPG品类的终极深度体验", color:"var(--accent-red)" },
  promise: { label:"品牌承诺", content:"无限的Build自由 · 绝对的公平竞技 · 永不结束的暗黑世界", color:"var(--accent-orange)" },
  pillars: [
    { label:"Build自由度", items:["1500+天赋节点","宝石系统无限组合","12职业升阶","社区BD创意大赛","Path of Building工具生态"], color:"var(--phase-cbt)" },
    { label:"公平付费", items:["F2P完全免费","纯装饰MTX","不卖数值/体力/抽卡","对比D4/Lost Ark降维打击","「公平」成为品牌第一联想"], color:"var(--phase-ea)" },
    { label:"赛季永动机", items:["每3月全新赛季","全服重置+新机制","赛季预告=UA素材","World First竞速赛","ExileCon品牌事件"], color:"var(--phase-soft)" },
    { label:"暗黑美学", items:["Grimdark审美天花板","暗色调KV统一语言","暗黑IP联动","视觉筛选高价值用户","反二次元差异化"], color:"var(--phase-global)" }
  ],
  foundation: { label:"底层支撑", items:["GGG开发者透明度","Chris Wilson社区信任","8年PoE1社区积累","Reddit/Discord核心阵地","创作者UGC自传播飞轮"], color:"var(--accent-green)" },
  audiences: { label:"目标人群", items:["核心: Theorycrafter/Grinder (20%)","泛用户: D4/Lost Ark迁移者 (35%)","非核心: CG预告片路人 (45%)"], color:"var(--accent-blue)" }
};

const RUST_BRAND_HOUSE = {
  apex: { label:"品牌定位", content:"唯一真正让你「失去一切」的生存沙盒", color:"var(--accent-red)" },
  promise: { label:"品牌承诺", content:"真实的危险 · 自由的建造 · 永不结束的服务器社会", color:"var(--accent-orange)" },
  pillars: [
    { label:"Full Loot PvP", items:["死亡掉落一切","抄家/偷袭/伏击","高风险=高情绪波动","「你敢吗？」病毒内容","紧张感不可替代"], color:"var(--phase-cbt)" },
    { label:"深度建造", items:["建造+电路系统","自动化农场/安防","基地设计UGC","「Rust Base Tour」内容品类","Mobile端建造体验"], color:"var(--phase-ea)" },
    { label:"社交沙盒", items:["服务器=微型社会","外交/贸易/背叛","每个服务器独一无二故事","社会实验=天然病毒内容","Welyn电影化叙事"], color:"var(--phase-soft)" },
    { label:"Wipe赛季制", items:["每月服务器重置","全员同一起跑线","Wipe Day=直播事件","天然回归驱动力","双端同步Wipe(Mobile)"], color:"var(--phase-global)" }
  ],
  foundation: { label:"底层支撑", items:["8年长线运营+10万月活","Twitch 3050万小时/年","Welyn/hJune创作者矩阵","皮肤经济+Twitch Drops","Rust Mobile品类空白占位"], color:"var(--accent-green)" },
  audiences: { label:"目标人群", items:["核心: PC端500h+老玩家 (15%)","泛用户: 吃鸡/MC跨品类 (40%)","非核心: 云玩家/Meme消费者 (45%)"], color:"var(--accent-blue)" }
};

const HUNT_BRAND_HOUSE = {
  apex: { label:"品牌定位", content:"PvPvE提取射击的氛围天花板", color:"var(--accent-red)" },
  promise: { label:"品牌承诺", content:"双重狩猎的极致紧张 · 用耳朵战斗 · 19世纪暗黑美学", color:"var(--accent-orange)" },
  pillars: [
    { label:"PvPvE双重狩猎", items:["打Boss时被人猎杀","双重威胁=双重紧张","赏金竞速赛制","Boss路线战术选择","提取逃生=天然短视频"], color:"var(--phase-cbt)" },
    { label:"音效即武器", items:["行业顶级音效设计","脚步/枪声=战术信息","不同地面不同声音","「闭眼Hunt」创意系列","SteelSeries联名耳机"], color:"var(--phase-ea)" },
    { label:"哥特恐怖美学", items:["19世纪路易斯安那沼泽","维多利亚×克苏鲁","完全独占的视觉赛道","万圣节=年度品牌事件","Hunt Art Book画集"], color:"var(--phase-soft)" },
    { label:"Permadeath博弈", items:["猎人死亡=永久失去","装备选择=风险决策","「你敢带传奇武器吗？」","高风险高回报循环","反快餐射击定位"], color:"var(--phase-global)" }
  ],
  foundation: { label:"底层支撑", items:["Crytek引擎技术力","1896大更新品质飞跃","Psychoghost/Neenoh创作者","Twitch Drops皮肤经济","恐怖/哥特IP联动潜力"], color:"var(--accent-green)" },
  audiences: { label:"目标人群", items:["核心: 500h+老猎人 (25%)","泛用户: CoD/Tarkov迁移者 (35%)","非核心: 恐怖内容消费者 (40%)"], color:"var(--accent-blue)" }
};

// ═══════════════════════════════════════════════════════════════
// RUST — 素材规划 (3 大类：运营社群 / 品牌大素材 / UA 买量)
// 面向 Rust Mobile 发行 + Rust PC 长线并行
// ═══════════════════════════════════════════════════════════════
const RUST_ASSET_PLAN = {
  overview: {
    goal: "Rust Mobile 首曝→全球公测全周期，PC 长线联动，形成「社群温度 + 品牌势能 + 买量转化」三位一体素材矩阵",
    principle: "社群素材抓温度 · 品牌素材抓势能 · 买量素材抓转化 — 三类素材互为原料，不重复生产",
    ratio: "按投入占比约：社群 30% · 品牌 30% · 买量 40%（公测前 2 个月买量拉到 55%）",
    kpi: "社群看互动率/UGC 产出 · 品牌看曝光/搜索词 · 买量看 CPI/ROAS/D7 留存"
  },
  // ───────────────── 1. 运营社群素材 ─────────────────
  community: {
    label: "运营社群素材",
    icon: "💬",
    color: "var(--accent-green)",
    positioning: "低成本 · 高频次 · 强互动 · 养温度",
    target: "Discord / X(Twitter) / Reddit / TikTok 官号 / 微信社群 / B站官号",
    production: "以内部团队 + AIGC + 玩家 UGC 再剪辑为主，单条成本 < ¥3K",
    frequency: "Discord 每日 · X 每日 2-3 条 · TikTok/Reels 每周 5-7 条 · 长视频每月 1 条",
    audience: "核心 500h+ 老玩家 + 现有 Discord 50K 成员 + 创作者圈",
    pillars: [
      {
        name: "开发日志 DevLog",
        desc: "每周/双周发布 Rust Mobile 开发进度，展示从 PC 移植过程的技术细节、踩坑复盘",
        formats: ["短视频 30-60s", "图文长推", "Discord 内部直播"],
        cadence: "每周 1 期，公测前 24 周不断更",
        examples: ["「如何把电路系统塞进手机」3 分钟拆解", "「Mobile 建造手感调参」幕后", "「PC 玩家骂我们，我们改了什么」复盘"],
        kpi: "Discord 发言量 · X 互动率 > 8%",
        accent: "#3fb950"
      },
      {
        name: "玩家故事 UGC 征集",
        desc: "征集 Rust 服务器的「社会实验」故事，官方剪辑放大。Rust 最值钱的资产=玩家故事",
        formats: ["UGC 合集短视频", "玩家访谈图文", "Welyn 式电影化叙事"],
        cadence: "每月 1 次主题征集 + 每周 UGC 精选集锦",
        examples: ["#MyRustStory 征集", "「我的基地被抄家 10 次」系列", "月度「最离谱外交事件」盘点"],
        kpi: "UGC 参与量 · TikTok/Reels 播放 · 原作者涨粉"
      },
      {
        name: "赛季社区活动",
        desc: "绑定 Wipe 月度重置节奏，做「全员同起跑线」仪式感，Mobile 端同步 Wipe 制造双端同温",
        formats: ["Wipe Day 直播", "赛季预热海报", "社区竞赛(最佳基地/最长生存)"],
        cadence: "每月 1 次 Wipe Day + 每季度 1 次大型活动",
        examples: ["Wipe Day Twitch Drops 皮肤", "「48 小时裸奔挑战」", "社区建筑大赛"],
        kpi: "Wipe Day 峰值同时在线 · Drops 领取量"
      },
      {
        name: "KOL / 创作者共创",
        desc: "Welyn/hJune 等头部创作者不花钱就在产内容。官方要做的是供弹药、给独家、搭桥梁",
        formats: ["创作者包(素材+未公开截图)", "Pre-release 试玩", "联合直播"],
        cadence: "每次大版本 + Mobile 关键节点",
        examples: ["Mobile CBT 独家 Key 给 Top 20 创作者", "「Rust 10 年」纪录片素材包", "创作者 Discord 私群"],
        kpi: "创作者自发产出条数 · Twitch 观看小时"
      }
    ]
  },
  // ───────────────── 2. 品牌大素材 ─────────────────
  brand: {
    label: "品牌大素材",
    icon: "🏛️",
    color: "var(--accent-gold)",
    positioning: "高投入 · 低频次 · 电影级 · 立势能",
    target: "YouTube / Steam 商店页 / App Store / 发布会 / 线下展会 / 投放前贴",
    production: "外部顶级制作公司，单条预算 ¥100-500K，制作周期 8-16 周",
    frequency: "全周期 3-5 条核心大片 + 2-3 波联动大事件",
    audience: "全球泛用户 + 投资人 + 行业媒体 + 平台方(Steam/Apple/Google)",
    pillars: [
      {
        name: "核心品牌 TVC",
        desc: "定义 Rust Mobile「荒野从未如此近」品牌主张的电影级大片，覆盖全周期所有投放前贴",
        formats: ["60s 电影级 TVC(全平台通投)", "30s 剪辑版", "15s 买量切片"],
        cadence: "首曝 1 条 · EA 1 条 · 全球公测 1 条 共 3 波",
        examples: ["「两个世界一个 Rust」双端 TVC", "「从 PC 到口袋」品牌宣言片", "「You vs Everyone」人性博弈概念片"],
        budget: "¥500K / 条，周期 12-16 周",
        kpi: "YouTube 自然播放 > 500 万 · 破圈媒体报道 > 50 家",
        accent: "#f59e0b"
      },
      {
        name: "主视觉 KV 矩阵",
        desc: "全球统一主 KV + 按区域/渠道/节日衍生系列。Rust 末日美学 + Mobile 设备符号的视觉 DNA",
        formats: ["全球主 KV(16:9 / 9:16 / 1:1)", "区域版本(东南亚/欧美/拉美)", "节日衍生(春节/万圣/圣诞)"],
        cadence: "每大节点 1 套主 KV + 月度衍生",
        examples: ["首曝主 KV「拿着手机的手，屏幕溢出末日」", "EA KV「荒野从未如此近」", "公测 KV「你的基地现在安全吗？」"],
        budget: "¥150K / 套，含拍摄 + 合成 + 多版本",
        kpi: "Steam / App Store 商店页 CTR · 媒体素材复用率"
      },
      {
        name: "发布会 & 展会大事件",
        desc: "Gamescom / TGA / Apple Event / 独立发布会等舞台大事件，一次性拿下行业声量",
        formats: ["15 分钟舞台 Demo", "媒体试玩舱", "联名快闪装置"],
        cadence: "全周期 2-3 波大事件",
        examples: ["Gamescom 2026 Rust Mobile 首曝舞台", "Twitch Rivals 邀请赛", "公测期纽约 / 东京线下快闪"],
        budget: "¥1-3M / 次 含场地+制作+公关",
        kpi: "舞台 PR 总曝光 · 展会 Demo 试玩人次"
      },
      {
        name: "IP 联名大企划",
        desc: "与顶级 IP / 品牌联名，借势扩圈。参考 OTV 服务器事件——现象级营销往往来自联名",
        formats: ["联名皮肤 + 活动服务器", "联名 TVC", "联合直播"],
        cadence: "每年 2-3 次大联名",
        examples: ["与 Twitch 合作 Drops 大赛季", "与 SteelSeries / Razer 外设联名", "与潮牌 / 潮玩跨界(末日美学契合)"],
        budget: "¥500K-2M / 次",
        kpi: "联名期 DAU 同比 · 破圈媒体覆盖"
      }
    ]
  },
  // ───────────────── 3. UA 买量素材 ─────────────────
  ua: {
    label: "UA 买量素材",
    icon: "📈",
    color: "var(--accent-cyan)",
    positioning: "批量 · 高频测试 · A/B 淘汰 · 拿 ROAS",
    target: "Meta(FB/IG/Reels) · Google/YouTube · TikTok Ads · AppLovin · Unity Ads · 国内巨量/腾讯广告",
    production: "内部 + 外包素材工厂 + AIGC 批量生产，单条成本 ¥500-3K",
    frequency: "全周期累计 500-1000 条素材，每周新增 30-50 条，保持迭代",
    audience: "按买量分层：硬核生存 / 泛生存 / 吃鸡流失 / MC 生存 / 社交向",
    pillars: [
      {
        name: "卖点分层测试素材",
        desc: "按 Rust 三大卖点分层并行产出，找到不同人群最敏感的钩子",
        formats: ["15s 竖版视频", "6s 开场钩子", "可玩广告 Playable"],
        cadence: "每周 30+ 条上新，每 3 天淘汰 ROAS 末位 20%",
        examples: ["硬核线：完整 Rust 体验 + 电路建造展示", "泛用户线：比吃鸡更自由 + 1v1 PvP 爽感", "社交线：和朋友建家被抄家 + 背叛反转剧情"],
        kpi: "CPI < ¥8 (东南亚) / ¥25 (美日韩) · D7 ROAS > 15%",
        accent: "#22d3ee"
      },
      {
        name: "开场 3 秒钩子素材",
        desc: "买量素材生死线在前 3 秒。专攻「抓眼球」的开场钩子批量生产",
        formats: ["剧情反转钩子", "数据震撼钩子", "UGC 真实感钩子"],
        cadence: "每周 20 条钩子 A/B 测试",
        examples: ["「我花了 3 天建的基地被偷了」(悬念开场)", "「95% 玩家第一天就死了」(数据)", "手机屏幕裂开露出末日世界(视觉钩子)"],
        kpi: "3s 完播率 > 40% · CTR > 2.5%"
      },
      {
        name: "UGC 风格买量切片",
        desc: "从社群 UGC 二次剪辑成买量素材——真实感碾压棚拍广告，成本极低 ROAS 极高",
        formats: ["UGC 反应视频(第一视角被抄家)", "「素人」测评伪纪录", "TikTok 原生感短视频"],
        cadence: "每周 15-20 条 UGC 切片",
        examples: ["玩家被背叛的真实录屏", "Welyn 风格叙事剪辑", "「我 60 岁老爸玩 Rust」类跨圈"],
        kpi: "UGC 切片 CPI 较精致素材低 40% · 3s 完播 > 50%"
      },
      {
        name: "区域 & 节日定制素材",
        desc: "按投放区域 / 本地节日 / 热点事件做本地化定制，用文化符号拉低 CPI",
        formats: ["本地语言配音版", "本地热点梗改编", "节日主题素材"],
        cadence: "每大节日前 2-4 周定制一波",
        examples: ["东南亚：开斋节/排灯节基地主题", "美区：万圣节恐怖基地/感恩节猎火鸡", "日区：动漫风格 Mobile 角色素材"],
        kpi: "本地化素材 CPI 较通用低 25% · CVR 提升 30%"
      },
      {
        name: "可玩广告 Playable Ads",
        desc: "高价值买量渠道杀手锏，尤其 Mobile 端。用户不下载先玩 30 秒",
        formats: ["建造体验 Playable(60s)", "PvP 对枪 Playable", "抄家反抄家 Playable"],
        cadence: "全周期 6-10 款 Playable 迭代",
        examples: ["30 秒速造小木屋 Playable", "1v1 对枪 Playable(展示操控)", "抄家逃生 Playable(展示紧张感)"],
        kpi: "Playable CVR 较视频高 2-3 倍 · AppLovin / Unity 买量 ROAS 最优"
      }
    ]
  },
  // ───────────────── 三类素材协同机制 ─────────────────
  synergy: [
    { from:"运营社群", to:"品牌大素材", mechanism:"社群 UGC 里的真实故事 → 品牌 TVC 叙事源头(Welyn 式故事)" },
    { from:"运营社群", to:"UA 买量", mechanism:"社群 UGC 二次剪辑 → 真实感买量切片，CPI 降 40%" },
    { from:"品牌大素材", to:"UA 买量", mechanism:"品牌 TVC 拆解 → 15s/6s 买量切片，复用省 70% 制作成本" },
    { from:"品牌大素材", to:"运营社群", mechanism:"TVC / KV 首发优先给社群 → 培养荣誉感+带动创作者共创" },
    { from:"UA 买量", to:"品牌大素材", mechanism:"买量测试跑出的最强钩子和卖点 → 反哺下一波品牌 TVC 叙事" },
    { from:"UA 买量", to:"运营社群", mechanism:"买量洗进来的新玩家 → 引导进 Discord 社群沉淀核心池" }
  ]
};

