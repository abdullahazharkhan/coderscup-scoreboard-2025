const TableSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
            {/* Main spinner container */}
            <div className="relative flex items-center justify-center">
                {/* Outer pulsing ring */}
                <div className="absolute w-20 h-20 rounded-full border-2 border-[#f7b72e]/20 animate-ping"></div>
                
                {/* Outer spinning ring - slower */}
                <div className="absolute w-16 h-16 rounded-full border-4 border-transparent border-t-[#f7b72e]/40 border-r-[#f7b72e]/40 animate-spin" style={{ animationDuration: '2s' }}></div>
                
                {/* Middle spinning ring - medium speed */}
                <div 
                    className="relative text-[#f7b72e] inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] shadow-[0_0_20px_rgba(247,183,46,0.5)]"
                    style={{ animationDuration: '1.2s' }}
                    role="status">
                </div>
                
                {/* Inner spinning ring - faster, reverse */}
                <div 
                    className="absolute w-12 h-12 rounded-full border-[3px] border-transparent border-b-[#f7b72e]/60 border-l-[#f7b72e]/60 animate-spin"
                    style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
                ></div>
                
                {/* Center dot */}
                <div className="absolute flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#f7b72e] shadow-[0_0_10px_rgba(247,183,46,0.8)] animate-pulse"></div>
                </div>
            </div>
            
            {/* Loading text with animated dots */}
            <div className="flex flex-col items-center space-y-2">
                <div className="text-[#f7b72e] font-semibold text-lg flex items-center space-x-1">
                    <span className="animate-pulse">Fetching</span>
                    <span className="inline-flex space-x-1">
                        <span className="animate-[bounce_1s_infinite]" style={{ animationDelay: '0s' }}>.</span>
                        <span className="animate-[bounce_1s_infinite]" style={{ animationDelay: '0.2s' }}>.</span>
                        <span className="animate-[bounce_1s_infinite]" style={{ animationDelay: '0.4s' }}>.</span>
                    </span>
                </div>
                <p className="text-gray-400 text-sm">Please wait while we load the data</p>
            </div>
        </div>
    );
}

export default TableSpinner;