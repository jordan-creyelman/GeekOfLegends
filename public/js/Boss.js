export class Boss{
    constructor(nom,attaque,vie) {
        this.nom = nom;
        this.attaque = attaque
        this.vie = vie;
        this.vieMax = vie;

        this.enigmes = [
            { question: "Quel est le plus grand océan du monde ?", reponse: "Pacifique" },
            { question: "Quelle est la capitale de la France ?", reponse: "Paris" },
            { question: "Quel est le plus grand mammifère terrestre ?", reponse: "Éléphant" }
        ];

    this.poserEnigme =() => {
        let enigme = this.enigmes[Math.floor(Math.random() * this.enigmes.length)];
        return enigme;
t


    }        
        this.subir = (degats) => {
            if (this.vie - degats > 0){
                this.vie -= degats;

            } else {
                alert("Monstre mort");
            }
        }
        this.attaquer =(cible) => {
            cible.subir(this.attaque);
        }

        
    }
}