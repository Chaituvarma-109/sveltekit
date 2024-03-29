import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import db from '$lib/database';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 30);
	const order = url.searchParams.get('order') ?? 'asc';

	const posts = await db.post.findMany({
		orderBy: { id: order },
		take: limit
	});

	// {
	// 	take: Math.round(Math.random() * 30);
	// }
	// event.setHeaders({
	// 	'Cache-Control': 'max-age=60'
	// 	// server side
	// 	// 'Cache-Control': 'public, max-age=0, s-maxage=60'
	// });
	return json(posts);
};
