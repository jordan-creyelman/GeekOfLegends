// Jeu.js
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
        
        while (true) {
            let nom = prompt(`Entrez le nom du ${type}:`);
            if (typeof nom == 'string') {
                alert("Vous avez entré une chaîne de caractères valide.");
             break;
            } else {
                alert("Ce n'est pas une chaîne de caractères. Veuillez réessayer.");
            }
        }
        while (true) {
            let posture = prompt(`Entrez la posture du ${type}:`);
            if (posture == "défense" || posture == "attaque") {
                alert("Vous avez entré une chaîne de caractères valide.");
                break;
            } else {
                alert("Ce n'est pas une chaîne de caractères. Veuillez réessayer.");
            }
        }
       
        
        let attaque;
        while (true) {
            attaque = prompt(`Entrez les points d'attaque du ${type}:`);
            if (!isNaN(attaque) && parseInt(attaque) == attaque && !isNaN(parseInt(attaque, 10))) {
                attaque = parseInt(attaque);
                break;
            } else {
                alert("Tapper un nombre ");
            }
        }
        
        let vie;
        while (true) {
            vie = prompt(`Entrez les points de vie du ${type}:`);
            if (!isNaN(vie) && parseInt(vie) == vie && !isNaN(parseInt(vie, 10))) {
                vie = parseInt(vie);
                break;
            } else {
                alert("Tapper un nombre ");
            }
        }
        
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
                    } else if (boss.vie <= boss.vieMax * 0.2) {
                        let enigme = boss.poserEnigme();
                        let reponseCorrecte = false;
                        for (let i = 0; i < 3; i++) {
                            let reponse = prompt(enigme.question);
                            if (reponse.toLowerCase() === enigme.reponse.toLowerCase()) {
                                reponseCorrecte = true;
                                break;
                            }
                        }
                        if (reponseCorrecte) {
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
                        } else {
                            console.log("L'équipe des héros est décimée. Vous avez perdu !");
                            gameOver = true;
                            break;
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
