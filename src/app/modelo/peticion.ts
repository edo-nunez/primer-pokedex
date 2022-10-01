export type Info = {
  name:string;
  url:string;

};
export interface Peticion {
  count:number;
  next?:string; //No sabemos si hay un siguiente pokemon
  previous?:string; //No sabemos si hay un pokemon previo
  results:Array<Info>; //Dentro de Info están los pokemones
}

//Creo la interfaz petición para pedirle datos a internet (a la API)
