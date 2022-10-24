const productType = Object.freeze({
  STATIC: "STATIC",
  CMS: "CMS",
});

const priceType = Object.freeze({
  FREE: "FREE",
  PAID: "PAID",
});

const cacheKeys = {
  singleProductKey: async (userId, productId) => {
    return `${userId}_userId_${productId}_productId`;
  },
};

const productCacheTTL = 5 * 60;

const enumValue = {
  productType: productType,
  productTypes: Object.values(productType),
  priceType: priceType,
  priceTypes: Object.values(priceType),
  cacheKeys,
  productCacheTTL
};

export { enumValue, cacheKeys, productCacheTTL };
