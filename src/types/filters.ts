interface Filters{ 
    gender: {
        male: boolean;
        female: boolean;
        genderless: boolean;
        unknown: boolean;
    };
}

export enum Genders {
    Male = 'Male',
    Female = 'Female',
    Genderless = 'Genderless',
    Unknown = 'unknown',
}

export default Filters;