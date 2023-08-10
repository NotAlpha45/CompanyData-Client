import { Entity } from '../../types/entity-types'
import { Table } from 'rsuite'
import EditIcon from '@rsuite/icons/Edit';
import { ModalControlUtils } from '../../utils/modal-utils/ModalControlUtils';
import { ModalName } from '../../enums/modalName';

type EditCellComponentProps = {
    rowData: Entity,
    dataKey: string,
} & typeof Table.Cell


export default function EditCellComponent({ rowData, dataKey, ...props }: EditCellComponentProps) {

    const openEditModal = () => {

        ModalControlUtils.updateEntityDataToBeEdited({
            entity: rowData,
            ownerships: []
        })

        ModalControlUtils.updateModalType(ModalName.EditEntities);
    }

    return (
        <>
            <Table.Cell style={{ padding: 5 }} {...props} >
                <div className="d-flex justify-content-center p-2">
                    <EditIcon style={{ cursor: "pointer" }} onClick={() => { openEditModal() }} />
                </div>
            </Table.Cell>
        </>
    )
}
