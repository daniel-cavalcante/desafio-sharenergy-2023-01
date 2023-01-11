import { AxiosStatic, AxiosError } from 'axios';

type DogsListSource = string[];

export class Dogs {
  list: string[] = [];

  constructor(protected request: AxiosStatic) {}

  public async init() {
    try {
      const response = await this.request.get<DogsListSource>(
        'https://random.dog/doggos'
      );
      this.list = response.data.filter((dog) => {
        const allowedExtensions: string[] = [
          '.jpg',
          '.JPG',
          '.jpeg',
          '.JPEG',
          '.png',
          '.PNG',
          '.gif',
          '.GIF',
        ];
        for (const ext of allowedExtensions) {
          if (dog.endsWith(ext)) {
            return true;
          }
        }
        return false;
      });
    } catch (error: unknown) {
      console.error((error as AxiosError).cause);
    }
  }

  public fetchRandom(): string {
    return this.list[this.getRandomIntInclusive(0, this.list.length)];
  }

  private getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
}
