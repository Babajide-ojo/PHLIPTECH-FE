"use client"
import Image from "next/image";
import Layout from "./components/shared/navigation/Layout";
// import Layout from "../components/shared/navigation/Layout";
import { Almendra_Display } from "next/font/google";
import InputField from "./components/shared/input/InputField";
import { useImmer } from "use-immer";
import AboutUs from "./components/AboutUs";

const almendra_Display = Almendra_Display({ weight: '400', subsets: ["latin"] });


export default function Home() {
  const [state, setState] = useImmer({
    bookCallEmail: ""
  })

  const { bookCallEmail } = state

  return (
    <Layout>
      <main className="px-10 py-10">

        {/* Hero section */}
        <section className="mb-20">
          <Image src="/star.png" alt="logo" className="" height={21.36} width={21.36} />
          <div className={` text-base flex justify-center py-3 px-2 font-normal
            leading-4 gap-2 rounded-3xl bg-ptLighterBlue w-1/3 mx-auto`}>
            <p className={`text-ptLightBlue`}>Hello There, we are Philip Technologies</p>
            <Image src="/wave-icon.svg" alt="wave" className="-mt-2" height={26} width={26} />
          </div>

          <div className="py-10 gap-8 flex justify-center">
            <Image src="/hero-text.svg" alt="wave" className="w-1/2 font-medium" height={58} width={58} />
          </div>
          <p className="flex justify-center text-center text-xl text-ptDarkBg600">
            We help ambitious leaders and entrepreneurs transform <br /> their vision into reality by building innovative
            cutting edge <br />software solutions.
          </p>
          <Image src="/star.png" alt="logo" className="absolute left-3/4 ml-36" height={28.57} width={28.57} />

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
              <Image src="/givadan-brand.png  " alt="logo" className="" height={62.25} width={195.78} />
              <Image src="/drom-brand.png  " alt="logo" className="" height={52.4} width={141.09} />
              <Image src="/godaddy-brand.png  " alt="logo" className="" height={38.83} width={193.77} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-52">
          <AboutUs />
        </section>
      </main>
    </Layout>
  );
}
