import '../styles/index.scss';
import { PATH } from '../../../util/constants';
import { Link, Route, Switch } from 'react-router-dom';
import { useSignOut, useTeacherManage } from '../hooks/useDashboard'
import { InputGroup, FormControl, Button, Modal, Form, Col, Table, Pagination } from 'react-bootstrap';


function Sidebar() {
    const handleSignOut = useSignOut();

    return (<div className="dashboard__sidebar">
        <ul className="dashboard__sidebar-list">
            <li className="dashboard__sidebar-item">
                <i className="fas fa-chalkboard-teacher mr-3"></i>
                <Link className="w-100 text-left" to={PATH.DASHBOARD_TEACHERS_PATH}>Teacher</Link>
            </li>
            <li className="dashboard__sidebar-item">
                <i className="fas fa-user-graduate mr-3"></i>
                <Link className="w-100 text-left" to={PATH.DASHBOARD_STUDENT_PATH}>Student</Link>
            </li>
            <li className="dashboard__sidebar-item">
                <i className="fas fa-university mr-3"></i>
                <Link className="w-100 text-left" to={PATH.DASHBOARD_CLASSES_PATH}>Class</Link>
            </li>
        </ul>
        <ul className="dashboard__sidebar-list">
            <li className="dashboard__sidebar-item">
                <i className="fas fa-cog mr-3"></i>
                <Link className="w-100 text-left" to={PATH.DASHBOARD_SETTING_PATH}>Setting</Link>
            </li>
            <li onClick={handleSignOut} className="dashboard__sidebar-item">
                <i className="fas fa-sign-out-alt mr-3"></i>
                <Link className="w-100 text-left" to={PATH.LOGIN_PATH}>Sign out</Link>
            </li>
        </ul>
    </div>);
}

function TeacherManage() {
    const teacherManage = useTeacherManage();
    const { showModal, onShowModal, onHideModal, handleChange, handleAddNew, data } = teacherManage();

    return (
        <div className="dashboard__content">
            <div className="dashboard__content-inside">
                <div className="teacher">
                    <h4 className="dashboard__content-title">Teacher management</h4>
                    <div className="d-flex justify-content-between flex-wrap mb-2">
                        <InputGroup className="dashboard__content-search">
                            <InputGroup.Prepend>
                                <Button variant="secondary">
                                    <label className="m-0" htmlFor="dashboard-content-search">
                                        <i className="fas fa-search"></i>
                                    </label>
                                </Button>
                            </InputGroup.Prepend>
                            <FormControl type="search" placeholder="Search..." id="dashboard-content-search" />
                        </InputGroup>
                        <Button onClick={onShowModal} variant="primary" className="dashboard__content-add">Add</Button>
                    </div>
                    <Table size="sm" striped bordered hover responsive variant="dark" className="teacher-list">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Full name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? data.map((item: any, index: number) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{`${item.first_name} ${item.last_name}`}</td>
                                        <td>{item.age}</td>
                                        <td>{item.address}</td>
                                        <td></td>
                                    </tr>
                                )
                            }) : <tr><td colSpan={5}>Không có dữ liệu</td></tr>}
                        </tbody>
                    </Table>
                    <Pagination size="sm">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
            <Modal show={showModal} onHide={onHideModal} size="lg" centered >
                <Modal.Body>
                    <h4 className="mb-3">Teacher add</h4>
                    <Form onSubmit={handleAddNew}>
                        <Form.Row className="my-3">
                            <Col>
                                <Form.Control onChange={handleChange} required
                                    name="first_name" placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control onChange={handleChange} required
                                    name="last_name" placeholder="Last name" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="my-3">
                            <Col>
                                <Form.Control onChange={handleChange} required
                                    name="age" placeholder="Age" />
                            </Col>
                            <Col>
                                <Form.Control onChange={handleChange} required
                                    name="address" placeholder="Address" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Col className="d-flex justify-content-end">
                                <Button type="submit">Add</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Switch>
                <Route exact path={PATH.DASHBOARD_TEACHERS_PATH} component={TeacherManage} />
                <Route exact path={PATH.DASHBOARD_STUDENT_PATH} component={TeacherManage} />
                <Route exact path={PATH.DASHBOARD_CLASSES_PATH} component={TeacherManage} />
                <Route exact path={PATH.DASHBOARD_SETTING_PATH} />
            </Switch>
        </div>

    )
};

export default Dashboard;

