import { Button, Modal } from 'rsuite';
import AddEntitiesModalSidebar from '../../components/add-entities/AddEntitiesModalSidebar';
import EntitiesLegalInputFields from '../../components/add-entities/EntitiesLegalInputFields';
import EntitiesOwnershipInputFields from '../../components/add-entities/EntitiesOwnershipInputFields';
import EntitiesTaxInputFields from '../../components/add-entities/EntitiesTaxInputFields';
type AddEntitiesModalPropsType = {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void
}

export default function AddEntitiesModal(props: AddEntitiesModalPropsType) {

    const handleClose = () => {
        props.setShowModal(false);
    }

    return (
        <>
            <Modal size={"lg"} open={props.showModal} onClose={handleClose} className='d-flex justify-content-center'>
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
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} appearance="primary">
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
