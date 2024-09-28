import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dynamoDbConfig = () => {
  const region = process.env.AWS_REGION || 'us-east-2';
  return new DynamoDBClient({ region });
};
