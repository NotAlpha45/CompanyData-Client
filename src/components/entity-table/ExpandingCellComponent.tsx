import { IconButton, Table } from 'rsuite'
import { Entity } from '../../types/entity-types'
import CollaspedOutlineIcon from '@rsuite/icons/CollaspedOutline';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';

type ExpandingCellComponentProps = {
    rowData: Entity,
    dataKey: string,
    expandedRowKeys: string[],
    handleExpand: (rowData: Entity) => void
} & typeof Table.Cell


export default function ExpandingCellComponent({ rowData, dataKey, expandedRowKeys, handleExpand, ...props }: ExpandingCellComponentProps) {

    return (
        <>
            <Table.Cell style={{ padding: 5 }} {...props} >
                <IconButton
                    appearance="subtle"
                    onClick={() => {
                        handleExpand(rowData);
                    }}
                    icon={
                        expandedRowKeys.some(key => key === rowData[dataKey as (keyof typeof rowData)]) ? (
                            <CollaspedOutlineIcon />
                        ) : (
                            <ExpandOutlineIcon />
                        )
                    }
                />
            </Table.Cell>
        </>
    )
}
