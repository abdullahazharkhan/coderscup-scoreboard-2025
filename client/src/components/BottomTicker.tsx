
const BottomTicker = ({ tickerMessage }: { tickerMessage: string }) => {
    return (
        <div className="fixed bottom-4 left-0 right-0 z-40">
            <div className="relative w-full overflow-hidden bg-[#ffe8b0] border-y-2 border-[#3c0d0d]/90">
                <div className="marquee whitespace-nowrap py-2">
                    <span className="px-4 font-hoshiko text-[#3c0d0d] text-lg">{tickerMessage}</span>
                    <span className="px-8 font-hoshiko text-[#3c0d0d] text-lg">•</span>
                    <span className="px-4 font-hoshiko text-[#3c0d0d] text-lg">{tickerMessage}</span>
                    <span className="px-8 font-hoshiko text-[#3c0d0d] text-lg">•</span>
                    <span className="px-4 font-hoshiko text-[#3c0d0d] text-lg">{tickerMessage}</span>
                </div>
            </div>
        </div>
    )
}

export default BottomTicker