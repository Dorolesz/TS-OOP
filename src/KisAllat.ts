export class KisAllat {
    nev: string;
    fajta: string;
    eletkor: number;

    constructor(nev: string, fajta: string, eletkor: number) {
        if (eletkor < 0) {
            throw new Error('Az eletkor nem lehet negatív');
        }
        this.nev = nev;
        this.fajta = fajta;
        this.eletkor = eletkor;
    }

    toString(): string {
        return `${this.nev} - ${this.fajta}`;
    }

    szulinap() {
        this.eletkor++;
        console.log(`Boldog szülinapot, ${this.nev}!`);
    }
}