import express from 'express';

const router = express.Router();

router.post('/api/users/singin', (req, res) => {
  res.send('Hi theres');
});

export { router as singinRouter };
