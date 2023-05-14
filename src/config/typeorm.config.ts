import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "../tasks/task.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.js'],
   //entities: [Task],
    synchronize: true
}