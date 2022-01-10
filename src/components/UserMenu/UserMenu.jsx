import { Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import {FcButtingIn} from 'react-icons/fc'

// Avatar приветствие выход подкл в AppBar


export default function UserMenu() {
    // для разлогинивания
    const dispatch = useDispatch();
    // получение имени из стейта
    const name = useSelector(authSelectors.getUsername);
    return (
        <div className={styles.container_user}>
      <span className={styles.name}>Wellcome, {name} {' '}
          <FcButtingIn/>
      </span>
            <Button variant='warning' type="button" onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </Button>
        </div>
    );
}