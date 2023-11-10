export default class Planet {
    private readonly name: string;
    private x: number;
    private y: number;
    //vai ter um carro aqui

    constructor (name: string, x: number, y: number) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    public getName(): string {
        return this.name;
    }
    
    public getX(): number {
        return this.x;
    }

    public  getY(): number {
        return this.y;
    }
}