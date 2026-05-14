import { SITE_URL } from '$lib/seo';
import type { RequestHandler } from './$types';

const pages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/pricing', priority: '0.9', changefreq: 'monthly' },
	{ path: '/gallery', priority: '0.7', changefreq: 'monthly' }
];

export const GET: RequestHandler = () => {
	const now = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
