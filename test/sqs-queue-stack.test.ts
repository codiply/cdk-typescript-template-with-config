import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { DeploymentConfig } from '../lib/config/config';
import { SqsConfig } from '../lib/config/sqs-config';
import { SqsQueueStack } from '../lib/sqs-queue-stack';

const deployment: DeploymentConfig = {
  AWSAccountID: "12345",
  AWSRegion: "eu-west-1",
  Prefix: "test"
};

const config: SqsConfig = {
  QueueName: 'some-queue-name'
};

test('SQS Queue Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SqsQueueStack(app, 'MyTestStack', deployment, config);
    // THEN
    expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
      VisibilityTimeout: 300
    }));
});
