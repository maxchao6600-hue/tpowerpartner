import type { HomeContent } from "@/content/en/home";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "TPOWER 官方合作伙伴计划",
    title1: "与 TPOWER 网络",
    title2: "共同成长。",
    description:
      "加入 TPOWER 官方合作伙伴计划，借助专属合作伙伴资源、数据追踪、专业支持与绩效导向的合作机会，构建更强大的获客渠道。",
    trustLabel: "TPOWER 官方合作伙伴平台",
  },
  identity: {
    label: "TPOWER 官方合作伙伴",
    title1: "通往 TPOWER",
    title2: "的高端商业入口。",
    description:
      "TPOWER 合作伙伴是 TPOWER 在线赌场的官方合作伙伴平台——而非第三方联盟网络。注册加入计划，或如您已是合作伙伴请直接登录。",
    cardTitle1: "TPOWER 在线赌场",
    cardTitle2: "合作伙伴计划",
    cardBody: "同一品牌家族，同一官方合作伙伴入口。高端赌场氛围，专注合作伙伴价值。",
  },
  casino: {
    label: "赌场品牌氛围",
    title1: "TPOWER",
    title2: "品牌体验。",
    description:
      "合作伙伴推广的是为娱乐、活力与玩家参与而打造的高端在线赌场——并将这一体验与基于绩效的合作增长相连接。",
  },
  why: {
    label: "为何选择 TPOWER",
    title1: "为注重绩效的",
    title2: "合作伙伴而设。",
    description: "TPOWER 官方合作伙伴计划连接联盟推广者、代理和流量合作伙伴与高端在线赌场品牌。",
    reasons: [
      { title: "品牌", description: "推广具有辨识度的 TPOWER 赌场品牌与高端娱乐定位。", icon: "♠" },
      { title: "支持", description: "在注册、入驻及计划参与全程提供合作伙伴协助。", icon: "♦" },
      { title: "工具", description: "获批后可使用营销与推广资源，并在支持范围内获取报表。", icon: "♣" },
      { title: "绩效", description: "通过官方合作伙伴平台追踪推广活动与效果。", icon: "♥" },
    ],
  },
  benefits: {
    label: "合作优势",
    title: "获批合作伙伴可享权益",
    items: [
      { num: "01", title: "官方品牌授权", body: "使用获批品牌资产推广 TPOWER 赌场定位。" },
      { num: "02", title: "合作伙伴支持", body: "在注册、入驻及计划参与中提供协助。" },
      { num: "03", title: "营销资源", body: "获批后通过合作伙伴后台获取推广素材。" },
      { num: "04", title: "追踪与报表", body: "专属链接与推广效果可视化。" },
      { num: "05", title: "成长路径", body: "根据绩效与计划指南扩展合作关系。" },
    ],
  },
  partnerTypes: {
    label: "合作伙伴类型",
    title: "谁可以合作",
    types: [
      { name: "联盟推广", description: "通过获批渠道驱动优质流量的绩效营销人员。" },
      { name: "网站主", description: "在相关市场拥有稳定受众的网站运营者。" },
      { name: "内容创作者", description: "制作评测、指南与娱乐内容的创作者。" },
      { name: "社交媒体", description: "通过社交平台与社群建立影响力的合作伙伴。" },
      { name: "流量合作伙伴", description: "专注付费与有机获客渠道的专业人士。" },
      { name: "代理", description: "管理玩家与合作伙伴关系的区域代表。" },
    ],
    link: "了解合作伙伴类型",
  },
  howItWorks: {
    label: "计划运作方式",
    title: "五步开启合作",
    steps: [
      { title: "注册", body: "通过官方注册页面提交您的申请。" },
      { title: "审核通过", body: "我们的团队将根据计划指南审核您的申请。" },
      { title: "进入计划", body: "获批合作伙伴将获得后台与工具访问权限。" },
      { title: "推广 TPOWER", body: "通过获批渠道与追踪链接驱动流量。" },
      { title: "持续增长", body: "建立绩效并随时间扩展合作关系。" },
    ],
    link: "查看完整指南",
  },
  commission: {
    label: "绩效框架",
    title: "佣金机制",
    body: "基于绩效的佣金在合作伙伴协议中约定，详情在获批后提供。",
    flow: ["流量", "追踪活动", "合格行为", "绩效审核", "合作伙伴报表", "获批结算"],
    disclaimer: "具体佣金比例、CPA 金额及 revenue share 百分比均依据适用的合作伙伴协议确认。",
    link: "佣金详情",
  },
  resources: {
    label: "营销资源",
    title: "合作伙伴资源中心",
    items: [
      { title: "品牌资产", body: "TPOWER 官方标识、色彩与品牌使用指南。" },
      { title: "创意素材", body: "横幅、视觉与可直接用于推广的创意素材。" },
      { title: "推广素材", body: "季节性及常青推广内容。" },
      { title: "追踪资源", body: "链接配置、报表访问与推广追踪工具。" },
    ],
    note: "获批后通过合作伙伴后台获取。",
    link: "查看资源",
  },
  tools: {
    label: "合作伙伴工具",
    title: "为绩效而设",
    items: [
      { title: "合作伙伴后台", body: "账户管理与计划访问的中央枢纽。" },
      { title: "追踪链接", body: "用于推广归因的专属追踪 URL。" },
      { title: "数据报表", body: "获批合作伙伴推广活动的效果可视化。" },
    ],
    link: "探索合作伙伴工具",
  },
  support: {
    label: "合作伙伴支持",
    title: "全程协助",
    items: [
      { title: "注册协助", body: "合作伙伴申请流程指导。" },
      { title: "账户支持", body: "登录、凭证与账户管理协助。" },
      { title: "计划咨询", body: "佣金、追踪与推广相关问题解答。" },
    ],
    link: "联系合作伙伴支持",
  },
  faq: {
    label: "常见问题",
    title: "热门问题",
    link: "查看全部常见问题",
  },
  cta: {
    title: "准备好合作了吗？",
    body: "注册 TPOWER 合作伙伴计划，或登录您现有的合作伙伴账户。",
    trustLabel: "TPOWER 官方合作伙伴计划",
  },
};
