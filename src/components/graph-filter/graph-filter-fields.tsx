import React, { useRef } from 'react'
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils'
import { GraphSearchUtils } from '../../utils/graph-utils/graph-search-utils'
import { GraphLayoutUtils } from '../../utils/graph-utils/graph-layout-utils'
import { GraphFilterUtils } from '../../utils/graph-utils/graph-filter-utils'
import { GraphFilterType } from '../../types/graph-saved-filter-types'
import { GraphFilterNames } from '../../enums/graph-filter-type-enums'
import { GraphFilterNamesKeyType } from '../../types/graph-filter-types'
import { SelectPicker } from 'rsuite'


export default function GraphFilterFields() {

    const entityNamesAndIds = EntityControlUtils.getEntityNamesAndIds();
    const [selectedEntityId, setSelectedEntityId] = React.useState("");
    const [selectedEntityName, setSelectedEntityName] = React.useState("");
    const [selectedFilterType, setSelectedFilterType] = React.useState<GraphFilterNamesKeyType | null>(null);
    const [selectedOwnershipPercentage, setSelectedOwnershipPercentage] = React.useState(0);
    const filterTypesKeys = Object.keys(GraphFilterNames) as GraphFilterNamesKeyType[];
    const formRef = useRef<HTMLFormElement>(null);

    const handleOwnershipPercentageSelection = (selectedOwnershipPercentage: number) => {
        setSelectedOwnershipPercentage(selectedOwnershipPercentage);
    }

    const handleApplyFilter = () => {
        if (selectedEntityId === "" || selectedFilterType === null || selectedOwnershipPercentage === 0) {
            return;
        }

        if (selectedEntityId === "*") {
            GraphSearchUtils.findNodesByPercentage(selectedOwnershipPercentage, GraphFilterNames[selectedFilterType]);
            return;
        }
        GraphSearchUtils.findNodesByPercentage(selectedOwnershipPercentage, GraphFilterNames[selectedFilterType], selectedEntityId);
    }

    const handleSaveFilter = () => {

        if (selectedFilterType === null) {
            return;
        }

        const selectedFilter: GraphFilterType = {
            entityId: selectedEntityId,
            entityName: selectedEntityName,
            filterType: GraphFilterNames[selectedFilterType],
            sharePercentage: selectedOwnershipPercentage
        }

        GraphFilterUtils.saveFilter(selectedFilter);

    }

    const shouldDisableButton = () => {
        return selectedEntityId === "" || selectedFilterType === null || selectedOwnershipPercentage === 0 || Number.isNaN(selectedOwnershipPercentage);
    }

    const handleEntitySelection = (entityName: string, entityId: string) => {
        console.log(entityName, entityId);

        setSelectedEntityId(entityId);
        setSelectedEntityName(entityName);
    }

    const handleResetFilter = () => {
        GraphLayoutUtils.setDefaultNodeEdgeStyle();
    }

    const entitySelectorData = entityNamesAndIds.map((entityNameAndId) => {
        return {
            label: entityNameAndId.entityName,
            value: entityNameAndId.entityId
        }
    })

    // To accomodate the "All Entities" option
    entitySelectorData.unshift({
        label: "All Entities", value: "*"
    })

    const filterSelectorData = filterTypesKeys.map((filterTypesKey) => {
        return {
            label: GraphFilterNames[filterTypesKey],
            value: filterTypesKey
        }
    })

    console.log(selectedOwnershipPercentage);


    return (
        <>
            <form onSubmit={(event) => event.preventDefault()} ref={formRef} className='mb-4'>
                <label htmlFor="entity-selector" className='p-2 fs-6'> Select Entity</label>
                <SelectPicker
                    className='mb-3'
                    id='entity-selector'
                    data={entitySelectorData}
                    style={{ width: "100%" }}
                    onSelect={(_, item) => { handleEntitySelection(item.label as string, item.value as string); }}
                />

                <label htmlFor="filter-selector" className='p-2 fs-6'> Select Filter Type</label>
                <SelectPicker
                    className='mb-3'
                    id='filter-selector'
                    data={filterSelectorData}
                    style={{ width: "100%" }}
                    defaultValue={selectedFilterType}
                    onChange={(value) => { setSelectedFilterType(value as GraphFilterNamesKeyType) }}
                />

                <label htmlFor="ownership-percentage-selector" className='p-2 fs-6'> Select Ownership Percentage</label>
                <input
                    id='ownership-percentage-selector'
                    type="number"
                    max={100}
                    min={0}
                    className="bg-light rounded w-100 px-3 py-2 text-sm font-weight-bold text-gray-900 shadow-sm hover:bg-gray-50"
                    placeholder="Share (%)"
                    onChange={(e) => handleOwnershipPercentageSelection(parseInt(e.target.value))}
                />

                <div className='flex mt-4'>
                    <button className=" btn btn-warning text-center  w-100 rounded-5 px-3 py-2 mb-2 shadow-sm"
                        onClick={handleResetFilter}
                    >
                        Reset Filter
                    </button>
                </div>

                <div id="button-groups" className='d-flex justify-content-between mt-2 space-x-2'>

                    <button className="btn btn-primary text-center  w-32 rounded px-3 py-2 text-sm text-white shadow-sm "
                        onClick={handleApplyFilter}
                        disabled={shouldDisableButton()}
                    >
                        Apply Filter
                    </button>
                    <button className="btn btn-success text-center  w-32 rounded px-3 py-2 text-sm text-white shadow-sm"
                        disabled={shouldDisableButton()}
                        onClick={handleSaveFilter}
                    >
                        Save Filter
                    </button>
                </div>
            </form>
        </>
    )
}
