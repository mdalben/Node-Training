import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { Weapon } from '../interfaces/Weapon'

@injectable()
class Katana implements Weapon {
    hit(): string {
        return 'Cut!'
    }
} 

export { Katana }