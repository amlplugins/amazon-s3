/**
 * @amlplugins/amazon-s3
 *
 * Thin namespaced re-export of the native @aws-sdk/client-s3 SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Amazon S3 — object storage, buckets, multipart upload, lifecycle, replication, presigned URLs.
 */

import * as _sdk from "@aws-sdk/client-s3";
export * from "@aws-sdk/client-s3";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@aws-sdk/s3-request-presigner";
export * as secondary from "@aws-sdk/s3-request-presigner";
export { _secondary };
