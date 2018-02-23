import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { ThrowableWeapon } from '../interfaces/ThrowableWeapon'

@injectable()
class Shuriken implements ThrowableWeapon {
    throw(): string {
        return 'Hit!'
    }
}

export { Shuriken }