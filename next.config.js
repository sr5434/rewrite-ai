/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/sr5434/rewrite-ai',
        permanent: false,
      },
      {
        source: '/deploy',
        destination: 'https://vercel.com/templates/next.js/twitter-bio',
        permanent: false,
      },
    ];
  },
};
