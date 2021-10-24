export interface Smartphone {
    id: number
    name: string
    mainImage: string
    images: string[]
    description: string
    price: number
}

export type CroppedSmartphoneType = Pick<Smartphone, 'id' | 'name' | 'description' | 'mainImage'>;