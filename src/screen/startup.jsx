// 最初にReactとReact Nativeをインポートします
import React from 'react';
import { View, Text } from 'react-native';

// MyApp()という関数を作成します。これはReactのコンポーネントで、画面に何を要表示するかをReactに伝えます
function Startup() {
    return (
        <View>
            <Text>Hello, World!</Text>
        </View>
    );
}

// MyAppコンポーネントをエクスポートします。これにより他のファイルからインポートして使用することができます
export default Startup;