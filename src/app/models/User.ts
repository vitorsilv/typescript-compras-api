export default class User {
    private name: string;
    private age: number;
    private gender?: string;


    constructor (name: string, age: number, gender: string | undefined) {
        this.name = name;
        this.age = age;
        this.gender = gender === undefined ? "Não informado" : gender!
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getGender(): string {
        return this.gender;
    }
}