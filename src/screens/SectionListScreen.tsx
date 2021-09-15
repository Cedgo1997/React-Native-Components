import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { casas } from '../data/sectionListData';
import { styles } from '../theme/appTheme';

export const SectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1, backgroundColor: 'white' }}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitle title={"Total de casas: " + casas.length} />
                    </View>
                )}
                renderItem={({ item }) => <Text>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
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
