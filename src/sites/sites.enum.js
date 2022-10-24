const siteType = Object.freeze({
  REGULAR: "REGULAR",
  AGENCY: "AGENCY",
  LTD_AGENCY: "LTD_AGENCY",
});

const status = Object.freeze({
  PUBLISHED: "PUBLISHED",
  DRAFT: "DRAFT",
});

const domainType = Object.freeze({
  CUSTOM: "CUSTOM",
  SUB_DOMAIN: "SUB_DOMAIN",
});

const subscriptionAccessType = Object.freeze({
  ANYONE: "ANYONE",
  INVITED: "INVITED",
  NO_ONE: "NO_ONE",
});

const postAccessType = Object.freeze({
  PUBLIC: "PUBLIC",
  FREE: "FREE",
  PAID: "PAID",
});

const mqEvent = Object.freeze({
  CRATE_BLOG_ACK: "CRATE_BLOG_ACK",
  REMOVE_BLOG_FROM_USER: "REMOVE_BLOG_FROM_USER",
});

const agencyMemberLimitType = Object.freeze({
  MEMBERS: "MEMBERS",
  TEAM_MEMBERS: "TEAM_MEMBERS",
});

const themeType = Object.freeze({
  REGULAR: "REGUALR",
  MARKETPLACE: "MARKETPLACE",
});

export {
  siteType,
  status,
  domainType,
  subscriptionAccessType,
  postAccessType,
  mqEvent,
  agencyMemberLimitType,
  themeType,
};
