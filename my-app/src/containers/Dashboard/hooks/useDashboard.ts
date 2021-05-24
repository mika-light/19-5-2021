import { useEffect, useState } from "react";
import firebaseApp, { db } from "../../../configs/firebase";

export const useSignOut = () => {
    return function () {
        firebaseApp.auth().signOut().then(() => {
            console.log("Đăng xuất thành công!");
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const useTeacherManage = () => {
    const [showModal, setshowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [data, setdata] = useState<any>([]);

    useEffect(() => {
        getData();

        return () => {
            setdata(null);
        };
    }, []);

    const getData = () => {
        db.collection("teachers").get().then((querySnapshot) => {
            const array: any[] = [];
            querySnapshot.forEach((doc) => {
                array.push(doc.data());
            });
            return array;
        }).then((snapshot) => {
            setdata(snapshot);
        })
    };

    return function () {
        const onShowModal = () => setshowModal(true);
        const onHideModal = () => setshowModal(false);

        const handleChange = (event: any) => {
            switch (event.target.name) {
                case "first_name":
                    setFirstName(event.target.value);
                    break;
                case "last_name":
                    setLastName(event.target.value);
                    break;
                case "age":
                    setAge(event.target.value);
                    break;
                case "address":
                    setAddress(event.target.value);
                    break;
                default:
            }
        };
        const handleAddNew = (event: any) => {
            event.preventDefault();
            db.collection("teachers").add({
                id: new Date().getTime(),
                first_name: firstName,
                last_name: lastName,
                age: age,
                address: address
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    onHideModal();
                    getData();
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        };

        return { showModal, onShowModal, onHideModal, handleChange, handleAddNew, data };
    };
};

