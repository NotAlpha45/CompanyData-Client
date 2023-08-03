import { Dropdown, Nav, Sidenav } from "rsuite";
import GraphFilterFields from "./graph-filter-fields";
import GraphSavedFilterPanel from "./graph-saved-filter-panel";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';


export default function GraphFilterLeftSidebar() {
    return (
        <>
            <div style={{ width: "100%", height: "100%" }}>
                <Sidenav defaultOpenKeys={['3', '4']}>
                    <Sidenav.Header>
                        <div className="fs-4 bg-dark-subtle p-3">Graph Sidenav</div>
                    </Sidenav.Header>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Menu eventKey="3" title="Filters" icon={<GearCircleIcon />}>
                                <Nav.Item divider />
                                <GraphFilterFields />
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>

            {/* <aside id="default-sidebar" className="left-0 z-40 w-auto h-100 overflow-auto bg-light transition-transform translate-x-full sm-translate-x-0" aria-label="Sidebar">
                <ul className="font-weight-medium rounded-bottom-lg">
                    <li className="px-5 py-3 bg-light">
                        <div className="d-flex align-items-center justify-content-between">
                            <h1 className="text-xl font-weight-bold text-gray-800">Filters</h1>
                        </div>
                    </li>

                    <li className="px-5 py-3 bg-light">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="text-md text-gray-800">Select Entities Where</div>
                        </div>
                    </li>

                    <li className="px-5 py-3 bg-light">
                        <GraphFilterFields />
                        <GraphSavedFilterPanel />
                    </li>
                </ul>
            </aside> */}
        </>
    )
}
