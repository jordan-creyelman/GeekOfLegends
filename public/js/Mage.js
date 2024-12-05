import {Héros} from './Héros.js'
export class Mage extends Héros{
    constructor(nom,posture,attaque,vie,mana) {
        super(nom,posture,attaque,vie);
        this.mana = mana;
        
        
    }
}