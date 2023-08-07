import React from 'react'
import { InputNumber, SelectPicker } from 'rsuite'
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils'
import CloseIcon from '@rsuite/icons/Close';
import { OwnerShip } from '../../types/entity-types';

export default function EntitiesOwnershipInputFields() {

    const ownerEntityNames = EntityControlUtils.getEntityNamesAndIds().map((entity) => {
        return {
            label: entity.entityName,
            value: entity.entityId
        };
    });

    const [ownershipInputValues, setOwnershipInputValues] = React.useState<OwnerShip[]>([
        {
            ownershipId: "",
            ownerId: "",
            ownedId: "",
            ownershipPercentage: 0,
            ownershipName: ""
        }
    ]);

    const addOwnershipInputField = () => {
        setOwnershipInputValues([...ownershipInputValues, {
            ownershipId: "",
            ownerId: "",
            ownedId: "",
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
                                <div className='row d-flex'>
                                    <div className='col'>
                                        <label htmlFor="owner-input" className='fs-6'>Owner Entity</label>
                                        <SelectPicker
                                            className='mb-3'
                                            id='owner-selector'
                                            style={{ width: "100%" }}
                                            data={ownerEntityNames}
                                            onSelect={(_, item) => { handleOwnerSelection(index, item.value as string, item.label as string) }}
                                        />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="percentage-input" className='fs-6'>Ownership Percentage (%)</label>
                                        <InputNumber
                                            id='percentage-input'
                                            min={0}
                                            max={100}
                                            onChange={(value) => { handleOwnershipPercentageSelection(index, value as number) }}
                                        />
                                    </div>
                                </div>
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