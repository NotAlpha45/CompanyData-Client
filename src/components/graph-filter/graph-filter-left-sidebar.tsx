import { Nav, Sidenav } from "rsuite";
import GraphFilterFields from "./graph-filter-fields";
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import GraphSavedFilterPanel from "./graph-saved-filter-panel";


export default function GraphFilterLeftSidebar() {
    return (
        <>
            <div style={{ width: "100%" }}>
                <Sidenav defaultOpenKeys={['3']} className="">
                    <Sidenav.Header>
                        <div className="fs-4 bg-dark-subtle p-3">Graph Sidenav</div>
                    </Sidenav.Header>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Menu eventKey="3" title="Filter" icon={<GearCircleIcon />}>
                                <Nav.Item divider />
                                <GraphFilterFields />
                            </Nav.Menu>
                            <Nav.Menu eventKey="4" title="Saved Filters" icon={<GearCircleIcon />}>
                                <Nav.Item divider />
                                <GraphSavedFilterPanel />
                            </Nav.Menu>
                        </Nav>

                    </Sidenav.Body>
                </Sidenav>
            </div>
        </>
    )
}
