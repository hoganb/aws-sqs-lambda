import * as cdk from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class AwsSqsLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Define an SQS queue
    const queue = new sqs.Queue(this, 'MyQueue', {
      queueName: 'MyQueue',
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    // Define a Lambda function that will be triggered by the SQS queue
    const lambdaFunction = new lambda.Function(this, 'MyFunction', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
      functionName: 'MyFunction',
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(10),
    });

    // Add trigger from SQS to Lambda via event source mapping
    lambdaFunction.addEventSourceMapping('MyEventSource', {
      batchSize: 10,
      eventSourceArn: queue.queueArn
    });

    // Grant the Lambda function permission to receive messages from the SQS queue
    queue.grantConsumeMessages(lambdaFunction);

    // By default, the Lambda function has permission to write logs to CloudWatch Logs without any additional configuration or permissions required.
    // When you create a Lambda function using the AWS CDK, the CDK automatically creates a CloudWatch Logs log group for the function and
    // configures the function to write its logs to that log group.
  }
}
