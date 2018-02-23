import container from './inversify.config'
import TYPES from './types/TYPES';
import { Warrior } from './interfaces/Warrior';
import expect = require('expect.js')

let ninja = container.get<Warrior>(TYPES.Warrior)

expect(ninja.fight()).eql('Cut!')
expect(ninja.sneak()).eql("Hit!")