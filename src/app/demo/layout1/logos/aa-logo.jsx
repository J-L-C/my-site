export default function AALogo({id = "aaLogo",width, height, className}){

    return(
        <>
            <svg id={id}
                 clipRule="evenodd"
                 fillRule="evenodd"
                 width={width}
                 height={height}
                 className={className}
                 transform="scale(2,2)"
                 viewBox="0 0 560 300"
                 xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="a"
                                gradientTransform="matrix(0 217.174 -217.174 0 525.444 569.817)"
                                gradientUnits="userSpaceOnUse" x2="1">
                    <stop offset="0" stopColor="#eb2023"/>
                    <stop offset=".1" stopColor="#e92026"/>
                    <stop offset=".2" stopColor="#e31e27"/>
                    <stop offset=".3" stopColor="#e01e26"/>
                    <stop offset=".4" stopColor="#d81f27"/>
                    <stop offset=".5" stopColor="#cf2027"/>
                    <stop offset=".6" stopColor="#c62127"/>
                    <stop offset=".7" stopColor="#b92025"/>
                    <stop offset=".8" stopColor="#ae1f23"/>
                    <stop offset=".9" stopColor="#a01d22"/>
                    <stop offset="1" stopColor="#901c1c"/>
                </linearGradient>
                <linearGradient id="b" gradientTransform="matrix(120.668 -77.277 77.277 120.668 531.468 643.61)"
                                gradientUnits="userSpaceOnUse" x2="1">
                    <stop offset="0" stopColor="#6c221f"/>
                    <stop offset=".25" stopColor="#7f2620"/>
                    <stop offset=".5" stopColor="#982b24"/>
                    <stop offset=".75" stopColor="#b53125"/>
                    <stop offset="1" stopColor="#cb3327"/>
                </linearGradient>
                <linearGradient id="c" gradientTransform="matrix(176.777 -102.278 102.278 176.777 521.996 622.795)"
                                gradientUnits="userSpaceOnUse" x2="1">
                    <stop offset="0" stopColor="#e7ebee"/>
                    <stop offset=".25" stopColor="#dfe4e8"/>
                    <stop offset=".5" stopColor="#cad1d7"/>
                    <stop offset=".75" stopColor="#a8b5bd"/>
                    <stop offset="1" stopColor="#93a6ad"/>
                </linearGradient>
                <linearGradient id="d" gradientTransform="matrix(0 209.804 -209.804 0 421.739 263.433)"
                                gradientUnits="userSpaceOnUse" x2="1">
                    <stop offset="0" stopColor="#05aee9"/>
                    <stop offset=".1" stopColor="#00a9e0"/>
                    <stop offset=".2" stopColor="#07a3dc"/>
                    <stop offset=".3" stopColor="#089dd5"/>
                    <stop offset=".4" stopColor="#0a92cc"/>
                    <stop offset=".5" stopColor="#0f87c3"/>
                    <stop offset=".6" stopColor="#127cb8"/>
                    <stop offset=".7" stopColor="#0e70ad"/>
                    <stop offset=".8" stopColor="#0f63a3"/>
                    <stop offset=".9" stopColor="#135393"/>
                    <stop offset="1" stopColor="#184485"/>
                </linearGradient>
                <path
                    d="m452.994 214.792 7.643 12.7c2.369 3.806 6.272 5.534 11.135 5.534h19.662l-23.019-27.895-3.266-1.86-8.618 2.812-4.367 6.319.829 2.389z"
                    fill="url(#a)"/>
                <path
                    d="m468.416 205.131-4.805-5.825-12.701 6.831 1.347 6.895.738 1.759c-.289-4.673 7.735-10.099 15.421-9.661z"
                    fill="url(#b)"/>
                <path
                    d="m452.994 214.792-6.872-11.362c-.828-1.289-1.055-2.417-1.055-3.731 0-1.445.616-2.238 2.982-3.493 2.756-1.32 8.306-1.894 14.027-1.894 9.296 0 11.524 2.983 12.473 6.203 0 0-1.312-.522-4.4-.522-9.793 0-17.621 4.754-17.621 11.952 0 1.51.465 2.846.465 2.846z"
                    fill="url(#c)"/>
                <path
                    d="m423.48 166.456h9.243c3.898 0 5.497 1.595 7.074 3.159 1.805 1.641 7.279 9.049 18.851 23.509h-12.524c-5.121 0-6.741-.872-8.722-3.893l-13.921-22.775z"
                    fill="url(#d)"/>
                <g fill="#334357">
                {/*<g fill="white">*/}
                    <path
                        d="m497.618 230.392.672 2.413h.012l.682-2.413h.571l.442 3.021h-.457l-.314-2.465h-.01l-.705 2.465h-.489l-.685-2.455h-.007l-.314 2.455h-.435l.44-3.021h.596zm-1.421 0v.388h-.89v2.633h-.44v-2.633h-.89v-.388z"/>
                    {/*this is the text*/}
                    <path
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="1000"
                        transform="scale(1.10,1.10) translate(-30, -19)"
                        d="m278.46 193.375h-.104l-5.28 14.926h10.677zm9.45 26.685-2.586-7.332h-13.823l-2.591 7.332h-5.901l12.382-32.635h6.576l12.192 32.635zm50.085-33.943h5.772v5.456h-5.772zm.064 9.085h5.641v24.858h-5.641zm-41.653-9.087h5.775v5.458h-5.775zm.067 9.087h5.641v24.858h-5.641zm35.429-9.055h-5.641v33.913h5.641zm-17.981 21.791v12.123h-5.658v-18.471c0-1.775-.203-5.154-.272-6.383h4.556c.492 0 .633.208.648.692.01.734.049 3.08.049 3.08h.129c.445-1.075 2.049-4.294 6.736-4.294 1.57 0 2.732.507 2.922.583 0 1.07-.111 3.419-.168 4.039-.035.408-.213.541-.415.541-.193 0-.282-.044-.388-.087-.351-.148-1.172-.398-2.311-.398-3.011 0-5.827 2.173-5.827 8.573m51.378 12.123v-16.053c0-3.065-1.399-4.934-4.024-4.934-3.471 0-5.775 3.693-5.775 8.677v12.311h-5.644v-18.261c0-2.01-.183-4.939-.277-6.593h4.534c.512 0 .658.21.662.67.015.531.059 3.102.059 3.102h.129c.68-1.169 2.418-4.296 7.619-4.296 5.362 0 8.358 3.666 8.358 7.782v17.596h-5.641zm15.613-14.983h10.442c.215-4.007-1.889-6.252-5.063-6.252-3.322 0-5.228 2.403-5.379 6.252m13.92 9.525c.314 0 .405.274.43.556.096 1.06.188 3.458.173 4.069-.603.193-3.636 1.308-7.71 1.308-7.913 0-12.674-4.094-12.674-12.906 0-7.567 4.059-12.943 11.356-12.943 7.164 0 10.57 4.791 10.57 10.738 0 .7-.077 1.881-.2 3.451h-15.937c0 4.244 2.704 7.29 7.703 7.29 2.754 0 4.944-.986 5.814-1.407.173-.084.274-.156.475-.156m13.215 5.933c7.344 0 10.859-3.003 10.859-7.468 0-4.395-3.122-6.244-6.43-7.337-.949-.307-1.879-.618-2.746-.91-2.264-.749-3.439-1.733-3.439-3.201 0-1.55 1.414-2.635 4.351-2.635 2.61 0 4.744 1.065 5.589 1.473.141.064.267.156.492.156.178 0 .398-.111.428-.551.057-.833.156-2.343.156-3.795-.685-.314-3.154-1.582-7.127-1.582-6.069 0-9.799 3.157-9.799 7.322 0 4.039 2.761 5.883 5.799 6.889l2.756.92c3.172 1.053 4.076 2.01 4.076 3.493 0 1.936-2.062 2.892-5.609 2.892-2.91 0-4.909-1.068-5.713-1.444-.163-.072-.26-.156-.485-.156-.418 0-.425.556-.43.648-.017.267-.151 2.843-.151 3.701.665.287 3.547 1.585 7.421 1.585m-332.588-27.16h-.104l-5.283 14.926h10.669l-5.283-14.926zm9.448 26.685-2.588-7.332h-13.823l-2.588 7.332h-5.898l12.382-32.638h6.571l12.192 32.638h-6.247zm92.203-33.946h5.77v5.456h-5.77zm.067 9.087h5.636v24.858h-5.636zm-12.113 12.736v12.123h-5.649v-18.471c0-1.777-.203-5.157-.277-6.388h4.558c.492 0 .638.213.64.695l.059 3.083h.126c.447-1.075 2.047-4.294 6.736-4.294 1.565 0 2.737.504 2.929.581 0 1.07-.116 3.419-.171 4.042-.037.405-.218.536-.418.536-.19 0-.287-.04-.391-.082-.356-.151-1.174-.4-2.304-.4-3.013 0-5.841 2.175-5.841 8.575m-41.671 12.123v-15.905c0-2.865-1.211-5.087-4.136-5.087-3.293 0-5.191 3.604-5.191 8.652v12.34h-5.639v-15.954c0-2.605-1.088-5.038-4.113-5.038-3.34 0-5.209 3.597-5.209 8.83v12.162h-5.651v-18.105c0-2.339-.208-5.646-.274-6.754h4.516c.509 0 .677.168.687.695l.052 3.083h.129c.344-.709 2.2-4.296 7.381-4.296 4.828 0 6.674 3.463 7.132 4.531.445-.939 2.588-4.531 7.451-4.531 5.058 0 8.509 2.714 8.509 8.167v17.21zm15.608-14.988h10.444c.215-4-1.881-6.249-5.063-6.249-3.322 0-5.223 2.405-5.382 6.249m13.927 9.53c.309 0 .403.274.428.556.096 1.06.188 3.461.173 4.069-.601.193-3.634 1.308-7.708 1.308-7.915 0-12.676-4.099-12.676-12.911 0-7.557 4.057-12.938 11.361-12.938 7.156 0 10.57 4.788 10.57 10.738 0 .7-.079 1.881-.205 3.446h-15.937c0 4.249 2.707 7.295 7.698 7.295 2.756 0 4.951-.986 5.819-1.412.173-.084.272-.151.477-.151m70.778-7.154h-.959c-7.09 0-8.484 2.465-8.484 4.969 0 2.047 1.35 3.985 4 3.985 3.52 0 5.443-3.399 5.443-6.976zm1.36 12.612c-.455 0-.833-.151-.883-.811-.054-.811-.166-2.381-.166-2.381h-.077c-.334.457-2.39 3.666-7.554 3.666-4.946 0-7.784-3.812-7.784-7.997 0-5.802 5.634-8.716 13.992-8.716h1.112v-.912c0-2.603-1.852-3.997-5.312-3.997-3.115 0-5.7 1.093-6.707 1.604-.067.032-.25.138-.418.138-.267 0-.418-.166-.433-.46-.044-.934-.141-2.732-.156-3.871 1.018-.388 4.395-1.641 8.111-1.641 7.386 0 10.558 3.429 10.558 8.904v9.693c0 3.535.329 5.849.445 6.781h-4.729zm-19.502-5.458c.148 0 .358.099.408.534.109 1.184.153 3.122.158 3.73-1.127.556-3.57 1.669-6.566 1.669-7.53 0-12.147-4.37-12.147-12.921 0-8.012 4.106-12.929 12.147-12.929 2.667 0 5.122.929 6.566 1.671 0 .885-.087 2.89-.158 3.733-.035.353-.205.524-.408.524-.225 0-.302-.059-.435-.119-1.817-.89-3.525-1.32-5.063-1.32-4.793 0-6.766 3.137-6.766 8.439 0 4.726 1.577 8.432 6.766 8.432 1.983 0 3.79-.707 4.909-1.246.302-.141.353-.198.588-.198m44.113 5.458v-16.053c0-3.068-1.399-4.937-4.019-4.937-3.473 0-5.782 3.691-5.782 8.679v12.311h-5.639v-18.261c0-2.01-.183-4.939-.272-6.598h4.526c.517 0 .665.215.667.675.012.527.054 3.102.054 3.102h.124c.687-1.172 2.423-4.299 7.624-4.299 5.369 0 8.365 3.668 8.365 7.779v17.601h-5.649z">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="10s"
                                 fill="freeze"/>
                    </path>
                </g>
                <defs>
                    <animate attributeName="stroke-opacity" values="0;1" dur="5s"/>
                    <animate id="fade-in" attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" fill="freeze"/>
                </defs>
            </svg>
        </>
    )
}