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

    @Get('/categories/:id')
    one(@Param('id') id: number) {
        return this.categoryRepository.findOne(id)
    }

    @Post('/categories')
    category(@Body() category: Category) : Category {
        return this.categoryRepository.save(category)
    }

    @Delete('/categories/:id')
    delete(@Param('id') id: number) : Category {
        return this.categoryRepository.remove(id)
    }

}