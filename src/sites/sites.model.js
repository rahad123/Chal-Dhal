import { number, string } from "joi";
import { mogoose } from "../db/db.js";
const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  domain: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  owner: {
    type: String,
    index: true,
    required: true,
  },
  dorikSitePrefix: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
    enum: statuses,
    default: PUBLISHED,
  },
  domainType: {
    type: String,
    required: true,
    trim: true,
    enum: domainTypes,
    default: SUB_DOMAIN,
  },
  siteType: {
    type: String,
    required: true,
    trim: true,
    enum: siteTypes,
    default: REGULAR,
  },
  globalStyle: {
    type: String,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  favicon: {
    type: String,
    trim: true,
  },
  plan: plan,
  audiencePlan: audiencePlan,
  categories: [
    {
      type: objectID,
      ref: "category",
    },
  ],
  tags: [
    {
      type: objectID,
      ref: "tag",
    },
  ],
  pages: [
    {
      type: objectID,
      ref: "page",
    },
  ],
  limits: {
    category: {
      type: String,
      default: 100,
    },
    tag: {
      type: String,
      default: 100,
    },
    members: {
      type: Number,
      default: 500,
    },
    teamMembers: {
      type: Number,
      default: 0,
    },
  },
  subscriptionAccess: {
    type: String,
    trim: true,
    enum: Object.values(subscriptionAccessType),
    default: ANYONE,
  },
  defaultPostAcess: {
    type: String,
    trim: true,
    enum: Object.values(postAccessType),
    default: PUBLIC,
  },
  portalDesign: {
    type: String,
    trim: true,
  },
  isURLRedirectEnables: {
    type: Boolean,
    default: false,
  },
  isWwwRedirectEnabled: {
    type: Boolean,
    default: false,
  },
  robot: {
    type: String,
    trim: true,
    default: "",
  },
  isRssEnabled: {
    type: Boolean,
    default: true,
  },
  isSiteMapEnabledInPost: {
    type: Boolean,
    default: true,
  },
  isSiteMapEnabledInCatefory: {
    type: Boolean,
    default: true,
  },
  rssTittle: {
    type: String,
    trim: true,
  },
  rssLink: {
    type: String,
    trim: true,
  },
  rssDescription: {
    type: String,
    trim: true,
  },
  rssLanguage: {
    type: String,
    trim: true,
  },
  postSlug: {
    type: String,
    trim: true,
    default: "post",
  },
  categorySlug: {
    type: String,
    trim: true,
    default: "category",
  },
  webhooks: [webhookSchema],
  roles: [roleSchema],
});

const Site = mongoose.model("site", siteSchema);

export { Site };
