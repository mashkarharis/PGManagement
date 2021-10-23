import { AsyncStorage } from "react-native";

export {
    saveSignInData,
    getSignInData
}

var saveSignInData = async (email, code) => {
    await AsyncStorage.setItem(
        'EMAIL',
        email
    );
    await AsyncStorage.setItem(
        'CODE',
        code
    );
};

var getSignInData = async () => {
    const email = await AsyncStorage.getItem(
        'EMAIL'
    );
    const code = await AsyncStorage.getItem(
        'CODE'
    );

    return [email, code]
};