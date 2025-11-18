/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://theokillian.nxhost.fr',
  generateRobotsTxt: true, // (optionnel) génère aussi un robots.txt
  sitemapSize: 7000, // taille max des fichiers sitemap
};
