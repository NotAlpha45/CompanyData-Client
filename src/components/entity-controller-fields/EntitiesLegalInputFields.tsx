import { Form, Input, InputPicker, Schema } from 'rsuite'
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

    const entityLegalInputFieldModel = Schema.Model({
        entityId: Schema.Types.StringType().isRequired('Required').minLength(1, 'Entity ID must be at least 1 character long'),
        entityName: Schema.Types.StringType().isRequired('Required').minLength(1, 'Entity Name must be at least 1 character long'),
        incorporationJurisdiction: Schema.Types.StringType().isRequired('Required'),
        subNational: Schema.Types.StringType().isRequired('Required'),
        businessType: Schema.Types.StringType().isRequired('Required'),
        sicCode: Schema.Types.StringType().isRequired('Required'),
    });

    return (
        <>

            <div className='container-fluid'>
                <Form model={entityLegalInputFieldModel} fluid={true} className='mb-5'>
                    <div className='row d-flex mb-5'>
                        <div className='col' >
                            <Form.ControlLabel className='fs-6'>ID</Form.ControlLabel>
                            <Form.Control
                                accepter={Input}
                                required
                                name='entityId'
                                value={props.addedEntity.entityId}
                                placeholder={props.addedEntity.entityId}
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, entityId: value }) }}
                            />
                        </div>
                        <div className='col'>
                            <Form.ControlLabel className='fs-6'>Name</Form.ControlLabel>
                            <Form.Control
                                accepter={Input}
                                name='entityName'
                                value={props.addedEntity.entityName}
                                placeholder={props.addedEntity.entityName}
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, entityName: value }) }}
                            />
                        </div>
                    </div>

                    <div className='row d-flex mb-5'>
                        <div className='col' >
                            <Form.ControlLabel className='fs-6'>Incorporation Jurisdiction</Form.ControlLabel>
                            <Form.Control
                                accepter={InputPicker}
                                name='incorporationJurisdiction'
                                aria-required
                                className='mb-3'
                                data={incorporationJuristrictionNames}
                                style={{ width: "100%" }}
                                placeholder={props.addedEntity.incorporationJurisdiction}
                                // value={props.addedEntity.incorporationJurisdiction}
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, incorporationJurisdiction: value as string }) }}
                            />
                        </div>
                        <div className='col'>
                            <Form.ControlLabel className='fs-6'>Sub National</Form.ControlLabel>
                            <Form.Control
                                accepter={InputPicker}
                                name='subNational'
                                aria-required
                                className='mb-3'
                                id='entity-selector'
                                data={subNationalNames}
                                style={{ width: "100%" }}
                                // value={props.addedEntity.subNational}
                                placeholder={props.addedEntity.subNational}
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, subNational: value as string }) }}
                            />
                        </div>
                    </div>

                    <div className='row d-flex mb-5'>
                        <div className='col' >
                            <Form.ControlLabel className='fs-6'>Business Type</Form.ControlLabel>
                            <Form.Control
                                accepter={Input}
                                name='businessType'
                                required
                                placeholder={props.addedEntity.businessType}
                                value={props.addedEntity.businessType}
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, businessType: value }) }}
                            />
                        </div>
                        <div className='col'>
                            <Form.ControlLabel className='fs-6'>Business Sic Code</Form.ControlLabel>
                            <Form.Control
                                accepter={Input}
                                name='sicCode'
                                required
                                onChange={(value) => { props.setAddedEntity({ ...props.addedEntity, sicCode: value }) }}
                                placeholder={props.addedEntity.sicCode}
                                value={props.addedEntity.sicCode}
                            />
                        </div>
                    </div>
                </Form>
            </div>
        </>

    )
}
