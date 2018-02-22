import { JsonController, Post as HttpPost, Get, Param, Body, Delete } from 'routing-controllers'
import { Service } from 'typedi'
import { Post } from '../model/Post'
import { PostRepository } from '../repository/PostRepository'

@Service()
@JsonController()
export class PostController {

    constructor(private postRepository : PostRepository) {

    }

    @Get('/posts')
    all() : Promise<Post[]> {
        return this.postRepository.findAll()
    }

    @Get('/posts/:id')
    one(@Param('id') id: number) : Post {
        return this.postRepository.findOne(id)
    }

    @HttpPost('/posts')
    post(@Body() post : Post) : Post {
        return this.postRepository.save(post)
    }

    @Delete('/posts/:id')
    delete(@Param('id') id: number) : Post {
        return this.postRepository.delete(id)
    }
    
}