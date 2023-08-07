import { Input, SelectPicker } from 'rsuite'
import { Entity } from '../../types/entity-types';

type EntitiesLegalInputFieldsProps = {
    addedEntity: Entity;
    setAddedEntity: React.Dispatch<React.SetStateAction<Entity>>;
}

export default function EntitiesLegalInputFields(props: EntitiesLegalInputFieldsProps) {

    // Some Incorporation Jristriction Names in a array of objects having structure like so {label: string, value: string}
    const incorporationJuristrictionNames = [{ label: 'India', value: 'IN' }, { label: 'United States', value: 'US' }, { label: 'United Kingdom', value: 'UK' }]

    // Some Subnational Names in a array of objects having structure like so {label: string, value: string}
    const subNationalNames = [{ label: 'India', value: 'IN' }, { label: 'United States', value: 'US' }, { label: 'United Kingdom', value: 'UK' }]

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <div className='container-fluid'>
                    <div className='row d-flex mb-5'>
                        <div className='col' >
                            <label htmlFor="id-input" className='fs-6'>ID</label>
                            <Input
                                required
                                placeholder=""
                                id='id-input'
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, entityId: value }) }}
                            />
                        </div>
                        <div className='col'>
                            <label htmlFor="name-input" className='fs-6'>Name</label>
                            <Input
                                placeholder=""
                                id='name-input'
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, entityName: value }) }}
                            />
                        </div>
                    </div>

                    <div className='row d-flex mb-5'>
                        <div className='col' >
                            <label htmlFor="ij-input" className='fs-6'>Incorporation Jurisdiction</label>
                            <SelectPicker
                                className='mb-3'
                                id='entity-selector'
                                data={incorporationJuristrictionNames}
                                style={{ width: "100%" }}
                                onSelect={(_, item) => { props.setAddedEntity({ ...props.addedEntity, incorporationJurisdiction: item.value as string }) }}
                            />
                        </div>
                        <div className='col'>
                            <label htmlFor="sn-input" className='fs-6'>Sub National</label>
                            <SelectPicker
                                className='mb-3'
                                id='entity-selector'
                                data={subNationalNames}
                                style={{ width: "100%" }}
                                onSelect={(_, item) => { props.setAddedEntity({ ...props.addedEntity, subNational: item.value as string }) }}
                            // onSelect={(_, item) => { handleEntitySelection(item.label as string, item.value as string); }}
                            />
                        </div>
                    </div>

                    <div className='row d-flex mb-5'>
                        <div className='col' >
                            <label htmlFor="bt-input" className='fs-6'>Business Type</label>
                            <Input
                                id='bt-input'
                                placeholder=""
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, businessType: value }) }}
                            />
                        </div>
                        <div className='col'>
                            <label htmlFor="bsc-input" className='fs-6'>Business Sic Code</label>
                            <Input
                                placeholder=""
                                id='bsc-input'
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, sicCode: value }) }}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
