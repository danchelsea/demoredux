import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  PixelRatio,
  RefreshControl,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
const videos = [
  {
    id: '16DaXwbWMzE',
    title: 'Chuyện Gì Đã Xảy Ra Trên MẶT TRĂNG (MOON)?',
    image: 'https://img.youtube.com/vi/16DaXwbWMzE/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 4400,
  },
  {
    id: 'lVurm_hQr5k',
    title:
      'Phê Phim News: Chuỗi Kinh Dị SCREAM Có Phần 5 | Đạo diễn MA TRẬN vs. ELON MUSK & CON GÁI TRUMP',
    image: 'https://img.youtube.com/vi/lVurm_hQr5k/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 11678,
  },
  {
    id: '95jDUHnOE3Q',
    title: '10 PHIM HÀNH ĐỘNG HAY NHẤT HBO GO MÀ BẠN PHẢI XEM',
    image: 'https://img.youtube.com/vi/95jDUHnOE3Q/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 75411,
  },
  {
    id: 'X8WLOT3gzfw',
    title: 'RYAN REYNOLDS: DEADPOOL Là Ai?',
    image: 'https://img.youtube.com/vi/X8WLOT3gzfw/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 83179,
  },
  {
    id: 'aHLVD8Sn_eA',
    title: 'CẤU TRÚC 3 HỒI LÀ GÌ?',
    image: 'https://img.youtube.com/vi/aHLVD8Sn_eA/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 78626,
  },
  {
    id: 'Xn9EpaT2O_c',
    title:
      'Phê Phim News: PHIM HOẠT HÌNH ‘KHỦNG’ NHẤT CỦA GHIBLI | MAD MAX SẼ LÀM NGOẠI TRUYỆN VỀ FURIOSA',
    image: 'https://img.youtube.com/vi/Xn9EpaT2O_c/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 78626,
  },
  {
    id: '466wRUWwm3Y',
    title: 'Vì Sao Chúng Ta Yêu CHÚA NHẪN?',
    image: 'https://img.youtube.com/vi/466wRUWwm3Y/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 152256,
  },
  {
    id: '1iZP27goFVQ',
    title: "TRICK 'R TREAT: Những Câu Chuyện HÃI HÙNG Trong Đêm HALLOWEEN",
    image: 'https://img.youtube.com/vi/1iZP27goFVQ/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 199180,
  },
  {
    id: 'oFByb5_eR8k',
    title: 'BE WITH YOU (VÀ EM SẼ ĐẾN): Tình Yêu Là Một Sự Đánh Đổi?',
    image: 'https://img.youtube.com/vi/oFByb5_eR8k/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 34507,
  },
  {
    id: 'cPGgNKLGuXw',
    title:
      'Phê Phim News: PHIM KINH DỊ TIẾP THEO TỪ STEPHEN KING | LOẠT PHIM TIỀN TỶ CHUẨN BỊ BẤM MÁY TRỞ LẠI',
    image: 'https://img.youtube.com/vi/cPGgNKLGuXw/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 88133,
  },
  {
    id: 'lGlHVEekYIM',
    title: '9 PHIM KINH DỊ HAY CỦA 2019 MÀ CÓ THỂ BẠN KHÔNG BIẾT',
    image: 'https://img.youtube.com/vi/lGlHVEekYIM/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 273139,
  },
  {
    id: 'zVo-QRQ0I2k',
    title: 'TOM HIDDLESTON: LOKI "Suýt" Soán Ngôi THOR?',
    image: 'https://img.youtube.com/vi/zVo-QRQ0I2k/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 101691,
  },
  {
    id: 'xRbWGyHbn6I',
    title: 'CẬN CẢNH có TÁC DỤNG GÌ?',
    image: 'https://img.youtube.com/vi/xRbWGyHbn6I/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 79781,
  },
  {
    id: 'unyK_b8Qjcs',
    title:
      'Phê Phim News: RẠP PHIM MỞ CỬA TRỞ LẠI | LIỆU CẬU BÉ MẤT TÍCH CÓ ĐẾN VIỆT NAM? | TƯƠNG LAI DEADPOOL',
    image: 'https://img.youtube.com/vi/unyK_b8Qjcs/0.jpg',
    channel: {
      title: 'Phê Phim',
      image:
        'https://yt3.ggpht.com/a/AATXAJzJQ28VJPdIgqPygfUT7IvoMexr49HgoaCAjw=s288-c-k-c0xffffffff-no-rj-mo',
    },
    viewCount: 95561,
  },
];

const YoutubeItem = (props) => {
  const {data, onPress} = props;
  const onPressItem = () => {
    if (onPress) {
      onPress(data);
    }
  };

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={styles.youtubeItem}>
        <Image
          style={styles.imageItem}
          source={{
            uri: data.image,
          }}></Image>
        <View style={styles.youtubeItemBotom}>
          <Image
            style={styles.youtubeChannelAvatar}
            source={{
              uri: data.channel.image,
            }}></Image>
          <View style={styles.youtubeItemBotomRight}>
            <Text style={styles.youtubeItemTitle}>{data.title}</Text>
            <View style={styles.youtubeItemExtra}>
              <Text style={styles.youtubeChannalName}>
                {data.channel.title}
              </Text>
              <Text style={[styles.youtubeChannalName, {marginLeft: 8}]}>
                {data.viewCount} views
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = (props) => {
  const [data, setData] = useState(videos);
  const [refreshing, setRefreshing] = useState(false);
  const {navigation, route} = props;

  const deletingVideoId = useSelector((state) => state.deletingVideoId);

  useEffect(() => {
    console.log('deleting VideoId :', deletingVideoId);
    for (var i = 0; i < videos.length; i++) {
          if (videos[i].id === deletingVideoId) {
            videos.splice(i, 1);
          }
        }

  }, [deletingVideoId]);

  // useEffect(() => {
  //   for (var i = 0; i < videos.length; i++) {
  //     if (videos[i].id === route.params.videoId) {
  //       videos.splice(i, 1);
  //     }
  //   }
  // });
  const renderItem = ({item, index}) => {
    return <YoutubeItem data={item} onPress={handlePressItem}></YoutubeItem>;
  };

  const handlePressItem = (data) => {
    navigation.navigate('Video', {data});
  };

  const onChangeText = (text) => {
    text = text.toLowerCase();
    const newData = videos.filter((video) =>
      video.title.toLowerCase().includes(text),
    );
    setData(newData);
  };

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData(videos);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        inlineImageLeft="icon"
        style={styles.textInput}
        onChangeText={onChangeText}></TextInput>
      <FlatList
        style={styles.flastList}
        data={data}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    margin: 12,
    height: 44,
    fontSize: 17,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 10,
    fontWeight: '500',
    padding: 8,
  },
  youtubeItem: {},
  imageItem: {
    aspectRatio: 16 / 9,
  },
  youtubeItemBotom: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  youtubeChannelAvatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  youtubeItemBotomRight: {
    marginLeft: 10,
    flex: 1,
  },
  youtubeItemTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  youtubeItemExtra: {
    marginTop: 5,
    flexDirection: 'row',
    marginRight: 10,
  },
  youtubeChannalName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#656C7A',
  },
});

export default HomeScreen;
