
import { Table } from 'react-bootstrap'
import { Entity } from '../../types/entity-types'
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils'

type ExpandedRowComponentProps = {
    rowData: Entity,
    height?: number
}

export default function ExpandedRowComponent(props: ExpandedRowComponentProps) {
    const { rowData, height } = props

    const ownershipData = EntityControlUtils.getOwnerInfo(rowData);

    return (
        <>
            <div className='w-75 mb-4 ms-5 overflow-auto' style={{ height: height ?? 200, scrollBehavior: "smooth", }}>
                {
                    (ownershipData.length === 0) ?
                        <h5 className="text-center mt-5">No ownership data available</h5> :
                        <Table className="table table-striped text-center">
                            <thead className="text-dark fs-6">
                                <tr>
                                    <th scope="col">Owner name</th>
                                    <th scope="col">Owner Type</th>
                                    <th scope="col">Ownership Percentage (%)</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ownershipData.map((ownership, index) => {
                                        return (
                                            <>
                                                <tr key={index} className="lead">
                                                    <td>{ownership?.ownerName}</td>
                                                    <td>{ownership?.ownerType}</td>
                                                    <td>{ownership?.ownershipPercentage}</td>
                                                </tr>
                                            </>
                                        )
                                    }
                                    )
                                }

                            </tbody>
                        </Table>
                }
            </div>
        </>
    )
}
