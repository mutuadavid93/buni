// Ref for all server options for Deployment issues
//  see - https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#server
module.exports = ({ env }) => ({
  host: env("HOST", env.HOST),
  port: env.int("PORT", env.PORT),
  // url useful when exposing the Strapi CMS server Container
  // url: `http://${host}:${port}`,
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", env.ADMIN_JWT_SECRET)
    }
  }
});
