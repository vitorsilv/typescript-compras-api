import * as readline from "readline";
import Planet from "./app/models/Planet";
import { CardinalPoint, CardinalFunctions } from "./app/models/CardinalPoint";
import Probe from "./app/models/Probe";


let x: number, y: number, direction: string, probeQuantity: number;
const cardinalFunctions: CardinalFunctions = new CardinalFunctions();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Bem vindo ao centro de comando SondasVirtoAll, quantas sondas vamos pousar hoje?\n', (answer) => {
    probeQuantity = parseInt(answer);
});

rl.question('Tamanho da área do planeta (ex: 5 5): ', (answer) => {
    let coord = answer.split(' ')
    x = parseInt(coord[0]);
    y = parseInt(coord[1]);
});

const planet = new Planet("Marte", x, y);

rl.question('Posição de pouso da sonda1 (Ex: 1 4 N): ', (answer) => {
    let coord = answer.split(' ')
    x = parseInt(coord[0]);
    y = parseInt(coord[1]);
    direction = coord[2];
});

const probe: Probe = new Probe(x, y, cardinalFunctions.findCoordinateByString(direction));

let probeMoves: string[];
rl.question('Sequencia de comandos: ', (answer) => {
    probeMoves = answer.trim().split("")
});

const coordinates = Object.keys(CardinalPoint);

probeMoves.forEach(command => {
    switch (command) {
        case 'L':
            probe.turnLeft();
            break;
        case 'R':
            probe.turnRight();
            break;
        case 'M':
            probe.moveFoward();
            break;
        default:
            console.error(`Movimento ${command} inválido, apenas 'L', 'R', 'M' são válidos.`)
            break;
    }
});
