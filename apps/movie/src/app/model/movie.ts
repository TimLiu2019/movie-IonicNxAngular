export class Movie {
  private Guid: string;
  private Title: string;
  private Rate: string;
  private Genre: string;
  private Stock: number;
  private Like: boolean;

  constructor() {}

  get guid(): string {
    return this.Guid;
  }

  set guid(value: string) {
    this.Guid = value;
  }

  get title(): string {
    return this.Title;
  }

  set title(value: string) {
    this.Title = value;
  }

  get rate(): string {
    return this.Rate;
  }

  set rate(value: string) {
    this.Rate = value;
  }
  get genre(): string {
    return this.Genre;
  }

  set genre(value: string) {
    this.Genre = value;
  }
  get stock(): number {
    return this.Stock;
  }

  set stock(value: number) {
    this.Stock = value;
  }

  get like(): boolean {
    return this.Like;
  }

  set like(value: boolean) {
    this.Like = value;
  }
}
