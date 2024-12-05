import {Héros} from './Héros.js'
export class Guerrier extends Héros{
    constructor(nom,posture,attaque,vie,rage) {
        super(nom,posture,attaque,vie);
        this.rage = rage;
        
        
    }
}