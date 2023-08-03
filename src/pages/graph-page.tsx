import { ReactFlowProvider } from 'reactflow';
import { EntityConverter } from '../utils/entity-utils/entity-conversion-util';
import { useEffect } from 'react';
import GraphComponent from '../components/graph/graph-component';
import GraphFilterLeftSidebar from '../components/graph-filter/graph-filter-left-sidebar';

export default function GraphPage() {
    useEffect(() => {
        EntityConverter.convertEntitiesToGraph();
    }, [])


    return (
        <>
            {/* <GraphFilterLeftSidebar /> */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <GraphFilterLeftSidebar />
                    </div>
                    <div className='col'>
                        <ReactFlowProvider>
                            <div
                                style={{ height: "57rem", overflow: "auto" }}
                                className=''
                            >
                                <GraphComponent />
                            </div>
                        </ReactFlowProvider>
                    </div>
                </div>
            </div>

        </>
    )
}
