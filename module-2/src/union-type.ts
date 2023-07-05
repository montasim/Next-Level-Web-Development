type NoobDeveloperType = {
    name: string;
}

type JuniorDeveloperType = {
    name: string;
    expertise: string;
    experience: number;
}

const newDeveloperUnionType: NoobDeveloperType | JuniorDeveloperType = {
    name: 'Montasim',
    expertise: 'JavaScript',
    experience: 5
}