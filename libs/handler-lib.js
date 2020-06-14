export default function handler(lambda) {
  return function (event, context) {
    return Promise.resolve()
      .then(() => lambda(event, context))
      .then((responseBody) => [200, responseBody])
      .catch((e) => [500, { error: e.message }])
      .then(([statusCode, body]) => ({
        statusCode,
        body: JSON.stringify(body),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      }));
  };
}
