import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { DeploymentConfig } from '../lib/config/config';
import { SnsConfig } from '../lib/config/sns-config';
import { SnsTopicStack } from '../lib/sns-topic-stack';

const deployment: DeploymentConfig = {
  AWSAccountID: "12345",
  AWSRegion: "eu-west-1",
  Prefix: "test"
};

const config: SnsConfig = {
  TopicName: 'some-topic-name'
};

test('SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new SnsTopicStack(app, 'MyTestStack', deployment, config);
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});
