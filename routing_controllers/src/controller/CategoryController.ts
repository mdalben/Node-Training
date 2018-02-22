import { JsonController, Post, Get, Delete, Param, Body } from 'routing-controllers'
import { Service } from 'typedi'
import { Category } from '../model/Category'
import { CategoryRepository } from '../repository/CategoryRepository'

@Service()
@JsonController()
export class CategoryController {

    constructor(private categoryRepository : CategoryRepository) {

    }

    @Get('/categories')
    all() : Promise<Category[]> {
        return this.categoryRepository.findAll()
    }

    
}