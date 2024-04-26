import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      name: 'Ruslan',
      password: '12345',
    },
    {
      userId: 2,
      name: 'Kirill',
      password: '12345',
    },
  ];

  async findOne(name: string): Promise<any> {
    return this.users.find((users) => users.name === name);
  }
}
