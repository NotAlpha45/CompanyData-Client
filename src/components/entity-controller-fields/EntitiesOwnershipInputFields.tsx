import React from 'react'
import { Form, InputNumber, InputPicker, Schema } from 'rsuite'
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils'
import CloseIcon from '@rsuite/icons/Close';
import { OwnerShip } from '../../types/entity-types';

type EntitiesOwnershipInputFieldsProps = {
    addedEntityId: string;
    ownershipInputValues: OwnerShip[];
    setOwnershipInputValues: React.Dispatch<React.SetStateAction<OwnerShip[]>>;
}

export default function EntitiesOwnershipInputFields(props: EntitiesOwnershipInputFieldsProps) {

    const ownerEntityNames = EntityControlUtils.getEntityNamesAndIds().map((entity) => {
        return {
            label: entity.entityName,
            value: entity.entityId
        };
    });

    const ownershipInputFieldModel = Schema.Model({
        ownerId: Schema.Types.StringType().isRequired('Required'),
        ownershipPercentage: Schema.Types.NumberType().isRequired('Required').range(0, 100, 'Ownership Percentage must be between 0 and 100')
    });


    const { ownershipInputValues, setOwnershipInputValues } = props;

    const addOwnershipInputField = () => {
        setOwnershipInputValues([...ownershipInputValues, {
            ownershipId: props.addedEntityId,
            ownerId: "",
            ownedId: props.addedEntityId,
            ownershipPercentage: 0,
            ownershipName: ""
        }]);
    }

    const removeOwnershipInputField = (index: number) => {
        const ownershipInputValuesCopy = [...ownershipInputValues];
        ownershipInputValuesCopy.splice(index, 1);
        setOwnershipInputValues(ownershipInputValuesCopy);
    }

    const handleOwnerSelection = (index: number, ownerId: string, ownerName: string) => {
        const ownershipInputValuesCopy = [...ownershipInputValues];
        ownershipInputValuesCopy[index].ownerId = ownerId;
        ownershipInputValuesCopy[index].ownershipName = ownerName;
        ownershipInputValuesCopy[index].ownerName = ownerName;
        setOwnershipInputValues(ownershipInputValuesCopy);


    }

    const handleOwnershipPercentageSelection = (index: number, ownershipPercentage: number) => {
        const ownershipInputValuesCopy = [...ownershipInputValues];
        ownershipInputValuesCopy[index].ownershipPercentage = ownershipPercentage;
        setOwnershipInputValues(ownershipInputValuesCopy);

    }

    return (
        <>
            <div className='container-fluid overflow-y-auto'>
                <div className='row d-flex mb-3'>
                    {ownershipInputValues.map((_, index) => {
                        return (
                            <div key={index} className='mb-4'>
                                <div className='row d-flex mb-3'>
                                    <div className='col fs-3'>
                                        Ownership {index + 1}
                                    </div>
                                    <div className='col fs-3 d-flex justify-content-end'>
                                        <CloseIcon onClick={() => { removeOwnershipInputField(index) }} />
                                    </div>
                                </div>
                                <Form model={ownershipInputFieldModel}>
                                    <div className='row d-flex'>

                                        <div className='col'>
                                            <Form.Group controlId='ownerId'>
                                                <Form.ControlLabel className='fs-6'>Owner Entity</Form.ControlLabel>
                                                {/* <Form.Control name='ownerId' /> */}
                                                <InputPicker
                                                    placeholder={ownershipInputValues[index].ownerName ?? ownershipInputValues[index].ownerId}
                                                    value={ownershipInputValues[index].ownerName ?? ownershipInputValues[index].ownerId}
                                                    aria-required
                                                    name='ownerId'
                                                    className='mb-3'
                                                    style={{ width: "100%" }}
                                                    data={ownerEntityNames}
                                                    onSelect={(_, item) => { handleOwnerSelection(index, item.value as string, item.label as string) }}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col'>
                                            <Form.Group controlId='ownershipPercentage'>
                                                <Form.ControlLabel className='fs-6'>Ownership Percentage (%)</Form.ControlLabel>
                                                <Form.Control
                                                    placeholder={ownershipInputValues[index].ownershipPercentage.toString()}
                                                    value={ownershipInputValues[index].ownershipPercentage.toString()}
                                                    aria-required
                                                    accepter={InputNumber}
                                                    name='ownershipPercentage'
                                                    id='percentage-input'
                                                    onChange={(value) => { handleOwnershipPercentageSelection(index, Number(value)) }}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        )
                    })
                    }

                </div>

                <div className='row'>
                    <div className='col-4'>
                        <button className='btn btn-warning' onClick={addOwnershipInputField}>Add Ownership</button>
                    </div>
                </div>
            </div>
        </>
    )
}
