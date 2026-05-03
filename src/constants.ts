/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  title: string;
  role: string;
  challenge: string;
  actions: string[];
  result: string;
  tags: string[];
  mediaType: 'image' | 'video';
  imageUrl?: string;
}

export interface PortfolioSection {
  id: string;
  title: string;
  description: string;
  tags: string[];
  projects: Project[];
}

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    id: "content",
    title: "Social Media & Content Marketing",
    description: "Building content systems that grow awareness, educate audiences, and support lead generation through data-driven editorial planning.",
    tags: ["WeChat Strategy", "Video Production", "Podcast Editing", "Editorial Planning"],
    projects: [
      {
        title: "WeChat Content Strategy & Growth Optimization",
        role: "Marketing Manager (Huameng)",
        challenge: "Needed to revitalize WeChat engagement and bridge the gap between content and lead generation.",
        actions: [
          "Conducted competitive analysis and optimized WECHAT content architecture",
          "Published over 150 articles (~3/week) and 32+ video campaigns for target audience",
          "Focused on translating complex tax policies into user-centric pain point solutions"
        ],
        result: "Achieved a 75% average read-through rate and 32% increase in reads, generating 40+ leads from organic traffic.",
        tags: ["WeChat", "Content Strategy", "Growth"],
        mediaType: 'image'
      }
    ]
  },
  {
    id: "event",
    title: "Event Marketing & Field Activation",
    description: "Executing global field marketing strategies that drive brand authority and high-value client resource exchanges.",
    tags: ["Global Events", "Field Marketing", "Exhibitions", "Lead Retention"],
    projects: [
      {
        title: "Global Field Activation & Overseas Event Series",
        role: "Marketing Manager (Huameng)",
        challenge: "Coordinating high-stakes finance events across multiple international jurisdictions for 900+ target attendees.",
        actions: [
          "Coordinated 12 overseas corporate events across 8 countries (ASEAN, Middle East, Europe)",
          "Co-hosted specialized tax sessions with Big Four partners for executive audiences",
          "Managed end-to-end on-site execution and facilitator-led resource exchanges"
        ],
        result: "Facilitated 60+ potential client resource exchanges per event and reached 900+ global industry leaders.",
        tags: ["Global Execution", "B2B Events", "Networking"],
        mediaType: 'image',
        imageUrl: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "product",
    title: "Product Marketing & GTM",
    description: "Defining positioning and messaging frameworks for complex SaaS and AI products to drive trial adoption.",
    tags: ["AI GTM", "Messaging", "FAQ Asset Building", "Market Positioning"],
    projects: [
      {
        title: "AI Tax-Q&A App Go-to-Market Strategy",
        role: "Marketing Manager (Huameng)",
        challenge: "Launching a specialized AI tool into a competitive market with high user skepticism.",
        actions: [
          "Defined core value propositions and built a 300+ FAQ knowledge base with response guidelines",
          "Designed H5 landing pages for trial sign-ups and user education",
          "Analyzed customer needs to refine the product messaging for 14 sales opportunities"
        ],
        result: "Generated 340 trial sign-ups within 1 month of pilot and increased inbound consultation users by 8%.",
        tags: ["AI SaaS", "Product Launch", "GTM"],
        mediaType: 'image'
      }
    ]
  },
  {
    id: "partnership",
    title: "Partnership & Channel Marketing",
    description: "Driving ecosystem growth through joint marketing initiatives and channel partner enablement.",
    tags: ["Ecosystem Growth", "Joint Marketing", "Channel Enablement", "Cloud Partnerships"],
    projects: [
      {
        title: "HUAWEI Cloud Joint Marketing & Ecosystem Expansion",
        role: "Marketing Manager (Huameng)",
        challenge: "Leveraging cloud provider resources to scale enterprise solutions and PoC opportunities.",
        actions: [
          "Co-led joint marketing with HUAWEI Cloud, delivering 4 integrated campaigns",
          "Supported 14 PoCs and advanced 300+ channel partners through training programs",
          "Built partnerships with 10+ business associations for cross-promotion"
        ],
        result: "Advanced 14 sales opportunities and achieved ¥150M in cumulative sales through the channel salon ecosystem.",
        tags: ["Huawei Cloud", "Partnerships", "Channel"],
        mediaType: 'image'
      }
    ]
  },
  {
    id: "lead-gen",
    title: "Lead Generation & Performance",
    description: "Optimizing conversion funnels through iterative SEM management and structured lead workflows.",
    tags: ["Baidu SEM", "Funnel Optimization", "Lead Workflow", "Performance Marketing"],
    projects: [
      {
        title: "SEM Optimization & Lead Capture Workflow",
        role: "Marketing Manager (Sangfor/Huameng)",
        challenge: "High cost-per-lead and inefficient handoff between marketing events and sales teams.",
        actions: [
          "Managed Baidu Search (SEM) keyword campaigns with iterative ad copy testing",
          "Built an end-to-end lead workflow (registration → capture → qualification → handoff)",
          "Executed retention campaigns across Email, SMS, and WeChat Video Channel"
        ],
        result: "Reduced cost-per-lead by 20% and supported the Shenzhen regional office in achieving ¥370M in annual sales.",
        tags: ["SEM", "CRM", "B2B Sales"],
        mediaType: 'video'
      }
    ]
  },
  {
    id: "sales-enablement",
    title: "Sales Enablement & Marketing Collateral",
    description: "Creating high-impact marketing assets that standardize messaging and shorten sales cycles.",
    tags: ["Sales Decks", "White Papers", "One-pagers", "Asset Factory"],
    projects: [
      {
        title: "Marketing Asset Factory & Sales Enablement System",
        role: "Marketing Manager (Sangfor)",
        challenge: "Sales teams lacked consistent, high-quality materials to explain technical enterprise software.",
        actions: [
          "Produced and iterated 100+ marketing materials (one-pagers, white papers, case studies)",
          "Designed H5 landing pages and business proposals for client-facing teams",
          "Directed 30+ video productions end-to-end to support sales pitches"
        ],
        result: "Achieved a 90% sales adoption rate of materials and supported 3-4 revision cycles per version to ensure message-market fit.",
        tags: ["Collateral", "SaaS Enablement", "Content"],
        mediaType: 'image',
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  }
];
