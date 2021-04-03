import { getString } from './config'

export interface SnsConfig
{
    readonly TopicName : string;
}

export function getConfig(object: { [name: string]: any }): SnsConfig
{
    return {
        TopicName: getString(object, 'TopicName'),
    };
}
