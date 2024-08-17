import { Sprites } from "./Sprites";

export class Pokemon {
  name: string;
  sprites: Sprites;

  constructor() {
    this.name = "";
    this.sprites = new Sprites();
  }
}

