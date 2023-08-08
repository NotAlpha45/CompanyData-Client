import { Button, Modal } from 'rsuite';
import AddEntitiesModalSidebar from '../../components/add-entities/AddEntitiesModalSidebar';
// import EntitiesLegalInputFields from '../../components/add-entities/EntitiesLegalInputFields';
// import EntitiesOwnershipInputFields from '../../components/add-entities/EntitiesOwnershipInputFields';
import EntitiesTaxInputFields from '../../components/add-entities/EntitiesTaxInputFields';
import { ModalControlUtils } from '../../utils/modal-utils/ModalControlUtils';
import { useAppSelector } from '../../stores/redux-store';
import { shallowEqual } from 'react-redux';
import { ModalName } from '../../enums/modalName';
import { useState } from 'react';
import { AddEntitiesModalStepsName } from '../../enums/ModalSteps';
import EntitiesLegalInputFields from '../../components/add-entities/EntitiesLegalInputFields';
import EntitiesOwnershipInputFields from '../../components/add-entities/EntitiesOwnershipInputFields';
import { AddEntitiesModalStepsNameKeyType } from '../../types/modal';
import { Entity, OwnerShip } from '../../types/entity-types';
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils';


export default function AddEntitiesModal() {

    const currentSelectedModal = useAppSelector(state => state.modals.type, shallowEqual);
    const [currentSelectedModalStep, setCurrentSelectedModalStep] = useState<AddEntitiesModalStepsName>(AddEntitiesModalStepsName.Legal);

    const modalSteps = Object.keys(AddEntitiesModalStepsName) as AddEntitiesModalStepsNameKeyType[];
    const [currentSelectedModalStepIndex, setCurrentSelectedModalStepIndex] = useState<number>(0);


    const [addedEntity, setAddedEntity] = useState<Entity>({
        entityId: "",
        entityName: "",
        incorporationJurisdiction: "",
        entityType: "",
        subNational: "",
        sicCode: "",
    });

    const [addedOwnerships, setAddedOwnerships] = useState<OwnerShip[]>([]);

    const shouldSubmitEntityData = () => {
        return addedEntity.entityName !== "" && addedEntity.entityId !== "";
    }

    const handleModalClose = () => {
        ModalControlUtils.removeModal();
        setCurrentSelectedModalStepIndex(0);
        setCurrentSelectedModalStep(AddEntitiesModalStepsName[modalSteps[0]]);
    }

    const changeModalStep = (stepName: AddEntitiesModalStepsName) => {
        setCurrentSelectedModalStep(stepName);
        setCurrentSelectedModalStepIndex(modalSteps.findIndex((step) => step === stepName));
    }

    const handleAddEnity = () => {
        if (!shouldSubmitEntityData()) {
            return;
        }
        EntityControlUtils.addEntity(addedEntity);
        EntityControlUtils.addOwnerships(addedOwnerships);
        handleModalClose();
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
                    {/* <form onSubmit={(event) => { event.preventDefault(); handleAddEnity() }} id='entity-form'> */}
                    <div className='container-fluid' style={{ height: '40rem', width: '70rem' }}>
                        <div className='row h-100'>
                            <div className='col-3'>
                                <AddEntitiesModalSidebar selectedStep={currentSelectedModalStep} changeStep={changeModalStep} />
                            </div>

                            <div className='col' hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Legal}>
                                <EntitiesLegalInputFields addedEntity={addedEntity} setAddedEntity={setAddedEntity} />
                            </div>

                            <div className='col' hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Ownership}>
                                <EntitiesOwnershipInputFields
                                    addedEntityId={addedEntity.entityId}
                                    ownershipInputValues={addedOwnerships}
                                    setOwnershipInputValues={setAddedOwnerships}
                                />
                            </div>

                            <div className='col' hidden={currentSelectedModalStep !== AddEntitiesModalStepsName.Tax}>
                                <EntitiesTaxInputFields />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button
                        onClick={() => { gotoStep("prev") }}
                        appearance="subtle"
                        hidden={currentSelectedModalStepIndex === 0}
                    >
                        Previous
                    </Button>

                    <Button
                        onClick={() => { gotoStep("next") }}
                        appearance="primary"
                        hidden={currentSelectedModalStepIndex === modalSteps.length - 1}
                    >
                        Next
                    </Button>

                    <Button
                        onClick={() => handleAddEnity()}
                        className='btn bg-success text-white'
                        disabled={!shouldSubmitEntityData()}
                        hidden={currentSelectedModalStepIndex !== modalSteps.length - 1}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
