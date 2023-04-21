import { APIGatewayEvent } from "aws-lambda";

export const helloworld = async (event: APIGatewayEvent) => {
  const body = event.body ? JSON.parse(event.body) : {};

  if (body.message) {
    console.log("we;re in");
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
