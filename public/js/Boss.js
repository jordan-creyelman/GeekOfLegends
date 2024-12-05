export class Boss{
    constructor(nom,attaque,vie) {
        this.nom = nom;
        this.attaque = attaque
        this.vie = vie;
        this.subir = (degats) => {
            if (this.vie - degats > 0){
                this.vie -= degats;

            } else {
                alert("Monstre mort");
            }
        }
        
    }
}