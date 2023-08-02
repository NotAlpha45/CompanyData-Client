import { shallowEqual } from "react-redux"
import { useAppSelector } from "../../stores/redux-store"

export default function EntityTableComponent() {

    const entities = useAppSelector(state => state.entity.entities, shallowEqual)

    return (
        <>
            <div>
                <table className="table table-striped text-center">
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
                                    <tr key={index} className="lead">
                                        <th scope="row">{entity.entityId}</th>
                                        <td>{entity.entityName}</td>
                                        <td>{entity.incorporationJurisdiction}</td>
                                        <td>{entity.subNational}</td>
                                        <td>{entity.sicCode}</td>
                                        <td>{entity.entityType}</td>
                                    </tr>
                                )
                            }
                            )
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
