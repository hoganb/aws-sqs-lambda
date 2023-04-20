# aws-sqs-lambda
Developed and deployed a serverless messaging application using AWS SQS, Lambda, and CDK, with TypeScript as the programming language, which allowed for efficient processing and logging of distributed system messages using infrastructure as code principles.

# Project
The project is a serverless application on AWS that consists of an Amazon Simple Queue Service (SQS) queue and an AWS Lambda function that is triggered by messages in the queue. The Lambda function logs the incoming messages to an Amazon CloudWatch Logs log group.

The application is implemented using the AWS Cloud Development Kit (CDK), which allows you to define the infrastructure and application resources in code. The CDK stack defines the SQS queue, the Lambda function, and the permissions required for the function to access the queue.

The application can be deployed and tested easily using the AWS CLI or the AWS Management Console. The CDK also provides the ability to easily clean up and delete the resources when they are no longer needed.

Overall, the project provides a scalable and cost-effective solution for processing and logging messages from a queue using serverless technologies on AWS.

# Technologies
This project uses a number of AWS services and technologies to implement a serverless application. The main services and technologies used are:

- **Amazon Simple Queue Service (SQS)** - This service is used to create a message queue that can be used to send and receive messages in a distributed system.

- **AWS Lambda** - This is a serverless compute service that is used to process the messages that are received by the SQS queue. In this project, Lambda is used to log the incoming messages to a CloudWatch log group.

- **AWS Cloud Development Kit (CDK)** - This is a software development framework that is used to define the infrastructure and application resources in code. The CDK is used in this project to define the SQS queue, the Lambda function, and the permissions required for the function to access the queue.

- **Amazon CloudWatch Logs** - This service is used to log the messages processed by the Lambda function. The logs are stored in a log group that can be viewed and analyzed using the CloudWatch console.

Overall, these AWS services and technologies provide a scalable and cost-effective solution for handling messages in a distributed system using serverless computing.

# Skills
To successfully build and deploy this project, one would need to have a good understanding of the following skills:

- **AWS services and technologies** - A solid understanding of Amazon SQS, AWS Lambda, AWS CloudWatch, and AWS CDK is necessary to implement this project.

- **Programming** - Basic programming skills are required to write Lambda functions, particularly in Node.js. Familiarity with TypeScript, the language used in this project, is also helpful.

- **Infrastructure as Code (IaC)** - Knowledge of IaC principles and tools like AWS CDK is required to define and deploy infrastructure in code.

- **Cloud computing best practices** - Familiarity with cloud computing best practices, such as using serverless architecture, is necessary to build a scalable and cost-effective solution.

# Testing
Once you have deployed the AWS CDK stack that includes the SQS queue and the Lambda function, you can test the setup by sending a message to the queue and checking the CloudWatch Logs for the Lambda function to see if it logs the message.

Here's how you can do it:

1. Go to the AWS Management Console and navigate to the SQS service.
2. Find the SQS queue that you created with the CDK stack and click on it.
3. Click on the "Send a Message" button.
4. Enter a message in the text box and click "Send Message".
5. Go to the AWS Management Console and navigate to the CloudWatch service.
6. In the CloudWatch console, click on "Logs" in the left-hand menu.
7. Find the log group for the Lambda function. The name of the log group will be in the format `/aws/lambda/{FUNCTION_NAME}`.
8. Click on the log group to view the logs.
9. Check the logs to see if the Lambda function has logged the message.

If the Lambda function is working correctly, you should see log messages in the CloudWatch Logs that correspond to the message that you sent to the SQS queue. If there are any errors or issues with the Lambda function, you can use the CloudWatch Logs to debug and troubleshoot the problem.

# Logs
Output example after testing
```
timestamp,message
1681985224064,"INIT_START Runtime Version: nodejs:14.v29	Runtime Version ARN: arn:aws:lambda:eu-west-2::runtime:be6b7a67cb4533b2e602f284c4e41058155b081b5879c71929b33e71c124b81d
"
1681985224227,"START RequestId: dae59f59-e955-53d7-94e6-c3e2f855105c Version: $LATEST
"
1681985224231,"2023-04-20T10:07:04.231Z	dae59f59-e955-53d7-94e6-c3e2f855105c	INFO	Received message from SQS: testing
"
1681985224233,"END RequestId: dae59f59-e955-53d7-94e6-c3e2f855105c
"
1681985224233,"REPORT RequestId: dae59f59-e955-53d7-94e6-c3e2f855105c	Duration: 5.20 ms	Billed Duration: 6 ms	Memory Size: 128 MB	Max Memory Used: 57 MB	Init Duration: 162.18 ms	
"
1681985328964,"START RequestId: 6bd78cec-aa99-5456-87ca-d057bbf417dd Version: $LATEST
"
1681985329012,"2023-04-20T10:08:49.012Z	6bd78cec-aa99-5456-87ca-d057bbf417dd	INFO	Received message from SQS: hello
"
1681985329033,"END RequestId: 6bd78cec-aa99-5456-87ca-d057bbf417dd
"
1681985329033,"REPORT RequestId: 6bd78cec-aa99-5456-87ca-d057bbf417dd	Duration: 68.35 ms	Billed Duration: 69 ms	Memory Size: 128 MB	Max Memory Used: 58 MB	
"
1681985404126,"START RequestId: b4abbde5-c77b-5490-8f92-e15ed6d64060 Version: $LATEST
"
1681985404133,"2023-04-20T10:10:04.133Z	b4abbde5-c77b-5490-8f92-e15ed6d64060	INFO	Received message from SQS: 3
"
1681985404154,"END RequestId: b4abbde5-c77b-5490-8f92-e15ed6d64060
"
1681985404154,"REPORT RequestId: b4abbde5-c77b-5490-8f92-e15ed6d64060	Duration: 28.25 ms	Billed Duration: 29 ms	Memory Size: 128 MB	Max Memory Used: 58 MB	
"
```

# Notes
By default, the Lambda function has permission to write logs to CloudWatch Logs without any additional configuration or permissions required. When you create a Lambda function using the AWS CDK, the CDK automatically creates a CloudWatch Logs log group for the function and configures the function to write its logs to that log group.

When you run `cdk destroy`, the AWS CDK destroys all the resources created by the stack, but it does not delete any CloudWatch Logs log groups that were created as part of the stack.

This is because the AWS CDK does not manage CloudWatch Logs log groups directly. Log groups are created automatically by AWS services when they generate logs, and they are not deleted automatically when the corresponding service resources are deleted.

To delete the CloudWatch Logs log group that was created by the Lambda function, you can do the following:

1. Go to the AWS Management Console and navigate to the CloudWatch service.
2. In the CloudWatch console, click on "Logs" in the left-hand menu.
3. Find the log group for the Lambda function. The name of the log group will be in the format `/aws/lambda/{FUNCTION_NAME}`.
4. Click on the log group to select it.
5. Click on the "Actions" button at the top of the screen, and then click "Delete log group".
6. In the confirmation dialog box, enter the name of the log group and click "Delete".

Note that deleting a log group will permanently delete all the log data stored in the group, so make sure to save any important log data before deleting the log group.