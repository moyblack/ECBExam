import express, { Request, Response } from 'express';
import next from 'next';
import bodyParser from 'body-parser';

// API Routes
import serviceRoutes from './routes/serviceRoutes';
import { initializeServices } from './controllers/serviceController';

const dev: boolean = process.env.NODE_ENV !== 'production';

const app: Record<string, any> = next({ dev });
const handle: (req: Request, res: Response) => void = app.getRequestHandler();

const port: string | number = process.env.PORT ? process.env.PORT : 3000;

app.prepare()
  .then(() => {
    const server: express.Application = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.get('/_next/*', (req: Request, res: Response) => {
      handle(req, res);
    });

    initializeServices();

    server.use('/health', (_: Request, res: Response) => {
      res.status(200).json({ status: 'ok' });
    });

    server.get('/', (req: Request, res: Response) => {
      const pagePath: string = '/index';
      // const queryParams = { title: req.params.id }
      return app.render(
        req, res, pagePath, {},
      );
    });


    /* Api Routes */
    server.use('/api_v1', [serviceRoutes/* Add more routes if necessary */]);

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}, NODE_ENV=${process.env.NODE_ENV}, dev=${dev}`);
    });
  })
  .catch((ex: Record<string, any>) => {
    console.error(ex.stack);
    process.exit(1);
  });
