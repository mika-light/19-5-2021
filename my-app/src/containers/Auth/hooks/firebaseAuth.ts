import firebaseApp from '../../../configs/firebase';

export function useRegister(email: string, password: string) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
            // Signed in 
            var user = userCredential.user;
            localStorage.setItem('uid', user.uid);
            console.log("Đăng nhập thành công!");
            return 'success';
        })
        .catch((error: any) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            return errorMessage;
        });
}

