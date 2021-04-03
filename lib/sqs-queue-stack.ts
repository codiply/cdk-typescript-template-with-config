import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import { DeploymentConfig } from './config/config';
import { SqsConfig } from './config/sqs-config';

export class SqsQueueStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, deployment: DeploymentConfig, config: SqsConfig, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'SqsQueue', {
      queueName: deployment.Prefix+'-'+config.QueueName,
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topicArn = cdk.Fn.importValue(deployment.Prefix+'-sns-topic-arn');
    const topic = sns.Topic.fromTopicArn(this, 'SnsTopic', topicArn)
    
    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
