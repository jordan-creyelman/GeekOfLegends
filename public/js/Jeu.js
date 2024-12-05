import { Mage } from './Mage.js';
import { Guerrier } from './Guerrier.js';
import { Archer } from './Archer.js';
import { Boss } from './Boss.js';

export class Jeu {
    constructor() {
        this.personnages = [];
        this.boss = [];
    }

    creerPersonnage(type) {
        let nom = prompt(`Entrez le nom du ${type}:`);
        let posture = prompt(`Entrez la posture du ${type}:`);
        let attaque = parseInt(prompt(`Entrez les points d'attaque du ${type}:`));
        let vie = parseInt(prompt(`Entrez la vie du ${type}:`));

        let personnage;
        switch (type) {
            case 'Mage':
                let mana = parseInt(prompt(`Entrez la mana du ${type}:`));
                personnage = new Mage(nom, posture, attaque, vie, mana);
                break;
            case 'Archer':
                let fleches = parseInt(prompt(`Entrez le nombre de flèches du ${type}:`));
                personnage = new Archer(nom, posture, attaque, vie, fleches);
                break;
            case 'Guerrier':
                let rage = parseInt(prompt(`Entrez les points de rage du ${type}:`));
                personnage = new Guerrier(nom, posture, attaque, vie, rage);
                break;
            default:
                console.log('Type de personnage inconnu');
                return;
        }

        this.personnages.push(personnage);
    }

    creerBoss() {
        this.boss.push(new Boss("Sauron", 15, 100));
        this.boss.push(new Boss("Chronos", 20, 150));
        this.boss.push(new Boss("Lilith", 25, 200));
    }

    demarrer() {
        this.creerPersonnage('Mage');
        this.creerPersonnage('Archer');
        this.creerPersonnage('Guerrier');
        this.creerBoss();
        this.loop();
    }

    loop() {
        let bossIndex = 0;
        let boss = this.boss[bossIndex];
        let gameOver = false;
    
        while (!gameOver) {
            for (let personnage of this.personnages) {
                if (personnage.vie > 0) {
                    personnage.attaquer(boss); 
                    if (boss.vie <= 0) {
                        console.log(`${boss.nom} est vaincu !`);
                        bossIndex++;
                        if (bossIndex >= this.boss.length) {
                            console.log("Tous les boss ont été vaincus. Vous avez gagné !");
                            gameOver = true;
                            break;
                        } else {
                            boss = this.boss[bossIndex];
                            console.log(`Nouveau boss : ${boss.nom}`);
                        }
                    }
                }
            }
    
            if (gameOver) break;
    
            
            let vivants = this.personnages.filter(p => p.vie > 0);
            if (vivants.length === 0) {
                console.log("Tous les héros sont morts. Vous avez perdu !");
                gameOver = true;
                break;
            }
    
            let cible = vivants[Math.floor(Math.random() * vivants.length)];
            boss.attaquer(cible); 
            if (cible.vie <= 0) {
                console.log(`${cible.nom} est mort !`);
            }
    
            for (let personnage of this.personnages) {
                if (personnage.vie > 0) {
                    let nouvellePosture = prompt(`Changer la posture de ${personnage.nom} (actuelle: ${personnage.posture}):`);
                    personnage.posture = nouvellePosture;
                }
            }
        }
    }
    
            
        
    
}
