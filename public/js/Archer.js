import {Héros} from './Héros.js'
export class Archer extends Héros{
    constructor(nom,posture,attaque,vie,flèche) {
        super(nom,posture,attaque,vie);
        this.flèche = flèche;
        
    
        
    }
}