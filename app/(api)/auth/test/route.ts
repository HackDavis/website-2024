import authenticated from '@utils/authentication/authenticated';
import { GET as get } from './get';

const GET = authenticated(get);
export { GET };
