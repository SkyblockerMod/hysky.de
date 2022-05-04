import useSWR from "swr";
import Image from "next/image";
import { GetAuctionResults } from "../../types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
let API: string
if(process.env.NODE_ENV=="production") API = 'https://hysky.de/api/raw/bazaar'

else  API = 'https://staging.hysky.de/api/raw/bazaar'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const auction = await fetcher(API);
    return {
        props: {
            fallback: {
                [API]: auction
            }
        }
    };
}

export default function Repo({ fallback }: { fallback: GetAuctionResults[] }) {
    const { data, error } = useSWR<GetAuctionResults[]>(API, fetcher, {refreshInterval: 1000, fallback: fallback });

    const perpage = 50
    const [input, setInput] = useState('')
    const [page, setPage] = useState(1)

    if (error) return "An error has occurred.";
    if (!data) return (<div className='text-center'> Loading... </div>)
    var auctions = data
    auctions = auctions.filter(item => item.auction.name != 'Null');
    auctions = auctions.filter(item => !(Date.now() > item.auction.ending))
    if (input.length >= 1)
        auctions = auctions.filter(item => item.auction.name.toLowerCase().includes(input.toLowerCase()));
    auctions.sort(function (a, b) {
        if (a.auction.name < b.auction.name) { return -1; }
        if (a.auction.name > b.auction.name) { return 1; }
        return 0;
    });
    const maxPage = auctions.length
    return (
        <>
            <Head data-theme="">
                <title>Auction - Hysky</title>
            </Head>
            <div className="px-10 py-10 form-control">
                <div className="relative">
                    <input type="text" placeholder="Search" id="search" className="w-full pr-16 input input-primary input-bordered" value={input}
                        onChange={e => setInput(e.target.value)} />
                </div>
            </div>
            <div className="px-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {auctions.slice(0, page * perpage).map((auction) => {
                    let hid = auction.auction.hid ? auction.auction.hid : auction.auction.id
                    let name = auction.auction.name
                    if (hid == "PET") {
                        const regex = /\s\S*\s\S*\s(.*)/gm
                        const matchedPattern = regex.exec(name)
                        if (matchedPattern != null) {
                            hid = matchedPattern[1].toUpperCase().replaceAll(' ', '_') + "_PET"
                        }
                    }
                    if (hid == "POTION") {
                        const regex = /\w+(?=\s+(Splash Potion|Potion){0,}$)/gm;
                        const matchedPattern = regex.exec(name)
                        if (matchedPattern != null) {
                            const match = "_" + matchedPattern[0].toUpperCase() + "_"
                            hid = auction.auction.id.replace(match, "_").replace("_SPLASH_", "_")
                            name = name.replace(matchedPattern[0], matchedPattern[0].toUpperCase())
                        }
                    }
                    if (hid == "RUNE") {
                        var lastIndex = auction.auction.id.lastIndexOf("_");
                        hid = auction.auction.id.substring(0, lastIndex);
                        const regex = /(\d+)/gm;
                        const matchedPattern = regex.exec(hid)
                        if (matchedPattern != null) {
                            hid = hid.replaceAll("_" + matchedPattern[0] + "_", "_")
                        }
                    }
                    const itemImage = ('https://hysky.de/items/' + hid + '.png')
                    const formprice = (new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(auction.auction.price))
                    const copy = async () => {
                        await navigator.clipboard.writeText("/viewauction " + auction.auction.seller)
                        alert("copied to clip board")
                    }
                    return (
                        <div key={auction.id} className='grid'>
                            <div className="stat-value text-xl">{name}</div>
                            <div className="border stats border-base-300">
                                <div className="stat">
                                    <div className="stat-figure avatar">
                                        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                                            <Image
                                                src={itemImage}
                                                alt=''
                                                layout="fill"
                                                objectFit="contain"
                                                className='pointer-events-none rounded-box'
                                            />
                                        </div>
                                    </div>
                                    <div className="stat-title">Price</div>
                                    <div className="stat-value font-bold text-2xl">{formprice}</div>
                                    <div className="stat-actions">
                                        <button className="btn btn-sm btn-primary-content hover:btn-primary" onClick={copy}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z">
                                                </path>
                                            </svg>
                                        </button>
                                        <a href={`https://sky.coflnet.com/item/${hid}`} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-sm btn-primary-content ml-1">History</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div >
            <div className="px-10 py-10 flex flex-col">
                <button className="btn btn-primary" onClick={() => setPage(page + 1)} disabled={page * perpage >= maxPage}>Load more</button>
            </div>
        </>
    )
}