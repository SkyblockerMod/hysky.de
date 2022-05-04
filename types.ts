export interface GetAuctionResults {
    _id: string;
    __v: number;
    auction: Auction;
    id: number;
    sales: Sales[];
}

export interface Bazaar {
    _id: string;
    __v: number;
    buyOrders: number;
    buyPrice: number;
    buyVolume: number;
    id: string;
    name: string;
    sellOrders: number;
    sellPrice: number;
    sellVolume: number;
}

export interface Auction {
    id: string;
    name: string;
    price: number;
    seller: string;
    ending: number;
    count: number;
    hid: string;
}

export interface Sales {
    price: number;
    count: number;
}
