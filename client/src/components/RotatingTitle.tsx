import { useEffect, useRef, useState } from "react";

const phrases = ["Coders Cup", "ScoreBoard", "编码者杯", "排行榜"];
const SCRAMBLE_CHARS = "!<>-_/[]{}—=+*^?#________";

const scrambleText = (text: string, chars: string) =>
    text
        .split("")
        .map((char) =>
            char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
        )
        .join("");

const RotatingTitle = ({ className }: { className: string }) => {
    const textRef = useRef<HTMLSpanElement | null>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let scrambleInterval: ReturnType<typeof setInterval> | undefined;
        let running = false;

        const runScramble = (nextText: string) => {
            if (!textRef.current || running) return;
            running = true;
            let frame = 0;
            const scrambleDuration = 500;
            const frameRate = 30;
            const totalFrames = Math.floor(scrambleDuration / frameRate);

            scrambleInterval = setInterval(() => {
                if (!textRef.current) {
                    return;
                }
                if (frame < totalFrames) {
                    textRef.current.textContent = scrambleText(
                        nextText,
                        SCRAMBLE_CHARS
                    );
                    frame += 1;
                } else {
                    if (scrambleInterval !== undefined) {
                        clearInterval(scrambleInterval);
                        scrambleInterval = undefined;
                    }
                    textRef.current.textContent = nextText;
                    running = false;
                }
            }, frameRate);
        };

        runScramble(phrases[0]);

        const changeInterval: ReturnType<typeof setInterval> = setInterval(() => {
            setIndex((prev) => {
                const nextIndex = (prev + 1) % phrases.length;
                runScramble(phrases[nextIndex]);
                return nextIndex;
            });
        }, 3000);

        return () => {
            clearInterval(changeInterval);
            if (scrambleInterval !== undefined) {
                clearInterval(scrambleInterval);
            }
        };
    }, []);

    return (
        <div className={className}>
            <span
                ref={textRef}
                aria-live="polite"
                style={{ letterSpacing: "0.2em" }}
            >
                {phrases[index]}
            </span>
        </div>
    );
};

export default RotatingTitle;

