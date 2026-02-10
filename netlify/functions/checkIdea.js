exports.handler = async function (event) {
  const idea = event.queryStringParameters.idea;

  const response = await fetch(
    `https://startup-checker.onrender.com/check?idea=${encodeURIComponent(idea)}`
  );

  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };
};
