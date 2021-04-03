import * as sns from '@aws-cdk/aws-sns';
import * as cdk from '@aws-cdk/core';
import { DeploymentConfig } from './config/config';
import { SnsConfig } from './config/sns-config';

export class SnsTopicStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, deployment: DeploymentConfig, config: SnsConfig, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, 'SnsTopic', {
      topicName: deployment.Prefix+'-'+config.TopicName
    });

    new cdk.CfnOutput(this, 'export-sns-topic-arn', { 
      exportName: deployment.Prefix+'-sns-topic-arn',
      value: topic.topicArn 
    });
  }
}
