import * as dynamoose from 'dynamoose';

export default {
  init: (): void => {
    dynamoose.aws.sdk.config.update({
      accessKeyId: 'AKID',
      secretAccessKey: 'SECRET',
      region: 'us-east-1',
      dynamodb: {
        endpoint: `http://${process.env.DB_DYNAMODB_HOST}:${process.env.DB_DYNAMODB_PORT}`,
      },
    });
    dynamoose.model.defaults.set({
      create: true,
      update: true,
      prefix: '',
      throughput: {
        read: 1,
        write: 1,
      },
      suffix: '',
    });

    console.log('Status Dynamoose: ', dynamoose.logger.status());
  },
};
