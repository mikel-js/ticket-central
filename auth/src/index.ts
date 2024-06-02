import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { singinRouter } from './routes/signin';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(singinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(errorHandler);

app.get('/api/users/currentuser', (req, res) => {
  res.send('hi there');
});

app.listen(3000, () => {
  console.log('listening 3000');
});
