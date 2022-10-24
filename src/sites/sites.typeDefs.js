import { gql } from "apollo-server-express";

const sitesTypeDefs = gql`
  enum SiteDomainTypeEnum {
    CUSTOM
    SUB_DOMAIN
  }

  enum SiteStatusEnum {
    PUBLISHED
    DRAFT
  }

  enum SiteSubscriptionAccessEnum {
    ANYONE
    INVITED
    NOBODY
  }

  enum SitePostAccessEnum {
    PUBLIC
    FREE
    PAID
  }

  enum SiteTypeEnum {
    REGULAR
    AGENCY
  }

  enum SiteThemeTypeEnum {
    REGULAR
    MARKETPLACE
  }

  type Limits {
    category: Int
    tag: Int
    members: Int
    teamMembers: Int
  }

  type Webhook {
    id: ID!
    url: String!
    secret: String!
  }

  
`;
