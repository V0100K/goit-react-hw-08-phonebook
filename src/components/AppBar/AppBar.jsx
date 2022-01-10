import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import { Navbar } from 'react-bootstrap';

// стили входа и лога
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
};

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Navbar bg="primary" variant="dark" style={styles.header}>
            <Navigation />
            {/*// если залогинен отобразить "UserMenu" если нет "AuthNav"*/}
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navbar>
    );
}