export interface Good {
  id: number;
  name: string;
  color: string;
  get5First(): Promise<Good[]>;
  getRedGoods(): Promise<Good[]>;
}
