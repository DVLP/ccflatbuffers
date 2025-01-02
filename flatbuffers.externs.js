/**
 * @fileoverview Externs for Flatbuffers library
 * @externs
 */

/**
 * @enum {number}
 */
var Encoding = {
  UTF8_BYTES: 1,
  UTF16_STRING: 2
};

/**
 * @constructor
 * @param {number=} initial_size
 */
var Builder = function(initial_size) {};

/**
 * @param {string} s
 * @return {!Offset}
 */
Builder.prototype.createString = function(s) {};

// /**
//  * @constructor
//  * @param {!Uint8Array|!ArrayBuffer} bytes
//  */
// var ByteBuffer = function(bytes) {};

// /**
//  * @return {!Uint8Array}
//  */
// ByteBuffer.prototype.bytes = function() {};


// Item stuff
var serializeData = {}
var parseBuffer = {}