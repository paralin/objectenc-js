/* tslint:disable */
import * as $protobuf from 'protobufjs'

/** Namespace aes. */
export namespace aes {
  /** Properties of a AESMetadata. */
  interface IAESMetadata {
    /** AESMetadata keySize */
    keySize?: aes.KeySize | null

    /** AESMetadata keyHash */
    keyHash?: Uint8Array | null

    /** AESMetadata keyHashSalt */
    keyHashSalt?: Uint8Array | null

    /** AESMetadata iv */
    iv?: Uint8Array | null
  }

  /** Represents a AESMetadata. */
  class AESMetadata implements IAESMetadata {
    /**
     * Constructs a new AESMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: aes.IAESMetadata)

    /** AESMetadata keySize. */
    public keySize: aes.KeySize

    /** AESMetadata keyHash. */
    public keyHash: Uint8Array

    /** AESMetadata keyHashSalt. */
    public keyHashSalt: Uint8Array

    /** AESMetadata iv. */
    public iv: Uint8Array

    /**
     * Creates a new AESMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AESMetadata instance
     */
    public static create(properties?: aes.IAESMetadata): aes.AESMetadata

    /**
     * Encodes the specified AESMetadata message. Does not implicitly {@link aes.AESMetadata.verify|verify} messages.
     * @param message AESMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: aes.IAESMetadata, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified AESMetadata message, length delimited. Does not implicitly {@link aes.AESMetadata.verify|verify} messages.
     * @param message AESMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: aes.IAESMetadata,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a AESMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AESMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): aes.AESMetadata

    /**
     * Decodes a AESMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AESMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): aes.AESMetadata

    /**
     * Verifies a AESMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a AESMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AESMetadata
     */
    public static fromObject(object: { [k: string]: any }): aes.AESMetadata

    /**
     * Creates a plain object from a AESMetadata message. Also converts values to other types if specified.
     * @param message AESMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: aes.AESMetadata,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this AESMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** KeySize enum. */
  enum KeySize {
    KeySize_AES256 = 0,
    KeySize_AES192 = 1,
    KeySize_AES128 = 2
  }
}
