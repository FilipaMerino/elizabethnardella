import { Banner } from "../components/banner";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <Banner src={'/HandInHand.jpg'} bannerQuote="Get to Know Elizabeth Nardella Counselling"/>
            <div className="m-32">
                {/* ELIZABETH */}
                <div className="flex p-10 g-10"> 
                    {/* IMAGE */}
                    <div className="flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
                        <Link href="/about/elizabeth">
                            <Image 
                                className="rounded-md"
                                src="/meet_elizabeth.svg"
                                width={450}
                                height={500}
                                alt="A certified counsellor in South Surrey BC offering in-person or online counselling sessions, specialized in art, somatic and narrative therapy, as well as women's counselling and youth(+24). "
                            />
                        </Link>
                    </div>
                    {/* TEXT */}
                    <div id="meetElizabeth" className="flex flex-col justify-center p-10 ">
                        <div>
                            <h2 className="text-5xl pb-10 text-[#A94250] hover:text-[#219C90]">
                                <Link href="/about/elizabeth">Meet Elizabeth</Link>
                            </h2>
                            <div className="flex flex-col">
                                <span className="pb-5 mr-80">
                                    Hey there, I am Elizabeth!<br />
                                    I am a lot of things and amongst them, I am an <Link href="/expertise" className="text-[#A94250]"><strong>experienced</strong></Link> counsellor, with a passion for finding new and creative ways to help people heal.
                                </span>
                                <span className="mr-80">
                                    <strong>What else can I tell you about myself?</strong> <br />
                                    I am deeply committed to supporting the LGBTQ2SAI+ community, and when I am not in counselling mode, you will often find me sailing off to new adventures and exploring different cultures. And of course, I am totally crazy about Lyon, my adorable pup who keeps me grounded and brings so much joy to my life.
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <div className="flex flex-col justify-center p-10">
                        <h2 className="text-5xl pb-2 text-[#A94250]">Elizabeth Unplugged</h2>
                        <h3 className="text-3xl font-light">A Look Inside Elizabeth's World</h3>
                        <span>
                            I’m thrilled to share a bit of my world with you.
                            In this video, I’ll take you on a journey through my passion
                            for counselling and my unique approach to helping people achieve emotional 
                            wellness and personal growth.
                        </span>
                        <div>
                            
                        </div>
                    </div>
                </div>
                {/* LYON */}
                <div id="meetLyon" className="flex p-10 g-10"> 
                    <div className="flex flex-col justify-center p-10 text-right">
                        <h2 className="text-5xl pb-10 text-[#A94250] hover:text-[#219C90]">
                            <Link href="/about/lyon">Meet Lyon</Link>
                        </h2>
                        <span className="ml-80">
                            Think of Lyon as your furry friend, available to wag his tail and bring a calming, fun presence to your sessions, especially when talking about more difficult topics. Not a fan of dogs? No worries - Lyon loves to take a day off.
                        </span>
                    </div>
                    <div className="flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
                        <Link href="/about/lyon">
                            <Image 
                                className="rounded-md"
                                src="/Therapy_dog.svg"
                                width={450}
                                height={500}
                                alt="A therapy dog. You can choose to have him on your counselling sessions. He's a good company and makes talking about traumatic and emotional topics, easier."
                            />
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
