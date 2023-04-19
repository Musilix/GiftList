import { APIGatewayEvent } from "aws-lambda";

export const helloWorldHandler = async (event: APIGatewayEvent) => {
  const body = event.body ? JSON.parse(event.body) : {};

  if (body.message) {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `You sent us this: ${body.message}`,
      }),
    };

    return response;
  } else {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "You sent us nothing",
      }),
    };

    return response;
  }
};
