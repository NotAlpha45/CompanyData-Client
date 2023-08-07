import { Checkbox, SelectPicker } from 'rsuite'

export default function EntitiesTaxInputFields() {

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
            name: "Permanent Establishment (PE)",
            description: "A fixed place of business which generally gives rise to income or value-added tax liability in a country or jurisdiction."
        },
        {
            name: "Small and Medium Enterprize (SME)",
            description: "A small and medium-sized enterprise (SME) is a company whose headcount or turnover falls below certain limits."
        },
        {
            name: "Limited Liability Company (LLC)",
            description: "A limited liability company (LLC) is a corporate structure in the United States whereby the owners are not personally liable for the company's debts or liabilities."
        },
        {
            name: "Non-Profit Organization (NPO)",
            description: "A non-profit organization (NPO) is a legal entity organized and operated for a collective, public or social benefit, in contrast with an entity that operates as a business aiming to generate a profit for its owners."
        },
        {
            name: "Publicly Traded Company (PTC)",
            description: "A publicly traded company (PTC) is a company whose ownership is dispersed among the general public in many shares of stock which are freely traded on a stock exchange or in over the counter markets."
        },
        {
            name: "Private Company (PC)",
            description: "A private company (PC) is a company whose ownership is private."
        },
    ]

    return (
        <>
            <div className='container-fluid'>

                <div className='row mb-5'>
                    <div className='col' >
                        <label htmlFor="tr-input" className='fs-6'>Tax Resident Jurisdiction</label>
                        <SelectPicker
                            className='mb-3'
                            id='owner-selector'
                            style={{ width: "100%" }}
                            data={taxResidents}
                        // onSelect={(_, item) => { handleOwnerSelection(index, item.value as string, item.label as string) }}
                        />
                    </div>
                </div>
                <div className='row d-flex mb-5 justify-content-evenly'>
                    {
                        taxCharachterizations.map((taxCharachterization, index) => {
                            return (
                                <div key={index} className='col-5 mb-4 p-2 rounded' style={{ background: "#EDF1F7" }}>
                                    <div>

                                        <p className='fs-5'><Checkbox /> {taxCharachterization.name}</p>
                                        <p> {taxCharachterization.description} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
