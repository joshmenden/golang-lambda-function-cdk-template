package main

import (
	"context"
	"flag"
	"fmt"
	"log"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	local := flag.Bool("local", false, "whether or not you are running locally")
	flag.Parse()

	if *local {
		fmt.Println("Running in local mode")
		response, err := perform()
		if err != nil {
			log.Fatal(err)
		}

		fmt.Println(response)
	} else {
		fmt.Println("Running in lambda mode")
		lambda.Start(HandleRequest)
	}
}

func HandleRequest(ctx context.Context) (string, error) {
	return perform()
}

func perform() (string, error) {
	return "Hello world!", nil
}
