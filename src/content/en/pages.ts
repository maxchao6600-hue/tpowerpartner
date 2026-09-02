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
  about: p(
    "about",
    {
      title: "About TPOWER Partner",
      description:
        "Learn what TPOWER Partner is, how it relates to TPOWER Casino, and who the official partner program is designed for.",
    },
    {
      label: "About",
      title: "About ",
      titleHighlight: "TPOWER Partner",
      description:
        "The official partner-facing platform for TPOWER Casino — built for affiliates, agents, and growth partners.",
      variant: "cta",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER Partner is the official platform for individuals and businesses who want to work with TPOWER Casino through a structured partner program.",
          "This website provides program information, partner registration, account access, and resources for approved partners. It is separate from the player-facing TPOWER Casino website.",
          "The program is designed for affiliate marketers, website owners, content creators, social media partners, traffic partners, and agents with a legitimate promotional presence.",
        ],
      },
    ],
  ),

  "why-tpower": p(
    "why-tpower",
    {
      title: "Why TPOWER",
      description:
        "Discover why partners choose TPOWER — brand strength, casino ecosystem, support, and growth opportunity.",
    },
    {
      label: "Why TPOWER",
      title: "Why Partner With ",
      titleHighlight: "TPOWER",
      description: "A premium online casino brand with a dedicated partner program built for performance.",
      variant: "red",
    },
    [
      {
        type: "cards",
        heading: "The TPOWER Advantage",
        items: [
          {
            tag: "01",
            title: "Established Casino Brand",
            body: "TPOWER is a recognized online casino brand. Partners promote a product with premium positioning and a strong visual identity.",
          },
          {
            tag: "02",
            title: "Partner-First Platform",
            body: "TPOWER Partner is built specifically for affiliates and agents — with registration, onboarding, and program information in one place.",
          },
          {
            tag: "03",
            title: "Growth Opportunity",
            body: "Partners who build quality traffic and follow program guidelines can grow their partnership over time through the official program.",
          },
          {
            tag: "04",
            title: "Support & Resources",
            body: "Approved partners receive access to partner tools, promotional materials, and support channels as outlined in their agreement.",
          },
        ],
      },
    ],
  ),

  "partner-program": p(
    "partner-program",
    {
      title: "Partner Program",
      description:
        "Overview of the TPOWER Partner Program — partnership concept, journey, tracking, and rewards.",
    },
    {
      label: "Partner Program",
      title: "The Official ",
      titleHighlight: "Partner Program",
      description: "A structured partnership connecting promoters with TPOWER Casino.",
      variant: "cta",
    },
    [
      {
        type: "prose",
        heading: "Program Overview",
        paragraphs: [
          "The TPOWER Partner Program connects marketers, affiliates, and agents with TPOWER Casino through a performance-based partnership model.",
          "Partners register through this platform, complete the review process, and upon approval gain access to partner tools, tracking, and promotional resources.",
          "Commission terms, qualifying actions, and payout details are defined in your official partner agreement — not published publicly until confirmed.",
        ],
      },
      {
        type: "steps",
        heading: "Partner Journey",
        items: [
          { title: "Register", body: "Submit your application through the official registration page." },
          { title: "Get Approved", body: "Our team reviews your application against program guidelines." },
          { title: "Access Program", body: "Approved partners receive dashboard and tool access." },
          { title: "Promote TPOWER", body: "Drive traffic through approved channels with tracking links." },
          { title: "Grow", body: "Build performance and scale your partnership over time." },
        ],
      },
      {
        type: "related",
        heading: "Related Pages",
        links: [
          { label: "Why TPOWER", slug: "why-tpower" },
          { label: "How It Works", slug: "how-it-works" },
          { label: "Commission", slug: "commission" },
          { label: "Register", slug: "register" },
        ],
      },
    ],
  ),

  "how-it-works": p(
    "how-it-works",
    {
      title: "How It Works",
      description: "Five-step partner journey — register, get approved, access the program, promote TPOWER, and grow.",
    },
    {
      label: "How It Works",
      title: "Your Path To ",
      titleHighlight: "Partnership",
      description: "A clear five-step journey from registration to growth.",
      variant: "felt",
    },
    [
      {
        type: "steps",
        heading: "Five Steps To Partnership",
        items: [
          { title: "01 — Register", body: "Complete the partner registration form with your details and traffic sources." },
          { title: "02 — Get Approved", body: "Applications are reviewed individually. Approved partners are contacted with onboarding steps." },
          { title: "03 — Access Partner Program", body: "Receive credentials and access to the partner dashboard, tools, and resources." },
          { title: "04 — Promote TPOWER", body: "Use approved promotional materials and tracking links across your channels." },
          { title: "05 — Grow", body: "Monitor performance, optimize campaigns, and scale your partnership." },
        ],
      },
    ],
  ),

  commission: p(
    "commission",
    {
      title: "Commission",
      description: "Commission information for the TPOWER Partner Program. Structure provided upon approval.",
    },
    {
      label: "Commission",
      title: "Partnership ",
      titleHighlight: "Rewards",
      description: "Performance-based commission for TPOWER partners. Details confirmed in your agreement.",
      variant: "cta",
    },
    [
      {
        type: "flow",
        heading: "How Commission Is Calculated",
        items: [
          { title: "Traffic", body: "Visitors arrive through your approved partner tracking links and promotional channels." },
          { title: "Tracked Activity", body: "Campaign clicks, registrations, and player activity are recorded through the partner platform." },
          { title: "Qualifying Actions", body: "Eligible player actions are identified based on program guidelines and your partner agreement." },
          { title: "Performance Review", body: "Partner performance is reviewed against the terms defined in your approved agreement." },
          { title: "Reporting", body: "Approved partners access performance data through dashboard reporting tools." },
          { title: "Partner Agreement", body: "Commission terms, qualifying criteria, and payout conditions are defined in your official agreement." },
          { title: "Payout", body: "Approved commissions are processed according to the schedule and thresholds in your agreement." },
        ],
        disclaimer:
          "Specific commission rates, CPA figures, revenue share percentages, payout schedules and thresholds are confirmed according to the applicable partner agreement.",
      },
      {
        type: "cards",
        heading: "Commission Framework",
        items: [
          { tag: "01", title: "Performance-Based", body: "Commission structures are defined in your official partner agreement upon approval." },
          { tag: "02", title: "Qualifying Actions", body: "Qualifying player actions are documented clearly in your agreement." },
          { tag: "03", title: "Tracking & Reporting", body: "Approved partners receive tracking links and dashboard reporting access." },
          { tag: "04", title: "Payout Information", body: "Payout schedules and thresholds are outlined in your partner agreement." },
        ],
      },
      {
        type: "related",
        heading: "Related Pages",
        links: [
          { label: "Partner Program", slug: "partner-program" },
          { label: "Tracking & Reporting", slug: "tracking-reporting" },
          { label: "Payments", slug: "payments" },
          { label: "Register", slug: "register" },
        ],
      },
    ],
  ),

  benefits: p(
    "benefits",
    {
      title: "Benefits",
      description: "Partner benefits including brand access, support, resources, tracking, and growth opportunity.",
    },
    {
      label: "Benefits",
      title: "Partner ",
      titleHighlight: "Benefits",
      description: "What approved TPOWER partners can expect from the program.",
      variant: "dark",
    },
    [
      {
        type: "grid",
        heading: "Program Benefits",
        items: [
          { title: "Brand", body: "Promote a premium TPOWER casino brand with established visual identity." },
          { title: "Support", body: "Access partner support for program and account questions." },
          { title: "Resources", body: "Approved marketing materials and brand assets through the partner dashboard." },
          { title: "Tracking", body: "Unique tracking links and performance reporting for campaign visibility." },
          { title: "Growth", body: "Opportunity to scale your partnership based on performance and program guidelines." },
        ],
      },
    ],
  ),

  "partner-types": p(
    "partner-types",
    {
      title: "Partner Types",
      description: "Partner categories suited for the TPOWER Partner Program — affiliates, agents, creators, and more.",
    },
    {
      label: "Partner Types",
      title: "Who Can ",
      titleHighlight: "Partner",
      description: "The program welcomes diverse partner profiles with legitimate marketing presence.",
      variant: "image",
    },
    [
      {
        type: "grid",
        items: [
          { title: "Affiliate Marketers", body: "Performance marketers driving traffic through digital campaigns." },
          { title: "Website Owners", body: "Site owners with relevant audiences interested in online casino entertainment." },
          { title: "Content Creators", body: "Creators producing casino, gaming, or lifestyle content." },
          { title: "Social Media Partners", body: "Influencers and community managers with engaged followings." },
          { title: "Traffic Partners", body: "Partners specializing in paid and organic traffic acquisition." },
          { title: "Agents", body: "Agents managing player networks under the agent program structure." },
        ],
      },
    ],
  ),

  "affiliate-program": p(
    "affiliate-program",
    {
      title: "Affiliate Program",
      description: "TPOWER affiliate partnership — promotion, tracking, performance, and commission overview.",
    },
    {
      label: "Affiliate Program",
      title: "TPOWER ",
      titleHighlight: "Affiliate Program",
      description: "Performance-based affiliate partnership with TPOWER Casino.",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "The TPOWER Affiliate Program is designed for partners who drive player traffic through digital marketing channels.",
          "Affiliates receive unique tracking links, access to promotional materials, and performance reporting through the partner dashboard.",
          "Commission terms are defined in your affiliate agreement. No earning figures are published without a confirmed agreement.",
        ],
      },
      {
        type: "list",
        heading: "Affiliate Partnership Includes",
        items: [
          "Partner registration and application review",
          "Tracking link generation upon approval",
          "Access to approved promotional materials",
          "Performance reporting dashboard",
          "Commission based on agreed terms",
        ],
      },
      {
        type: "related",
        heading: "Related Pages",
        links: [
          { label: "Partner Types", slug: "partner-types" },
          { label: "Marketing Resources", slug: "marketing-resources" },
          { label: "Registration Guide", slug: "registration-guide" },
          { label: "Register", slug: "register" },
        ],
      },
    ],
  ),

  "agent-program": p(
    "agent-program",
    {
      title: "Agent Program",
      description: "Information about the TPOWER Agent Program for partners managing player networks.",
    },
    {
      label: "Agent Program",
      title: "TPOWER ",
      titleHighlight: "Agent Program",
      description: "Structured agent partnership for network-based promotion.",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "The TPOWER Agent Program is designed for partners who manage player networks and require agent-level account structures.",
          "Agent terms, commission levels, and operational details are provided during the application and onboarding process.",
          "Specific agent tiers, commission rates, and level structures are not published publicly — they are confirmed in your agent agreement.",
        ],
      },
      {
        type: "notice",
        body: "To apply for the agent program, register through the partner registration page and select Agent as your partner type.",
      },
    ],
  ),

  "registration-guide": p(
    "registration-guide",
    {
      title: "Registration Guide",
      description: "Step-by-step guide to registering as a TPOWER Partner.",
    },
    {
      label: "Registration Guide",
      title: "How To ",
      titleHighlight: "Register",
      description: "Your guide to joining the TPOWER Partner Program.",
      variant: "felt",
    },
    [
      {
        type: "steps",
        items: [
          { title: "Open Registration", body: "Visit the Register page and begin your partner application." },
          { title: "Complete Information", body: "Provide your name, email, partner type, and relevant traffic source details." },
          { title: "Submit Application", body: "Submit the form. Our team will review your application." },
          { title: "Account Approval", body: "If approved, you will receive onboarding instructions and account credentials." },
          { title: "Access Partner Platform", body: "Log in to your partner dashboard to access tools, links, and resources." },
        ],
      },
    ],
  ),

  "login-guide": p(
    "login-guide",
    {
      title: "Login Guide",
      description: "How existing TPOWER partners access their accounts and troubleshoot login issues.",
    },
    {
      label: "Login Guide",
      title: "Partner ",
      titleHighlight: "Login",
      description: "Access your TPOWER Partner account.",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "Approved TPOWER partners can log in through the Login page using credentials provided during onboarding.",
          "If you have not yet registered, visit the Register page to submit a partner application.",
        ],
      },
      {
        type: "list",
        heading: "Login Troubleshooting",
        items: [
          "Ensure you are using the email and password provided during onboarding",
          "Check that your partner account has been approved",
          "Clear browser cache if you experience loading issues",
          "Contact partner support if you need credential assistance",
        ],
      },
    ],
  ),

  "marketing-resources": p(
    "marketing-resources",
    {
      title: "Marketing Resources",
      description: "Marketing resources available to approved TPOWER partners.",
    },
    {
      label: "Marketing Resources",
      title: "Marketing ",
      titleHighlight: "Resources",
      description: "Brand assets and campaign materials for approved partners.",
      variant: "cta",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "Approved TPOWER partners can access marketing resources through the partner dashboard.",
          "Resources may include banners, brand assets, campaign creatives, and content guidelines for approved promotional use.",
        ],
      },
      {
        type: "grid",
        items: [
          { title: "Brand Assets", body: "Official TPOWER logos and brand elements for approved campaigns." },
          { title: "Banners", body: "Display banners in standard sizes for web and mobile promotion." },
          { title: "Campaign Materials", body: "Seasonal and promotional creatives as they become available." },
          { title: "Content Resources", body: "Copy and messaging guidance for consistent brand representation." },
        ],
      },
      {
        type: "notice",
        body: "Marketing resources are available to approved partners only. Register and complete onboarding to gain access.",
      },
      {
        type: "related",
        heading: "Related Pages",
        links: [
          { label: "Promotional Materials", slug: "promotional-materials" },
          { label: "Partner Tools", slug: "partner-tools" },
          { label: "Partner Support", slug: "partner-support" },
        ],
      },
    ],
  ),

  "promotional-materials": p(
    "promotional-materials",
    {
      title: "Promotional Materials",
      description: "How TPOWER partners access and use approved promotional materials.",
    },
    {
      label: "Promotional Materials",
      title: "Promotional ",
      titleHighlight: "Materials",
      description: "Approved creatives for TPOWER partner campaigns.",
      variant: "image",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "Promotional materials are provided to approved partners through the partner dashboard.",
          "All materials must be used in accordance with the Affiliate Guidelines and Content Guidelines. Do not modify brand assets without approval.",
        ],
      },
      {
        type: "list",
        heading: "Usage Guidelines",
        items: [
          "Use only approved materials from the partner dashboard",
          "Do not alter TPOWER logos or brand colors",
          "Follow content guidelines for all promotional copy",
          "Do not make unsupported earning or winning claims",
        ],
      },
    ],
  ),

  "partner-tools": p(
    "partner-tools",
    {
      title: "Partner Tools",
      description: "Partner tools available through the TPOWER Partner platform.",
    },
    {
      label: "Partner Tools",
      title: "Partner ",
      titleHighlight: "Tools",
      description: "Dashboard, links, and reporting for approved partners.",
      variant: "red",
    },
    [
      {
        type: "grid",
        items: [
          { title: "Partner Dashboard", body: "Central hub for account management and program overview." },
          { title: "Tracking Links", body: "Generate unique links to track referrals and campaign performance." },
          { title: "Reporting", body: "View traffic, referral, and performance data for your campaigns." },
          { title: "Campaign Tools", body: "Access promotional materials and campaign resources." },
        ],
      },
      {
        type: "notice",
        body: "Partner tools are available after account approval. Register to begin the application process.",
      },
    ],
  ),

  "tracking-reporting": p(
    "tracking-reporting",
    {
      title: "Tracking & Reporting",
      description: "How TPOWER partners track traffic, referrals, and campaign performance.",
    },
    {
      label: "Tracking & Reporting",
      title: "Tracking & ",
      titleHighlight: "Reporting",
      description: "Visibility into your partner campaign performance.",
      variant: "felt",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "Approved TPOWER partners receive unique tracking links that attribute player activity to their campaigns.",
          "The partner dashboard provides reporting on traffic, referrals, and performance metrics relevant to your agreement.",
        ],
      },
      {
        type: "list",
        heading: "What Partners Can Track",
        items: [
          "Referral traffic through unique tracking links",
          "Player activity attributed to your campaigns",
          "Performance metrics as defined in your partner agreement",
          "Commission-related data where applicable",
        ],
      },
    ],
  ),

  payments: p(
    "payments",
    {
      title: "Payments",
      description: "Partner payment information for the TPOWER Partner Program.",
    },
    {
      label: "Payments",
      title: "Partner ",
      titleHighlight: "Payments",
      description: "Payment process and requirements for TPOWER partners.",
      variant: "dark",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "Payment terms for TPOWER partners are defined in the official partner agreement.",
          "Payment schedules, minimum thresholds, and supported methods are communicated during onboarding — not published as generic figures on this website.",
        ],
      },
      {
        type: "list",
        heading: "Payment Topics Covered In Your Agreement",
        items: [
          "Payment process and approval workflow",
          "Payment schedule and frequency",
          "Supported payment methods",
          "Account and verification requirements",
        ],
      },
    ],
  ),

  compliance: p(
    "compliance",
    {
      title: "Compliance",
      description: "Partner compliance expectations for the TPOWER Partner Program.",
    },
    {
      label: "Compliance",
      title: "Program ",
      titleHighlight: "Compliance",
      description: "Approved promotional practices and program rules.",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER partners are expected to follow program rules and approved promotional practices.",
          "This includes accurate marketing, responsible messaging, and compliance with applicable regulations in your operating regions.",
        ],
      },
      {
        type: "list",
        heading: "Partner Responsibilities",
        items: [
          "Promote TPOWER only through approved channels and materials",
          "Avoid misleading claims about earnings, winnings, or guarantees",
          "Follow brand usage guidelines for all promotional content",
          "Comply with applicable advertising and gaming regulations",
        ],
      },
    ],
  ),

  "responsible-gaming": p(
    "responsible-gaming",
    {
      title: "Responsible Gaming",
      description: "Responsible gaming information for TPOWER partners and their audiences.",
    },
    {
      label: "Responsible Gaming",
      title: "Responsible ",
      titleHighlight: "Gaming",
      description: "Promoting casino entertainment responsibly.",
      variant: "felt",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "TPOWER is committed to responsible gaming. Partners play an important role in promoting casino entertainment ethically.",
          "Partners should never target minors, vulnerable individuals, or use messaging that encourages irresponsible gambling behavior.",
        ],
      },
      {
        type: "list",
        heading: "Partner Guidelines",
        items: [
          "Do not promote to underage audiences",
          "Include responsible gaming messaging where appropriate",
          "Avoid suggesting gambling as a solution to financial problems",
          "Encourage players to set limits and gamble within their means",
        ],
      },
    ],
  ),

  "affiliate-guidelines": p(
    "affiliate-guidelines",
    {
      title: "Affiliate Guidelines",
      description: "Promotion guidelines for TPOWER affiliate partners.",
    },
    {
      label: "Affiliate Guidelines",
      title: "Affiliate ",
      titleHighlight: "Guidelines",
      description: "How to promote TPOWER accurately and responsibly.",
      variant: "dark",
    },
    [
      {
        type: "list",
        heading: "Promotion Standards",
        items: [
          "Use only approved TPOWER brand assets and promotional materials",
          "Make no guarantees about earnings, winnings, or player outcomes",
          "Clearly disclose affiliate relationships where required by law",
          "Do not use spam, misleading ads, or prohibited traffic sources",
          "Follow all program rules communicated in your partner agreement",
        ],
      },
    ],
  ),

  "content-guidelines": p(
    "content-guidelines",
    {
      title: "Content Guidelines",
      description: "How partners should represent the TPOWER brand in content.",
    },
    {
      label: "Content Guidelines",
      title: "Content ",
      titleHighlight: "Guidelines",
      description: "Brand representation standards for TPOWER partners.",
      variant: "cta",
    },
    [
      {
        type: "list",
        heading: "Brand Representation",
        items: [
          "Use official TPOWER logos without modification",
          "Maintain the TPOWER red, black, and white color system",
          "Write promotional copy that is accurate and not misleading",
          "Do not imply TPOWER is licensed or regulated in jurisdictions where it is not",
          "Review the Affiliate Guidelines for full promotion standards",
        ],
      },
    ],
  ),

  faq: p(
    "faq",
    {
      title: "FAQ",
      description: "Frequently asked questions about the TPOWER Partner Program.",
    },
    {
      label: "FAQ",
      title: "Frequently Asked ",
      titleHighlight: "Questions",
      description: "Answers to common partner program questions.",
      variant: "dark",
    },
    [],
  ),

  contact: p(
    "contact",
    {
      title: "Contact",
      description: "Contact TPOWER Partner support for program and account questions.",
    },
    {
      label: "Contact",
      title: "Contact ",
      titleHighlight: "Support",
      description: "Reach the TPOWER Partner team.",
      variant: "red",
    },
    [
      {
        type: "prose",
        paragraphs: [
          "For partner program inquiries, account questions, or promotional support, contact us through the form on this page or email partners@tpowerpartner.com.",
        ],
      },
    ],
  ),

  "partner-support": p(
    "partner-support",
    {
      title: "Partner Support",
      description: "How TPOWER partners get assistance with accounts, programs, and promotions.",
    },
    {
      label: "Partner Support",
      title: "Partner ",
      titleHighlight: "Support",
      description: "Help for TPOWER partners at every stage.",
      variant: "felt",
    },
    [
      {
        type: "grid",
        items: [
          { title: "Account Questions", body: "Login issues, credential requests, and account settings." },
          { title: "Program Questions", body: "Commission, tracking, and program structure inquiries." },
          { title: "Promotional Questions", body: "Brand usage, materials, and campaign guidance." },
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Contact partner support via the Contact page or email partners@tpowerpartner.com. Existing partners may also reach support through their partner dashboard.",
        ],
      },
    ],
  ),

  news: p(
    "news",
    {
      title: "News",
      description: "TPOWER Partner news and program updates.",
    },
    {
      label: "News",
      title: "Partner ",
      titleHighlight: "News",
      description: "Updates from the TPOWER Partner Program.",
      variant: "dark",
    },
    [
      {
        type: "notice",
        body: "Program news and updates will be published here as they become available. Check back for announcements about new resources, program features, and partner opportunities.",
      },
    ],
  ),

  "partner-insights": p(
    "partner-insights",
    {
      title: "Partner Insights",
      description: "Affiliate strategy, partner tips, and casino marketing education for TPOWER partners.",
    },
    {
      label: "Partner Insights",
      title: "Partner ",
      titleHighlight: "Insights",
      description: "Education and strategy for TPOWER partners.",
      variant: "red",
    },
    [
      {
        type: "articles",
        heading: "Evergreen Partner Guides",
        items: [
          { tag: "Strategy", title: "How To Structure A Casino Affiliate Campaign", body: "Framework for planning traffic sources, creative assets, and conversion tracking before launching a TPOWER partner campaign." },
          { tag: "Content", title: "Partner Content Planning", body: "Guidance on creating review content, comparison pages, and educational material that aligns with program guidelines." },
          { tag: "Tracking", title: "Tracking Basics For Partners", body: "Overview of link setup, attribution concepts, and reporting visibility available through the partner platform." },
          { tag: "Compliance", title: "Responsible Promotion", body: "Best practices for promoting online casino brands ethically and in accordance with program requirements." },
          { tag: "Creative", title: "Creative Best Practices", body: "Tips for using brand assets, campaign visuals, and promotional copy effectively across channels." },
          { tag: "Optimization", title: "Partner Funnel Optimization", body: "Approaches to improving landing page performance, click-through rates, and campaign efficiency over time." },
        ],
      },
      {
        type: "notice",
        body: "These are educational guides for partners — not company announcements. Register as a partner to access full program resources.",
      },
      {
        type: "related",
        heading: "Related Pages",
        links: [
          { label: "Marketing Resources", slug: "marketing-resources" },
          { label: "Partner Tools", slug: "partner-tools" },
          { label: "Affiliate Guidelines", slug: "affiliate-guidelines" },
        ],
      },
    ],
  ),

  terms: p(
    "terms",
    {
      title: "Terms & Conditions",
      description: "Terms and conditions for the TPOWER Partner Program.",
    },
    {
      label: "Legal",
      title: "Terms & ",
      titleHighlight: "Conditions",
      description: "Partner program terms of use.",
      variant: "dark",
    },
    [
      {
        type: "legal",
        sections: [
          {
            title: "Agreement To Terms",
            paragraphs: [
              "By accessing and using the TPOWER Partner website and registering for the partner program, you agree to these terms and conditions.",
              "Specific partnership terms, including commission structures and obligations, are defined in your individual partner agreement upon approval.",
            ],
          },
          {
            title: "Program Participation",
            paragraphs: [
              "Participation in the TPOWER Partner Program is subject to application review and approval.",
              "TPOWER reserves the right to accept or reject applications at its discretion.",
            ],
          },
          {
            title: "Partner Obligations",
            paragraphs: [
              "Partners must promote TPOWER in accordance with program guidelines, affiliate guidelines, and content guidelines.",
              "Partners must not engage in misleading, fraudulent, or prohibited promotional practices.",
            ],
          },
          {
            title: "Limitation Of Liability",
            paragraphs: [
              "TPOWER Partner provides program information and registration services. Specific commercial terms are governed by your partner agreement.",
            ],
          },
        ],
      },
    ],
  ),

  privacy: p(
    "privacy",
    {
      title: "Privacy Policy",
      description: "Privacy policy for the TPOWER Partner website.",
    },
    {
      label: "Legal",
      title: "Privacy ",
      titleHighlight: "Policy",
      description: "How we handle your information.",
      variant: "dark",
    },
    [
      {
        type: "legal",
        sections: [
          {
            title: "Information We Collect",
            paragraphs: [
              "When you register or contact us, we collect information you provide such as your name, email address, partner type, and message content.",
            ],
          },
          {
            title: "How We Use Information",
            paragraphs: [
              "We use your information to process partner applications, communicate about your account, and provide program support.",
            ],
          },
          {
            title: "Data Security",
            paragraphs: [
              "We implement reasonable measures to protect your personal information. No method of transmission over the internet is completely secure.",
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              "For privacy-related inquiries, contact partners@tpowerpartner.com.",
            ],
          },
        ],
      },
    ],
  ),

  register: p(
    "register",
    {
      title: "Register",
      description: "Register for the TPOWER Partner Program.",
    },
    {
      label: "Register",
      title: "Become A ",
      titleHighlight: "TPOWER Partner",
      description: "Join the official TPOWER Partner Program.",
      variant: "image",
    },
    [],
    { noIndex: true },
  ),

  login: p(
    "login",
    {
      title: "Login",
      description: "Login to your TPOWER Partner account.",
    },
    {
      label: "Login",
      title: "Welcome Back, ",
      titleHighlight: "Partner",
      description: "Access your TPOWER Partner dashboard.",
      variant: "image",
    },
    [],
    { noIndex: true },
  ),
};
