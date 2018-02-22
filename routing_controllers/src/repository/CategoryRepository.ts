import { Service } from 'typedi'
import { Category } from '../model/Category'

@Service()
export class CategoryRepository {

    private categories = [
        new Category(1, 'Politica'),
        new Category(2, 'Economia'),
        new Category(3, 'Cronaca'),
        new Category(4, 'Scienza'),
        new Category(5, 'Tecnologia'),
        new Category(6, 'Sport')
    ]

    findAll() : Promise<Category[]> {
        return Promise.resolve(this.categories)
    }

    findOne(id: number) : Category {
        let foundCategory = undefined
        this.categories.forEach(category =>{
            if (category.id == id)
                foundCategory = category
        })
        return foundCategory
    }

    save(category: Category) : Category {
        this.categories.push(category)
        return category
    }

    remove(id: number) : Category {
        let category = this.findOne(id)
        if (category)
            this.categories.splice(this.categories.indexOf(category), 1)
        return category
    }

}