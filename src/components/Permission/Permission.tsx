import {
    getBackgroundPermissionsAsync,
    getForegroundPermissionsAsync,
    LocationPermissionResponse,
    requestBackgroundPermissionsAsync,
    requestForegroundPermissionsAsync
} from 'expo-location';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export const Permission = () => {
    const [foregroundPermission, setForegroundPermission] = useState<LocationPermissionResponse | null>(null);
    const [backgroundPermission, setBackgroundPermission] = useState<LocationPermissionResponse | null>(null);

    const refreshPermissions = async () => {
        setForegroundPermission(await getForegroundPermissionsAsync());
        setBackgroundPermission(await getBackgroundPermissionsAsync());
    };

    useEffect(() => {
        (async () => {
            await refreshPermissions();
        })();
    }, []);

    const handleForegroundPress = async () => {
        console.log('Should request foreground permission...');
        setForegroundPermission(await requestForegroundPermissionsAsync());
        await refreshPermissions();
    };

    const handleBackgroundPress = async () => {
        console.log('Should request background permission...');
        setBackgroundPermission(await requestBackgroundPermissionsAsync());
        await refreshPermissions();
    };

    return (
        <View>
            <Text>
                {`Foreground permission status: ${foregroundPermission?.status}\n`}
                {`Can ask again: ${foregroundPermission?.canAskAgain}`}
            </Text>
            <Button title={'Request foreground permission'} onPress={handleForegroundPress} />
            <Text
                style={{
                    marginTop: 32
                }}
            >
                {`Background permission status: ${backgroundPermission?.status}\n`}
                {`Can ask again: ${backgroundPermission?.canAskAgain}`}
            </Text>
            <Button title={'Request background permission'} onPress={handleBackgroundPress} />
        </View>
    );
};
