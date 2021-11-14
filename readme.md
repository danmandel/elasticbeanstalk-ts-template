## Prerequisites
* The [Elastic Beanstalk CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html). I used `brew install awsebcli`.

* A global installation of TypeScript: `npm install -g typescript`.

## Setup
1. Execute `eb init --platform node.js --region us-east-2`. The [eb init](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-init.html) command creates the Elastic Beanstalk application that can be found [here](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/applications). By default the application will be named after the folder this command is executed in.

2. Execute the `eb create --sample elasticbeanstalk-ts-template-env -p "Node.js 14 running on 64bit Amazon Linux 2"`. The [eb create](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-create.html) command creates the environment that can be found [here](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/environments). It's safe to ignore the warning about not specifying a Node.js version, because it will be specified as part of the deployed artifact in step 4.

3. Add 2 lines to the bottom of `.elasticbeanstalk/config.yml`. The generated zip file's name should be equal to the `name` parameter used in the package.json.

```yml
deploy:
  artifact: dist/elasticbeanstalk-ts-template.zip
```

4. Execute `npm install` then `npm run deploy.` This will compile the `src` folder into `build`, produce a zipped artifact, and deploy it to Elastic Beanstalk.

## Testing
1. Execute `eb open`.
