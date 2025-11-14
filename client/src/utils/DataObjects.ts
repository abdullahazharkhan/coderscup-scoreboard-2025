const HOUSES = ["House Shen", "House Dragon Warrior", "House Oogway", "House Tai Lung"];

const NEWS_TEMPLATES: Array<(house: string, team: string) => string> = [
    (h, t) => `${h} is thinking to bid on Team ${t}`,
    (h, t) => `${h} scouts Team ${t} after a swift solve`,
    (h, t) => `${h} whispers that Team ${t} found inner peace under pressure`,
    (h, t) => `${h} notes Team ${t} mastered the secret ingredient: focus`,
    (h, t) => `${h} says Team ${t} moves like a true Dragon Warrior`,
    (h, t) => `${h} watches Team ${t} strike with perfect timing`,
    (h, t) => `${h} believes Team ${t} unlocked the scroll of AC`,
    (h, t) => `${h} saw Po cheering for Team ${t} after that clutch submission!`,
    (h, t) => `${h} reports that Team ${t} coded faster than Tai Lung's fury!`,
    (h, t) => `${h} says even Oogway would be proud of Team ${t}'s performance`,
    (h, t) => `${h} is amazed — Team ${t} just balanced code and calm perfectly!`,
    (h, t) => `${h} says Team ${t} turned every WA into a lesson of patience`,
    (h, t) => `${h} chants: “There are no accidents!” as Team ${t} rises in rank`,
    (h, t) => `${h} heard Po whisper: “Skadoosh!” after Team ${t}'s AC`,
    (h, t) => `${h} laughs — Team ${t} just sent a lethal combo submission!`,
    (h, t) => `${h} thinks Team ${t} is coding in legendary Wuxi Finger style!`,
    (h, t) => `${h} just witnessed Team ${t} break the silence with a flawless solve!`,
    (h, t) => `${h} believes Team ${t} just attained the level of Inner Peace.`,
];

export { HOUSES, NEWS_TEMPLATES };
