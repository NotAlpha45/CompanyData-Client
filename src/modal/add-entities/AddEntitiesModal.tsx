import { Button, Modal } from 'rsuite';
import AddEntitiesModalSidebar from '../../components/add-entities/AddEntitiesModalSidebar';
// import EntitiesLegalInputFields from '../../components/add-entities/EntitiesLegalInputFields';
// import EntitiesOwnershipInputFields from '../../components/add-entities/EntitiesOwnershipInputFields';
import EntitiesTaxInputFields from '../../components/add-entities/EntitiesTaxInputFields';
import { ModalControlUtils } from '../../utils/modal-utils/ModalControlUtils';
import { useAppSelector } from '../../stores/redux-store';
import { shallowEqual } from 'react-redux';
import { ModalName } from '../../enums/modalName';

export default function AddEntitiesModal() {

    const currentSelectedModal = useAppSelector(state => state.modals.type, shallowEqual);

    const handleModalClose = () => {
        ModalControlUtils.removeModal();
    }

    return (
        <>
            <Modal size={"lg"} open={currentSelectedModal === ModalName.AddEntities} onClose={handleModalClose} className='d-flex justify-content-center'>
                <Modal.Header>
                    <Modal.Title>
                        <p className='fs-3'>Add Entities</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container-fluid' style={{ height: '40rem', width: '70rem' }}>
                        <div className='row h-100'>
                            <div className='col-3'>
                                <AddEntitiesModalSidebar />
                            </div>
                            <div className='col'>
                                {/* <EntitiesLegalInputFields /> */}
                                {/* <EntitiesOwnershipInputFields /> */}
                                <EntitiesTaxInputFields />
                            </div>
                        </div>
                    </div>
                    {/* <Placeholder.Paragraph /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModalClose} appearance="subtle">
                        Cancel
                    </Button>
                    <Button onClick={handleModalClose} appearance="primary">
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
