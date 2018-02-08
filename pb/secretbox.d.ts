/* tslint:disable */
import * as $protobuf from 'protobufjs'

/** Namespace secretbox. */
export namespace secretbox {
  /** Properties of a SecretBoxMetadata. */
  interface ISecretBoxMetadata {}

  /** Represents a SecretBoxMetadata. */
  class SecretBoxMetadata implements ISecretBoxMetadata {
    /**
     * Constructs a new SecretBoxMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: secretbox.ISecretBoxMetadata)

    /**
     * Creates a new SecretBoxMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SecretBoxMetadata instance
     */
    public static create(properties?: secretbox.ISecretBoxMetadata): secretbox.SecretBoxMetadata

    /**
     * Encodes the specified SecretBoxMetadata message. Does not implicitly {@link secretbox.SecretBoxMetadata.verify|verify} messages.
     * @param message SecretBoxMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: secretbox.ISecretBoxMetadata,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified SecretBoxMetadata message, length delimited. Does not implicitly {@link secretbox.SecretBoxMetadata.verify|verify} messages.
     * @param message SecretBoxMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: secretbox.ISecretBoxMetadata,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a SecretBoxMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SecretBoxMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): secretbox.SecretBoxMetadata

    /**
     * Decodes a SecretBoxMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SecretBoxMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): secretbox.SecretBoxMetadata

    /**
     * Verifies a SecretBoxMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a SecretBoxMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SecretBoxMetadata
     */
    public static fromObject(object: { [k: string]: any }): secretbox.SecretBoxMetadata

    /**
     * Creates a plain object from a SecretBoxMetadata message. Also converts values to other types if specified.
     * @param message SecretBoxMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: secretbox.SecretBoxMetadata,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this SecretBoxMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }
}
