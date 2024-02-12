export default function TriangleSolidFrontOffset({className}) {
    return (<>
        <svg className={className} viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor"/>
            <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor" fillOpacity="0.2"/>
            <g opacity="0.3">
                <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor"/>
                <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor" fillOpacity="0.2"/>
            </g>
            <path d="M1.1001 54.5L31.0001 0.999999L62.5001 53.6L1.1001 54.5Z" stroke="currentColor"
                  strokeMiterlimit="10"/>
            <path d="M1.1001 54.5L31.0001 0.999999L62.5001 53.6L1.1001 54.5Z" stroke="currentColor" strokeOpacity="0.2"
                  strokeMiterlimit="10"/>
        </svg>
    </>)
}