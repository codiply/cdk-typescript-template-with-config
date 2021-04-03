import * as fs from 'fs'
import * as path from 'path';
import { SnsConfig, getConfig as getSnsConfig } from './sns-config';
import { SqsConfig, getConfig as getSqsConfig } from './sqs-config';
const yaml = require('js-yaml');

export interface Config {
    readonly Deployment: DeploymentConfig;
    readonly Sns: SnsConfig;
    readonly Sqs: SqsConfig;
}

export interface DeploymentConfig
{
    readonly AWSAccountID : string;
    readonly AWSRegion : string;
    readonly Prefix: string;
}

export function getString(object: { [name: string]: any }, propertyName: string ): string
{
    if(!object[propertyName] || object[propertyName].trim().length === 0)
        throw new Error('property '+propertyName +' does not exist or is empty');

    return object[propertyName];
}

export function getSection(object: { [name: string]: any }, sectionName: string ): { [name: string]: any }
{
    if(!object[sectionName])
        throw new Error('section '+sectionName +' does not exist');

    return object[sectionName];
}

export function getConfig(environmentName: string, configPath: string): Config
{
    let env: string = environmentName ?? 'default';

    let deploymentYaml = yaml.load(fs.readFileSync(path.resolve(configPath+env+'.deployment.yaml'), 'utf8'));
    let configYaml = yaml.load(fs.readFileSync(path.resolve(configPath+env+'.yaml'), 'utf8'));

    let config: Config = {
        Deployment: getDeploymentConfig(deploymentYaml),
        Sns: getSnsConfig(getSection(configYaml, 'Sns')),
        Sqs: getSqsConfig(getSection(configYaml, 'Sqs'))
    };

    return config;
}

function getDeploymentConfig(object: { [name: string]: any }): DeploymentConfig 
{
    return {
        AWSAccountID: getString(object, 'AWSAccountID'),
        AWSRegion: getString(object, 'AWSRegion'),
        Prefix: getString(object, 'Prefix')
    };
}