import { SafeAreaView, Text } from 'react-native';
import { Permission } from '../Permission/Permission';

export const Application = () => (
    <SafeAreaView
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Permission />
    </SafeAreaView>
);
