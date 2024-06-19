import { Dimensions, TouchableOpacity, Image, View, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from 'expo-router';
import { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import PagerView from 'react-native-pager-view';
import { ThemedTouchableOpacity } from '@/components/ThemedTouchableOpacity';
import { AppImages } from '@/assets/images';
import { ScaleSize } from '@/helper/ScaleSize';
import { styles } from './questionStyle';

const { width, height } = Dimensions.get('window')

const data = [
  {
    "id": 2221,
    "question": "Company/Organization:",
    "type": "text",
    "answer": ""
  },
  {
    "id": 2222,
    "question": "Job Title:",
    "type": "text",
    "answer": ""
  },
  {
    "id": 2223,
    "question": "Are you a current student?:",
    "type": "buttons",
    "answers": ["Yes", "No"],
    "answer": ""
  },
  {
    "id": 2224,
    "question": "Where did you hear about this event?:",
    "type": "buttonsMulti",
    "answers": ["LinkedIn", "Instagram", "Twitter", "Facebook"],
    "answer": []
  }
]


export default function QuestionScreen() {
  const navigation = useNavigation()
  const [coordinate, setCoordinate] = useState([])
  const ref = useRef(0);
  const [renderData, setRenderData] = useState(data)

  const openItem = (page: number) => {
    ref.current.setPage(page)
  }
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#b7a7ff', '#ccbbff', '#ccbbff', '#E7DCFF', '#E7DCFF', '#E7DCFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <PagerView initialPage={0} ref={ref}>
        {
          renderData.map((item, index) => {
            return (<View
              key={index}
              style={{
                width: width, height: height,
                paddingTop: ScaleSize.SIZE_70*2, paddingHorizontal: ScaleSize.SIZE_40
              }}
              // onPress={() => {openItem(item)}}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                // coordinate[item.key] = layout.x;
                console.log(layout.x);
              }}>
              <ThemedText style={styles.queNumberText}>{`QUESTION ${index + 1} OF ${renderData.length}`}</ThemedText>
              <ThemedText
                style={styles.questionText}
              >{item.question}</ThemedText>

              <View style={styles.ansWrap}>
                {item?.type == "text" && <TextInput
                  style={styles.ansTextInput}
                  placeholder="Write your answer here"
                  placeholderTextColor={"rgba(108,99,255, 0.3)"}
                />}

                {item?.type == "buttons" && <View>
                  {item?.answers?.map((ansItm, ansInd) => {
                    return (<TouchableOpacity style={styles.optionBtn}
                      onPress={() => { openItem(index + 1) }}
                    >
                      <ThemedText style={styles.optionBtnText}>{ansItm}</ThemedText>
                    </TouchableOpacity>)
                  })}

                </View>}

                {item?.type == "buttonsMulti" && <View>
                  {item?.answers?.map((ansItm: any, ansInd: number) => {
                    let showCheck = item.answer.includes(ansItm)
                    return (<TouchableOpacity style={styles.optionBtn}
                      onPress={() => {
                        let updated = { ...renderData }
                        if (updated[index].answer.includes(ansItm)) {
                          renderData[index].answer = renderData[index].answer.filter((itm: any) => itm != ansItm)
                        } else {
                          renderData[index].answer.push(ansItm)
                        }
                        setCoordinate(Math.random())
                      }}
                    >
                      <ThemedText style={styles.optionBtnText}>{ansItm}</ThemedText>

                      {showCheck && <View style={styles.optionBtnIconWrap}><Image source={AppImages.ic_check} resizeMode='contain' style={styles.optionBtnIcon} /></View>}
                    </TouchableOpacity>)
                  })}

                </View>}

              </View>

              {item?.type == "text" && <View >
                <TouchableOpacity style={styles.btnSubmit}
                  onPress={() => { openItem(index + 1) }}
                >
                  <ThemedText style={styles.btnText}>Next Question</ThemedText>
                </TouchableOpacity>
              </View>}

              {index == renderData.length - 1 && <View >
                <TouchableOpacity style={styles.btnSubmit}
                  onPress={() => { alert("Your questionair submitted") }}
                >
                  <ThemedText style={styles.btnText}>Claim ticket</ThemedText>
                </TouchableOpacity>
              </View>}
            </View>
            )
          })
        }
      </PagerView>
    </LinearGradient>
  );
}
