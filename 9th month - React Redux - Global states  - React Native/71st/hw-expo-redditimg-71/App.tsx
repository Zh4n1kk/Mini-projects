import { StatusBar } from 'expo-status-bar';
import './global.css';
import { useStoreReddit } from 'store/store';
import { axiosApi } from 'axios/axiosApi';
import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Card } from 'components/Card/Card';

export default function App() {
  const { data, setData, after, appendData, setAfter } = useStoreReddit();

  const getData = async (isNextPage = false) => {
    let url = `https://www.reddit.com/r/pics.json`;
    try {
      if (isNextPage && after) {
        url += `?count=${data.length}&after=${after}`;
      }
      const dataReddit = await axiosApi.get(url);
      const deepData = dataReddit.data.data.children;
      const newAfter = dataReddit.data.data.after;

      if (isNextPage) {
        appendData(deepData, newAfter);
      } else {
        setData(deepData);
        setAfter(newAfter);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="flex w-full flex-col">
      <FlatList
        data={data}
        renderItem={(item) => (
          <Card
            text={item.item.data.author_fullname}
            thumbnail={item.item.data.thumbnail}
            title={item.item.data.title}
            key={item.item.data.id}
          />
        )}
        onEndReached={() => {
            getData(true);
        }}
        onEndReachedThreshold={0.5}></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}
