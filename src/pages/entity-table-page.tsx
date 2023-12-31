import EntityTableSidenavComponent from '../components/entity-table/EntityTableSideNavComponent'
import EntityTableComponent from '../components/entity-table/EntityTableComponent'
import FunnelStepsIcon from '@rsuite/icons/FunnelSteps';
import { useNavigate } from 'react-router-dom';
import { ModalControlUtils } from '../utils/modal-utils/ModalControlUtils';
import { ModalName } from '../enums/modalName';
import { AppRoutesUI } from '../routes/appRoutes';

export default function EntityTablePage() {

    const navigate = useNavigate();

    const showModal = (modalType: ModalName) => {
        ModalControlUtils.setModal({
            type: modalType,
            data: {},
        })
    }

    return (
        <>

            <div className="container-fluid">
                <div className='row mt-3 p-2 mb-3'>
                    <div className='col-1 w-auto'>
                        <button className='btn btn-primary' onClick={() => { showModal(ModalName.EntitiesUpload) }}> Import Entities </button>
                    </div>
                    <div className='col-1 w-auto'>
                        <button className='btn btn-primary' onClick={() => { showModal(ModalName.AddEntities) }}> Add Entities </button>
                    </div>
                    <div className='col-1 w-auto'>
                        <button className='btn btn-secondary'> Export Entities </button>
                    </div>
                    <div className='col-9 d-flex justify-content-end'>
                        <button
                            className='btn btn-warning '
                            onClick={() => { navigate(AppRoutesUI.CompanyData.CompanyDataGraph.Path()) }}
                        >
                            <FunnelStepsIcon className='' /> Create Visual Entity Chart
                        </button>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-auto'>
                        <EntityTableSidenavComponent />
                    </div>
                    <div className='col'>
                        <EntityTableComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
