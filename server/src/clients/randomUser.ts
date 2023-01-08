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

export const MAX_PAGES = 5;
export type Page = 1 | 2 | 3 | 4 | 5;
type Results = 12 | 60;

export class RandomUserGeneratorResponse {
  readonly randomUserAPIParams: string = 'name,email,login,picture,dob';
  readonly SEED = '5ae2a1a99811e5b3';
  readonly RESULTS = '12';

  constructor(protected request: AxiosStatic) {}

  public async fetchUsers(
    page: Page,
    results?: Results // Number of hits per page. (currently is 12)
  ): Promise<RandomUser[]> {
    try {
      const response = await this.request.get<RandomUserListSource>(
        'https://randomuser.me/api/' +
          `?results=${results ? results : this.RESULTS}` +
          `&page=${page}` +
          `&seed=${this.SEED}` +
          `&inc=${this.randomUserAPIParams}`
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
        name: user.name.first + user.name.last,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
        picture: user.picture.medium,
      });
    });

    return formatedList;
  }

  public async searchFor(keywords: string): Promise<RandomUser[]> {
    // The 'keywords' is expected to be a string of words separated by commas.
    const keywordList: string[] = keywords.split(',');

    try {
      const allUsers = await this.fetchUsers(1, 60);
      let filteredUsers: RandomUser[] = allUsers;
      for (const keyword of keywordList) {
        filteredUsers = filteredUsers.filter((user) => {
          return (
            user.name.includes(keyword) ||
            user.username.includes(keyword) ||
            user.email.includes(keyword)
          );
        });
      }
      return filteredUsers;
    } catch (err: unknown) {
      throw new Error(
        `Unexpected error when trying to communicate to API: ${
          (err as Error).message
        }`
      );
    }
  }
}
