import { Entity } from '../../types/entity-types'

type ExpandedRowComponentProps = {
    rowData: Entity
}

export default function ExpandedRowComponent(props: ExpandedRowComponentProps) {
    const { rowData } = props
    return (
        <>
            <div>
                <div
                    style={{
                        width: 60,
                        height: 60,
                        float: 'left',
                        marginRight: 10,
                        background: '#eee'
                    }}
                >
                    {/* <img src={rowData.avatar} style={{ width: 60 }} /> */}
                </div>
                <p>Entity Name: {rowData.entityName}</p>
                <p>Entity ID: {rowData.entityId}</p>
            </div>
        </>
    )
}
