import React from 'react';
import {Text, View, Image, TouchableNativeFeedback, Platform, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( { albumProps} ) => {

    const { title, artist, thumbnail_image, image, url} = albumProps;

    return(
        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerStyle}>
                    <Image 
                        style = {styles.thumbnailStyle}
                        source = {{ uri: thumbnail_image }}
                     />
                </View>
               <View style = {styles.headerContentStyle}> 
                   <Text style = {styles.albumTextStyle}>{title}</Text>
                   <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                    <Image style = {styles.albumArtStyle} source = {{ uri : image}} />
            </CardSection>

            <CardSection>
                <Button onPress = {() => Linking.openURL(url)}>
                    Buy '{title}'
                </Button>
            </CardSection>
       </Card>
    );
};


const styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    thumbnailStyle : {
        height : 50,
        width : 50
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 10
    },

    albumTextStyle: {
        color: '#000',
        fontSize: 18
    },

    albumArtStyle: {
       height : 325,
       flex : 1,
       width : null
    },

    button: {
        margin: 10,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
};


export default AlbumDetail;