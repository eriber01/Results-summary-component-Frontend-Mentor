import Summaries from "@/components/summaries";
import { SummariesProps } from "@/interfaces";

const SummariesArr: SummariesProps[] = [
  {
    name: "Reaction",
    percentage: "80"
  },
  {
    name: "Memory",
    percentage: "92"
  },
  {
    name: "Verbal",
    percentage: "61"
  },
  {
    name: "Visual",
    percentage: "72"
  },
]

export default function Home() {
  return (
    <main className="bg-[#f1f1f1] flex w-full h-screen justify-center items-center">
      <div className="flex flex-col w-3/4 h-[90%] sm:w-2/4 md:flex-row md:w-[50%] md:h-[65%] xl:h-3/4 xl:w-[50%] bg-white rounded-3xl">
        <div className="bg-gradient-to-b h-[50%] md:h-full md:w-2/4 xl:w-2/4 from-indigo-500 to-indigo-800 text-white rounded-3xl text-center items-center flex flex-col">
          <p className="text-sm md:text-base md:my-7 xl:text-xl opacity-70 my-10">
            Your Result
          </p>

          <div className="w-[40%] h-[38%] md:w-[60%] xl:w-2/3 bg-gradient-to-b from-[#281979] flex flex-col rounded-full justify-center items-center">
            <p className="text-5xl md:text-7xl">76</p>
            <p className="text-xs md:text-base opacity-50">of 100</p>
          </div>

          <p className="text-xl mt-5 mb-2 md:text-2xl md:mb-3 md:mt-6 xl:mt-8 xl:text-3xl xl:mb-5">
            Great
          </p>
          <div className="w-3/4 mb-5">
            <p className="text-xs opacity-50 font-black md:text-sm xl:text-base">
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </div>

        <div className="px-[5%] h-[50%] pt-3 md:w-2/4 md:h-full flex flex-col justify-between">
          <p className="py-3 md:py-6">
            Summary
          </p>

          <div className="flex flex-col justify-between h-full">
            {
              SummariesArr.map(({ name, percentage }) => (
                <Summaries key={name} name={name} percentage={percentage} />
              ))
            }
          </div>

          <div className="text-center mb-5">
            <button className="bg-slate-800 text-white w-full py-2 rounded-full hover:bg-indigo-800 transition-colors duration-400">
              Continue
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
