import { Nav, Sidenav } from 'rsuite'
import GroupIcon from '@rsuite/icons/legacy/Group';
import AddOutlineIcon from '@rsuite/icons/AddOutline';

export default function EntityTableSidenavComponent() {
    return (
        <>
            <Sidenav >
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" icon={<AddOutlineIcon />}>
                            Add Entity Chart
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                            Master Entity Chart
                        </Nav.Item>

                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </>
    )
}
