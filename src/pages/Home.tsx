import { gettingStartedData, researchData } from "../data";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-[#0C111D] font-extrabold text-[24px]">
          Welcome Susan,
        </h1>
        <p className="text-[#344054] font-light mt-2">
          Get ready to complete your research processes on Zadwax
        </p>
      </div>

      <div className="bg-[#F0EBFC] pt-8 pl-4 rounded-lg mt-4 flex">
        <div>
          <p className="text-[10px] lg:text-[12px] mb-2">
            Welcome to the cool kids club
          </p>
          <h2 className="text-[#4A24A1] text-[13px] lg:text-[24px] text-justify">
            The new way designers revolutionize their work. See how others are
            using Zadwax to accelerate their design process.
          </h2>
        </div>
        <img
          src="/vector.svg"
          alt="Vector"
          className="w-1/2 lg:w-1/5 rounded-lg"
        />
      </div>

      <div className="flex justify-between lg:flex-row flex-col mt-8">
        <div className="w-[100%] lg:w-[55%] bg-white rounded-lg mr-0 lg:mr-4 p-4 border border-[#EAECF0]">
          <div className="flex justify-between">
            <div>
              <h2 className="font-extrabold">Getting Started</h2>
              <p className="font-extralight text-[10px] lg:text-[14px]">
                Three simple steps to launch your first project
              </p>
            </div>
            <div>
              <button className="bg-[#6832E3] text-white text-[8px] lg:text-[16px] p-2 rounded-lg">
                Create Project
              </button>
            </div>
          </div>

          <div className="mt-2 pb-2 border-t border-[#EAECF0]">
            {gettingStartedData.map((data) => (
              <>
                <h4 className="mt-4 text-[14px] lg:text-[16px]">
                  {data.title}
                </h4>
                <p className="font-extralight text-[10px] lg:text-[14px]">
                  {data.content}
                </p>
              </>
            ))}
          </div>
        </div>
        <div className="w-[100%] lg:w-[45%] bg-white rounded-lg ml-0 lg:ml-4 p-4 mt-4 lg:mt-0 border border-[#EAECF0]">
          <div>
            <h2 className="font-extrabold">Research Tips and Tricks</h2>
            <p className="font-extralight text-[10px] lg:text-[14px]">
              Three simple steps to launch your first project
            </p>
          </div>
          <div className="mt-2 pb-2 border-t border-[#EAECF0]">
            {researchData.map((data) => (
              <>
                <h4 className="mt-4 text-[14px] lg:text-[16px]">
                  {data.title}
                </h4>
                <p className="font-extralight text-[10px] lg:text-[14px]">
                  {data.content}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="font-extrabold">Resources for you</h1>

        <div className="flex flex-col lg:flex-row">
          <div className="bg-white w-[100%] lg:w-[25%] rounded-2xl border border-[#EAECF0] mt-4 mr-0 lg:mr-2">
            <img src="analysis.svg" alt="Analysis" className="w-full" />
            <div className="w-fit py-6 px-4">
              <h2 className="mb-2">Academic literature review</h2>
              <p className="text-[#667085] text-[12px]">
                Organize your sources and synthesize <br />
                information effectively.
              </p>
            </div>
          </div>
          <div className="bg-white w-[100%] lg:w-[25%] rounded-2xl border border-[#EAECF0] mt-4 ml-0 mr-0 lg:ml-2 lg:mr-2">
            <img src="analysis.svg" alt="Analysis" className="w-full" />
            <div className="w-fit py-6 px-4">
              <h2 className="mb-2">Data analysis templates</h2>
              <p className="text-[#667085] text-[12px]">
                Streamline patient data collection and <br /> analysis for
                medical research.
              </p>
            </div>
          </div>
          <div className="bg-white w-[100%] lg:w-[25%] rounded-2xl border border-[#EAECF0] mt-4 ml-0 mr-0 lg:ml-2 lg:mr-2">
            <img src="analysis.svg" alt="Analysis" className="w-full" />
            <div className="w-fit py-6 px-4">
              <h2 className="mb-2">UX Heuristic template.</h2>
              <p className="text-[#667085] text-[12px]">
                Assess your interface against established <br /> usability
                principles.
              </p>
            </div>
          </div>
          <div className="bg-white w-[100%] lg:w-[25%] rounded-2xl border border-[#EAECF0] mt-4 ml-0 lg:ml-2">
            <img src="analysis.svg" alt="Analysis" className="w-full" />
            <div className="w-fit py-6 px-4">
              <h2 className="mb-2">Affinity mapping template</h2>
              <p className="text-[#667085] text-[12px]">
                Assess your interface against established <br /> usability
                principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
