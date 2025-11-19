
const Timeboard = ({ label, display }: { label: string; display: string }) => {
    return (
        <div className="fixed -top-28 md:-top-20 left-6 z-10">
            <div className="relative w-52">
                <img src="/timeboard.png" alt="Coders' Cup '25" className="w-full rotate-180 select-none pointer-events-none" />
                <div className="absolute inset-0 translate-y-12 flex flex-col items-center justify-center">
                    <span className="text-[#3c0d0d]/80 font-hoshiko font-bold text-base tracking-wide">{label}</span>
                    <span className="text-[#3c0d0d]/80 font-hoshiko font-bold text-2xl tracking-wide tabular-nums">{display}</span>
                </div>
            </div>
        </div>
    )
}

export default Timeboard