import { Button, Modal } from 'rsuite';
import AddEntitiesModalSidebar from '../../components/add-entities/AddEntitiesModalSidebar';
// import EntitiesLegalInputFields from '../../components/add-entities/EntitiesLegalInputFields';
// import EntitiesOwnershipInputFields from '../../components/add-entities/EntitiesOwnershipInputFields';
import EntitiesTaxInputFields from '../../components/add-entities/EntitiesTaxInputFields';
import { ModalControlUtils } from '../../utils/modal-utils/ModalControlUtils';
import { useAppSelector } from '../../stores/redux-store';
import { shallowEqual } from 'react-redux';
import { ModalName } from '../../enums/modalName';
import { useEffect, useState } from 'react';
import { AddEntitiesModalStepsName } from '../../enums/ModalSteps';
import EntitiesLegalInputFields from '../../components/add-entities/EntitiesLegalInputFields';
import EntitiesOwnershipInputFields from '../../components/add-entities/EntitiesOwnershipInputFields';
import { AddEntitiesModalStepsNameKeyType } from '../../types/modal';


export default function AddEntitiesModal() {

    const currentSelectedModal = useAppSelector(state => state.modals.type, shallowEqual);
    const [currentSelectedModalStep, setCurrentSelectedModalStep] = useState<AddEntitiesModalStepsName>(AddEntitiesModalStepsName.Legal);

    const modalSteps = Object.keys(AddEntitiesModalStepsName) as AddEntitiesModalStepsNameKeyType[];
    const [currentSelectedModalStepIndex, setCurrentSelectedModalStepIndex] = useState<number>(0);

    const handleModalClose = () => {
        ModalControlUtils.removeModal();
    }

    const changeModalStep = (stepName: AddEntitiesModalStepsName) => {
        setCurrentSelectedModalStep(stepName);
    }

    const gotoStep = (stepType: "prev" | "next") => {

        const nextStepIndex = stepType === "next" ? currentSelectedModalStepIndex + 1 : currentSelectedModalStepIndex - 1;

        if (nextStepIndex >= modalSteps.length || nextStepIndex < 0) {
            return;
        }
        setCurrentSelectedModalStep(AddEntitiesModalStepsName[modalSteps[nextStepIndex]]);
        setCurrentSelectedModalStepIndex(nextStepIndex);
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
                                <AddEntitiesModalSidebar selectedStep={currentSelectedModalStep} changeStep={changeModalStep} />
                            </div>

                            <div className='col' hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Legal}>
                                <EntitiesLegalInputFields />
                            </div>

                            <div className='col' hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Ownership}>
                                <EntitiesOwnershipInputFields />
                            </div>

                            <div className='col' hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Tax}>
                                <EntitiesTaxInputFields />
                            </div>

                        </div>
                    </div>
                    {/* <Placeholder.Paragraph /> */}
                </Modal.Body>
                <Modal.Footer>

                    <Button
                        onClick={handleModalClose}
                        appearance="subtle">
                        Cancel
                    </Button>

                    <Button
                        onClick={() => { gotoStep("next") }}
                        appearance="primary"
                        hidden={currentSelectedModalStep === AddEntitiesModalStepsName.Tax}
                    >
                        Next
                    </Button>

                    <Button
                        onClick={handleModalClose}
                        className='btn bg-success text-white' disabled
                        hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Tax}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}