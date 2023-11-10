import { CardinalPoint, CardinalFunctions } from "./CardinalPoint.ts";

export default class Probe {
    private x: number;
    private y: number;
    private cardinalPoint: CardinalPoint;
    private cardinalSequence: string[] | undefined;
    private cardinalFunctions: CardinalFunctions;

    constructor(x: number, y: number, cardinalDirection: CardinalPoint) {
        this.x = x;
        this.y = y;
        this.cardinalPoint = cardinalDirection;
        this.cardinalSequence = Object.keys(CardinalPoint);
        this.orderCardinalSequence()
        this.cardinalFunctions = new CardinalFunctions();
    }

    public turnLeft(): void {
        let firstPos = this.cardinalSequence?.pop();
        if (firstPos !== undefined && firstPos != this.cardinalFunctions.findCoordinateStringByCoordinate(this.cardinalPoint)) {
            this.cardinalSequence?.unshift(firstPos.toString())
            this.cardinalPoint =  this.cardinalFunctions.findCoordinateByString(firstPos.toString())
        }
    }

    public turnRight(): void {
        let firstPos = this.cardinalSequence.shift();
        if (firstPos !== undefined && firstPos != this.cardinalFunctions.findCoordinateStringByCoordinate(this.cardinalPoint)) {
            this.cardinalSequence.push(firstPos.toString());
            this.cardinalPoint =  this.cardinalFunctions.findCoordinateByString(firstPos.toString());
        }
    }

    public moveFoward(): void {
        if (this.cardinalPoint == CardinalPoint.N || this.cardinalPoint == CardinalPoint.S) {
            this.y = this.y + this.cardinalPoint.valueOf()
        } else {
            this.x = this.x + this.cardinalPoint.valueOf()
        }
    }

    public getX(): number { return this.x; }

    public getY(): number { return this.y; }

    public getDirection(): CardinalPoint { return this.cardinalPoint; }

    private orderCardinalSequence(): void {
        let firstPos = this.cardinalSequence.shift();
        if (firstPos !== undefined && firstPos != this.cardinalFunctions.findCoordinateStringByCoordinate(this.cardinalPoint)) {
            this.cardinalSequence.push(firstPos.toString())
            this.orderCardinalSequence();
        }
    }
}