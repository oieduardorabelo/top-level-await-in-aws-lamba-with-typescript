import type { APIGatewayProxyHandler } from "aws-lambda";
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const { SSM_CONFIG_CLIENT } = process.env;

const ssmClient = new SSMClient({});
const input = { Name: SSM_CONFIG_CLIENT };
const command = new GetParameterCommand(input);
const { Parameter } = await ssmClient.send(command);

export const handler: APIGatewayProxyHandler = async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
      parameter: Parameter?.Value,
    }),
  };

  return response;
};
