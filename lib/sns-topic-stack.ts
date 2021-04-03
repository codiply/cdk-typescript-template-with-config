import * as sns from '@aws-cdk/aws-sns';
import * as cdk from '@aws-cdk/core';

export class SnsTopicStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, 'CdkTypescriptTemplateWithConfigTopic');

    new cdk.CfnOutput(this, 'export-sns-topic-arn', { 
      exportName: 'sns-topic-arn',
      value: topic.topicArn 
    });
  }
}
