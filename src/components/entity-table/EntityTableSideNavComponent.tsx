import { Nav, Sidenav } from 'rsuite'
import GroupIcon from '@rsuite/icons/legacy/Group';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import { useState } from 'react';
import { useAppSelector } from '../../stores/redux-store';
import { shallowEqual } from 'react-redux';
import { ChartControlUtils } from '../../utils/chart-utils/ChartControlUtils';
import { EntityControlUtils } from '../../utils/entity-utils/entity-control-utils';

export default function EntityTableSidenavComponent() {

    const [expanded, setExpanded] = useState(true);
    const { chartList, selectedChartId } = useAppSelector(state => state.chart, shallowEqual);

    const handleChartSlection = (chartId: string) => {
        ChartControlUtils.setSelectedChartId(chartId);
        EntityControlUtils.getEntitiesAndOwnershisByChartId(chartId);
    }

    return (
        <>
            <Sidenav expanded={expanded}>
                <Sidenav.Toggle
                    onToggle={(expanded) => setExpanded(expanded)}
                />
                <Sidenav.Body>
                    <Nav activeKey={selectedChartId}>
                        <Nav.Item eventKey="add-entity-chart" icon={<AddOutlineIcon />}>
                            Add Entity Chart
                        </Nav.Item>
                        {
                            chartList.map((chart, index) => {
                                return (
                                    <Nav.Item
                                        eventKey={chart.chartId}
                                        icon={<GroupIcon />}
                                        key={index}
                                        onClick={() => { handleChartSlection(chart.chartId) }}
                                    >
                                        {chart.chartName}
                                    </Nav.Item>
                                )
                            }
                            )
                        }

                    </Nav>
                </Sidenav.Body>

            </Sidenav>
        </>
    )
}
