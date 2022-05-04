import { RedocStandalone } from 'redoc'

export default function About() {
    return (
        <div className='bg-slate-200'>
            <RedocStandalone
                specUrl="https://hysky.de/openapi.yaml"
                options={{
                    nativeScrollbars: true
                }}
            />
        </div>
    )
}
