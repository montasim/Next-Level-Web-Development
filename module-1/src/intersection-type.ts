type NoobLevelDeveloperType = {
    name: string;
}

type JuniorLevelDeveloperType = NoobLevelDeveloperType & {
    expertise: string;
    experience: number;
}

type NextLevelDeveloperType = JuniorLevelDeveloperType & {
    leadershipExperience: number;
}

const developer: NextLevelDeveloperType = {
    name: 'Montasim',
    expertise: 'JavaScript',
    experience: 5,
    leadershipExperience: 2
}

console.log(developer);