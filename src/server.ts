import { App } from './app';
import { controllers } from './controllers';

const PORT = 3000;
const app = new App(controllers, PORT);

app.listen();
