const productType = Object.freeze({
    STATIC: 'STATIC',
    CMS: 'CMS',
});

const priceType = Object.freeze({
    FREE: 'FREE',
    PAID: 'PAID',
});

const enumValue = {
    productType: productType,
    productTypes: Object.values(productType),
    priceType: priceType,
    priceTypes: Object.values(priceType),
}

export { enumValue };