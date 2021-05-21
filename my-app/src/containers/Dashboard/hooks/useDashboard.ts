import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { PATH } from "../../../util/constants";

export const useRemoveUid = (() => () => { localStorage.removeItem('uid') });

export const useDashboard = () => {
    const location = useLocation();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [setting, setSetting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    useEffect(() => {
        switch (location.pathname) {
            case PATH.DASHBOARD_PATH:
                history.push(PATH.DASHBOARD_TEACHERS_PATH);
                break;
            case PATH.DASHBOARD_TEACHERS_PATH:
                setSetting(false);
                setTitle('Teacher management');
                break;
            case PATH.DASHBOARD_STUDENT_PATH:
                setSetting(false);
                setTitle('Student management');
                break;
            case PATH.DASHBOARD_CLASSES_PATH:
                setSetting(false);
                setTitle('Class management');
                break;
            case PATH.DASHBOARD_SETTING_PATH:
                setSetting(true);
                break;
            default:
                setSetting(false);
                setTitle('');
        }
    }, [location]);

    return { title, setting, showModal, setShowModal, handleShowModal }
}
