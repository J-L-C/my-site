export default function TriangleSolidBackOffsetBack({className}) {
    //I want to spin each section independently to creat a cool effect.
    //Might I even be able to split this svg and have them on two different layers?

    return(<>
        <svg className={className} viewBox="0 0 77 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M46.9406 52.525H17.8406C17.0406 52.525 16.5406 51.625 16.9406 50.925L31.4406 25.725L45.9406 0.525C46.3406 -0.175 47.3406 -0.175 47.7406 0.525L62.2406 25.725L76.7406 50.925C77.1406 51.625 76.6406 52.525 75.8406 52.525H46.9406Z"
                fill="#9D9D9D"/>
        </svg>
    </>)
}