require("dotenv").config()

module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "gatsby-my-template",
    },
    plugins: [
        "gatsby-plugin-emotion",
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: `src/__generated__/gatsby-types.d.ts`
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-shopify",
            options: {
                password: process.env.SHOPIFY_SHOP_PASSWORD,
                storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
                shopifyConnections: ["collections"],
            },
        },
    ],
};
