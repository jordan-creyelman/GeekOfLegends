import {Héros} from './Héros.js'
export class Archer extends Héros{
    constructor(nom,posture,attaque,vie,flèches) {
        super(nom,posture,attaque,vie);
        this.flèches = flèches;
        this.subir = (degats)  => {
            if (this.vie - degats > 0) {
                this.vie -= degats;
            } else {
                this.vie = 0;
                console.log(`${this.nom} est mort !`);
            }
        }    
        this.attaquer =(cible) => {
        if (this.fleches >= 2) {
            this.fleches -= 2;
            console.log(`${this.nom} inflige ${this.attaque} points de dégâts à ${cible.nom}.`);
            cible.vie -= this.attaque;
        } else {
            this.fleches = 6;
            console.log(`${this.nom} récupère 6 flèches au lieu d'attaquer.`);
        }
    }
    
        
    }
}