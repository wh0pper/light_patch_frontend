export class LightState {

  constructor(
    public on: boolean,
    public mode: string,
    public brightness: number,
    public color: string,
    public schedule?: string,
    public timer?: number
  ) { }

}
