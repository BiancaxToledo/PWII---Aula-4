export class Diaria

{
public qtdHoras:number
public valorHora:number
public horaAdicional:number

    Total():number
    {
        return this.qtdHoras + this.valorHora * (this.horaAdicional-1) 
    } 

}