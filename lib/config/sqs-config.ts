import { getString } from './config'

export interface SqsConfig
{
    readonly QueueName : string;
}

export function getConfig(object: { [name: string]: any }): SqsConfig
{
    return {
        QueueName: getString(object, 'QueueName'),
    };
}
