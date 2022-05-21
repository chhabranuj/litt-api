import cors from 'cors';
import express, { Request, Response } from 'express';
import { PostController } from './controller/post.controller';

class Server {
    private postController!: PostController;
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.configuration();
        this.routes();
    }

    public configuration = () => {
        this.app.set('port', process.env.PORT || 8000);
    }

    public routes = async () => {
        this.postController = new PostController();

        this.app.use('/api', this.postController.router);

        this.app.get('/', (req: Request, res: Response) => {
            res.send("Nothin")
        })
    }

    public start = () => {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server started at ${this.app.get('port')} port.`);
        })
    }
}

const server = new Server();
server.start();