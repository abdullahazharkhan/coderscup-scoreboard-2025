const TopThreeTeamsSection = ({ podium }: { podium: any[] }) => (
    <div className="absolute inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">
            <div className="text-center mb-8">
                <div className="flex flex-col gap-6 font-hoshiko text-2xl md:text-6xl tracking-wide">
                    <span className='text-3xl'>Top Teams</span>
                    <span className='underline decoration-4 decoration-primaryYellow'>BATCH '24</span>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='bg-linear-to-b from-yellow-300 to-amber-200 w-full rounded-lg flex items-center justify-center flex-col gap-4 p-4 ring-4 ring-yellow-300 shadow-2xl'>
                    <h2 className='text-[#3c0d0d] text-2xl font-hoshiko font-bold'>
                        {podium[0]?.teamName}
                    </h2>
                    <div>
                        <span className='text-[#6b2a2a] font-hoshiko text-xl'>
                            Score {podium[0]?.score} &#8226; Penalty {podium[0]?.penalty}
                        </span>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='bg-linear-to-b from-zinc-200 to-zinc-100 w-full rounded-lg flex items-center justify-center flex-col gap-4 p-4 ring-4 ring-zinc-300 shadow-xl'>
                        <h2 className='text-[#3c0d0d] text-2xl font-hoshiko font-bold'>
                            {podium[1]?.teamName}
                        </h2>
                        <div>
                            <span className='text-[#6b2a2a] font-hoshiko text-xl'>
                                Score {podium[1]?.score} &#8226; Penalty {podium[1]?.penalty}
                            </span>
                        </div>
                    </div>

                    <div className='bg-linear-to-b from-amber-300 to-orange-200 w-full rounded-lg flex items-center justify-center flex-col gap-4 p-4 ring-4 ring-amber-400 shadow-xl'>
                        <h2 className='text-[#3c0d0d] text-2xl font-hoshiko font-bold'>
                            {podium[2]?.teamName}
                        </h2>
                        <div>
                            <span className='text-[#6b2a2a] font-hoshiko text-xl'>
                                Score {podium[2]?.score} &#8226; Penalty {podium[2]?.penalty}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TopThreeTeamsSection;