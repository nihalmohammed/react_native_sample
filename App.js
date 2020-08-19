import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import HomeScreen from "./src/home";
import DetailsScreen from "./src/details"

  
const Stack = createStackNavigator();


export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



// import React from "react";
// import Navigator from './src/navigator';
       

// export default function App() {
//   return <Navigator />
// }





// // import React from "react";
// // import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
// // import AppIntroSlider from "react-native-app-intro-slider";

// // const slides = [
// //   {
// //     key: "one",
// //     title: "SIGN IN",
// //     text:
// //       "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
// //     // image: require("./images/1.png"),
// //   },
// //   {
// //     key: "two",
// //     title: "ADD A LEAD",
// //     text:
// //       "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
// //     // image: require("./images/2.png"),
// //   },
// //   {
// //     key: "three",
// //     title: "ENJOY",
// //     text:
// //       "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
// //     // image: require("./images/3.png"),
// //   },
// // ];

// // export default class App extends React.Component {
// //   state = { showHomePage:false };
// //   _renderItem = ({ item }) => {
// //     return (
// //       <View style={{ flex: 1,backgroundColor:"#00D2FF" }}>
// //         { <Image
// //           source={item.image}
// //           style={{
// //             resizeMode: "cover",
// //             height: "73%",
// //             width: "100%",
// //           }}
// //         /> }
// //         <Text
// //           style={{
// //             paddingTop: 25,
// //             paddingBottom: 10,
// //             fontSize: 23,
// //             fontWeight: "bold",
// //             color: "#21465b",
// //             alignSelf: "center",
// //           }}
// //         >
// //           {item.title}
// //         </Text>

// //         <Text style={{
// //           textAlign:"center",
// //           color:"#040404",
// //           fontSize:15,
// //           paddingHorizontal:30
// //         }}>
// //           {item.text}
// //         </Text>

// //       </View>
// //     );
// //   };

  
// //   onDone = () => {
// //     this.setState({ showHomePage: true });

    
// //   };

// //   onSkip = () => {
// //     this.setState({ showHomePage: true });
// //   };


// //     render() {
// //     if (this.state.showHomePage){
// //       return (
// //       <Text
// //       style={{
// //         paddingTop: 25,
// //         paddingBottom: 10,
// //         fontSize: 23,
// //         alignItems:"center",
// //         justifyContent:"center",
// //         fontWeight: "bold",
// //         color: "#21465b",
// //         alignSelf: "center",
// //       }}>Home</Text>
// //       );
// //     } else 
// //     return (
// //     <AppIntroSlider
// //       renderItem={this._renderItem} 
// //       data={slides} 
// //       onDone={this.onDone}
// //       showSkipButton ={true}
// //       onSkip={this.onSkip}
// //       activeDotStyle={{
// //         backgroundColor:"#21465b",
// //         width:30
// //       }}
// //      />
// //     );
// //   }





// // }
// //  const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
 
// // });