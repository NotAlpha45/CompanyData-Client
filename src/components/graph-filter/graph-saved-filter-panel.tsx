import { Panel, PanelGroup } from 'rsuite'
import GraphSavedFilterCard from './graph-saved-filter-cards'
import { useAppSelector } from '../../stores/redux-store'
import { shallowEqual } from 'react-redux'

export default function GraphSavedFilterPanel() {

    const savedFilters = useAppSelector(state => state.graphFilter, shallowEqual)

    return (
        <>
            <div className=''>
                <PanelGroup accordion bordered defaultActiveKey={1} className='w-auto bg-gray-200 rounded-md p-2 text-black '>
                    <Panel
                        eventKey={1}
                        id={"panel1"}>

                        {savedFilters.map((filter, index) => {

                            return (
                                <div key={index} className='px-1 py-1'>
                                    <GraphSavedFilterCard {...filter} />
                                </div>
                            )
                        }
                        )}
                    </Panel>
                </PanelGroup>
            </div>
        </>
    )
}
