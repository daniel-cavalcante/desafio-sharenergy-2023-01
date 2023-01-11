import { AxiosStatic } from 'axios';

export class StatusCode {
  constructor(protected request: AxiosStatic) {}

  public async fetchCode(code: number): Promise<void> {
    const response = await this.request.get(`https://http.cat/${code}`);
  }
}
