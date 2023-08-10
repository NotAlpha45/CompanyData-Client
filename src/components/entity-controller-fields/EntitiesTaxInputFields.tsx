import { Checkbox, Form, Input, SelectPicker } from 'rsuite'
import { Entity, EntityTax, EntityTct } from '../../types/entity-types';
import { useEffect, useState } from 'react';

type EntitiesTaxInputFieldsProps = {
    addedEntity: Entity,
    setAddedEntity: React.Dispatch<React.SetStateAction<Entity>>
}

export default function EntitiesTaxInputFields(props: EntitiesTaxInputFieldsProps) {

    const [taxData, setTaxData] = useState<EntityTax>(
        props.addedEntity.entityTax ?
            props.addedEntity.entityTax :
            {
                taxResidentJurisdiction: "",
                pe: false,
                sme: false,
                llc: false,
                publicLtd: false,
                privateLtd: false,
                tct: {
                    tctName: "",
                    tctDescription: ""
                } as EntityTct
            });

    const taxResidents = [
        {
            label: 'India',
            value: 'IN'
        },
        {
            label: 'United States',
            value: 'US'
        },
        {
            label: 'United Kingdom',
            value: 'UK'
        }
    ]

    const taxCharachterizations = [
        {
            code: "pe",
            name: "Permanent Establishment (PE)",
            description: "A fixed place of business which generally gives rise to income or value-added tax liability in a country or jurisdiction."
        },
        {
            code: "sme",
            name: "Small and Medium Enterprize (SME)",
            description: "A small and medium-sized enterprise (SME) is a company whose headcount or turnover falls below certain limits."
        },
        {
            code: "llc",
            name: "Limited Liability Company (LLC)",
            description: "A limited liability company (LLC) is a corporate structure in the United States whereby the owners are not personally liable for the company's debts or liabilities."
        },

        {
            code: "publicLtd",
            name: "Public Limited Company (PLC)",
            description: "A public limited company (PLC) is a company whose shares are traded on a stock exchange and can be bought and sold by anyone."
        },
        {
            code: "privateLtd",
            name: "Private Company (PC)",
            description: "A private company (PC) is a company whose ownership is private."
        },
    ]

    const handleTaxCharecterizationSelection = (taxCharachterizationCode: string, checkedValue: boolean) => {
        setTaxData({ ...taxData, [taxCharachterizationCode]: checkedValue })
    }

    useEffect(() => {
        props.setAddedEntity({ ...props.addedEntity, entityTax: taxData })
    }, [taxData])

    return (
        <>
            <div className='container-fluid'>

                <div className='row mb-5'>

                    <Form.ControlLabel className='fs-6'>Tax Resident Jurisdiction</Form.ControlLabel>
                    <SelectPicker
                        className='mb-3'
                        id='owner-selector'
                        style={{ width: "100%" }}
                        data={taxResidents}
                        onSelect={(_, item) => { setTaxData({ ...taxData, taxResidentJurisdiction: item.value as string }) }}

                    />

                </div>

                <div className='row d-flex mb-5 justify-content-evenly'>
                    {
                        taxCharachterizations.map((taxCharachterization, index) => {
                            return (
                                <div key={index} className='col-5 mb-4 p-2 rounded' style={{ background: "#EDF1F7" }}>
                                    <div>
                                        <Checkbox
                                            checked={(taxData as any)[taxCharachterization.code]}
                                            // @ts-ignore
                                            onChange={(value, checked, event) => {
                                                handleTaxCharecterizationSelection(taxCharachterization.code, checked)
                                            }} />
                                        <p className='fs-5 p-2'> {taxCharachterization.name}</p>
                                        <p className='p-2'> {taxCharachterization.description} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='row d-flex justify-content-center'>
                    <div className='col-7 d-flex flex-column gap-2 mb-4 p-2 rounded' style={{ background: "#EDF1F7" }}>
                        <Form.ControlLabel className='fs-6'>TCT Name</Form.ControlLabel>
                        <Input
                            className='mb-2'
                            placeholder={taxData?.tct?.tctName}
                            onChange={(value) => { setTaxData({ ...taxData, tct: { ...taxData.tct, tctName: value } as EntityTct }) }}
                        />

                        <Form.ControlLabel className='fs-6'>TCT Description</Form.ControlLabel>
                        <Input
                            className='mb-2'
                            placeholder={taxData?.tct?.tctDescription}
                            onChange={(value) => { setTaxData({ ...taxData, tct: { ...taxData.tct, tctDescription: value } as EntityTct }) }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
