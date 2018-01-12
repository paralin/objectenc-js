import { objectenc } from './pb'

// IResource is a resource.
export interface IResource {
  // resourceId is a unique identifier of this resource type.
  resourceId: string
}

// ResourceResolverFunc resolves resources related to encrypted blobs if needed.
// resource is the "resource container" as specified by the encryption implementation.
// an effective implementation of this function is a type switch on the resource ctr.
export type ResourceResolverFunc = (
  blob: objectenc.EncryptedBlob,
  resource: IResource
) => Promise<void>
