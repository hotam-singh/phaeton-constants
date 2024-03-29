"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPOCH_TIME = new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0));
exports.EPOCH_TIME_MILLISECONDS = exports.EPOCH_TIME.getTime();
const MS_FACTOR = 1000;
exports.EPOCH_TIME_SECONDS = Math.floor(exports.EPOCH_TIME.getTime() / MS_FACTOR);
const MAX_EIGHT_BYTE_NUMBER = '18446744073709551615';
exports.MAX_ADDRESS_NUMBER = MAX_EIGHT_BYTE_NUMBER;
exports.MAX_TRANSACTION_ID = MAX_EIGHT_BYTE_NUMBER;
exports.MAX_TRANSACTION_AMOUNT = '9223372036854775807';
exports.SIGNED_MESSAGE_PREFIX = 'Phaeton Signed Message:\n';
exports.TESTNET_NETHASH = 'da3ed6a45429278bac2666961289ca17ad86595d33b31037615d4b8e8f158bba';
exports.MAINNET_NETHASH = 'ed14889723f24ecc54871d058d98ce91ff2f973192075c0155ba2b7b70ad2511';
//# sourceMappingURL=index.js.map
