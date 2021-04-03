# Welcome to your CDK TypeScript project!

You should explore the contents of this project. It demonstrates a CDK app with two stacks
which contain an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`          compile typescript to js
 * `npm run watch`          watch for changes and compile
 * `npm run test`           perform the jest unit tests
 * `cdk deploy --all`       deploy this stack to your default AWS account/region
 * `cdk diff --all`         compare deployed stack with current state
 * `cdk synth <stack id>`   emits the synthesized CloudFormation template

## Side-by-side deployments

The configuration of this template allows multiple deployments of the stacks with

- multiple copies in different accounts,
- multiple copies in different regions in the same account, and
- multiple side-by-side copies in the same account and region.

For this to work you will need to prepend the `Prefix` configured in each deployment to

- all names of resources
- all names of exported stack outputs.

## Configuration

Make a copy of the `xxx.deployment.template.yaml` and save it as `xxx.deployment.yaml`. Fill in the account number and region.
The file containing your account details is ignored in `.gitignore` but you can choose to put it under source control if you wish.

You can perform a specific deployment like this

```
cdk deploy --all -c config=xxx
```

For convenience, especially when developing and if you have multiple aws profiles configured, you can store in `aws-profile.txt` your AWS profile and use `./cdk.sh` instead of `cdk` in all CDK commands. This will save you from typing `--profile <your aws profile>`.
