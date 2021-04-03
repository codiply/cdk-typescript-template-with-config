#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkTypescriptTemplateWithConfigStack } from '../lib/cdk-typescript-template-with-config-stack';

const app = new cdk.App();
new CdkTypescriptTemplateWithConfigStack(app, 'CdkTypescriptTemplateWithConfigStack');
