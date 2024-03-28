import { app } from '@rune-ts/server';
import runeConfig from '../../rune.config.js';
import { ClientRouter } from '../app/ClientRouter';

const server = app();

server.use((req, res, next) => {
  const layoutData = {
    __host_name: runeConfig.hostname || 'localhost',
    __bundle_port: runeConfig.port || Number(process.env.PORT) || 4000,
    title: '',
    description: ''
  }
  res.locals.layoutData = layoutData;
  next();
})

server.get(ClientRouter['/hello-world'].toString(), function (req, res) {
  res.locals.layoutData.title = 'Home';
  res.send(ClientRouter['/hello-world']({}, res.locals.layoutData).toHtml());
})

server.get('/', (req, res) => {
  res.send('Hello, this is RUNE + RUNE Server!')
})