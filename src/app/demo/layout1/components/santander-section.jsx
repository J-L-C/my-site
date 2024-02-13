"use client"
import SantanderUsaLogo from "@/app/demo/layout1/logos/santander-usa-logo";
import {useEffect} from "react";

export default function SantanderSection({className}) {

    let santanderLogo;
    let animateElements;

    useEffect(()=>{
        santanderLogo = document.getElementById("santanderLogo")
        animateElements = santanderLogo.querySelectorAll("animateTransform");
    },[])

    const onClick = ()=>{

        animateElements.forEach((element) => {
            element.beginElement()
        });

    }

    return (<>
        <div>
            <div className="sm:mx-[15%] mx-[33%]">
                <SantanderUsaLogo
                    onClick={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-green-600">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 06/2014 - 10/2014 ]</div>
                <p>
                    As my first role outside of college, I got to experience Agile for the first time. I learned about
                    the Software Development Life Cycle hands on and had the opportunity to work closely with the
                    business, work diligently to remove roadblocks, and lead demos for our team to show off our work!
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div>
                        Agile &#9679; User Stories &#9679; Team Demos
                    </div>
                </div>
            </div>
        </div>
    </>);
}