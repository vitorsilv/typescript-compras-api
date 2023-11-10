export enum CardinalPoint {
    N = 1, 
    E = 1, 
    S = -1,  
    W = -1,
}

export class CardinalFunctions {
    public findCoordinateByString(cardinalString: string): CardinalPoint {
        switch (cardinalString) {
            case 'N':
                return CardinalPoint.N;
            case 'E':
                return CardinalPoint.E;
            case 'S':
                return CardinalPoint.S;
            case 'W':
                return CardinalPoint.W;
            default:
                throw new Error(`Invalid CardinalDirection ${cardinalString}`);
        }
    }
    
    public findCoordinateStringByCoordinate(cardinalPoint: CardinalPoint): string {
        switch (cardinalPoint) {
            case CardinalPoint.N:
                return 'N';
            case CardinalPoint.E:
                return 'E';
            case CardinalPoint.S:
                return 'S';
            case CardinalPoint.W:
                return 'W';
        }
    }

    
}



