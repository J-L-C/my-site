import StrideSection from "@/app/demo/layout1/components/stride-section";
import ImprovingSection from "@/app/demo/layout1/components/improving-section";
import JpmcSection from "@/app/demo/layout1/components/jpmc-section";
import CognizantSection from "@/app/demo/layout1/components/cognizant-section";
import AllstateSection from "@/app/demo/layout1/components/allstate-section";
import SabreSection from "@/app/demo/layout1/components/sabre-section";
import SantanderSection from "@/app/demo/layout1/components/santander-section";
import AaSection from "@/app/demo/layout1/components/aa-section";

export default function CareerJourney({className}) {

    return(<>
        <div className={className}>
            <h1 className="flex justify-center items-center flex-initial
                                h-20 text-white bg-[#ff0000] mx-[-2%] pt-2
                                my-[3%] text-with-red-shadow-no-gradient-very-long font-bold rounded
                                text-7xl
                                "
            >Career Journey</h1>
            <div>

                <StrideSection/>

                <ImprovingSection/>

                <JpmcSection/>

                <AaSection/>

                <CognizantSection/>

                <AllstateSection/>

                <SabreSection/>

                <SantanderSection/>

            </div>
        </div>
    </>)
}