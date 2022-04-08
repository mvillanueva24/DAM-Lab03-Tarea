import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Primera',
    srcimg: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Segunda',
    srcimg: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/30546/preview_image/RN.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tercera',
    srcimg: 'https://imgs.search.brave.com/hL8C6011D1-wRHJn-FxW_PBn44fpVQrkxX8XJ9mQd08/rs:fit:1200:900:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1lX3U3VU16MEdx/NC9XcW1FZFh2d3FV/SS9BQUFBQUFBQjB4/MC8xQk5hQWJTVjEy/MGpycWlWdWJEaDZZ/ZmtMRUI1cWpKRFFD/SzRCR0FZWUN3L3Mx/NjAwL2ltYWdlbmVz/LXBhaXNhamVzLWhl/cm1vc29zLWF0YXJk/ZWNlci1yZWZsZWpv/cy1mbG9yZXMuanBn',
  },
];

const Item = ({img, title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <img src='' />
  </View>
);

const ListImg = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.srcimg}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListImg;