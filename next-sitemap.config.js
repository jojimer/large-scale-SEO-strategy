/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  // optional
  // robotsTxtOptions: {
  //   policies: [
  //     {
  //       userAgent: '*',
  //       allow: '/',
  //     },
  //     {
  //       userAgent: 'test-bot',
  //       allow: ['/api/hello'],
  //     },
  //     {
  //       userAgent: 'black-listed-bot',
  //       disallow: ['/api/hello'],
  //     },
  //   ],
  //   additionalSitemaps: [
  //     'https://example.com/my-custom-sitemap-1.xml',
  //     'https://example.com/my-custom-sitemap-2.xml',
  //     'https://example.com/my-custom-sitemap-3.xml',
  //   ],
  // },
}
