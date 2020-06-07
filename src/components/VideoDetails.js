import React from 'react';
import { useDispatch } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import YouTube from 'react-native-youtube';

// var videos = [];
// export

const VideoDetails = (props) => {
  const {navigation, route} = props;
  const {data} = route.params;
  const Idvideo = data.id;

  const dispatch = useDispatch();

  const handleDeleteVideo = () => {

    dispatch({
      type: 'deleteVideo',
      data: data.id,
    })
    navigation.navigate('Home');
  }
  const onPressDelete = () => {
    navigation.navigate('Home', {videoId : Idvideo});
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleDeleteVideo}>
          <Image
            source={require('../components/icon_delete.png')}
            style={{marginRight: 10}}></Image>
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <YouTube
        apiKey="AIzaSyCj-Zh45bk1vbdJEyrNjZBSd2da49d2sIs"
        videoId={data.id} // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        style={{alignSelf: 'stretch', height: 300}}
      />
    </View>
  );
};

export default VideoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300,
  },
});
