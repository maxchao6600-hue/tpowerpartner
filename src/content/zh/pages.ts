import type { PageContent } from "@/content/types";

function p(
  slug: string,
  meta: { title: string; description: string },
  hero: PageContent["hero"],
  sections: PageContent["sections"],
  extra?: Partial<PageContent>,
): PageContent {
  return { slug, meta, hero, sections, ...extra };
}

export const pages: Record<string, PageContent> = {
  games: p(
    "games",
    {
      title: "TPOWER 游戏",
      description: "探索 TPOWER 在线赌场游戏类别，包括电子游艺、真人娱乐城与桌面游戏。",
    },
    {
      label: "游戏",
      title: "探索 ",
      titleHighlight: "TPOWER 游戏",
      description: "通过 TPOWER 提供的在线赌场游戏类别。",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 提供在线赌场与在线娱乐体验。通过本官方合作伙伴网站，您可在注册或登录前了解可用游戏类别。",
          "具体游戏列表与供应商请在登录 TPOWER 账户后确认，并可能因市场而异。",
        ],
      },
      {
        type: "grid",
        heading: "游戏类别",
        items: [
          { title: "电子游艺", body: "以娱乐为主的在线老虎机游戏。" },
          { title: "真人娱乐城", body: "在平台可用时提供的真人荷官体验。" },
          { title: "桌面游戏", body: "通过 TPOWER 提供的经典赌场桌面游戏选项。" },
          { title: "热门游戏", body: "账户开通后便于发现的精选与常玩游戏。" },
        ],
      },
      {
        type: "notice",
        body: "准备开玩？请通过本官方合作伙伴网站注册 TPOWER 账户或登录。",
      },
      {
        type: "related",
        heading: "下一步",
        links: [
          { label: "立即注册", slug: "register" },
          { label: "登录", slug: "login" },
          { label: "优惠", slug: "promotions" },
          { label: "常见问题", slug: "faq" },
        ],
      },
    ],
  ),

  promotions: p(
    "promotions",
    {
      title: "TPOWER 优惠",
      description: "通过本官方合作伙伴网站了解 TPOWER 优惠如何运作。具体优惠请以账户内信息为准。",
    },
    {
      label: "优惠",
      title: "TPOWER ",
      titleHighlight: "优惠",
      description: "面向 TPOWER 在线赌场用户的优惠信息。",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 可能通过官方渠道提供账户优惠与季节性活动。",
          "本站不会编造奖金金额、比例或保证奖励。符合条件的优惠在注册并登录后确认。",
        ],
      },
      {
        type: "cards",
        heading: "您可以期待",
        items: [
          { tag: "01", title: "账户优惠", body: "创建并访问 TPOWER 账户后，可查看符合条件的优惠。" },
          { tag: "02", title: "季节活动", body: "限时活动可能在平台进行时出现。" },
          { tag: "03", title: "条款适用", body: "优惠条款与资格以官方账户渠道确认为准。" },
        ],
      },
      {
        type: "related",
        heading: "下一步",
        links: [
          { label: "创建 TPOWER 账户", slug: "register" },
          { label: "登录", slug: "login" },
          { label: "游戏", slug: "games" },
          { label: "支持", slug: "support" },
        ],
      },
    ],
  ),

  payment: p(
    "payment",
    {
      title: "支付方式",
      description: "关于 TPOWER 支付选项的一般信息。具体方式取决于您的市场与账户状态。",
    },
    {
      label: "支付",
      title: "支付",
      titleHighlight: "方式",
      description: "为符合条件的 TPOWER 账户提供便捷存取款选项。",
      variant: "felt",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 为符合条件的账户提供便捷支付选项。可用方式取决于您的市场、验证状态与账户设置。",
          "本站不列出未经核实的支付服务商，也不编造处理保证。具体选项请在登录后查看。",
        ],
      },
      {
        type: "grid",
        items: [
          { title: "安全渠道", body: "支付活动通过官方 TPOWER 账户渠道处理。" },
          { title: "账户可见", body: "注册并登录后，可在账户内查看支持的方式。" },
          { title: "支持协助", body: "如需账户支付相关指引，请联系支持。" },
        ],
      },
      {
        type: "related",
        heading: "下一步",
        links: [
          { label: "立即注册", slug: "register" },
          { label: "登录", slug: "login" },
          { label: "常见问题", slug: "faq" },
          { label: "支持", slug: "support" },
        ],
      },
    ],
  ),

  support: p(
    "support",
    {
      title: "客户支持",
      description: "通过本官方合作伙伴网站获取 TPOWER 注册、登录、游戏、支付与账户问题协助。",
    },
    {
      label: "支持",
      title: "客户",
      titleHighlight: "支持",
      description: "为 TPOWER 在线赌场用户提供协助。",
      variant: "cta",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "需要帮助访问 TPOWER？请通过本官方合作伙伴网站找到注册、登录与支持路径。",
          "如有账户相关问题，请通过联系我们页面或发送邮件至 partners@tpowerpartner.com。",
        ],
      },
      {
        type: "grid",
        items: [
          { title: "注册协助", body: "创建 TPOWER 账户的相关指引。" },
          { title: "登录协助", body: "登录已有账户的相关协助。" },
          { title: "账户问题", body: "关于游戏、优惠与支付的一般问题。" },
        ],
      },
      {
        type: "related",
        heading: "相关链接",
        links: [
          { label: "常见问题", slug: "faq" },
          { label: "联系我们", slug: "contact" },
          { label: "注册", slug: "register" },
          { label: "登录", slug: "login" },
        ],
      },
    ],
  ),

  about: p(
    "about",
    {
      title: "关于 TPOWER",
      description: "了解 TPOWER 在线赌场以及本官方合作伙伴网站的注册、登录与账户访问。",
    },
    {
      label: "关于",
      title: "关于 ",
      titleHighlight: "TPOWER",
      description: "TPOWER 在线赌场官方合作伙伴网站。",
      variant: "cta",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 是在线赌场与在线娱乐平台。本网站为 TPOWER 官方合作伙伴网站，帮助用户注册、登录，并获取游戏、优惠、支付与支持相关信息。",
          "本站的核心目标是清晰的赌场访问入口——而非联盟招募或商业机会营销。",
          "新用户请使用「立即注册」，已有账户请使用「登录」。",
        ],
      },
      {
        type: "related",
        heading: "探索",
        links: [
          { label: "游戏", slug: "games" },
          { label: "优惠", slug: "promotions" },
          { label: "为何选择 TPOWER", slug: "why-tpower" },
          { label: "注册", slug: "register" },
        ],
      },
    ],
  ),

  "why-tpower": p(
    "why-tpower",
    {
      title: "为何选择 TPOWER",
      description:
        "了解玩家为何选择 TPOWER 在线赌场——游戏、账户访问、支持、支付与负责任娱乐。",
    },
    {
      label: "为何选择 TPOWER",
      title: "为何选择 ",
      titleHighlight: "TPOWER",
      description: "通过本官方合作伙伴网站访问 TPOWER 的清晰理由。",
      variant: "red",
    },
    [
      {
        type: "cards",
        heading: "TPOWER 体验",
        items: [
          {
            tag: "01",
            title: "在线赌场选择",
            body: "通过 TPOWER 访问在线赌场与游戏类别。",
          },
          {
            tag: "02",
            title: "简洁账户入口",
            body: "本官方合作伙伴网站提供清晰的注册与登录路径。",
          },
          {
            tag: "03",
            title: "客户支持",
            body: "支持资源协助处理注册、登录与账户问题。",
          },
          {
            tag: "04",
            title: "移动端友好",
            body: "在桌面与移动设备上均可便捷浏览 TPOWER 信息。",
          },
        ],
      },
      {
        type: "related",
        heading: "下一步",
        links: [
          { label: "立即注册", slug: "register" },
          { label: "游戏", slug: "games" },
          { label: "支付", slug: "payment" },
          { label: "常见问题", slug: "faq" },
        ],
      },
    ],
  ),

  "partner-program": p(
    "partner-program",
    {
      title: "合作伙伴计划",
      description:
        "TPOWER 合作伙伴计划概览——合作理念、合作路径、追踪机制与回报体系。",
    },
    {
      label: "合作伙伴计划",
      title: "官方 ",
      titleHighlight: "合作伙伴计划",
      description: "连接推广者与 TPOWER 赌场的结构化合作体系。",
      variant: "cta",
    },
    [
      {
        type: "prose",
        heading: "计划概览",
        paragraphs: [
          "TPOWER 合作伙伴计划通过业绩导向的合作模式，将营销人员、联盟推广伙伴与代理连接至 TPOWER 赌场。",
          "合作伙伴通过本平台注册、完成审核流程，获批后即可使用合作伙伴工具、追踪功能及推广资源。",
          "佣金条款、有效行为标准及结算细节均在您的正式合作伙伴协议中约定——未经确认前不会对外公开。",
        ],
      },
      {
        type: "steps",
        heading: "合作伙伴路径",
        items: [
          { title: "注册", body: "通过官方注册页面提交您的申请。" },
          { title: "获得批准", body: "我们的团队将依据计划规范审核您的申请。" },
          { title: "接入计划", body: "获批合作伙伴将获得后台与工具访问权限。" },
          { title: "推广 TPOWER", body: "通过获批渠道，使用追踪链接引流。" },
          { title: "持续成长", body: "积累业绩，逐步扩大合作规模。" },
        ],
      },
      {
        type: "related",
        heading: "相关页面",
        links: [
          { label: "为何选择 TPOWER", slug: "why-tpower" },
          { label: "合作流程", slug: "how-it-works" },
          { label: "佣金", slug: "commission" },
          { label: "注册", slug: "register" },
        ],
      },
    ],
  ),

  "how-it-works": p(
    "how-it-works",
    {
      title: "合作流程",
      description: "五步合作伙伴路径——注册、获批、接入计划、推广 TPOWER、持续成长。",
    },
    {
      label: "合作流程",
      title: "您的 ",
      titleHighlight: "合作之路",
      description: "从注册到成长的清晰五步路径。",
      variant: "felt",
    },
    [
      {
        type: "steps",
        heading: "五步开启合作",
        items: [
          { title: "01 — 注册", body: "填写合作伙伴注册表单，提供您的基本信息与流量来源。" },
          { title: "02 — 获得批准", body: "申请将逐一审核。获批合作伙伴将收到入驻指引。" },
          { title: "03 — 接入合作伙伴计划", body: "获取登录凭证，访问合作伙伴后台、工具与资源。" },
          { title: "04 — 推广 TPOWER", body: "在各渠道使用获批推广素材与追踪链接。" },
          { title: "05 — 持续成长", body: "监测业绩、优化投放，逐步扩大合作规模。" },
        ],
      },
    ],
  ),

  commission: p(
    "commission",
    {
      title: "佣金",
      description: "TPOWER 合作伙伴计划佣金说明。具体结构在获批后提供。",
    },
    {
      label: "佣金",
      title: "合作 ",
      titleHighlight: "回报",
      description: "TPOWER 合作伙伴的业绩导向佣金。具体细节以协议为准。",
      variant: "cta",
    },
    [
      {
        type: "flow",
        heading: "佣金如何计算",
        items: [
          { title: "流量", body: "访客通过您获批的合作伙伴追踪链接与推广渠道进入。" },
          { title: "追踪活动", body: "推广点击、注册与玩家活动通过合作伙伴平台记录。" },
          { title: "合格行为", body: "根据计划指南与合作伙伴协议识别符合条件的玩家行为。" },
          { title: "绩效审核", body: "依据获批协议中的条款审核合作伙伴绩效。" },
          { title: "数据报表", body: "获批合作伙伴通过后台报表工具查看绩效数据。" },
          { title: "合作伙伴协议", body: "佣金条款、合格标准与结算条件在正式协议中约定。" },
          { title: "结算", body: "获批佣金按协议约定的周期与门槛处理。" },
        ],
        disclaimer:
          "具体佣金比例、CPA 金额、revenue share 百分比、结算周期与门槛均依据适用的合作伙伴协议确认。",
      },
      {
        type: "cards",
        heading: "佣金框架",
        items: [
          { tag: "01", title: "业绩导向", body: "佣金结构在获批后于您的正式合作伙伴协议中约定。" },
          { tag: "02", title: "有效行为", body: "有效玩家行为标准在协议中清晰列明。" },
          { tag: "03", title: "追踪与报表", body: "获批合作伙伴将获得追踪链接及后台报表访问权限。" },
          { tag: "04", title: "结算信息", body: "结算周期与门槛在合作伙伴协议中说明。" },
        ],
      },
      {
        type: "related",
        heading: "相关页面",
        links: [
          { label: "合作伙伴计划", slug: "partner-program" },
          { label: "数据追踪与报告", slug: "tracking-reporting" },
          { label: "结算", slug: "payments" },
          { label: "注册", slug: "register" },
        ],
      },
    ],
  ),

  benefits: p(
    "benefits",
    {
      title: "合作优势",
      description: "合作伙伴优势，包括品牌资源、支持服务、推广素材、追踪功能与增长机遇。",
    },
    {
      label: "合作优势",
      title: "合作伙伴 ",
      titleHighlight: "优势",
      description: "获批 TPOWER 合作伙伴可享有的计划权益。",
      variant: "dark",
    },
    [
      {
        type: "grid",
        heading: "计划优势",
        items: [
          { title: "品牌", body: "推广具备成熟视觉识别度的高端 TPOWER 赌场品牌。" },
          { title: "支持", body: "就计划与账户问题获取合作伙伴支持。" },
          { title: "资源", body: "通过合作伙伴后台获取获批营销素材与品牌资产。" },
          { title: "追踪", body: "专属追踪链接与业绩报表，清晰掌握投放效果。" },
          { title: "成长", body: "依据业绩表现与计划规范，逐步扩大合作规模。" },
        ],
      },
    ],
  ),

  "partner-types": p(
    "partner-types",
    {
      title: "合作伙伴类型",
      description: "适合 TPOWER 合作伙伴计划的合作伙伴类别——联盟推广、代理、创作者等。",
    },
    {
      label: "合作伙伴类型",
      title: "谁可以 ",
      titleHighlight: "合作",
      description: "计划欢迎具备合法营销渠道的多元化合作伙伴。",
      variant: "image",
    },
    [
      {
        type: "grid",
        items: [
          { title: "联盟营销人员", body: "通过数字营销渠道引流的业绩型营销人员。" },
          { title: "网站主", body: "拥有对在线赌场娱乐感兴趣的相关受众的网站运营者。" },
          { title: "内容创作者", body: "制作赌场、游戏或生活方式相关内容的创作者。" },
          { title: "社交媒体合作伙伴", body: "拥有活跃粉丝群体的意见领袖与社群运营者。" },
          { title: "流量合作伙伴", body: "专注于付费与自然流量获取的合作伙伴。" },
          { title: "代理", body: "在代理计划框架下管理玩家网络的代理。" },
        ],
      },
    ],
  ),

  "affiliate-program": p(
    "affiliate-program",
    {
      title: "联盟推广计划",
      description: "TPOWER 联盟推广合作——推广、追踪、业绩与佣金概览。",
    },
    {
      label: "联盟推广计划",
      title: "TPOWER ",
      titleHighlight: "联盟推广计划",
      description: "与 TPOWER 赌场的业绩导向联盟推广合作。",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 联盟推广计划面向通过数字营销渠道引流的合作伙伴。",
          "联盟推广伙伴将获得专属追踪链接、推广素材访问权限，以及合作伙伴后台的业绩报表。",
          "佣金条款在联盟推广协议中约定。未经确认协议，不会对外公布任何收益数据。",
        ],
      },
      {
        type: "list",
        heading: "联盟推广合作包含",
        items: [
          "合作伙伴注册与申请审核",
          "获批后生成追踪链接",
          "访问获批推广素材",
          "业绩报表后台",
          "按约定条款结算佣金",
        ],
      },
      {
        type: "related",
        heading: "相关页面",
        links: [
          { label: "合作伙伴类型", slug: "partner-types" },
          { label: "营销资源", slug: "marketing-resources" },
          { label: "注册指南", slug: "registration-guide" },
          { label: "注册", slug: "register" },
        ],
      },
    ],
  ),

  "agent-program": p(
    "agent-program",
    {
      title: "代理计划",
      description: "面向管理玩家网络的合作伙伴的 TPOWER 代理计划说明。",
    },
    {
      label: "代理计划",
      title: "TPOWER ",
      titleHighlight: "代理计划",
      description: "面向网络型推广的结构化代理合作。",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 代理计划面向管理玩家网络、需要代理级账户结构的合作伙伴。",
          "代理条款、佣金层级及运营细节在申请与入驻过程中提供。",
          "具体代理等级、佣金比例与层级结构不对外公开——均在代理协议中确认。",
        ],
      },
      {
        type: "notice",
        body: "如需申请代理计划，请通过合作伙伴注册页面提交申请，并选择「代理」作为合作伙伴类型。",
      },
    ],
  ),

  "registration-guide": p(
    "registration-guide",
    {
      title: "注册指南",
      description: "注册成为 TPOWER 合作伙伴的分步指南。",
    },
    {
      label: "注册指南",
      title: "如何 ",
      titleHighlight: "注册",
      description: "加入 TPOWER 合作伙伴计划的完整指引。",
      variant: "felt",
    },
    [
      {
        type: "steps",
        items: [
          { title: "打开注册页面", body: "访问注册页面，开始提交合作伙伴申请。" },
          { title: "填写信息", body: "提供姓名、电子邮箱、合作伙伴类型及相关流量来源信息。" },
          { title: "提交申请", body: "提交表单后，我们的团队将审核您的申请。" },
          { title: "账户获批", body: "若申请通过，您将收到入驻指引与账户凭证。" },
          { title: "访问合作伙伴平台", body: "登录合作伙伴后台，使用工具、链接与资源。" },
        ],
      },
    ],
  ),

  "login-guide": p(
    "login-guide",
    {
      title: "登录指南",
      description: "现有 TPOWER 合作伙伴如何登录账户及排查登录问题。",
    },
    {
      label: "登录指南",
      title: "合作伙伴 ",
      titleHighlight: "登录",
      description: "登录您的 TPOWER 合作伙伴账户。",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "获批 TPOWER 合作伙伴可通过登录页面，使用入驻时提供的凭证登录。",
          "若您尚未注册，请访问注册页面提交合作伙伴申请。",
        ],
      },
      {
        type: "list",
        heading: "登录问题排查",
        items: [
          "确认使用的是入驻时提供的电子邮箱与密码",
          "确认您的合作伙伴账户已通过审核",
          "如遇页面加载问题，可尝试清除浏览器缓存",
          "如需凭证协助，请联系合作伙伴支持",
        ],
      },
    ],
  ),

  "marketing-resources": p(
    "marketing-resources",
    {
      title: "营销资源",
      description: "获批 TPOWER 合作伙伴可使用的营销资源。",
    },
    {
      label: "营销资源",
      title: "营销 ",
      titleHighlight: "资源",
      description: "获批合作伙伴可用的品牌资产与推广素材。",
      variant: "cta",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "获批 TPOWER 合作伙伴可通过合作伙伴后台访问营销资源。",
          "资源可能包括横幅、品牌资产、推广创意及获批推广用途的内容规范。",
        ],
      },
      {
        type: "grid",
        items: [
          { title: "品牌资产", body: "用于获批推广活动的官方 TPOWER 标识与品牌元素。" },
          { title: "横幅", body: "适用于网页与移动端推广的标准尺寸展示横幅。" },
          { title: "推广素材", body: "季节性及主题活动创意，随资源更新陆续提供。" },
          { title: "内容资源", body: "文案与传播指引，确保品牌形象一致。" },
        ],
      },
      {
        type: "notice",
        body: "营销资源仅向获批合作伙伴开放。请注册并完成入驻流程以获取访问权限。",
      },
      {
        type: "related",
        heading: "相关页面",
        links: [
          { label: "推广素材", slug: "promotional-materials" },
          { label: "合作伙伴工具", slug: "partner-tools" },
          { label: "合作伙伴支持", slug: "partner-support" },
        ],
      },
    ],
  ),

  "promotional-materials": p(
    "promotional-materials",
    {
      title: "推广素材",
      description: "TPOWER 合作伙伴如何获取并使用获批推广素材。",
    },
    {
      label: "推广素材",
      title: "推广 ",
      titleHighlight: "素材",
      description: "TPOWER 合作伙伴推广活动获批创意素材。",
      variant: "image",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "推广素材通过合作伙伴后台提供给获批合作伙伴。",
          "所有素材须遵循联盟推广指南与内容指南使用。未经批准，请勿修改品牌资产。",
        ],
      },
      {
        type: "list",
        heading: "使用规范",
        items: [
          "仅使用合作伙伴后台提供的获批素材",
          "请勿更改 TPOWER 标识或品牌色彩",
          "所有推广文案须遵循内容指南",
          "请勿发布未经证实的收益或中奖承诺",
        ],
      },
    ],
  ),

  "partner-tools": p(
    "partner-tools",
    {
      title: "合作伙伴工具",
      description: "TPOWER 合作伙伴平台提供的合作伙伴工具。",
    },
    {
      label: "合作伙伴工具",
      title: "合作伙伴 ",
      titleHighlight: "工具",
      description: "获批合作伙伴可用的后台、链接与报表。",
      variant: "red",
    },
    [
      {
        type: "grid",
        items: [
          { title: "合作伙伴后台", body: "账户管理与计划概览的中心枢纽。" },
          { title: "追踪链接", body: "生成专属链接，追踪推荐与推广活动表现。" },
          { title: "数据报表", body: "查看流量、推荐及推广活动相关业绩数据。" },
          { title: "推广工具", body: "访问推广素材与活动资源。" },
        ],
      },
      {
        type: "notice",
        body: "合作伙伴工具在账户获批后开放。请注册以开始申请流程。",
      },
    ],
  ),

  "tracking-reporting": p(
    "tracking-reporting",
    {
      title: "追踪与报表",
      description: "TPOWER 合作伙伴如何追踪流量、推荐与推广活动表现。",
    },
    {
      label: "追踪与报表",
      title: "追踪与 ",
      titleHighlight: "报表",
      description: "清晰掌握您的合作伙伴推广活动表现。",
      variant: "felt",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "获批 TPOWER 合作伙伴将获得专属追踪链接，用于将玩家活动归因至您的推广活动。",
          "合作伙伴后台提供与协议相关的流量、推荐及业绩指标报表。",
        ],
      },
      {
        type: "list",
        heading: "合作伙伴可追踪的内容",
        items: [
          "通过专属追踪链接的推荐流量",
          "归因至您推广活动的玩家行为",
          "合作伙伴协议中定义的相关业绩指标",
          "适用情况下的佣金相关数据",
        ],
      },
    ],
  ),

  payments: p(
    "payments",
    {
      title: "结算",
      description: "TPOWER 合作伙伴计划的结算说明。",
    },
    {
      label: "结算",
      title: "合作伙伴 ",
      titleHighlight: "结算",
      description: "TPOWER 合作伙伴的结算流程与要求。",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 合作伙伴的结算条款在正式合作伙伴协议中约定。",
          "结算周期、最低门槛及支持方式在入驻时告知——本网站不对外公布通用数值。",
        ],
      },
      {
        type: "list",
        heading: "协议涵盖的结算事项",
        items: [
          "结算流程与审批机制",
          "结算周期与频率",
          "支持的结算方式",
          "账户与验证要求",
        ],
      },
    ],
  ),

  compliance: p(
    "compliance",
    {
      title: "合规",
      description: "TPOWER 合作伙伴计划的合规要求。",
    },
    {
      label: "合规",
      title: "计划 ",
      titleHighlight: "合规",
      description: "获批推广规范与计划规则。",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 合作伙伴须遵循计划规则与获批推广规范。",
          "这包括真实准确的营销表述、负责任的传播方式，以及遵守您运营所在地区的适用法规。",
        ],
      },
      {
        type: "list",
        heading: "合作伙伴责任",
        items: [
          "仅通过获批渠道与素材推广 TPOWER",
          "避免对收益、中奖或结果作出误导性承诺",
          "所有推广内容须遵循品牌使用规范",
          "遵守适用的广告与博彩相关法规",
        ],
      },
    ],
  ),

  "responsible-gaming": p(
    "responsible-gaming",
    {
      title: "负责任博彩",
      description: "面向 TPOWER 合作伙伴及其受众的负责任博彩信息。",
    },
    {
      label: "负责任博彩",
      title: "负责任 ",
      titleHighlight: "博彩",
      description: "以负责任的方式推广赌场娱乐。",
      variant: "felt",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER 致力于负责任博彩。合作伙伴在以合乎伦理的方式推广赌场娱乐方面发挥着重要作用。",
          "合作伙伴不得面向未成年人、弱势群体推广，也不得使用鼓励非理性博彩行为的表述。",
        ],
      },
      {
        type: "list",
        heading: "合作伙伴规范",
        items: [
          "不得面向未成年受众推广",
          "在适当场合纳入负责任博彩相关表述",
          "避免将博彩描述为解决财务问题的途径",
          "鼓励玩家设定限额，在能力范围内娱乐",
        ],
      },
    ],
  ),

  "affiliate-guidelines": p(
    "affiliate-guidelines",
    {
      title: "联盟推广指南",
      description: "TPOWER 联盟推广合作伙伴的推广规范。",
    },
    {
      label: "联盟推广指南",
      title: "联盟推广 ",
      titleHighlight: "指南",
      description: "如何准确、负责任地推广 TPOWER。",
      variant: "dark",
    },
    [
      {
        type: "list",
        heading: "推广标准",
        items: [
          "仅使用获批的 TPOWER 品牌资产与推广素材",
          "不得对收益、中奖或玩家结果作出任何保证",
          "在法律要求的情况下，明确披露联盟推广关系",
          "不得使用垃圾信息、误导性广告或禁止的流量来源",
          "遵循合作伙伴协议中传达的所有计划规则",
        ],
      },
    ],
  ),

  "content-guidelines": p(
    "content-guidelines",
    {
      title: "内容指南",
      description: "合作伙伴应如何在内容中呈现 TPOWER 品牌。",
    },
    {
      label: "内容指南",
      title: "内容 ",
      titleHighlight: "指南",
      description: "TPOWER 合作伙伴的品牌呈现标准。",
      variant: "cta",
    },
    [
      {
        type: "list",
        heading: "品牌呈现",
        items: [
          "使用未经修改的官方 TPOWER 标识",
          "保持 TPOWER 红、黑、白配色体系",
          "撰写准确、不具误导性的推广文案",
          "不得暗示 TPOWER 在未获许可的司法管辖区持有牌照或受监管",
          "请参阅联盟推广指南了解完整推广标准",
        ],
      },
    ],
  ),

  faq: p(
    "faq",
    {
      title: "常见问题",
      description: "关于 TPOWER 在线赌场访问、注册、登录、游戏与支持的常见问题。",
    },
    {
      label: "常见问题",
      title: "常见 ",
      titleHighlight: "问题",
      description: "通过本官方合作伙伴网站访问 TPOWER 的常见疑问解答。",
      variant: "dark",
    },
    [],
  ),

  contact: p(
    "contact",
    {
      title: "联系我们",
      description: "就注册、登录与账户问题联系 TPOWER 支持。",
    },
    {
      label: "联系我们",
      title: "联系 ",
      titleHighlight: "支持",
      description: "联系 TPOWER 支持团队。",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "如有注册、登录或账户相关问题，请通过本页表单联系我们，或发送邮件至 partners@tpowerpartner.com。",
        ],
      },
    ],
  ),

  "partner-support": p(
    "partner-support",
    {
      title: "合作伙伴支持",
      description: "TPOWER 合作伙伴如何获取账户、计划与推广方面的协助。",
    },
    {
      label: "合作伙伴支持",
      title: "合作伙伴 ",
      titleHighlight: "支持",
      description: "各阶段 TPOWER 合作伙伴均可获得帮助。",
      variant: "felt",
    },
    [
      {
        type: "grid",
        items: [
          { title: "账户问题", body: "登录问题、凭证申请与账户设置。" },
          { title: "计划问题", body: "佣金、追踪与计划结构相关咨询。" },
          { title: "推广问题", body: "品牌使用、素材与推广活动指引。" },
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "请通过联系我们页面或发送邮件至 partners@tpowerpartner.com 联系合作伙伴支持。现有合作伙伴也可通过合作伙伴后台联系支持团队。",
        ],
      },
    ],
  ),

  news: p(
    "news",
    {
      title: "新闻动态",
      description: "TPOWER 合作伙伴新闻与计划更新。",
    },
    {
      label: "新闻动态",
      title: "合作伙伴 ",
      titleHighlight: "新闻",
      description: "TPOWER 合作伙伴计划最新动态。",
      variant: "dark",
    },
    [
      {
        type: "notice",
        body: "计划新闻与更新将在发布后陆续刊登于此。敬请关注新资源、计划功能及合作机遇的相关公告。",
      },
    ],
  ),

  "partner-insights": p(
    "partner-insights",
    {
      title: "合作伙伴洞察",
      description: "面向 TPOWER 合作伙伴的联盟推广策略、实用技巧与赌场营销知识。",
    },
    {
      label: "合作伙伴洞察",
      title: "合作伙伴 ",
      titleHighlight: "洞察",
      description: "面向 TPOWER 合作伙伴的策略与知识内容。",
      variant: "red",
    },
    [
      {
        type: "articles",
        heading: "常青合作伙伴指南",
        items: [
          { tag: "策略", title: "如何搭建赌场联盟推广活动", body: "在启动 TPOWER 合作伙伴推广前，规划流量来源、创意素材与转化追踪的框架思路。" },
          { tag: "内容", title: "合作伙伴内容规划", body: "如何制作符合计划指南的评测内容、对比页面与教育性素材。" },
          { tag: "追踪", title: "合作伙伴追踪基础", body: "链接配置、归因概念及合作伙伴平台报表功能的概览。" },
          { tag: "合规", title: "负责任推广", body: "以符合计划要求的方式，道德地推广在线赌场品牌的最佳实践。" },
          { tag: "创意", title: "创意最佳实践", body: "如何在各渠道有效使用品牌资产、推广视觉与推广文案。" },
          { tag: "优化", title: "合作伙伴漏斗优化", body: "提升落地页表现、点击率与推广活动效率的方法。" },
        ],
      },
      {
        type: "notice",
        body: "以上为面向合作伙伴的教育指南，并非公司公告。注册成为合作伙伴以获取完整计划资源。",
      },
      {
        type: "related",
        heading: "相关页面",
        links: [
          { label: "营销资源", slug: "marketing-resources" },
          { label: "合作伙伴工具", slug: "partner-tools" },
          { label: "联盟推广指南", slug: "affiliate-guidelines" },
        ],
      },
    ],
  ),

  terms: p(
    "terms",
    {
      title: "条款与条件",
      description: "TPOWER 合作伙伴计划的条款与条件。",
    },
    {
      label: "法律",
      title: "条款与 ",
      titleHighlight: "条件",
      description: "合作伙伴计划使用条款。",
      variant: "dark",
    },
    [
      {
        type: "legal",
        sections: [
          {
            title: "同意条款",
            paragraphs: [
              "访问并使用 TPOWER 合作伙伴网站、注册合作伙伴计划，即表示您同意本条款与条件。",
              "具体合作条款（包括佣金结构与义务）在获批后于您的个人合作伙伴协议中约定。",
            ],
          },
          {
            title: "计划参与",
            paragraphs: [
              "参与 TPOWER 合作伙伴计划须通过申请审核与批准。",
              "TPOWER 保留自行决定接受或拒绝申请的权利。",
            ],
          },
          {
            title: "合作伙伴义务",
            paragraphs: [
              "合作伙伴须依据计划指南、联盟推广指南及内容指南推广 TPOWER。",
              "合作伙伴不得从事误导性、欺诈性或禁止的推广行为。",
            ],
          },
          {
            title: "责任限制",
            paragraphs: [
              "TPOWER 合作伙伴提供计划信息与注册服务。具体商业条款以您的合作伙伴协议为准。",
            ],
          },
        ],
      },
    ],
  ),

  privacy: p(
    "privacy",
    {
      title: "隐私政策",
      description: "TPOWER 合作伙伴网站的隐私政策。",
    },
    {
      label: "法律",
      title: "隐私 ",
      titleHighlight: "政策",
      description: "我们如何处理您的信息。",
      variant: "dark",
    },
    [
      {
        type: "legal",
        sections: [
          {
            title: "我们收集的信息",
            paragraphs: [
              "当您注册或联系我们时，我们会收集您提供的信息，例如姓名、电子邮箱、合作伙伴类型及留言内容。",
            ],
          },
          {
            title: "信息使用方式",
            paragraphs: [
              "我们使用您的信息处理合作伙伴申请、就账户事宜与您沟通，并提供计划支持。",
            ],
          },
          {
            title: "数据安全",
            paragraphs: [
              "我们采取合理措施保护您的个人信息。互联网传输方式无法做到绝对安全。",
            ],
          },
          {
            title: "联系我们",
            paragraphs: [
              "如有隐私相关咨询，请联系 partners@tpowerpartner.com。",
            ],
          },
        ],
      },
    ],
  ),

  register: p(
    "register",
    {
      title: "注册",
      description: "通过本官方合作伙伴网站注册您的 TPOWER 在线赌场账户。",
    },
    {
      label: "注册",
      title: "创建您的 ",
      titleHighlight: "TPOWER 账户",
      description: "通过 TPOWER 官方合作伙伴网站注册。",
      variant: "image",
    },
    [],
    { noIndex: true },
  ),

  login: p(
    "login",
    {
      title: "登录",
      description: "通过本官方合作伙伴网站登录您的 TPOWER 账户。",
    },
    {
      label: "登录",
      title: "欢迎",
      titleHighlight: "回来",
      description: "登录您的 TPOWER 账户。",
      variant: "image",
    },
    [],
    { noIndex: true },
  ),
};
