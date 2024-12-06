import { Héros } from './Héros.js';

// Function to randomly assign an element
function getRandomElement() {
    const elements = ['Feu', 'Terre', 'Eau'];
    return elements[Math.floor(Math.random() * elements.length)];
}

export class Mage extends Héros {
    constructor(nom, posture, attaque, vie, mana, element) {
        super(nom, posture, attaque, vie);
        this.mana = mana;
        this.element = element; // Player chooses the element
    }

    subir(degats) {
        if (this.vie - degats > 0) {
            this.vie -= degats;
        } else {
            this.vie = 0;
            console.log(`${this.nom} est mort !`);
        }
    }

    attaquer(cible) {
        if (this.mana >= 2) {
            this.mana -= 2;
            let damage = this.attaque;

            // Check for elemental dominance
            if (this.elementDominates(cible.element)) {
                damage *= 1.3; // 30% more damage
                console.log(`${this.nom} utilise un sort élémentaire et inflige 30% de dégâts supplémentaires !`);
            }

            console.log(`${this.nom} inflige ${damage} points de dégâts à ${cible.nom}.`);
            cible.vie -= damage;
        } else {
            this.mana = 7;
            console.log(`${this.nom} récupère 7 points de mana au lieu d'attaquer.`);
        }
    }

    elementDominates(targetElement) {
        const dominance = {
            'Feu': 'Terre',
            'Terre': 'Eau',
            'Eau': 'Feu'
        };
        return dominance[this.element] === targetElement;
    }
}
