import { useSelector } from 'hooks/useSelector';
import { currentUserSelector } from 'models/user/selectors';

export default () => useSelector(currentUserSelector);
