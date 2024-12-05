
import {Héros} from './Héros.js'
export class Mage extends Héros{
    constructor(nom,posture,attaque,vie,mana) {
        super(nom,posture,attaque,vie);
        this.mana = mana;
        this.subir = (degats)  => {
            if (this.vie - degats > 0) {
                this.vie -= degats;
            } else {
                this.vie = 0;
                console.log(`${this.nom} est mort !`);
            }
        }
        this.attaquer =(cible)  =>{
            if (this.mana >= 2) {
                this.mana -= 2;
                console.log(`${this.nom} inflige ${this.attaque} points de dégâts à ${cible.nom}.`);
                cible.vie -= this.attaque;
            } else {
                this.mana = 7;
                console.log(`${this.nom} récupère 7 points de mana au lieu d'attaquer.`);
            }
        }
    }
        
    }
