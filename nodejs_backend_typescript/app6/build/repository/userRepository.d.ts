import { ObjectId } from 'mongodb';
declare class UserRepository {
    create(username: String, email: String, age: Number): void;
    getUsers(): void;
    findById(id: ObjectId): void;
    findByUsername(username: String): void;
    updateUser(id: ObjectId, username: String, email: String, age: Number): void;
    deleteUser(id: ObjectId): void;
    deleteUserByUsername(username: String): void;
}
export = UserRepository;
