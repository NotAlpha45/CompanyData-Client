import { useEffect, useState } from 'react'
import ReactFlow, { Controls, useReactFlow, Background, Panel, BackgroundVariant, MiniMap, Node } from 'reactflow'
import 'reactflow/dist/style.css';
import { useAppSelector } from '../../stores/redux-store';
import { shallowEqual, useDispatch } from 'react-redux';
import { GraphSliceActions } from '../../stores/slices/graph-slice';
import { GraphLayoutUtils } from '../../utils/graph-utils/graph-layout-utils';
import { GraphControlUtils } from '../../utils/graph-utils/graph-control-utils';
import { EntityConverter } from '../../utils/entity-utils/entity-conversion-util';
import { customEdgeObject } from '../node-edge/custom-edge-object';


export default function GraphComponent() {

    const nodes = useAppSelector(state => state.graph.nodes, shallowEqual);
    const edges = useAppSelector(state => state.graph.edges, shallowEqual);
    const reactFlowInstance = useReactFlow();
    const [selectedLayout, setSelectedLayout] = useState<"LR" | "TB">("TB")
    const dispatch = useDispatch();

    const setLayout = () => {
        const { nodes: layoutedNodes, edges: layoutedEdges } = GraphLayoutUtils.dagreeLayoutMaker(nodes, edges, { rankdir: selectedLayout });

        dispatch(GraphSliceActions.setNodesAndEdges({ nodes: layoutedNodes, edges: layoutedEdges }));

        window.requestAnimationFrame(() => {
            reactFlowInstance.fitView();
        });

    }

    useEffect(() => {
        EntityConverter.convertEntitiesToGraph();
    }, [])

    useEffect(() => {
        setLayout();
    }, [reactFlowInstance, selectedLayout])


    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                edgeTypes={customEdgeObject}
                onNodesChange={GraphControlUtils.handleNodeMove}
                fitView
            >
                <Panel position="bottom-right" className='bg-secondary rounded-3 d-flex m-2 justify-content-end'>
                    <button className='btn bg-light text-dark m-2 border-dark border-4 p-2 rounded-3' onClick={() => { setSelectedLayout("TB") }}>Vertical Layout</button>
                    <button className='btn bg-light text-dark m-2 border-dark border-4 p-2 rounded-3' onClick={() => { setSelectedLayout("LR") }}>Horizontal Layout</button>
                    <button className='btn bg-light text-dark m-2 border-dark border-4 p-2' onClick={() => { setLayout() }}>Reset Layout</button>
                </Panel>
                <Controls className='bg-white text-black p-1 rounded-md' />
                <Background className='bg-light' variant={BackgroundVariant.Dots} gap={12} size={1} />
                <MiniMap
                    position="top-right"
                    pannable
                    zoomable
                    zoomStep={5}
                    nodeColor={(node: Node) => { return node.style?.borderColor as string }}

                />
            </ReactFlow>

        </>
    )

}
