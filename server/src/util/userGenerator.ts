import { AxiosStatic } from 'axios';
import { writeFile } from 'fs';
import User from '../models/user';

interface RandomUserSource {
  readonly name: { [key: string]: string };
  readonly email: string;
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
  email: string;
  id: string;
  phone: string;
  location: string;
}

export class FakeUsers {
  constructor(protected request: AxiosStatic) {}

  public async writeOnDB() {
    const list: RandomUser[] = await this.fetchUsers();
    for (const user of list) {
      const newEntry = new User({
        name: user.name,
        email: user.email,
        id: user.id,
        phone: user.phone,
        location: user.location,
      });

      await newEntry.save();
    }
  }

  public async generateJSON() {
    const list: RandomUser[] = await this.fetchUsers();
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
        }&inc=name,email,location,id,phone&nat=br`
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
        email: user.email,
        id: user.id.value,
        phone: user.phone,
        location: `${user.location.street.name},
        ${user.location.street.number.toString()},
        ${user.location.city},
        ${user.location.state},
        ${user.location.country},
        ${user.location.postcode.toString()}`,
      });
    });

    return formatedList;
  }
}
