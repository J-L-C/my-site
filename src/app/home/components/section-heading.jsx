export default function SectionHeading({text = "Section Heading"}){
    return (<>
        <h1
            className="flex justify-center items-center flex-initial
                                sm:h-20 h-14 text-white bg-[#ff0000] mx-[-3%] gap-8
                                my-[5%] text-with-red-shadow-no-gradient-very-long font-bold rounded
                                sm:text-7xl text-4xl
                                ">
            {text}
        </h1>
    </>)
}