import { Router } from 'express';
import {
  deleteUserEntry,
  getUser,
  getUserList,
  registerNewUser,
  updateUserInfo,
} from './controllers/userCRUDController';
import {
  getRandomUsers,
  searchRandomUsers,
} from './controllers/randomUserController';
import sendCat from './controllers/statusCodeController';
import getDog from './controllers/refreshDogController';

const router = Router();

router.get('/random-user-generator/:page', getRandomUsers);

// Example URL:
// http://localhost:5000/api/v1/random-user-generator/query?keywords=organic,sacha
router.get('/random-user-generator/query', searchRandomUsers);

router.get('/status-code/:code', sendCat);

router.get('/refresh-dog', getDog);

router.get('/user-crud', getUserList);

router.get('/user-crud/:_id', getUser);

router.post('/user-crud', registerNewUser);

router.put('/user-crud', updateUserInfo);

router.delete('/user-crud', deleteUserEntry);

export default router;
