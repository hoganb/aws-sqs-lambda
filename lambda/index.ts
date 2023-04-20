// exports.handler = async (event: { Records: any[]; }, context: any) => {
//   try {
//     const messages = event.Records;
//     messages.forEach((message: { body: any; }) => {
//         const { body } = message;
//         console.log(`Received message from SQS: ${body}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

import { SQSEvent } from 'aws-lambda';

export const handler = async (event: SQSEvent): Promise<void> => {
  for (const record of event.Records) {
    const message = record.body;
    console.log(`Received message from SQS: ${message}`);
  }
};