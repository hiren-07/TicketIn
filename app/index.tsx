import { Image, StyleSheet, Platform, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import { ThemedTouchableOpacity } from '@/components/ThemedTouchableOpacity';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';
import { AppImages } from '@/assets/images';


export default function App() {
  const navigation = useNavigation()

  const data = {
    name: "Art show 🎨 ",
    ownerBy: "Olivia Adams",
    scheduleData: [
      {
        id: 0,
        title: 'Monday, Nov 13 2023',
        subtitle: '6:00 PM - 10:00 PM',
        // icon: 'calendar-today',
        icon: AppImages.ic_calendar
      },
      {
        id: 1,
        title: 'Lower Manhattan',
        subtitle: 'Join to see full address',
        link: true,
        icon: AppImages.ic_location
      },
      {
        id: 2,
        title: '78/100 tickets left',
        subtitle: '100+ invited',
        // icon: 'ticket-confirmation'
        icon: AppImages.ic_exclude
      },
      {
        id: 3,
        title: '$10.00 - $50.00',
        // icon: 'currency-usd'
        icon: AppImages.ic_dollar
      },

    ],
    otherData:
      [
        {
          id: 101,
          title: 'About this event',
          subtitle: "Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!",
        },
        {
          id: 102,
          title: 'Find this event',
          subtitle: "Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!",
        },]
  }

  const renderData = ({ item }: { item: any }) => {
    return (
      <View style={styles.schedualMainVIew}>
        <View style={styles.iconView}>
          <Image source={item.icon} style={styles.itemIcon} resizeMode='contain' />
        </View>

        <View style={styles.scheduleView}>
          <Text style={styles.scheduleTitle}>{item.title}</Text>
          {item?.subtitle && <Text style={item.link ? styles.scheduleSubTitleLink : styles.scheduleSubTitle}>{item.subtitle}</Text>}
        </View>
      </View>
    )
  }

  const renderOtherData = ({ item }: { item: any }) => {
    return (
      <View>
        <Text style={styles.otherDetailsTitle}>{item.title}</Text>
        <Text style={styles.otherDetailsSubtitle}>{item.subtitle}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.imageView}>
        <Image source={AppImages.ic_banner} style={styles.image} resizeMode='stretch' />
      </View>


      <View style={styles.otherDetailsView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollButton}></View>
          <Text style={styles.headingText}>{data?.name}</Text>
          <Text style={styles.subtitleText}>{`by ${data?.ownerBy}`}</Text>
          <View style={{ paddingTop: 30 }}>
            <FlatList data={data?.scheduleData} renderItem={renderData} />

            <FlatList data={data?.otherData} renderItem={renderOtherData} />
          </View>
        </ScrollView>
      </View> 

      <View style={styles.buyTicketsMianView}>
        <TouchableOpacity style={styles.buyTicketsView} onPress={() => {
          navigation.navigate("QuestionScreen")
        }} >
          <Text style={styles.BuyTicketstext}>Buy tickets</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


