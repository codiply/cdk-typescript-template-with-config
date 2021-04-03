#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SqsQueueStack } from '../lib/sqs-queue-stack';
import { SnsTopicStack } from '../lib/sns-topic-stack';

const app = new cdk.App();
new SqsQueueStack(app, 'SqsQueueStack');
new SnsTopicStack(app, 'SnsTopicStack');
