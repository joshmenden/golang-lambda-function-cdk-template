import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { Construct } from 'constructs';

export class GolangLambdaFunctionCDKTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const golangLambda = new lambda.Function(this, 'golang-lambda-function-cdk-template-func', {
      functionName: "GolangLambdaFunctionCDKTemplateFunc",
      runtime: lambda.Runtime.GO_1_X,
      timeout: cdk.Duration.seconds(15),
      memorySize: 128,
      handler: 'main',
      code: lambda.Code.fromAsset(path.join(__dirname, '/../../golang-lambda-function-cdk-template.zip')),
      environment: { REGION: cdk.Stack.of(this).region },
    });
  }
}
