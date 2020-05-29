interface Filters{ 
    male: boolean;
    female: boolean;
    unknown: boolean;
}

export enum Genders {
    Male = 'Male',
    Female = 'Female',
    Unknown = 'Unknown',
}

export default Filters;