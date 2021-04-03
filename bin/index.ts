#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SqsQueueStack } from '../lib/sqs-queue-stack';
import { SnsTopicStack } from '../lib/sns-topic-stack';
import { getConfig } from '../lib/config/config'

const app = new cdk.App();

let environmentName = app.node.tryGetContext('config');

const config = getConfig(environmentName, './config/');
const env  = { account: config.Deployment.AWSAccountID, region: config.Deployment.AWSRegion };

new SqsQueueStack(app, config.Deployment.Prefix+'SqsQueueStack', config.Deployment, config.Sqs, { env: env});
new SnsTopicStack(app, config.Deployment.Prefix+'SnsTopicStack', config.Deployment, config.Sns, { env: env });
