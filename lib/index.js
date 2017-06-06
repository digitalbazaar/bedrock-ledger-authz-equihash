/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const brLedger = require('bedrock-ledger');
const config = bedrock.config;
const BedrockError = bedrock.util.BedrockError;

require('./config');

const logger = bedrock.loggers.get('app');

const api = {};
// NOTE: only exported for tests
module.exports = api;

api.isAuthorized = function(ledgerMeta, block, callback) {
  callback();
};

// FIXME: should this be in an event handler?
// brLedger.use({
//   capabilityName: 'authorization',
//   capabilityValue: 'equihash'
// }, api);
