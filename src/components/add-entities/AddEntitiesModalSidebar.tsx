import { Nav, Sidenav } from 'rsuite';
import GroupIcon from '@rsuite/icons/legacy/Group';
import ChangeListIcon from '@rsuite/icons/ChangeList';
import ReviewIcon from '@rsuite/icons/Review';
import { AddEntitiesModalStepsName } from '../../enums/ModalSteps';

type AddEntitiesModalSidebarProps = {
    selectedStep: AddEntitiesModalStepsName,
    changeStep: (stepName: AddEntitiesModalStepsName) => void
}

export default function AddEntitiesModalSidebar(props: AddEntitiesModalSidebarProps) {
    return (
        <>
            <Sidenav>
                <Sidenav.Body>
                    <Nav activeKey={props.selectedStep} className='p-2'>
                        <Nav.Item
                            eventKey={AddEntitiesModalStepsName.Legal}
                            icon={<ReviewIcon />}
                            onClick={() => { props.changeStep(AddEntitiesModalStepsName.Legal) }}
                        >
                            Legal
                        </Nav.Item>
                        <Nav.Item
                            eventKey={AddEntitiesModalStepsName.Ownership}
                            icon={<ChangeListIcon />}
                            onClick={() => { props.changeStep(AddEntitiesModalStepsName.Ownership) }}
                        >
                            OwnerShip
                        </Nav.Item>
                        <Nav.Item
                            eventKey={AddEntitiesModalStepsName.Tax}
                            icon={<GroupIcon />}
                            onClick={() => { props.changeStep(AddEntitiesModalStepsName.Tax) }}
                        >
                            Tax
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </>
    )
}
