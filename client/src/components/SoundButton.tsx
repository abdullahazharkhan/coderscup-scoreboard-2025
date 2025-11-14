import React from 'react'

const SoundButton = ({ isSoundOpen, setIsSoundOpen, phase }: { isSoundOpen: boolean, setIsSoundOpen: React.Dispatch<React.SetStateAction<boolean>>, phase: string }) => {
    return (
        <button
            type="button"
            onClick={() => setIsSoundOpen((v) => !v)}
            aria-pressed={isSoundOpen}
            aria-label={isSoundOpen ? 'Turn sound off' : 'Turn sound on'}
            title={isSoundOpen ? 'Sound: ON' : 'Sound: OFF'}
            className={`${phase === 'during' ? '' : 'hidden'} cursor-pointer fixed bottom-18 left-4 z-50 h-8 w-8 rounded-full bg-[#3c0d0d]/80 hover:bg-[#3c0d0d]/90 text-primaryYellow grid place-items-center select-none`}
        >
            <span className="text-xl leading-none">
                {isSoundOpen ? '🔊' : '🔇'}
            </span>
        </button>
    )
}

export default SoundButton