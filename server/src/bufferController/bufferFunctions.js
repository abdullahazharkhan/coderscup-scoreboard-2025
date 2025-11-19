function getHouse(teamName) {
    const name = teamName.toLowerCase();

    if (name.includes("oogway")) return "Oogway";
    if (name.includes("shen")) return "Shen";
    if (name.includes("po")) return "DragonWarrior";
    if (name.includes("tailung")) return "TaiLung";
    return "";
}

const updateBuffer = (data, batch, score) => {
    let tempScore = {
        'DragonWarrior': 0,
        'TaiLung': 0,
        'Oogway': 0,
        'Shen': 0
    };

    for (let team of data) {
        // console.log(getHouse(team.teamName));
        const house = getHouse(team.teamName);
        // const house = teamHouses[batch][team.teamName];
        if (house) {
            tempScore[house] += Number(team.score);

            for (let problem of team.problems) {
                if (problem.firstSolve && problem.status === "Accepted") {
                    tempScore[house] += 1; // first solve bonus
                }
            }

        }

        for (let key in tempScore) {
            score[key][batch] = tempScore[key];
        }
        return { data, score };
    };
}

export default updateBuffer;