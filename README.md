# @amlplugins/amazon-s3

Native `@aws-sdk/client-s3` SDK re-exported under the `@amlplugins` namespace.

> Amazon S3 — object storage, buckets, multipart upload, lifecycle, replication, presigned URLs.

## Install

```bash
npm install @amlplugins/amazon-s3
```

## Use

```ts
import { /* named exports from @aws-sdk/client-s3 */ } from "@amlplugins/amazon-s3";
// or
import sdk from "@amlplugins/amazon-s3";
```

This package additionally re-exports `@aws-sdk/s3-request-presigner` under the `secondary` namespace.

Built and published by GitHub Actions on every push to `main`.

Part of the amlplugins family — see https://github.com/amlplugins.
