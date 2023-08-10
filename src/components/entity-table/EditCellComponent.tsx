import { Entity } from '../../types/entity-types'
import { Table } from 'rsuite'
import EditIcon from '@rsuite/icons/Edit';

type EditCellComponentProps = {
    rowData: Entity,
    dataKey: string,
} & typeof Table.Cell


export default function EditCellComponent({ rowData, dataKey, ...props }: EditCellComponentProps) {
    return (
        <>
            <Table.Cell style={{ padding: 5 }} {...props} >
                <div className="d-flex justify-content-center p-2">
                    <EditIcon onClick={() => { console.log(rowData) }} />
                </div>
            </Table.Cell>
        </>
    )
}
