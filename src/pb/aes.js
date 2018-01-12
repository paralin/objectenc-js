/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.aes = (function() {

    /**
     * Namespace aes.
     * @exports aes
     * @namespace
     */
    var aes = {};

    aes.AESMetadata = (function() {

        /**
         * Properties of a AESMetadata.
         * @memberof aes
         * @interface IAESMetadata
         * @property {aes.KeySize|null} [keySize] AESMetadata keySize
         * @property {Uint8Array|null} [keyHash] AESMetadata keyHash
         * @property {Uint8Array|null} [keyHashSalt] AESMetadata keyHashSalt
         * @property {Uint8Array|null} [iv] AESMetadata iv
         */

        /**
         * Constructs a new AESMetadata.
         * @memberof aes
         * @classdesc Represents a AESMetadata.
         * @implements IAESMetadata
         * @constructor
         * @param {aes.IAESMetadata=} [properties] Properties to set
         */
        function AESMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AESMetadata keySize.
         * @member {aes.KeySize} keySize
         * @memberof aes.AESMetadata
         * @instance
         */
        AESMetadata.prototype.keySize = 0;

        /**
         * AESMetadata keyHash.
         * @member {Uint8Array} keyHash
         * @memberof aes.AESMetadata
         * @instance
         */
        AESMetadata.prototype.keyHash = $util.newBuffer([]);

        /**
         * AESMetadata keyHashSalt.
         * @member {Uint8Array} keyHashSalt
         * @memberof aes.AESMetadata
         * @instance
         */
        AESMetadata.prototype.keyHashSalt = $util.newBuffer([]);

        /**
         * AESMetadata iv.
         * @member {Uint8Array} iv
         * @memberof aes.AESMetadata
         * @instance
         */
        AESMetadata.prototype.iv = $util.newBuffer([]);

        /**
         * Creates a new AESMetadata instance using the specified properties.
         * @function create
         * @memberof aes.AESMetadata
         * @static
         * @param {aes.IAESMetadata=} [properties] Properties to set
         * @returns {aes.AESMetadata} AESMetadata instance
         */
        AESMetadata.create = function create(properties) {
            return new AESMetadata(properties);
        };

        /**
         * Encodes the specified AESMetadata message. Does not implicitly {@link aes.AESMetadata.verify|verify} messages.
         * @function encode
         * @memberof aes.AESMetadata
         * @static
         * @param {aes.IAESMetadata} message AESMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AESMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keySize != null && message.hasOwnProperty("keySize"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.keySize);
            if (message.keyHash != null && message.hasOwnProperty("keyHash"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.keyHash);
            if (message.keyHashSalt != null && message.hasOwnProperty("keyHashSalt"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.keyHashSalt);
            if (message.iv != null && message.hasOwnProperty("iv"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.iv);
            return writer;
        };

        /**
         * Encodes the specified AESMetadata message, length delimited. Does not implicitly {@link aes.AESMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aes.AESMetadata
         * @static
         * @param {aes.IAESMetadata} message AESMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AESMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AESMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof aes.AESMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aes.AESMetadata} AESMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AESMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aes.AESMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keySize = reader.int32();
                    break;
                case 2:
                    message.keyHash = reader.bytes();
                    break;
                case 3:
                    message.keyHashSalt = reader.bytes();
                    break;
                case 4:
                    message.iv = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a AESMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aes.AESMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aes.AESMetadata} AESMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AESMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AESMetadata message.
         * @function verify
         * @memberof aes.AESMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AESMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keySize != null && message.hasOwnProperty("keySize"))
                switch (message.keySize) {
                default:
                    return "keySize: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.keyHash != null && message.hasOwnProperty("keyHash"))
                if (!(message.keyHash && typeof message.keyHash.length === "number" || $util.isString(message.keyHash)))
                    return "keyHash: buffer expected";
            if (message.keyHashSalt != null && message.hasOwnProperty("keyHashSalt"))
                if (!(message.keyHashSalt && typeof message.keyHashSalt.length === "number" || $util.isString(message.keyHashSalt)))
                    return "keyHashSalt: buffer expected";
            if (message.iv != null && message.hasOwnProperty("iv"))
                if (!(message.iv && typeof message.iv.length === "number" || $util.isString(message.iv)))
                    return "iv: buffer expected";
            return null;
        };

        /**
         * Creates a AESMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aes.AESMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aes.AESMetadata} AESMetadata
         */
        AESMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.aes.AESMetadata)
                return object;
            var message = new $root.aes.AESMetadata();
            switch (object.keySize) {
            case "KeySize_AES256":
            case 0:
                message.keySize = 0;
                break;
            case "KeySize_AES192":
            case 1:
                message.keySize = 1;
                break;
            case "KeySize_AES128":
            case 2:
                message.keySize = 2;
                break;
            }
            if (object.keyHash != null)
                if (typeof object.keyHash === "string")
                    $util.base64.decode(object.keyHash, message.keyHash = $util.newBuffer($util.base64.length(object.keyHash)), 0);
                else if (object.keyHash.length)
                    message.keyHash = object.keyHash;
            if (object.keyHashSalt != null)
                if (typeof object.keyHashSalt === "string")
                    $util.base64.decode(object.keyHashSalt, message.keyHashSalt = $util.newBuffer($util.base64.length(object.keyHashSalt)), 0);
                else if (object.keyHashSalt.length)
                    message.keyHashSalt = object.keyHashSalt;
            if (object.iv != null)
                if (typeof object.iv === "string")
                    $util.base64.decode(object.iv, message.iv = $util.newBuffer($util.base64.length(object.iv)), 0);
                else if (object.iv.length)
                    message.iv = object.iv;
            return message;
        };

        /**
         * Creates a plain object from a AESMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aes.AESMetadata
         * @static
         * @param {aes.AESMetadata} message AESMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AESMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.keySize = options.enums === String ? "KeySize_AES256" : 0;
                object.keyHash = options.bytes === String ? "" : [];
                object.keyHashSalt = options.bytes === String ? "" : [];
                object.iv = options.bytes === String ? "" : [];
            }
            if (message.keySize != null && message.hasOwnProperty("keySize"))
                object.keySize = options.enums === String ? $root.aes.KeySize[message.keySize] : message.keySize;
            if (message.keyHash != null && message.hasOwnProperty("keyHash"))
                object.keyHash = options.bytes === String ? $util.base64.encode(message.keyHash, 0, message.keyHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyHash) : message.keyHash;
            if (message.keyHashSalt != null && message.hasOwnProperty("keyHashSalt"))
                object.keyHashSalt = options.bytes === String ? $util.base64.encode(message.keyHashSalt, 0, message.keyHashSalt.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyHashSalt) : message.keyHashSalt;
            if (message.iv != null && message.hasOwnProperty("iv"))
                object.iv = options.bytes === String ? $util.base64.encode(message.iv, 0, message.iv.length) : options.bytes === Array ? Array.prototype.slice.call(message.iv) : message.iv;
            return object;
        };

        /**
         * Converts this AESMetadata to JSON.
         * @function toJSON
         * @memberof aes.AESMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AESMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AESMetadata;
    })();

    /**
     * KeySize enum.
     * @name aes.KeySize
     * @enum {string}
     * @property {number} KeySize_AES256=0 KeySize_AES256 value
     * @property {number} KeySize_AES192=1 KeySize_AES192 value
     * @property {number} KeySize_AES128=2 KeySize_AES128 value
     */
    aes.KeySize = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "KeySize_AES256"] = 0;
        values[valuesById[1] = "KeySize_AES192"] = 1;
        values[valuesById[2] = "KeySize_AES128"] = 2;
        return values;
    })();

    return aes;
})();

module.exports = $root;
