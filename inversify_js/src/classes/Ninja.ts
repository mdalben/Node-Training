import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import TYPES from '../types/TYPES'
import { Warrior } from '../interfaces/Warrior'
import { Weapon } from '../interfaces/Weapon'
import { ThrowableWeapon } from '../interfaces/ThrowableWeapon'

@injectable()
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    fight(): string {
        return this._katana.hit()
    }
    sneak(): string {
        return this._shuriken.throw()
    }

}

export { Ninja }