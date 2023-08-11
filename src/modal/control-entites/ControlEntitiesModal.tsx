import { useState } from 'react'
import { useAppSelector } from '../../stores/redux-store';
import { shallowEqual } from 'react-redux';
import { AddEntitiesModalStepsName } from '../../enums/ModalSteps';
import { AddEntitiesModalStepsNameKeyType } from '../../types/modal-types';
import { Entity, OwnerShip } from '../../types/entity-types';
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils';
import { ModalControlUtils } from '../../utils/modal-utils/ModalControlUtils';
import { ModalName } from '../../enums/modalName';
import { Button, Modal } from 'rsuite';
import AddEntitiesModalSidebar from '../../components/entity-controller-fields/AddEntitiesModalSidebar';
import EntitiesLegalInputFields from '../../components/entity-controller-fields/EntitiesLegalInputFields';
import EntitiesOwnershipInputFields from '../../components/entity-controller-fields/EntitiesOwnershipInputFields';
import EntitiesTaxInputFields from '../../components/entity-controller-fields/EntitiesTaxInputFields';

type ControlEntitiesModalProps = {
    modalName: ModalName;
    modalHeading: string;
    sidebarNavigationEnabled: boolean;
}

export default function ControlEntitiesModal(props: ControlEntitiesModalProps) {

    const currentSelectedModal = useAppSelector(state => state.modals.type, shallowEqual);

    const entityDataToBeEdited = useAppSelector(state => state.modals.entityDataToBeEdited, shallowEqual);

    // window.location.reload();

    const modalSteps = Object.keys(AddEntitiesModalStepsName) as AddEntitiesModalStepsNameKeyType[];
    const [currentSelectedModalStepIndex, setCurrentSelectedModalStepIndex] = useState<number>(0);
    const [currentSelectedModalStep, setCurrentSelectedModalStep] = useState<AddEntitiesModalStepsName>(AddEntitiesModalStepsName[modalSteps[0]]);

    const [addedEntity, setAddedEntity] = useState<Entity>(
        entityDataToBeEdited ?
            entityDataToBeEdited.entity :
            {
                entityId: "",
                entityName: "",
                incorporationJurisdiction: "",
                entityType: "",
                subNational: "",
                sicCode: "",
            },
    );


    const [addedOwnerships, setAddedOwnerships] = useState<OwnerShip[]>(
        entityDataToBeEdited ? entityDataToBeEdited.ownerships : []
    );

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
            <Modal size={"lg"} backdrop={'static'} open={currentSelectedModal === props.modalName} onClose={handleModalClose} className='d-flex justify-content-center'>
                <Modal.Header
                    className="modal-header  pt-30 ps-30 pe-30 pb-30"
                    closeButton={false}
                >
                    <Modal.Title className='d-flex justify-content-between'>
                        <p className='fs-3'>{props.modalHeading}</p>
                        <button className='btn-close' type='button' aria-label='Close' onClick={handleModalClose}></button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <form onSubmit={(event) => { event.preventDefault(); handleAddEnity() }} id='entity-form'> */}
                    <div className='container-fluid' style={{ height: '40rem', width: '70rem' }}>
                        <div className='row h-100'>
                            <div className='col-3'>
                                <AddEntitiesModalSidebar selectedStep={currentSelectedModalStep} changeStep={changeModalStep} toggleNavigationEnabled={props.sidebarNavigationEnabled} />
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
                                <EntitiesTaxInputFields addedEntity={addedEntity} setAddedEntity={setAddedEntity} />
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
