import '../styles/index.scss';
import { PATH } from '../../../util/constants';
import { Link } from 'react-router-dom';
import { useDashboard, useRemoveUid } from '../hooks/useDashboard'
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';


function Sidebar() {
    const removeUid = useRemoveUid();

    return (<div className="dashboard__sidebar">
        <ul className="dashboard__sidebar-list">
            <li className="dashboard__sidebar-item">
                <i className="fas fa-chalkboard-teacher mr-3"></i>
                <Link to={PATH.DASHBOARD_TEACHERS_PATH}>Teachers</Link>
            </li>
            <li className="dashboard__sidebar-item">
                <i className="fas fa-user-graduate mr-3"></i>
                <Link to={PATH.DASHBOARD_STUDENT_PATH}>Students</Link>
            </li>
            <li className="dashboard__sidebar-item">
                <i className="fas fa-university mr-3"></i>
                <Link to={PATH.DASHBOARD_CLASSES_PATH}>Classes</Link>
            </li>
        </ul>
        <ul className="dashboard__sidebar-list">
            <li className="dashboard__sidebar-item">
                <i className="fas fa-cog mr-3"></i>
                <Link to={PATH.DASHBOARD_SETTING_PATH}>Setting</Link>
            </li>
            <li onClick={removeUid} className="dashboard__sidebar-item">
                <i className="fas fa-sign-out-alt mr-3"></i>
                <Link to={PATH.LOGIN_PATH}>Sign out</Link>
            </li>
        </ul>
    </div>);
}

const Dashboard = () => {
    const { title, setting, showModal, setShowModal, handleShowModal } = useDashboard();

    if (setting) {
        return (
            <div className="dashboard">
                <Sidebar></Sidebar>
                <div className="dashboard__content">
                    <div className="dashboard__content-inside">
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="dashboard">
            <Sidebar></Sidebar>
            <div className="dashboard__content">
                <div className="dashboard__content-inside">
                    <h4 className="dashboard__content-title">{title}</h4>
                    <div className="d-flex mb-3">
                        <InputGroup className="dashboard__content-search">
                            <InputGroup.Prepend>
                                <Button variant="secondary">
                                    <label className="m-0" htmlFor="dashboard-content-search">
                                        <i className="fas fa-search"></i>
                                    </label>
                                </Button>
                            </InputGroup.Prepend>
                            <FormControl type="search" id="dashboard-content-search" />
                        </InputGroup>
                        <Button variant="primary" onClick={handleShowModal}
                            className="dashboard__content-add">Create new</Button>
                    </div>
                    <table className="table table-sm table-striped table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default Dashboard;