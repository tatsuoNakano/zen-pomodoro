// 最初にReactとReact Nativeをインポートします
import React from 'react';
import { View,ScrollView,Text } from 'react-native';
import { Divider } from 'react-native-paper';

// MyApp()という関数を作成します。これはReactのコンポーネントで、画面に何を要表示するかをReactに伝えます
function Graph() {
    return (
        <ScrollView>
            <View>
                <Text>デイリーのスケジュールグラフ</Text>
                <Divider />
            </View>
            <View><Text>マンスリーのスケジュールグラフ</Text></View>
            <Divider />
            <View><Text>マンスリーのスケジュールグラフ</Text></View>
            <Divider />
        </ScrollView>
    );
}

// MyAppコンポーネントをエクスポートします。これにより他のファイルからインポートして使用することができます
export default Graph;