# Shopify Theme

A clean, minimal Shopify Online Store 2.0 theme designed for modern product brands. The theme ships with semantic Liquid templates, responsive styling, and a small amount of JavaScript for mobile navigation.

## Features
- Header, footer, and featured products sections with theme editor settings
- Responsive hero area and product card grid
- Product template with media gallery and variant selection
- Collection listing with pagination
- Cart template with quantity updates and checkout button
- Customizable colors, logo, and featured collection via `settings_schema.json`

## Getting Started
1. Install the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) and authenticate with your store.
2. Clone this repository and change into the project directory.
3. Run `shopify theme dev` to preview the theme locally or `shopify theme push` to upload it to your store.

## Project Structure
```
shopify-theme/
├── assets/
│   ├── styles.css
│   └── theme.js
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── en.default.json
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   └── featured-products.liquid
├── snippets/
│   └── product-card.liquid
├── templates/
│   ├── index.liquid
│   ├── product.liquid
│   ├── collection.liquid
│   └── cart.liquid
└── package.json
```

## Development
- CSS is written in plain `styles.css` using modern layout techniques.
- `theme.js` handles the mobile navigation toggle.
- Liquid files follow Shopify best practices and include inline comments describing their purpose.

Feel free to customize sections, snippets, and styles to match your brand identity.
