import { Nav, Sidenav } from 'rsuite';
import GroupIcon from '@rsuite/icons/legacy/Group';
import ChangeListIcon from '@rsuite/icons/ChangeList';
import ReviewIcon from '@rsuite/icons/Review';

export default function AddEntitiesModalSidebar() {
    return (
        <>
            <Sidenav>
                <Sidenav.Body>
                    <Nav activeKey="Legal" className='p-2'>
                        <Nav.Item eventKey="Legal" icon={<ReviewIcon />}>
                            Legal
                        </Nav.Item>
                        <Nav.Item eventKey="Ownership" icon={<ChangeListIcon />}>
                            OwnerShip
                        </Nav.Item>
                        <Nav.Item eventKey="Tax" icon={<GroupIcon />}>
                            Tax
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </>
    )
}
