export const handler = async (event, context) => {
	const queryParams = event.queryStringParameters;
	const key = queryParams.key;
	const secretKey = process.env.PUBLIC_DOORKEY;

	if (key === secretKey) {
		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
		};
	}

	return {
		statusCode: 403,
		body: JSON.stringify({ success: false, message: 'Wrong key' }),
	};
};
