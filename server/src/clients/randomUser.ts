import { AxiosStatic } from 'axios';

interface RandomUserSource {
  readonly name: { [key: string]: string };
  readonly email: string;
  readonly login: { [key: string]: string };
  readonly dob: { date: string; age: number };
  readonly picture: { [key: string]: string };
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
  username: string;
  age: number;
  picture: string;
}

export class RandomUserGeneratorResponse {
  readonly randomUserAPIParams: string = 'name,email,login,picture,dob';

  constructor(protected request: AxiosStatic) {}

  public async fetchUsers(results: number): Promise<RandomUser[]> {
    try {
      const response = await this.request.get<RandomUserListSource>(
        `https://randomuser.me/api/?results=${results}&inc=${this.randomUserAPIParams}`
      );
      return this.formatResponse(response.data);
    } catch (err: unknown) {
      throw new Error(
        `Unexpected error when trying to communicate to API: ${
          (err as Error).message
        }`
      );
    }
  }

  private formatResponse(list: RandomUserListSource): RandomUser[] {
    let randomUserArray: RandomUser[] = [];
    list.results.forEach((user) => {
      randomUserArray.push({
        name: user.name.first + user.name.last,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
        picture: user.picture.medium,
      });
    });

    return randomUserArray;
  }
}
