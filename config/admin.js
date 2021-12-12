module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c531fc0d0671f0b306f914a990838101'),
  },
});
