import { EntityManager } from '@mikro-orm/mongodb';
import { Injectable } from '@nestjs/common';
import User from './user.entity';

@Injectable()
export class UserService {

    constructor(
        private readonly em: EntityManager
    ) { }

    /**
     * 根据用户ID查找用户
     * @param id 用户ID
     * @returns 
     */
    async findById(id: string) {
        return await this.em.findOne(User, { id });
    }


    /**
     * 根据用户名查找用户
     * @param username 用户名
     * @returns
     * @memberof UserService
     */
    async findByUsername(username: string) {
        return await this.em.findOne(User, { username });
    }
}
