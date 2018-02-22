import { Post } from '../model/Post'
import { Category } from '../model/Category'
import { Service } from 'typedi'

@Service()
export class PostRepository {

    private posts = [
        new Post(1, "post #1", "about post #1", [new Category(1, "Cronaca"), new Category(2, "Tecnologia")]),
        new Post(2, "post #2", "about post #2", [new Category(2, "Tecnologia")]),
        new Post(3, "post #3", "about post #3", [new Category(3, "Politica")]),
        new Post(4, "post #4", "about post #4", [new Category(3, "Politica"), new Category(4, "Economia")]),
    ];

    findAll() : Promise<Post[]> {
        return Promise.resolve(this.posts)
    }

    findOne(id: number) : Post {
        let foundPost = undefined
        this.posts.forEach(post => {
            if (post.id == id)
                foundPost = post
        })
        return foundPost
    }

    save(post: Post) : Post {
        this.posts.push(post)
        return post
    }

    delete(id: number) : Post {
        let post = this.findOne(id)
        if (post)
            this.posts.splice(this.posts.indexOf(post), 1)
        return post
    }

}