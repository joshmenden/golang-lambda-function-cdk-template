# golang-lambda-function-cdk-template
A template for a single Golang Lambda function, all setup with Typescript CDK

## Setup

Everything you need to get going can be found in the [`Makefile`](https://github.com/joshmenden/golang-lambda-function-cdk-template/blob/main/Makefile)

* `make run` will run the program locally
* `make build` will build a Lambda-ready executable
* `make zip` will zip up that executable, ready to be used as an asset for CDK
* `make deploy` will build, zip, and deploy the function, along with any other changes to your CDK stack
* `make clean` will remove the executable and zip file, if it exists

Happy coding!
