/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.secretbox = (function() {

    /**
     * Namespace secretbox.
     * @exports secretbox
     * @namespace
     */
    var secretbox = {};

    secretbox.SecretBoxMetadata = (function() {

        /**
         * Properties of a SecretBoxMetadata.
         * @memberof secretbox
         * @interface ISecretBoxMetadata
         */

        /**
         * Constructs a new SecretBoxMetadata.
         * @memberof secretbox
         * @classdesc Represents a SecretBoxMetadata.
         * @implements ISecretBoxMetadata
         * @constructor
         * @param {secretbox.ISecretBoxMetadata=} [properties] Properties to set
         */
        function SecretBoxMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SecretBoxMetadata instance using the specified properties.
         * @function create
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {secretbox.ISecretBoxMetadata=} [properties] Properties to set
         * @returns {secretbox.SecretBoxMetadata} SecretBoxMetadata instance
         */
        SecretBoxMetadata.create = function create(properties) {
            return new SecretBoxMetadata(properties);
        };

        /**
         * Encodes the specified SecretBoxMetadata message. Does not implicitly {@link secretbox.SecretBoxMetadata.verify|verify} messages.
         * @function encode
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {secretbox.ISecretBoxMetadata} message SecretBoxMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SecretBoxMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SecretBoxMetadata message, length delimited. Does not implicitly {@link secretbox.SecretBoxMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {secretbox.ISecretBoxMetadata} message SecretBoxMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SecretBoxMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SecretBoxMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {secretbox.SecretBoxMetadata} SecretBoxMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SecretBoxMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.secretbox.SecretBoxMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SecretBoxMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {secretbox.SecretBoxMetadata} SecretBoxMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SecretBoxMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SecretBoxMetadata message.
         * @function verify
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SecretBoxMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SecretBoxMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {secretbox.SecretBoxMetadata} SecretBoxMetadata
         */
        SecretBoxMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.secretbox.SecretBoxMetadata)
                return object;
            return new $root.secretbox.SecretBoxMetadata();
        };

        /**
         * Creates a plain object from a SecretBoxMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof secretbox.SecretBoxMetadata
         * @static
         * @param {secretbox.SecretBoxMetadata} message SecretBoxMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SecretBoxMetadata.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SecretBoxMetadata to JSON.
         * @function toJSON
         * @memberof secretbox.SecretBoxMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SecretBoxMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SecretBoxMetadata;
    })();

    return secretbox;
})();

module.exports = $root;
