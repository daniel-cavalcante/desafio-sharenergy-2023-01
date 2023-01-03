import { AxiosStatic } from 'axios';
import { writeFile } from 'fs';

interface RandomUserSource {
  readonly name: { [key: string]: string };
  readonly id: { [key: string]: string };
  readonly phone: string;
  readonly location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: { [key: string]: string };
    timezone: { [key: string]: string };
  };
}

interface RandomUserListSource {
  readonly results: RandomUserSource[];
  readonly info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

interface RandomUser {
  name: string;
  id: string;
  phone: string;
  location: string[];
}

export class FakeUsers {
  constructor(protected request: AxiosStatic) {}

  public async generateJSON() {
    const list: RandomUser[] = await this.fetchUsers(3);
    const data = JSON.stringify(list, null, 2);

    writeFile('generatedUsers.json', data, (err) => {
      if (err) throw err;
      console.log('Data was written to file.');
    });
  }

  private async fetchUsers(results?: number): Promise<RandomUser[]> {
    try {
      const response = await this.request.get<RandomUserListSource>(
        `https://randomuser.me/api/?results=${
          results || 23
        }&inc=name,location,id,phone&nat=br`
      );
      return this.formatData(response.data);
    } catch (err: unknown) {
      throw new Error(
        `Unexpected error when trying to communicate to API: ${
          (err as Error).message
        }`
      );
    }
  }

  private formatData(list: RandomUserListSource): RandomUser[] {
    const formatedList: RandomUser[] = [];
    list.results.forEach((user) => {
      formatedList.push({
        name: user.name.first + ' ' + user.name.last,
        id: user.id.value,
        phone: user.phone,
        location: [
          user.location.street.name,
          user.location.street.number.toString(),
          user.location.city,
          user.location.state,
          user.location.postcode.toString(),
        ],
      });
    });

    return formatedList;
  }
}
