import { Residence } from "./residence";

export class Appartement {
id!: number;
appartNum!: number;
floorNum!: number;
surface!: number;
terrace!: string;
surfaceTerrace!: number;
category!: string;
description!: string;
residence!: Residence;
}
