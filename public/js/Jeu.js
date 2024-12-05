 import {Mage} from './Mage.js';
 import { Guerrier } from './Guerrier.js';
 import { Archer } from './Archer.js';
 export class Jeu {
    constructor() {
        this.personnages = [];

    this.creerPersonnage = (type) => {
        let nom = prompt(`Entrez le nom du ${type}:`);
        let posture = prompt(`Entrez la posture ${type}:`);
        let attaque = prompt(`Entrez les points attaque ${type}`)
        let vie = parseInt(prompt(`Entrez la vie du ${type}:`));


        let personnage;
        switch (type) {
            case 'Mage':
                let mana = prompt(`Entrez la mana ${type}`);
                personnage = new Mage(nom,posture,attaque, vie,mana);
                break;
            case 'Archer':
                let flèches = prompt(`Entrez le nombre de flèches ${type}`)
                personnage = new Archer(nom,posture,attaque, vie,flèches);
                break;
            case 'Guerrier':
                let rage = prompt(`Entrez les points de rage ${type}`)
                personnage = new Guerrier(nom,posture,attaque, vie,rage);
                break;
            default:
                console.log('Type de personnage inconnu');
                return;
        }

        this.personnages.push(personnage);
        
    }
        
        this.demarrer = () => {
            this.creerPersonnage('Mage');
            this.creerPersonnage('Archer');
            this.creerPersonnage('Guerrier');
        }
    }


    
}