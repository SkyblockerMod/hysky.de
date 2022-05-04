import Link from "next/link";
import Head from 'next/head'

export default function Index() {
    return <>
        <Head data-theme="">
            <title>Hysky</title>
            <meta content="Hysky" property="og:title" />
            <meta content="Hysky" property="og:description" />
            <meta content="https://hysky.de" property="og:url" />
            <meta content="/icon.png" property="og:image" />
        </Head>
        <div className="container px-5 py-20 mx-auto text-center">
            <div className="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
                <div className="card-body">
                    <div className=" text-4xl font-bold card-title text-center">Welcome to my personal website</div>
                    <h3 className="m-1">On this website I will show all my hypixel skyblock mods
                        <br /> I am developing skyblocker right now.
                        <br />For <p className='inline-flex font-bold text-warning'><Link href="/skyblocker/mod"
                            passHref>skyblocker</Link>
                        </p> go this way -&gt;
                        <Link href="/skyblocker/mod" passHref>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="text-primary inline-flex cursor-pointer w-6 h-6 bi bi-link"
                                viewBox="0 0 16 16">
                                <path
                                    d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                <path
                                    d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                            </svg>
                        </Link>
                        <br />Here are  <p className='inline-flex font-bold text-info'>
                            <Link href="/skyblocker" passHref>
                                projects
                            </Link>
                        </p> that are related to Skyblocker -&gt;
                        <Link href="/skyblocker" passHref>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="text-primary inline-flex cursor-pointer w-6 h-6 bi bi-link"
                                viewBox="0 0 16 16">
                                <path
                                    d="m11.798 8.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z" />
                                <path
                                    d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91l-.637-7zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                            </svg>
                        </Link>
                        <br /> If you need help you can go to the Skyblocker&nbsp;
                        <p className='inline-flex font-bold text-error'>
                            <a href="https://discord.com/invite/aNNJHQykck">
                                discord
                            </a>
                        </p> server -&gt;
                        <a href="https://discord.com/invite/aNNJHQykck" className="ml-3  text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="inline-flex w-6 h-6 bi bi-discord" viewBox="0 0 16 16">
                                <path
                                    d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                                <path
                                    d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
                            </svg>
                        </a>
                        <br /> You can find all of my projects on&nbsp;
                        <p className='inline-flex font-bold text-warning'>
                            <a href="https://github.com/LifeIsAParadox">
                                LifeIsAParadox
                            </a>
                        </p> -&gt;
                        <a href="https://github.com/LifeIsAParadox" className="ml-3 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className=" inline-flex w-6 h-6 bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <br /> Find all of Skyblocker related projects on&nbsp;
                        <p className='inline-flex font-bold text-success'>
                            <a href="https://github.com/Skyblockermod">
                                Skyblockermod
                            </a>
                        </p> -&gt;
                        <a href="https://github.com/Skyblockermod" className="ml-3 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className=" inline-flex w-6 h-6 bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <br />
                        <br />
                        If you want to contact me personally, add&nbsp;
                        <p className='inline-flex font-bold text-info select-all data-tip="click me" class="tooltip"'> Stop
                            dance#4137 </p>
                    </h3>
                </div>
            </div>
        </div>
    </>
}
