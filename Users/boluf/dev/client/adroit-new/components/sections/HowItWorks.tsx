import { howItWorks } from "@/data";
import Image from "next/image";

const WorkCard = ({ num, title, description }: { num: string, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
      <span className="text-3xl font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

const Work = () => {

  return (
    <section className="w-full bg-blue-700 text-white bg-[url('/assets/bg/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div className="text-center">
          <span className="uppercase block font-semibold text-sm tracking-widest text-blue-200">
            WHAT&apos;S THE PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3">
            Let&apos;s see how it works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          {howItWorks.map((item, index) => (
            <div key={index} className="relative">
              <WorkCard num={item.num} title={item.title} description={item.description} />
              {index < howItWorks.length - 1 && (
                <Image
                  src="/assets/icons/arrow.svg"
                  width={210}
                  height={300}
                  alt="arrow"
                  className="hidden absolute top-2 left-[4.5rem] xl:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;