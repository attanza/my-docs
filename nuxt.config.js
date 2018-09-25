module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Foodgasm Back End Wrapper",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Foodgasm Back End Wrapper",
        name: "Foodgasm Back End Wrapper",
        content: "Foodgasm Back End Wrapper"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/fav.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  mode: "spa",
  plugins: ["~/plugins/vuetify.js", "~/plugins/vue_markdown.js"],
  css: ["~/assets/style/app.styl", "~/assets/style/doc_style.css"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["~/plugins/vuetify.js"],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
