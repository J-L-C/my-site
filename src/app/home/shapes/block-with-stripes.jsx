export default function BlockWithStripes({className, fill = "black"}) {

    return (<>
        <svg
            height={300}
            width={300}
            className={className} viewBox="0 0 178 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M177.203 28.4864C177.132 28.311 177.027 28.1514 176.895 28.0164L149.337 0.426646C149.204 0.29184 149.045 0.184752 148.87 0.111535C148.695 0.0383179 148.508 0.000414462 148.319 0H129.969C129.585 0.00123262 129.217 0.154586 128.945 0.426646L0.425813 129.181C0.290895 129.315 0.1838 129.474 0.110714 129.65C0.0376282 129.826 0 130.014 0 130.204C0 130.395 0.0376282 130.583 0.110714 130.759C0.1838 130.934 0.290895 131.094 0.425813 131.228L27.9651 158.824C27.9908 158.839 28.0155 158.855 28.0392 158.873C28.1358 158.958 28.2439 159.029 28.3601 159.083L28.4898 159.145C28.6485 159.21 28.8183 159.244 28.9897 159.244H47.3451C47.5379 159.245 47.7288 159.207 47.9068 159.133C48.0792 159.06 48.2362 158.955 48.3697 158.824L121.816 85.2427L130.988 76.0544L176.889 30.0693C177.088 29.8656 177.224 29.6076 177.279 29.3273C177.334 29.047 177.305 28.7568 177.197 28.4926L177.203 28.4864ZM166.094 36.7843H151.806L158.089 30.4898H172.358L166.094 36.7843ZM156.91 45.9974H142.64L148.93 39.6967H163.193L156.91 45.9974ZM147.726 55.192H133.463L139.746 48.8974H154.015L147.726 55.192ZM138.548 64.3927H124.285L130.568 58.0919H144.831L138.548 64.3927ZM129.371 73.5749H115.101L121.39 67.2803H135.654L129.371 73.5749ZM120.187 82.7694H105.923L112.206 76.4748H126.501L120.187 82.7694ZM111.009 91.9701H96.7456L103.047 85.6694H117.311L111.009 91.9701ZM101.813 101.165H87.5617L93.8509 94.8453H108.114L101.813 101.165ZM92.6289 110.359H78.3593L84.6423 104.065H98.9119L92.6289 110.359ZM83.4697 119.578H69.2001L75.4893 113.278H89.7527L83.4697 119.578ZM74.2919 128.773H60.0223L66.3054 122.478H80.575L74.2919 128.773ZM65.108 137.974H50.8446L57.1277 131.673H71.3973L65.108 137.974ZM55.9303 147.168H41.6607L47.95 140.874H62.2134L55.9303 147.168ZM158.107 27.5898L151.806 21.2952H166.069L172.358 27.5898H158.107ZM163.193 18.3953H148.93L142.64 12.0945H156.91L163.193 18.3953ZM154.015 9.19454H139.746L133.463 2.89996H147.726L154.015 9.19454ZM129.945 3.49974L138.098 11.6679L147.275 20.8624L155.429 29.0367L28.9835 155.744L3.49328 130.208L129.945 3.49974ZM32.483 156.344L38.7661 150.05H53.0542L46.765 156.344H32.483Z"
                fill={fill}/>
            <path
                d="M177.203 28.4864C177.132 28.311 177.027 28.1514 176.895 28.0164L149.337 0.426646C149.204 0.29184 149.045 0.184752 148.87 0.111535C148.695 0.0383179 148.508 0.000414462 148.319 0H129.969C129.585 0.00123262 129.217 0.154586 128.945 0.426646L0.425813 129.181C0.290895 129.315 0.1838 129.474 0.110714 129.65C0.0376282 129.826 0 130.014 0 130.204C0 130.395 0.0376282 130.583 0.110714 130.759C0.1838 130.934 0.290895 131.094 0.425813 131.228L27.9651 158.824C27.9908 158.839 28.0155 158.855 28.0392 158.873C28.1358 158.958 28.2439 159.029 28.3601 159.083L28.4898 159.145C28.6485 159.21 28.8183 159.244 28.9897 159.244H47.3451C47.5379 159.245 47.7288 159.207 47.9068 159.133C48.0792 159.06 48.2362 158.955 48.3697 158.824L121.816 85.2427L130.988 76.0544L176.889 30.0693C177.088 29.8656 177.224 29.6076 177.279 29.3273C177.334 29.047 177.305 28.7568 177.197 28.4926L177.203 28.4864ZM166.094 36.7843H151.806L158.089 30.4898H172.358L166.094 36.7843ZM156.91 45.9974H142.64L148.93 39.6967H163.193L156.91 45.9974ZM147.726 55.192H133.463L139.746 48.8974H154.015L147.726 55.192ZM138.548 64.3927H124.285L130.568 58.0919H144.831L138.548 64.3927ZM129.371 73.5749H115.101L121.39 67.2803H135.654L129.371 73.5749ZM120.187 82.7694H105.923L112.206 76.4748H126.501L120.187 82.7694ZM111.009 91.9701H96.7456L103.047 85.6694H117.311L111.009 91.9701ZM101.813 101.165H87.5617L93.8509 94.8453H108.114L101.813 101.165ZM92.6289 110.359H78.3593L84.6423 104.065H98.9119L92.6289 110.359ZM83.4697 119.578H69.2001L75.4893 113.278H89.7527L83.4697 119.578ZM74.2919 128.773H60.0223L66.3054 122.478H80.575L74.2919 128.773ZM65.108 137.974H50.8446L57.1277 131.673H71.3973L65.108 137.974ZM55.9303 147.168H41.6607L47.95 140.874H62.2134L55.9303 147.168ZM158.107 27.5898L151.806 21.2952H166.069L172.358 27.5898H158.107ZM163.193 18.3953H148.93L142.64 12.0945H156.91L163.193 18.3953ZM154.015 9.19454H139.746L133.463 2.89996H147.726L154.015 9.19454ZM129.945 3.49974L138.098 11.6679L147.275 20.8624L155.429 29.0367L28.9835 155.744L3.49328 130.208L129.945 3.49974ZM32.483 156.344L38.7661 150.05H53.0542L46.765 156.344H32.483Z"
                fill={fill} fillOpacity="0.2"/>
        </svg>
    </>)
}