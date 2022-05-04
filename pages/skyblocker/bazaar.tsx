import useSWR from "swr";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Bazaar } from "../../types";
import { useState } from 'react'


const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
let API: string
if(process.env.NODE_ENV=="production") API = 'https://hysky.de/api/raw/bazaar'

else  API = 'https://staging.hysky.de/api/raw/bazaar'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const results = await fetcher(API);
    return {
        props: {
            fallback: {
                [API]: results
            }
        }
    };
}

function Bazaar({ fallback }: { fallback: Bazaar[] }) {
    const { data, error } = useSWR<Bazaar[]>(API, fetcher, {refreshInterval: 1000, fallback: fallback });

    const perpage = 50
    const [input, setInput] = useState('')
    const [page, setPage] = useState(1)
    // there should be no `undefined` state
    console.log("Is data ready?", !!data);
    console.log("Is data ready?", !!fallback)
    console.log(process.env.NODE_ENV=="production"?"hi":"no")
    console.log("https://"+process.env.NODE_ENV=="production"?"":"staging."+"hysky.de")

    if (error) return "An error has occurred.";
    if (!data) return (<div className='text-center'> Loading... </div>)
    var items = data
    items = items.filter(item => item.name != 'Bazaar Cookie');
    if (input.length >= 1)
        items = items.filter(item => item.name.toLowerCase().includes(input.toLowerCase()) || item.id.toLowerCase().includes(input.toLocaleLowerCase()));
    items.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    const maxPage = items.length
    return (
        <>
            <Head data-theme="">
                <title>Bazaar - Hysky</title>
            </Head>
            <div className="md:px-10 py-10 form-control">
                <div className="relative">
                    <input type="text" placeholder="Search" id="search" className="w-full pr-16 input input-primary input-bordered" value={input}
                        onChange={e => setInput(e.target.value)} />
                </div>
            </div>
            <div className="md:px-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {items.slice(0, page * perpage).map((item) => {
                    const itemImage = ('https://hysky.de/items/' + item.id + '.png')
                    const formBuy = (new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(item.buyPrice))
                    const formSell = (new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(item.sellPrice))
                    return (
                        <div key={item.id} className='grid'>
                            <a href={`https://www.skyblock.bz/product/${item.id}`} title="Click to see the history" target="_blank" rel="noopener noreferrer">
                                <div className="stat-value text-xl">{item.name}</div>
                            </a>
                            <div className="border stats border-base-300">
                                <div className="stat">
                                    <div className="stat-title">Buy Price</div>
                                    <div className="stat-value font-bold text-2xl">{formBuy}</div>
                                    <div className="stat-desc text-success">
                                        buyOrders {item.buyOrders}
                                    </div>
                                </div>
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
                                    <div className="stat-title">Sell Price</div>
                                    <div className="stat-value font-bold text-2xl">{formSell}</div>
                                    <div className="stat-desc text-error">
                                        sellOrders {item.sellOrders}
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

export default Bazaar