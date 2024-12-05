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
        let nom = '';
        let posture = '';
        let attaque = 0;
        let vie = 0;

        while (!nom) {
            nom = prompt(`Entrez le nom du ${type}:`);
            if (!nom) {
                alert("Le nom ne peut pas être vide.");
            }
        }

        while (!posture) {
            posture = prompt(`Entrez la posture du ${type}:`);
            if (!posture) {
                alert("La posture ne peut pas être vide.");
            }
        }

        while (isNaN(attaque) || attaque <= 0) {
            attaque = parseInt(prompt(`Entrez les points d'attaque du ${type}:`));
            if (isNaN(attaque) || attaque <= 0) {
                alert("Les points d'attaque doivent être un nombre positif.");
            }
        }

        while (isNaN(vie) || vie <= 0) {
            vie = parseInt(prompt(`Entrez la vie du ${type}:`));
            if (isNaN(vie) || vie <= 0) {
                alert("La vie doit être un nombre positif.");
            }
        }

        let personnage;
        switch (type) {
            case 'Mage':
                let mana = 0;
                while (isNaN(mana) || mana <= 0) {
                    mana = parseInt(prompt(`Entrez la mana du ${type}:`));
                    if (isNaN(mana) || mana <= 0) {
                        alert("La mana doit être un nombre positif.");
                    }
                }
                personnage = new Mage(nom, posture, attaque, vie, mana);
                break;
            case 'Archer':
                let fleches = 0;
                while (isNaN(fleches) || fleches <= 0) {
                    fleches = parseInt(prompt(`Entrez le nombre de flèches du ${type}:`));
                    if (isNaN(fleches) || fleches <= 0) {
                        alert("Le nombre de flèches doit être un nombre positif.");
                    }
                }
                personnage = new Archer(nom, posture, attaque, vie, fleches);
                break;
            case 'Guerrier':
                let rage = 0;
                while (isNaN(rage) || rage <= 0) {
                    rage = parseInt(prompt(`Entrez les points de rage du ${type}:`));
                    if (isNaN(rage) || rage <= 0) {
                        alert("Les points de rage doivent être un nombre positif.");
                    }
                }
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
                    let nouvellePosture = '';
                    while (!nouvellePosture) {
                        nouvellePosture = prompt(`Changer la posture de ${personnage.nom} (actuelle: ${personnage.posture}):`);
                        if (!nouvellePosture) {
                            alert("La posture ne peut pas être vide.");
                        }
                    }
                    personnage.posture = nouvellePosture;
                }
            }
        }
    }
}
