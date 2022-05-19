module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost:8080/api'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cc0d3a3200fcb5651ec782a7a1ceb2dd'),
    },
    url: env('ADMIN_URL', 'http://localhost:1337/admin'),
  },
});
