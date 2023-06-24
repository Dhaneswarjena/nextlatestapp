import Herosection from "@/app/Component/Herosection";


const Page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <>
            <Herosection title={"OUR STORY"} imageurl={"/about.svg"}/>
        </>
    );
};

export default Page;