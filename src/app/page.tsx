
export default function Home() {
  return (
    <main className="bg-[#ffffff] flex w-full h-screen justify-center items-center">
      <div className="w-4/12 h-1/2 flex bg-orange-400">
        <div className="bg-gradient-to-b from-indigo-500 to-indigo-800 text-white rounded-3xl text-center items-center flex flex-col w-[50%]">
          <span className="text-2xl opacity-70 my-9">
            Your Result
          </span>

          <div className="bg-gradient-to-b from-[#281979] flex flex-col rounded-full justify-center items-center w-[50%] h-[35%]">
            <span className="text-6xl">76</span>
            <span className="text-1xl">of 100</span>
          </div>

          <span className="text-4xl my-7">
            Great
          </span>
          <div className="w-3/4">
            <span>
              You scored higher than 65% of the people who have taken these tests.
            </span>
          </div>
        </div>

        <div className="shadow-md w-[50%]">
          <span>
            Summary
          </span>

          <div>
            <span>
              Reaction
            </span>
            <div>
              <span>
                80
              </span>
              <span>
                / 100
              </span>
            </div>
          </div>

          <div>
            <span>
              Memory
            </span>
            <div>
              <span>
                92
              </span>
              <span>
                / 100
              </span>
            </div>
          </div>

          <div>
            <span>
              Verbal
            </span>
            <div>
              <span>
                61
              </span>
              <span>
                / 100
              </span>
            </div>
          </div>

          <div>
            <span>
              Visual
            </span>
            <div>
              <span>
                72
              </span>
              <span>
                / 100
              </span>
            </div>
          </div>

          <button>
            Continue
          </button>

        </div>
      </div>
    </main>
  )
}
