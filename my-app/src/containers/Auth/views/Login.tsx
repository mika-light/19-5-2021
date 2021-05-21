import '../styles/login.scss';
import { Container, Form, Col, Spinner, Modal } from "react-bootstrap";
import { useLogin } from '../hooks/useLogin';

function Login() {
    const {
        loadding, showModal, errorMessage, handleChange,
        handleSubmit, emailInput, passwordInput, setShowModal
    } = useLogin();

    return (
        <Container fluid>
            <div className="fixed-top fixed-bottom d-flex align-items-center">
                <Form onSubmit={handleSubmit} className="login-screen__form">
                    <Form.Text className="login-screen__form-title">
                        Đăng nhập
                    </Form.Text>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex align-items-center mb-4">
                            <Form.Control bsPrefix="login-screen__form-control" ref={emailInput}
                                onChange={handleChange} placeholder="Email" type="email" required />
                            <div className="login-screen__form-append">
                                <i className="fas fa-user"></i>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex align-items-center">
                            <Form.Control bsPrefix="login-screen__form-control" ref={passwordInput}
                                onChange={handleChange} type="password" placeholder="Password" required />
                            <div className="login-screen__form-append">
                                <i className="fas fa-unlock-alt"></i>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}
                            className="d-flex align-items-center justify-content-between">
                        </Form.Group>
                    </Form.Row>
                    {loadding ? <Spinner animation="grow" /> : ""}
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex align-items-center">
                            <Form.Control bsPrefix="login-screen__form-submit"
                                value="Login" type="submit" />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Login error
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage}
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Login;