import {Héros} from './Héros.js'
export class Guerrier extends Héros{
    constructor(nom,posture,attaque,vie,rage) {
        super(nom,posture,attaque,vie);
        this.rage = rage;
        this.attaquer = (cible) => {
            let degats = this.attaque;
            if (this.rage >= 4) {
                degats = Math.floor(this.attaque * 1.25);
                this.rage = 0;
            } else {
                this.rage++;
            }
            console.log(`${this.nom} inflige ${degats} points de dégâts à ${cible.nom}.`);
            cible.vie -= degats;
        }
        this.subir = (degats)  => {
            if (this.vie - degats > 0) {
                this.vie -= degats;
            } else {
                this.vie = 0;
                console.log(`${this.nom} est mort !`);
            }
        }
        
    }
}