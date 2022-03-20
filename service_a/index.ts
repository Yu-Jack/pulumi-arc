import { register, loadConfig } from "tsconfig-paths";
const tsConfig = loadConfig('.');
if (tsConfig.resultType === 'failed') {
    console.log('Could not load tsconfig to map paths, aborting.');
    process.exit(1);
}
register({
  baseUrl: tsConfig.absoluteBaseUrl,
  paths: tsConfig.paths,
})

import * as aws from "@pulumi/aws";
import log from "@shared_lib/log"
import a from "@lib/a"
log()
a()

const bucket = new aws.s3.Bucket("my-bucket");
export const bucketName = bucket.id;
