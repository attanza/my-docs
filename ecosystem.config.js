module.exports = {
  apps: [
    {
      name: "docs",
      script: "./node_modules/nuxt/bin/nuxt-start",
      env: {
        HOST: "0.0.0.0",
        PORT: 7000,
        NODE_ENV: "production"
      }
    }
  ]
}
