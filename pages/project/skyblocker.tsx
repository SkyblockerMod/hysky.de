import {InferGetServerSidePropsType} from 'next'
import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import FsLightbox from 'fslightbox-react';
import React, {useState} from 'react';

type Github = {
    message: string
}

export const getServerSideProps = async () => {
    const res = await fetch('https://img.shields.io/github/v/tag/Lifeisaparadox/skyblocker.json?label=&cacheSeconds=3600')
    const github: Github = await res.json()
    const res2 = await fetch('https://raw.githubusercontent.com/LifeIsAParadox/Skyblocker/master/FEATURES.md')
    const features = await res2.text();
    return {props: {github, features}}
};

function Skyblocker({github, features}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number: any) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <div className="container py-5 mx-auto ">
            <div className="card bordered shadow-lg xl:col-span-2 bg-base-100">
                <figure className="h-64 w-64 relative -mb-10">
                    <Image
                        src={'/skyblocker.png'}
                        alt=''
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className='rounded-full'
                        placeholder='blur'
                        blurDataURL='data:...'
                    />
                </figure>
                <div className="card-body">
                    <h2 className="my-4 text-4xl font-bold card-title text-center">
                        Skyblocker
                    </h2>
                    <div className="mb-4 space-x-2 card-actions text-center">
                        <div className="badge badge-primary">{github.message}</div>
                        <div className="badge badge-secondary">mod</div>
                        <div className="badge badge-ghost font-bold ">
                            <a href="https://github.com/LifeIsAParadox/Skyblocker/releases/latest"
                               className=" text-info">
                                Download
                            </a>
                        </div>
                        <div className="badge badge-ghost font-bold ">
                            <a href="https://github.com/LifeIsAParadox/Skyblocker" className=" text-error">
                                Source
                            </a>
                        </div>
                        <div className="badge badge-ghost font-bold ">
                            <a href="https://modrinth.com/mod/skyblocker-liap" className=" text-success">
                                Modrinth
                            </a>
                        </div>
                        <div className="badge badge-ghost font-bold ">
                            <a href="https://github.com/LifeIsAParadox/Skyblocker/actions/workflows/beta.yml"
                               className=" text-success">
                                Beta
                            </a>
                        </div>
                    </div>
                    <h3 className="m-1">
                        Hypixel Skyblock Mod for <b>Minecraft 1.17.x and 1.18.x</b>
                        <br/><br/>
                        <b>Features:</b>
                        <ReactMarkdown className="prose text-base-content">{features}</ReactMarkdown>
                        <br/>
                        <br/><b>Screenshots:</b>
                    </h3>
                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={[
                            '/minimap.png',
                            '/hotbar.png',
                            '/tooltip1.png',
                            '/tooltip2.png',
                            '/drill.png',
                            '/richpresence.png',
                            '/recipe.png',
                            '/backpack-preview.png'
                        ]}
                        slide={lightboxController.slide}
                    />
                    <div
                        className="flex w-full max-h-64 space-x-3 px-3 bg-base-200 shadow-inner overflow-x-auto rounded-box select-none">
                        <div className="flex-none w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(1)}>
                                <Image
                                    src={'/minimap.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(2)}>
                                <Image
                                    src={'/hotbar.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(3)}>
                                <Image
                                    src={'/tooltip1.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(4)}>
                                <Image
                                    src={'/tooltip2.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none  w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(5)}>
                                <Image
                                    src={'/drill.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none  w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(6)}>
                                <Image
                                    src={'/richpresence.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none  w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(7)}>
                                <Image
                                    src={'/recipe.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                        <div className="flex-none  w-52 h-52 relative">
                            <a onClick={() => openLightboxOnSlide(8)}>
                                <Image
                                    src={'/backpack-preview.png'}
                                    alt=''
                                    layout="fill"
                                    objectFit="contain"
                                    className='pointer-events-none'
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skyblocker
