class Viagem

{
public TempoGasto:number
public VelocidadeMedia:number
public TempoVeiculo:number

    distancia():number
    {
        return this.TempoGasto * this.VelocidadeMedia
    } 

    consumo ():number

    {
    return this.VelocidadeMedia * this.TempoGasto
    } 
      
}