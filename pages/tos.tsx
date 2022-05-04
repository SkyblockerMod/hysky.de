import Head from "next/head"
import Link from "next/link"

export default function About() {
    return (
        <>
            <Head data-theme="">
                <title>Terms of Service - Hysky</title>
            </Head>
            <div className="bg-base-100">
                <div className="container py-5 mx-auto text-base-content">
                    <h1 className='text-3xl pb-3 font-bold'>Website Terms and Conditions of Use</h1>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <h2 className='text-xl pt-10 font-bold'>1. Terms</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>By accessing this Website, accessible from <Link href="/" passHref><a className='text-info underline'>https://hysky.de</a></Link>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>2. Use License</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>Permission is granted to temporarily download one copy of the materials on Hysk{"'"}s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

                    <ul className='list-inside list-disc py-5 pl-5'>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display;</li>
                        <li>attempt to reverse engineer any software contained on Hysky{"'"}s Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transferring the materials to another person or {'"'}mirror{'"'} the materials on any other server.</li>
                    </ul>

                    <p>This will let Hysky to terminate upon violations of any of these restrictions.Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.These Terms of Service has been created with the help of the <a className='underline text-info' href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>3. Disclaimer</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>All the materials on Hysky{"'"}s Website are provided {'"'}as is{'"'}. Hysky makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Hysky does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>4. Limitations</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>Hysky or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Hysky{"'"}s Website, even if Hysky or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>5. Revisions and Errata</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>The materials appearing on Hysky{"'"}s Website may include technical, typographical, or photographic errors. Hysky will not promise that any of the materials in this Website are accurate, complete, or current. Hysky may change the materials contained on its Website at any time without notice. Hysky does not make any commitment to update the materials.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>6. Links</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>Hysky has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Hysky of the site. The use of any linked website is at the user{"'"}s own risk.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>7. Site Terms of Use Modifications</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>Hysky may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>8. Your Privacy</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>Please read our <Link href="/privacy" passHref><a className='text-info underline'>Privacy Policy</a></Link>.</p>

                    <h2 className='text-xl pt-5 pb-2 font-bold'>9. Governing Law</h2>
                    <div className="h-0.5 bg-base-300 rounded-md"></div>

                    <p className='pt-5'>Any claim related to Hysky{"'"}s Website shall be governed by the laws of de without regards to its conflict of law provisions.</p>
                </div>
            </div>
        </>
    )
}
