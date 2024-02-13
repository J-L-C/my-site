"use client"
import JpmcLogo from "@/app/demo/layout1/logos/jpmc-logo";
import {useEffect} from "react";

export default function JpmcSection({className}) {

    let jpmcLogo;
    let animateElements;

    useEffect(()=>{
        jpmcLogo = document.getElementById("jpmcLogo")
        animateElements = jpmcLogo.querySelectorAll("animate");
    },[])

    const onClick = ()=>{

        animateElements.forEach((element) => {
            element.beginElement()

        });

    }

    return (<>
        <div className="mt-16">
            <div className="sm:mx-[20%] mx-[35%]">
                <JpmcLogo
                    click={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-blue-900">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 04/2020 - 03/2021 ]</div>
                <p>
                    My first exposure to the world of finance, J.P. Morgan Chase, excited me! I have been interested
                    in the financial sector leading up to this moment and getting the opportunity to join J.P.M.C., I
                    could not pass it
                    up. I got to work building out services that powered a redesigned tool for J.P.M.C. financial
                    advisors to
                    use. This web app is used to onboard new clients with different kinds of product offerings and I
                    built
                    the services that aggregated security data from disparate sources to provide this critical
                    information
                    to the front end.
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div>
                        Java &#9679; Spring Boot &#9679; DBMS &#9679; Web Services &#9679; SQL
                    </div>
                </div>
            </div>
        </div>
    </>);
}