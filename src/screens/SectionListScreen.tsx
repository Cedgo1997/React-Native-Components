import React, { useContext } from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { casas } from '../data/sectionListData';
import { styles } from '../theme/appTheme';

export const SectionListScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={{ ...styles.globalMargin, flex: 1, backgroundColor: colors.background }}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitle title={"Total de casas: " + casas.length} />
                    </View>
                )}
                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )}
                SectionSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    );
};
