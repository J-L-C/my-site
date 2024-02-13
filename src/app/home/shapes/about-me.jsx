export default function AboutMe() {
    return (
        <>
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5"/>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3"/>
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
                    </filter>
                </defs>
                <rect width="100" height="100" fill="blue" filter="url(#drop-shadow)"/>
            </svg>

        </>
    )
}