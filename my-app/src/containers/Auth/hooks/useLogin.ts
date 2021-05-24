import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebaseApp from "../../../configs/firebase";
import { PATH } from "../../../util/constants";
import { useRegister } from "./firebaseAuth";

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadding, SetLoadding] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailInput = useRef<any>();
    const passwordInput = useRef<any>();
    const register = useRegister;
    const history = useHistory();

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                history.push(PATH.DASHBOARD_TEACHERS_PATH);
            }
        });
    }, [history]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        SetLoadding(true);
        register(email, password)
            .then((result) => {
                if (result === 'success') {
                    history.push(PATH.DASHBOARD_PATH);
                } else {
                    setErrorMessage(result);
                    setShowModal(true);
                }
            })
            .then(() => SetLoadding(false));
    };

    const handleChange = () => {
        const emailValue = emailInput.current.value;
        const passwordValue = passwordInput.current.value;
        setEmail(emailValue);
        setPassword(passwordValue);
    }

    return {
        loadding, showModal, errorMessage, handleChange,
        handleSubmit, emailInput, passwordInput, setShowModal
    }
}