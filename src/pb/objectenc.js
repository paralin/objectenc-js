/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.objectenc = (function() {

    /**
     * Namespace objectenc.
     * @exports objectenc
     * @namespace
     */
    var objectenc = {};

    objectenc.EncryptedBlob = (function() {

        /**
         * Properties of an EncryptedBlob.
         * @memberof objectenc
         * @interface IEncryptedBlob
         * @property {objectenc.EncryptionType|null} [encType] EncryptedBlob encType
         * @property {Uint8Array|null} [encData] EncryptedBlob encData
         * @property {Uint8Array|null} [encMetadata] EncryptedBlob encMetadata
         */

        /**
         * Constructs a new EncryptedBlob.
         * @memberof objectenc
         * @classdesc Represents an EncryptedBlob.
         * @implements IEncryptedBlob
         * @constructor
         * @param {objectenc.IEncryptedBlob=} [properties] Properties to set
         */
        function EncryptedBlob(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EncryptedBlob encType.
         * @member {objectenc.EncryptionType} encType
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.encType = 0;

        /**
         * EncryptedBlob encData.
         * @member {Uint8Array} encData
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.encData = $util.newBuffer([]);

        /**
         * EncryptedBlob encMetadata.
         * @member {Uint8Array} encMetadata
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.encMetadata = $util.newBuffer([]);

        /**
         * Creates a new EncryptedBlob instance using the specified properties.
         * @function create
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.IEncryptedBlob=} [properties] Properties to set
         * @returns {objectenc.EncryptedBlob} EncryptedBlob instance
         */
        EncryptedBlob.create = function create(properties) {
            return new EncryptedBlob(properties);
        };

        /**
         * Encodes the specified EncryptedBlob message. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @function encode
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.IEncryptedBlob} message EncryptedBlob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedBlob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encType != null && message.hasOwnProperty("encType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.encType);
            if (message.encData != null && message.hasOwnProperty("encData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.encData);
            if (message.encMetadata != null && message.hasOwnProperty("encMetadata"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.encMetadata);
            return writer;
        };

        /**
         * Encodes the specified EncryptedBlob message, length delimited. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.IEncryptedBlob} message EncryptedBlob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedBlob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer.
         * @function decode
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {objectenc.EncryptedBlob} EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedBlob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.objectenc.EncryptedBlob();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encType = reader.int32();
                    break;
                case 2:
                    message.encData = reader.bytes();
                    break;
                case 3:
                    message.encMetadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {objectenc.EncryptedBlob} EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedBlob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EncryptedBlob message.
         * @function verify
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EncryptedBlob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encType != null && message.hasOwnProperty("encType"))
                switch (message.encType) {
                default:
                    return "encType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.encData != null && message.hasOwnProperty("encData"))
                if (!(message.encData && typeof message.encData.length === "number" || $util.isString(message.encData)))
                    return "encData: buffer expected";
            if (message.encMetadata != null && message.hasOwnProperty("encMetadata"))
                if (!(message.encMetadata && typeof message.encMetadata.length === "number" || $util.isString(message.encMetadata)))
                    return "encMetadata: buffer expected";
            return null;
        };

        /**
         * Creates an EncryptedBlob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {objectenc.EncryptedBlob} EncryptedBlob
         */
        EncryptedBlob.fromObject = function fromObject(object) {
            if (object instanceof $root.objectenc.EncryptedBlob)
                return object;
            var message = new $root.objectenc.EncryptedBlob();
            switch (object.encType) {
            case "EncryptionType_UNENCRYPTED":
            case 0:
                message.encType = 0;
                break;
            case "EncryptionType_AES":
            case 1:
                message.encType = 1;
                break;
            }
            if (object.encData != null)
                if (typeof object.encData === "string")
                    $util.base64.decode(object.encData, message.encData = $util.newBuffer($util.base64.length(object.encData)), 0);
                else if (object.encData.length)
                    message.encData = object.encData;
            if (object.encMetadata != null)
                if (typeof object.encMetadata === "string")
                    $util.base64.decode(object.encMetadata, message.encMetadata = $util.newBuffer($util.base64.length(object.encMetadata)), 0);
                else if (object.encMetadata.length)
                    message.encMetadata = object.encMetadata;
            return message;
        };

        /**
         * Creates a plain object from an EncryptedBlob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.EncryptedBlob} message EncryptedBlob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EncryptedBlob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.encType = options.enums === String ? "EncryptionType_UNENCRYPTED" : 0;
                object.encData = options.bytes === String ? "" : [];
                object.encMetadata = options.bytes === String ? "" : [];
            }
            if (message.encType != null && message.hasOwnProperty("encType"))
                object.encType = options.enums === String ? $root.objectenc.EncryptionType[message.encType] : message.encType;
            if (message.encData != null && message.hasOwnProperty("encData"))
                object.encData = options.bytes === String ? $util.base64.encode(message.encData, 0, message.encData.length) : options.bytes === Array ? Array.prototype.slice.call(message.encData) : message.encData;
            if (message.encMetadata != null && message.hasOwnProperty("encMetadata"))
                object.encMetadata = options.bytes === String ? $util.base64.encode(message.encMetadata, 0, message.encMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.encMetadata) : message.encMetadata;
            return object;
        };

        /**
         * Converts this EncryptedBlob to JSON.
         * @function toJSON
         * @memberof objectenc.EncryptedBlob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EncryptedBlob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EncryptedBlob;
    })();

    /**
     * EncryptionType enum.
     * @name objectenc.EncryptionType
     * @enum {string}
     * @property {number} EncryptionType_UNENCRYPTED=0 EncryptionType_UNENCRYPTED value
     * @property {number} EncryptionType_AES=1 EncryptionType_AES value
     */
    objectenc.EncryptionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EncryptionType_UNENCRYPTED"] = 0;
        values[valuesById[1] = "EncryptionType_AES"] = 1;
        return values;
    })();

    return objectenc;
})();

module.exports = $root;
