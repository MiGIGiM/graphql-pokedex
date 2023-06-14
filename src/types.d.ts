type Stats = {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    }

type Pokemon = {
    id: number;
    name: string;
    sprite: string;
    types: string[];
    abilities: string[];
    color: string;
    entry: string;
    stats: Stats;
}