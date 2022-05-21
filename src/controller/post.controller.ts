import { Request, Response, Router } from "express"
import { PostService } from "../services/post.service";

export class PostController {
    public postService: PostService;
    public router: Router;

    constructor() {
        this.router = Router();
        this.postService = new PostService();
        this.routes();
    }

    public insert = async(request: Request, response: Response) => {
        const data = await this.postService.insert() 
        const res: any = {}
        Object.keys(data).map((item, index) => {
            if(index != 10){
                res[item] = data[item]
            }
            else {
                response.send(res)
            }
        })
    }

    public routes = () => {
        this.router.get('/insert', this.insert);
    }
}