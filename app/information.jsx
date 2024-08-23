import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const PrivacyPolicy = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>プライバシーポリシー</Text>
            <Text style={styles.heading}>1. はじめに</Text>
            <Text style={styles.paragraph}>
                [アプリ名]（以下、「当アプリ」といいます）は、ユーザーのプライバシーを保護することを重要視しています。本プライバシーポリシーは、当アプリが収集する情報、その情報の利用方法、および情報の保護方法について説明しています。
            </Text>

            <Text style={styles.heading}>2. 収集する情報</Text>
            <Text style={styles.subheading}>2.1 ユーザー提供情報</Text>
            <Text style={styles.paragraph}>
                ユーザーが当アプリを利用する際に、以下の情報を提供いただくことがあります:
            </Text>
            <Text style={styles.listItem}>• 氏名</Text>
            <Text style={styles.listItem}>• メールアドレス</Text>
            <Text style={styles.listItem}>• 電話番号</Text>
            <Text style={styles.listItem}>• その他の個人情報</Text>

            <Text style={styles.subheading}>2.2 自動的に収集される情報</Text>
            <Text style={styles.paragraph}>
                当アプリは、ユーザーが利用する際に以下の情報を自動的に収集する場合があります:
            </Text>
            <Text style={styles.listItem}>• デバイス情報（デバイスの種類、OSバージョン、デバイスIDなど）</Text>
            <Text style={styles.listItem}>• ログ情報（IPアドレス、アクセス日時、操作履歴など）</Text>
            <Text style={styles.listItem}>• 位置情報</Text>

            <Text style={styles.heading}>3. 情報の利用目的</Text>
            <Text style={styles.paragraph}>
                当アプリは、収集した情報を以下の目的で利用します:
            </Text>
            <Text style={styles.listItem}>• アプリの提供および運営</Text>
            <Text style={styles.listItem}>• ユーザーサポートの提供</Text>
            <Text style={styles.listItem}>• 利用状況の分析および改善</Text>
            <Text style={styles.listItem}>• カスタマーエクスペリエンスの向上</Text>
            <Text style={styles.listItem}>• 法律に基づく義務の履行</Text>

            <Text style={styles.heading}>4. 情報の共有</Text>
            <Text style={styles.paragraph}>
                当アプリは、ユーザーの情報を第三者と共有することはありません。ただし、以下の場合には例外的に情報を共有することがあります:
            </Text>
            <Text style={styles.listItem}>• ユーザーの同意がある場合</Text>
            <Text style={styles.listItem}>• 法律の遵守や法的請求に対応するために必要な場合</Text>
            <Text style={styles.listItem}>• アプリの運営やサービス提供に必要な第三者（例: クラウドサービスプロバイダー）に対して、契約に基づき情報を提供する場合</Text>

            <Text style={styles.heading}>5. データの保存期間</Text>
            <Text style={styles.paragraph}>
                当アプリは、収集した情報を利用目的に必要な期間に限り保存します。保存期間を過ぎた情報は、安全な方法で削除または匿名化します。
            </Text>

            <Text style={styles.heading}>6. ユーザーの権利</Text>
            <Text style={styles.paragraph}>
                ユーザーは、以下の権利を有しています:
            </Text>
            <Text style={styles.listItem}>• 自己の個人情報へのアクセスおよびコピーの取得</Text>
            <Text style={styles.listItem}>• 個人情報の修正または削除の要求</Text>
            <Text style={styles.listItem}>• データ処理の制限や異議申し立て</Text>
            <Text style={styles.listItem}>• データポータビリティの要求</Text>
            <Text style={styles.paragraph}>
                これらの権利を行使する場合は、[連絡先情報]までご連絡ください。
            </Text>

            <Text style={styles.heading}>7. セキュリティ対策</Text>
            <Text style={styles.paragraph}>
                当アプリは、ユーザーの情報を保護するために適切な技術的および組織的対策を講じています。ただし、インターネットを通じた情報伝達の完全な安全性を保証することはできないため、自己責任でのご利用をお願いします。
            </Text>

            <Text style={styles.heading}>8. プライバシーポリシーの変更</Text>
            <Text style={styles.paragraph}>
                当アプリは、必要に応じて本プライバシーポリシーを変更することがあります。変更が行われた場合は、当アプリ内で告知し、重要な変更がある場合はユーザーに直接通知します。
            </Text>

            <Text style={styles.heading}>9. お問い合わせ</Text>
            <Text style={styles.paragraph}>
                本プライバシーポリシーに関するご質問やご懸念がある場合は、以下の連絡先までご連絡ください。
            </Text>
            <Text style={styles.paragraph}>[連絡先情報]</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 10,
        lineHeight: 22,
    },
    listItem: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 5,
        lineHeight: 22,
    },
});

export default PrivacyPolicy;
