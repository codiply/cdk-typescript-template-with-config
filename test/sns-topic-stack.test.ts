import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { SnsTopicStack } from '../lib/sns-topic-stack';

test('SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new SnsTopicStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});
