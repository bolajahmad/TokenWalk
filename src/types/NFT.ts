import firebase from "firebase"

type NFTMediaInfo = {
	dimensions: string
	mimeType: string
	size: number
	uri: string
}

export type NFT = {
	id: number
	address: string
	createdDate: string
	name: string
	thumbnail: string
	price?: number
	desc: string
	externalUrl?: string
	media: NFTMediaInfo
	attributes?: Record<string, string | number | boolean>
	category: "art" | "exhibit"
	nftAdminUserUID: string
}

export type NFTMetadata = {
	name: string
	description: string
	image: string
	external_url: string
	media: NFTMediaInfo
	attributes: Record<string, string | number | boolean>
}

export type NFTSnapshot = firebase.firestore.QueryDocumentSnapshot<NFT>

export type NFTQueryParams = {
	category?: string
	user?: string
	limit?: number
	after: NFTSnapshot | null
}

export type NFTGalleryItemProps = Pick<NFT, "thumbnail" | "name" | "price"> & {
	id: string
	isVideo: boolean
}
