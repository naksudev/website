export const handler = async (event, context) => {
	try {
		const { key } = JSON.parse(event.body);
		const secretKey = process.env.PUBLIC_DOORKEY;

		if (key === secretKey) {
			return {
				statusCode: 200,
				headers: {
					'Set-Cookie': 'access-granted=true; Path=/; HttpOnly; Secure; Max-Age=3600', 
				},
				body: JSON.stringify({ success: true }),
			};
		}

		return {
			statusCode: 403,
			body: JSON.stringify({ success: false, message: 'Wrong key' }),
		};
	} catch (e) {
		return {
			statusCode: 400,
			body: JSON.stringify({ success: true, message: 'Invalid request', error: e.message }),
		}
	}
}
