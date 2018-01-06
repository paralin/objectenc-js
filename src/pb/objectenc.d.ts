/* tslint:disable */
import * as $protobuf from 'protobufjs'

/** Namespace objectenc. */
export namespace objectenc {
  /** Properties of an EncryptedBlob. */
  interface IEncryptedBlob {
    /** EncryptedBlob encType */
    encType?: objectenc.EncryptionType | null

    /** EncryptedBlob encData */
    encData?: Uint8Array | null

    /** EncryptedBlob encMetadata */
    encMetadata?: Uint8Array | null
  }

  /** Represents an EncryptedBlob. */
  class EncryptedBlob implements IEncryptedBlob {
    /**
     * Constructs a new EncryptedBlob.
     * @param [properties] Properties to set
     */
    constructor(properties?: objectenc.IEncryptedBlob)

    /** EncryptedBlob encType. */
    public encType: objectenc.EncryptionType

    /** EncryptedBlob encData. */
    public encData: Uint8Array

    /** EncryptedBlob encMetadata. */
    public encMetadata: Uint8Array

    /**
     * Creates a new EncryptedBlob instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EncryptedBlob instance
     */
    public static create(properties?: objectenc.IEncryptedBlob): objectenc.EncryptedBlob

    /**
     * Encodes the specified EncryptedBlob message. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
     * @param message EncryptedBlob message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: objectenc.IEncryptedBlob,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified EncryptedBlob message, length delimited. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
     * @param message EncryptedBlob message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: objectenc.IEncryptedBlob,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes an EncryptedBlob message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EncryptedBlob
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): objectenc.EncryptedBlob

    /**
     * Decodes an EncryptedBlob message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EncryptedBlob
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): objectenc.EncryptedBlob

    /**
     * Verifies an EncryptedBlob message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates an EncryptedBlob message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EncryptedBlob
     */
    public static fromObject(object: { [k: string]: any }): objectenc.EncryptedBlob

    /**
     * Creates a plain object from an EncryptedBlob message. Also converts values to other types if specified.
     * @param message EncryptedBlob
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: objectenc.EncryptedBlob,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this EncryptedBlob to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** EncryptionType enum. */
  enum EncryptionType {
    EncryptionType_UNENCRYPTED = 0,
    EncryptionType_AES = 1
  }
}
