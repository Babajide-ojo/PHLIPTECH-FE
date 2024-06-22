"use client"
import Image from "next/image";
import Layout from "./components/shared/navigation/Layout";
// import Layout from "../components/shared/navigation/Layout";
import { Almendra_Display } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import InputField from "./components/shared/input/InputField";
import { useImmer } from "use-immer";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import Testimonials from "./components/pages/Testimonals";
import ContactUs from "./components/pages/ContactUs";

const almendra_Display = Almendra_Display({ weight: '400', subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: '400', subsets: ["latin"] });


export default function Home() {
  const [state, setState] = useImmer({
    bookCallEmail: ""
  })

  const { bookCallEmail } = state
  const heroPosition = 'w-4/5 lg:w-1/2'

  return (
    <Layout>
      <main className="py-10">
        {/* Hero section */}
        <section className="mb-20 px-10 w-full">
          <Image src="/star.png" alt="logo" className="hidden lg:flex" height={21.36} width={21.36} />
          <div className={`text-base flex justify-center pb-3 pt-4 px-5 font-normal
            leading-4 gap-2 rounded-3xl bg-ptLighterBlue w-fit mx-auto`}>
            <p className={`text-ptBlue font-normal text-xs lg:text-base`}>Hello There, we are Philip Technologies</p>
            <Image src="/wave-icon.svg" alt="wave" className="-mt-1.5" height={28} width={28} />
          </div>

          <div className="py-10 gap-8 flex justify-center">
            <Image src="/hero-text.svg" alt="wave" className={`font-medium ${heroPosition}`} height={73} width={653} />
          </div>
          <p className={`mx-auto text-center text-base lg:text-2xl text-ptNeutral600 font-normal leading-8 ${heroPosition}`}>
            We help ambitious leaders and entrepreneurs transform their vision into reality by building innovative
            cutting edge software solutions.
          </p>
          <Image src="/star.png" alt="star" className="absolute left-3/4 ml-36 hidden lg:flex" height={28.57} width={28.57} />

          <InputField
            css={`relative my-16 justify-center mx-auto ${heroPosition}`}
            inputPad={`py-6 px-5 pr-36 lg:pr-48 h-12 lg:h-16 text-base lg:text-lg`}
            placeholder={"Enter email"}
            borderColor={"border-ptGray"}
            endIcon={<button
              className="py-0.5 px-6 lg:py-3 lg:px-10 gap-2.5 rounded-lg bg-ptLightBlue hover:bg-ptLightBlue900 text-white leading-8 text-base lg:text-lg">
              Book a call
            </button>}
            onChange={e => setState(draft => {
              draft.bookCallEmail = e.target.value
            })}
          />

          <p className="flex justify-center font-medium text-base lg:text-2xl leading-8">
            Brands that <i className="text-ptLightBlue ml-1"> trust us</i>
          </p>

          <div className="flex justify-center mt-5">
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <Image src="/givadan-brand.png" alt="givadan" className="" height={62.25} width={195.78} />
              <Image src="/drom-brand.png" alt="drom" className="" height={52.4} width={141.09} />
              <Image src="/godaddy-brand.png" alt="godaddy" className="" height={38.83} width={193.77} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-52 px-5 lg:px-10">
          <AboutUs />
        </section>

        {/* Services Section */}
        <section className="mt-52 px-10">
          <Services />
        </section>

        {/* Our Milestone */}
        <section className="mt-52">
          <div className="bg-ptDarkBg800 w-full py-32 lg:py-40 px-10">
            <p className="flex gap-2 justify-center lg:justify-normal">
              <span className="text-2xl text-ptLightBlue400 font-medium leading-8">Our Milestone</span>
              <span><Image src="/Star-gold.svg" alt="Star" className="" height={32} width={32} /></span>
            </p>

            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2">
                <h1 className={`text-2xl lg:text-3xl lg:text-5xl leading-8 lg:leading-snug text-ptWhite 
                  py-6 font-medium text-center lg:text-left`}>
                  Building, Debugging & Shipping into <span className="text-ptLightBlue400">New Horizons</span>!
                </h1>
                <p className="text-lg lg:text-2xl leading-10 lg:leading-8 text-ptWhite mb-24 pt-3 text-center lg:text-left">
                  Our dedicated team of software developers can help you automate processes, build customer-facing platforms, define your
                  brand, and redevelop your software infrastructure through tailored software solutions including custom mobile app
                  development, web or enterprise software, cloud-based app development, or big data solutions where ever you are in
                  the world.
                </p>

                <div className={`flex text-center text-ptWhite justify-center lg:justify-normal`}>
                  <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                    <span className="">
                      <b className="font-bold leading-normal text-5xl">+10</b>
                      <p className={`${spaceGrotesk.className} leading-10 text-base`}>Team members</p>
                    </span>
                    <span className="border-solid md:border-x-2 border-white-100 md:mx-16 md:px-10">
                      <b className="font-bold leading-normal text-5xl">+2</b>
                      <p className={`${spaceGrotesk.className} leading-10 text-base`}>Countries</p>
                    </span>
                    <span>
                      <b className="font-bold leading-normal text-5xl">+100</b>
                      <div className="flex">
                        <Image src="/Image of Clients.svg" alt="Star" className="mt-1" height={24} width={84} />
                        <p className={`${spaceGrotesk.className} leading-10 text-base ml-2`}>Customers</p>
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mx-auto mt-28">
                <Image src="/World-img.png" alt="Earth" className="" height={466} width={501} />
              </div>
            </div>
          </div>
        </section>

        {/* Featured On */}
        <section className="py-36 px-10 lg:px-20 bg-ptNeutral50 ">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center lg:text-left">
              Featured
              <i className="text-ptLightBlue400 not-italic"> On ?</i>
            </h1>
            <p className="font-normal leading-10 text-lg md:text-xl lg:text-2xl text-ptNeutral600 mt-7 lg:mt-12 mb-6 text-center lg:text-left">
              Check out list of amazing brand we have worked with
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <Image src="/givadan-brand.png" alt="Givadan" className="" height={62.25} width={195.78} />
              <Image src="/certina-brand.png" alt="Certina" className="" height={59.09} width={132.68} />
              <Image src="/drom-brand.png" alt="Drom" className="" height={52.4} width={141.09} />
              <Image src="/Google-brand.png" alt="Google" className="" height={53} width={131} />
              <Image src="/Amazon-brand.png" alt="Amazon" className="" height={41} width={131} />
              <Image src="/godaddy-brand.png" alt="Godaddy" className="" height={38.83} width={193.77} />
            </div>
          </div>
        </section>

        {/* Testimonal Section */}
        <section className="mt-32 md:mt-16 px-8 md:px-12 lg:px-32">
          <Testimonials />
        </section>

        {/* Contact Us Section */}

        <section className="my-24 lg:px-20">
          <ContactUs />
        </section>
      </main>
    </Layout >
  );
}
