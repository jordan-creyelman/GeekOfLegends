import {Héros} from './Héros.js'
export class Archer extends Héros{
    constructor(nom,posture,attaque,vie,flèches) {
        super(nom,posture,attaque,vie);
        this.flèches = flèches;
        
    
        
    }
}