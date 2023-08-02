import EntityTableSidenavComponent from '../components/entity-table/entity-table-sidenav-component'
import EntityTableComponent from '../components/entity-table/entity-table-component'
import FunnelStepsIcon from '@rsuite/icons/FunnelSteps';
import { useNavigate } from 'react-router-dom';

export default function EntityTablePage() {

    const navigate = useNavigate();

    return (
        <>

            <div className="container-fluid">
                <div className='row mt-3 p-2 mb-3'>
                    <div className='col-1 w-auto'>
                        <button className='btn btn-primary'> Import Entities </button>
                    </div>
                    <div className='col-1 w-auto'>
                        <button className='btn btn-primary'> Add Entities </button>
                    </div>
                    <div className='col-1 w-auto'>
                        <button className='btn btn-secondary'> Export Entities </button>
                    </div>
                    <div className='col-9 d-flex justify-content-end'>
                        <button
                            className='btn btn-warning'
                        // onClick={() => { navigate("/home/") }}
                        >
                            <FunnelStepsIcon className='' /> Make Diagram
                        </button>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-2'>
                        <EntityTableSidenavComponent />
                    </div>
                    <div className='col-10'>
                        <EntityTableComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
