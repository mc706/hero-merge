class Attributes {
    public intelligence: number;
    public strength: number;
    public speed: number;
    public durability: number;
    public power: number;
    public combat: number;
}

export class Hero {
    public hero_name: string;
    public real_name: string;
    public gender: string;
    public attributes: Attributes;
    public powers: string[];
    public weaknesses: string[];
    public id: number;


    constructor(hero_name: string, real_name: string, gender: string, attributes: Attributes, powers: string[], weaknesses: string[]) {
        this.hero_name = hero_name;
        this.real_name = real_name;
        this.gender = gender;
        this.attributes = attributes;
        this.powers = powers;
        this.weaknesses = weaknesses;
    }

}

