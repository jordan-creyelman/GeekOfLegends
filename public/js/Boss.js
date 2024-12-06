export class Boss {
    constructor(nom, attaque, vie) {
        this.nom = nom;
        this.attaque = attaque;
        this.vie = vie;
        this.vieMax = vie;
        this.element = this.getRandomElement(); // Randomly assign an element

        this.enigmes = [
            { question: "Quel est le plus grand océan du monde ?", reponse: "Pacifique" },
            { question: "Quelle est la capitale de la France ?", reponse: "Paris" },
            { question: "Quel est le plus grand mammifère terrestre ?", reponse: "Éléphant" }
        ];
    }

    getRandomElement() {
        const elements = ['Feu', 'Terre', 'Eau'];
        return elements[Math.floor(Math.random() * elements.length)];
    }

    poserEnigme() {
        let enigme = this.enigmes[Math.floor(Math.random() * this.enigmes.length)];
        return enigme;
    }

    subir(degats) {
        if (this.vie - degats > 0) {
            this.vie -= degats;
        } else {
            this.vie = 0;
            alert("Monstre mort");
        }
    }

    attaquer(cible) {
        cible.subir(this.attaque);
    }
}
