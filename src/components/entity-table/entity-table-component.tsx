// import { Table } from "react-bootstrap"
import { Pagination, Table } from "rsuite"
import { useEffect, useState } from "react";
import { Entity } from "../../types/entity-types";
import { EntityControlUtils } from "../../utils/entity-utils/entity-control-utils";
import ExpandedRowComponent from "./ExpandedRowComponent";
import ExpandingCellComponent from "./ExpandingCellComponent";


export default function EntityTableComponent() {

    const [activeTablePage, setActiveTablePage] = useState(1);
    const [tablePageLimit, setTablePageLimit] = useState(10);
    const [entities, setEntities] = useState<Entity[]>([]);
    const [entityCount, setEntityCount] = useState(0);

    const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
    const rowKey = "entityId"

    const handleTablePageLimitChange = (limit: number) => {
        setTablePageLimit(limit);
        setActiveTablePage(1);
    }

    const handleExpanded = (rowData: Entity) => {
        const open = expandedRowKeys.some(key => key === rowData[rowKey]);
        if (open) {
            setExpandedRowKeys(expandedRowKeys.filter(key => key !== rowData[rowKey]));
        } else {
            setExpandedRowKeys([...expandedRowKeys, rowData[rowKey]]);
        }
    }

    useEffect(() => {
        const { entities, count } = EntityControlUtils.getEntitiesAndCount((activeTablePage - 1) * tablePageLimit, activeTablePage * tablePageLimit);

        setEntities(entities);
        setEntityCount(count);

    }, [activeTablePage, tablePageLimit])


    return (
        <>
            <div className="">
                <Table className=""
                    // virtualized
                    height={600}
                    data={entities}
                    bordered
                    shouldUpdateScroll={false}
                    rowKey={rowKey}
                    expandedRowKeys={expandedRowKeys}
                    // onRowClick={handleExpanded}
                    renderRowExpanded={
                        (rowData) => {
                            return <ExpandedRowComponent rowData={rowData as Entity} height={200} />
                        }
                    }
                    rowExpandedHeight={200}
                    headerHeight={60}
                >

                    <Table.Column align="center" resizable>
                        <Table.HeaderCell className="fs-4" >#</Table.HeaderCell>
                        {/* @ts-ignore */}
                        <ExpandingCellComponent dataKey="entityId" expandedRowKeys={expandedRowKeys} handleExpand={handleExpanded} />
                    </Table.Column>

                    <Table.Column align="center" resizable>
                        <Table.HeaderCell className="fs-4" >ID</Table.HeaderCell>
                        <Table.Cell dataKey="entityId" className="lead" />
                    </Table.Column>

                    <Table.Column align="center" flexGrow={1} resizable>
                        <Table.HeaderCell className="fs-4" >Entity Name</Table.HeaderCell>
                        <Table.Cell dataKey="entityName" className="lead" />

                    </Table.Column>

                    <Table.Column align="center" flexGrow={1} resizable>
                        <Table.HeaderCell className="fs-4" >Incorporation Jurisdiction</Table.HeaderCell>
                        <Table.Cell dataKey="incorporationJurisdiction" className="lead" />
                    </Table.Column>

                    <Table.Column align="center" flexGrow={1} resizable>
                        <Table.HeaderCell className="fs-4" >Subnational</Table.HeaderCell>
                        <Table.Cell dataKey="subNational" className="lead" />
                    </Table.Column>

                    <Table.Column align="center" flexGrow={1} resizable>
                        <Table.HeaderCell className="fs-4" >Sic Code</Table.HeaderCell>
                        <Table.Cell dataKey="sicCode" className="lead" />
                    </Table.Column>
                </Table>

                <Pagination
                    style={{ marginTop: '10px', fontSize: '1rem', height: '40px' }}
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={entityCount}
                    limitOptions={[10, 30, 50]}
                    limit={tablePageLimit}
                    activePage={activeTablePage}
                    onChangePage={setActiveTablePage}
                    onChangeLimit={handleTablePageLimitChange}
                />

                {/* <Table className="table table-striped text-center">
                    <thead className="bg-dark text-white fs-5">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Incorporation Judistiction</th>
                            <th scope="col">Subnational</th>
                            <th scope="col">SIC Code</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entities.map((entity, index) => {

                                return (
                                    <>
                                        <tr key={index} className="lead"
                                        >
                                            <th scope="row">{entity.entityId}</th>
                                            <td>{entity.entityName}</td>
                                            <td>{entity.incorporationJurisdiction}</td>
                                            <td>{entity.subNational}</td>
                                            <td>{entity.sicCode}</td>
                                            <td>{entity.entityType}</td>
                                        </tr>
                                    </>
                                )
                            }
                            )
                        }

                    </tbody>
                </Table> */}
            </div>
        </>
    )
}
