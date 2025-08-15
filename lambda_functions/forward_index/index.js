/**
 * This function ensures index.html is loaded when browsing to various pages
 * of the cloudfront distribution. Cloudfront will automatically forward root
 * requests to /index.html. But it doesn't do it for any sub paths (i.e. /page1/).
 */
'use strict';
exports.handler = (event, context, callback) => {

  // Extract the request from the CloudFront event that is sent to Lambda@Edge
  var request = event.Records[0].cf.request;

  // Extract the URI from the request and write to logs
  var uri = request.uri;
  console.log("Old URI: " + uri);

  // Match any uri w/out a '.' and replace it with a default index.html
  if (uri.endsWith('/')) {
    uri += 'index.html';
  } else if (!uri.includes('.')) {
    uri += '/index.html';
  }

  // Log the URI as received by CloudFront and the new URI to be used to fetch from origin
  console.log("New URI: " + uri);

  // Replace the received URI with the URI that includes the index page
  request.uri = uri;

  // Return to CloudFront
  return callback(null, request);

};