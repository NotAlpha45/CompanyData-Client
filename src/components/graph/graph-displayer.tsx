import { ReactFlowProvider } from 'reactflow'
import GraphComponent from './graph-component'
import { useEffect } from 'react';
import { EntityConverter } from '../../utils/entity-utils/entity-conversion-util';
import GraphFilterLeftSidebar from '../graph-filter/graph-filter-left-sidebar';

export default function GraphDisplayer() {

    useEffect(() => {
        EntityConverter.convertEntitiesToGraph();
    }, [])


    return (
        <>
            <ReactFlowProvider>
                <div style={{ width: "100vh", height: "100wh" }}>
                    <GraphFilterLeftSidebar />
                    <GraphComponent />
                </div>
            </ReactFlowProvider>
        </>
    )
}
