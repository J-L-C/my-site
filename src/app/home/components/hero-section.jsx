import SectionHeading from "@/app/home/components/section-heading";

export default function HeroSection({className}){
    return (<>
        <div className="flex flex-col justify-center mt-8 mb-16">
            <div>
                <SectionHeading text="About Me"/>

            </div>

            <div className="justify-center items-center">

                <p className={"text-white p-8 text-justify bg-[#1182d4]"}>
                    I am Full Stack Engineer by trade and with a lot of consulting experience. I have tackled
                    unique challenges across many different industries. It is exciting to be apart of a product's journey
                    from inception to delivery and that's were I thrive. Beyond software, I find myself exploring more
                    hobbies than I have time for and enjoy them all!
                    <br/>
                    <br/>
                    Thanks for stopping by, if you like what you see, feel free to connect with me on LinkedIn!
                </p>
            </div>
        </div>

    </>)
}