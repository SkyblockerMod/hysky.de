import Link from "next/link"
import Image from 'next/image'
import { InferGetServerSidePropsType } from 'next'
import Head from "next/head"

type Github = {
    message: string
}

export const getServerSideProps = async () => {
    const res = await fetch('https://img.shields.io/github/v/tag/Lifeisaparadox/skyblocker.json?label=&cacheSeconds=3600')
    const github: Github = await res.json()
    return { props: { github } }
};

function Project({ github }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head data-theme="">
                <title>Skyblock Projects - Hysky</title>
            </Head><div className="container px-5 py-20 space-y-10 mx-auto">
                <Link href="/skyblocker/mod" passHref>
                    <div className="card lg:card-side bordered cursor-pointer shadow-lg xl:col-span-2 bg-base-100">
                        <figure className="h-32 w-32 relative -mb-10 lg:mt-20 mt-5 lg:pt-32 lg:pl-32">
                            <Image
                                src={'/skyblocker.png'}
                                alt=''
                                layout="fill"
                                objectFit="contain"
                                objectPosition="center bottom"
                                className='pointer-events-none rounded-box'
                                placeholder='blur'
                                blurDataURL='data:...' />
                        </figure>
                        <div className="card-body">
                            <h2 className="my-4 text-4xl font-bold card-title text-center">Skyblocker</h2>
                            <div className="mb-4 space-x-2 card-actions text-center">
                                <div className="badge badge-primary">{github.message}</div>
                                <div className="badge badge-secondary">mod</div>
                            </div>
                            <h3 className="m-1">
                                Hypixel Skyblock Mod for <b>Minecraft 1.17.x 1.18.x and 1.19.x</b>
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link href="/skyblocker/bazaar" passHref>
                    <div className="card lg:card-side bordered cursor-pointer shadow-lg xl:col-span-2 bg-base-100">
                        <figure className="h-32 w-32 relative -mb-10 lg:mt-20 mt-5 lg:pt-32 lg:pl-32">
                            <Image
                                src={'/bazaar.png'}
                                alt=''
                                layout="fill"
                                objectFit="contain"
                                objectPosition="bottom"
                                className='pointer-events-none'
                                placeholder='blur'
                                blurDataURL='data:...' />
                        </figure>
                        <div className="card-body">
                            <h2 className="my-4 text-4xl font-bold card-title text-center">Skyblocker Bazaar</h2>
                            <div className="mb-4 space-x-2 card-actions text-center">
                                <div className="badge badge-primary">Beta v0.1</div>
                                <div className="badge badge-info"><b>website</b></div>
                            </div>
                            <h3 className="m-1">
                                Hypixel Skyblock bazaar
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link href="/skyblocker/auction" passHref>
                    <div className="card lg:card-side bordered cursor-pointer shadow-lg xl:col-span-2 bg-base-100">
                        <figure className="h-32 w-32 relative -mb-10 lg:mt-20 mt-5 lg:pt-32 lg:pl-32">
                            <Image
                                src={'/auction.png'}
                                alt=''
                                layout="fill"
                                objectFit="contain"
                                objectPosition="bottom"
                                className='pointer-events-none'
                                placeholder='blur'
                                blurDataURL='data:...' />
                        </figure>
                        <div className="card-body">
                            <h2 className="my-4 text-4xl font-bold card-title text-center">Skyblocker Auction</h2>
                            <div className="mb-4 space-x-2 card-actions text-center">
                                <div className="badge badge-primary">Beta v0.1</div>
                                <div className="badge badge-info"><b>website</b></div>
                            </div>
                            <h3 className="m-1">
                                Hypixel Skyblock auction
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link href="/project/secret" passHref>
                    <div className="card lg:card-side bordered cursor-pointer shadow-lg xl:col-span-2 bg-base-100">
                        <figure className="h-32 w-32 relative -mb-10 lg:mt-20 mt-5 lg:pt-32 lg:pl-32">
                            <Image
                                src={'/favicon.ico'}
                                alt=''
                                layout="fill"
                                objectFit="contain"
                                objectPosition="bottom"
                                className='pointer-events-none'
                                placeholder='blur'
                                blurDataURL='data:...' />
                        </figure>
                        <div className="card-body">
                            <h2 className="my-4 text-4xl font-bold card-title text-center">W.I.P.</h2>
                            <div className="mb-4 space-x-2 card-actions text-center">
                                <div className="badge badge-primary">v0.0</div>
                                <div className="badge badge-info"><b>website</b></div>
                            </div>
                            <h3 className="m-1">
                                Hypixel Skyblock <b>---</b>
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Project;
