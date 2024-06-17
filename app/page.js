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

const almendra_Display = Almendra_Display({ weight: '400', subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: '400', subsets: ["latin"] });


export default function Home() {
  const [state, setState] = useImmer({
    bookCallEmail: ""
  })

  const { bookCallEmail } = state

  return (
    <Layout>
      <main className="py-10">

        {/* Hero section */}
        <section className="mb-20 px-10">
          <Image src="/star.png" alt="logo" className="" height={21.36} width={21.36} />
          <div className={` text-base flex justify-center py-3 px-2 font-normal
            leading-4 gap-2 rounded-3xl bg-ptLighterBlue w-1/3 mx-auto`}>
            <p className={`text-ptLightBlue`}>Hello There, we are Philip Technologies</p>
            <Image src="/wave-icon.svg" alt="wave" className="-mt-2" height={26} width={26} />
          </div>

          <div className="py-10 gap-8 flex justify-center">
            <Image src="/hero-text.svg" alt="wave" className="w-1/2 font-medium" height={58} width={58} />
          </div>
          <p className="flex justify-center text-center text-xl text-ptNeutral600">
            We help ambitious leaders and entrepreneurs transform <br /> their vision into reality by building innovative
            cutting edge <br />software solutions.
          </p>
          <Image src="/star.png" alt="star" className="absolute left-3/4 ml-36" height={28.57} width={28.57} />

          <div className="relative my-16 flex justify-center">
            <InputField
              inputPad={`py-6 px-5 pr-48 w-96 mx-auto`}
              placeholder={"Enter Email"}
              borderColor={"border-ptGray"}
              endIcon={<button
                className="py-2 px-10 rounded-lg bg-ptLightBlue text-white">
                Book a call
              </button>}
              onChange={e => setState(draft => {
                draft.bookCallEmail = e.target.value
              })}
            />
          </div>

          <p className="flex justify-center font-medium text-base leading-8">
            Brands that <i className="text-ptLightBlue ml-1"> trust us</i>
          </p>

          <div className="flex justify-center mt-5">
            <div className="flex justify-between gap-10">
              <Image src="/givadan-brand.png  " alt="givadan" className="" height={62.25} width={195.78} />
              <Image src="/drom-brand.png  " alt="drom" className="" height={52.4} width={141.09} />
              <Image src="/godaddy-brand.png  " alt="godaddy" className="" height={38.83} width={193.77} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-52 px-10">
          <AboutUs />
        </section>

        {/* Services Section */}
        <section className="mt-52 px-10">
          <Services />
        </section>

        {/* Our Milestone */}
        <section className="mt-52">
          <div className="bg-ptDarkBg800 w-full py-32 px-10">
            <p className="flex">
              <span className="text-xl pr-2 text-ptLightBlue400 font-medium">Our Milestone</span>
              <span><Image src="/Star-gold.svg" alt="Star" className="mt-1" height={22} width={22} /></span>
            </p>

            <div className="flex justify-between">
              <div className="w-full">
                <h1 className="text-4xl text-ptWhite py-6 font-medium">
                  Building, Debugging & <br /> Shipping into <span className="text-ptLightBlue400">New Horizons</span>!
                </h1>
                <p className="text-base leading-8 text-ptWhite mb-20">
                  Our dedicated team of software developers can help you automate processes, build customer-facing platforms, define your
                  brand, and redevelop your software infrastructure through tailored software solutions including custom mobile app
                  development, web or enterprise software, cloud-based app development, or big data solutions where ever you are in
                  the world.
                </p>

                <div className={`flex text-center text-ptWhite`}>
                  <span><b className="font-bold leading-normal text-5xl">+10</b> <p className={`${spaceGrotesk.className} leading-10 text-base`}>Team members</p></span>
                  <span className="border-solid border-x-2 border-white-100 mx-10 px-10">
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

              <div className="w-full px-20 ml-20">
                <Image src="/World-img.png" alt="Star" className="" height={466} width={501} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
