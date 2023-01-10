import { Router } from 'express';
import {
  deleteUserEntry,
  getUser,
  getUserList,
  registerNewUser,
  updateUserInfo,
} from './controllers/clientUserController';
import {
  getMaxPages,
  getRandomUsers,
  searchRandomUsers,
} from './controllers/randomUserController';
import sendCat from './controllers/statusCodeController';
import getDog from './controllers/refreshDogController';

import { login } from './middleware/auth';

const router = Router();

router.post('/login', login);

router.get('/random-user-generator/maxPages', getMaxPages);

router.get('/random-user-generator/page/:page', getRandomUsers);

// Example URL:
// http://localhost:5000/api/v1/random-user-generator/query?keywords=organic,sacha
router.get('/random-user-generator/query', searchRandomUsers);

router.get('/status-code/:code', sendCat);

router.get('/refresh-dog', getDog);

router.get('/clients', getUserList);

router.get('/clients/:_id', getUser);

router.post('/clients', registerNewUser);

router.put('/clients', updateUserInfo);

router.delete('/clients', deleteUserEntry);

export default router;
