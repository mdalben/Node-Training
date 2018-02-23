import { Container } from 'inversify'
import TYPES from './types/TYPES'
import { Warrior } from './interfaces/Warrior'
import { Weapon } from './interfaces/Weapon'
import { ThrowableWeapon } from './interfaces/ThrowableWeapon'
import { Ninja } from './classes/Ninja'
import { Katana } from './classes/Katana'
import { Shuriken } from './classes/Shuriken'

let container = new Container()
container.bind<Warrior>(TYPES.Warrior).to(Ninja)
container.bind<Weapon>(TYPES.Weapon).to(Katana)
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)

export default container