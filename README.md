# 🚀 Top-level await in AWS Lamba with TypeScript

### Articles

- https://dev.to/oieduardorabelo/top-level-await-in-aws-lamba-with-typescript-1bf0
- https://medium.com/@oieduardorabelo/top-level-await-in-aws-lamba-with-typescript-aeba95b5abc1
- https://oieduardorabelo.hashnode.dev/top-level-await-in-aws-lamba-with-typescript

### Summary

This repository demonstrates [Node.js ES modules and top-level await in AWS Lambda](https://aws.amazon.com/blogs/compute/using-node-js-es-modules-and-top-level-await-in-aws-lambda/) while developing your code in TypeScript.

### How does that work?

We use [serverless-esbuild](https://github.com/floydspace/serverless-esbuild) to transpile our TypeScript code to JavaScript.

The secret sauce is to configure esbuild to output Node.js ES modules files with `.mjs` extension with the following esbuild options:

```yaml
format: "esm"
outputFileExtension: ".mjs"
platform: "node"
target: "esnext"
```

With that in place, you can have a fully typed AWS Lambda code in TypeScript and take advantage of executing `await` outside the handler function, improving the response time for the service consumers.

As [Dan Fox](https://twitter.com/danfox) (Principal Specialist Solutions Architect Serverless) explained in [his article](https://aws.amazon.com/blogs/compute/using-node-js-es-modules-and-top-level-await-in-aws-lambda/), we can see around ~45% performance improvements:

![https://aws.amazon.com/blogs/compute/using-node-js-es-modules-and-top-level-await-in-aws-lambda/](./docs//await3-1024x400.png)

## 📸 In The Media

- This example was highlighted in the [Off-by-none: Issue #198](https://offbynone.io/issues/198/) newsletter
