import { GraphFilterType } from '../../types/graph-saved-filter-types'
import { GraphFilterUtils } from '../../utils/graph-utils/graph-filter-utils';
import { GraphSearchUtils } from '../../utils/graph-utils/graph-search-utils'

export default function GraphSavedFilterCard(props: GraphFilterType) {

    const handleApplyFilter = () => {

        if (props.entityId === "*") {
            GraphSearchUtils.findNodesByPercentage(
                props.sharePercentage,
                props.filterType,
            )
            return;
        }

        GraphSearchUtils.findNodesByPercentage(
            props.sharePercentage,
            props.filterType,
            props.entityId,
        )
    }

    const handleRemoveFilter = () => {
        GraphFilterUtils.removeFilter(props);
    }


    return (
        <>
            <div className='rounded-3 mt-2 mb-2 p-1 border border-2 border-black bg-light'>
                <div className='w-100'>
                    <p
                        className='p-2 rounded-md bg-light m-1'
                    >
                        Selected Entity Company Name: <i className='fw-bold'>{props.entityName}</i></p>
                    <p
                        className='p-2 rounded-md bg-light m-1'
                    >
                        Selected Filter Type: <i className='fw-bold'>{props.filterType}</i></p>
                    <p
                        className='p-2 rounded-md bg-light m-1'
                    >
                        Selected Share Percentage: <i className='fw-bold'>{props.sharePercentage}</i></p>
                </div>
                <div className='mt-3 p-1 text-center d-flex justify-content-evenly'>
                    <button
                        className="btn btn-primary rounded-3 text-light font-weight-bold text-sm border-2 border-primary rounded-md p-2 w-auro hover:bg-secondary"
                        onClick={handleApplyFilter}
                    >
                        Apply
                    </button>
                    <button
                        className='btn btn-danger rounded-3 text-light font-weight-bold text-sm border-2 border-danger rounded-md p-2 w-auto hover:bg-danger'
                        onClick={handleRemoveFilter}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}
