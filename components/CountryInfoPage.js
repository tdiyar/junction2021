import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { DataTable } from 'react-native-paper';
const DATA = [
    {
        id: '1',
        user: {
            username: 'user1',
            avatar: 'https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg'
        },
        feedback: 'Culpa ad sint sint culpa officia minim.',
        date: '2021.05.12',
        stars: 3
    },
    {
        id: '2',
        user: {
            username: 'user2',
            avatar: 'https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635'
        },
        feedback: 'Irure voluptate dolore irure occaecat Lorem quis consequat. Culpa enim qui incididunt aliqua proident ullamco dolor non esse cupidatat enim. Reprehenderit anim ex ullamco ullamco sunt amet. Cupidatat eiusmod et esse laborum laborum ea nostrud irure sint tempor fugiat ea. Est Lorem pariatur aliquip duis adipisicing in veniam eiusmod elit id.',
        date: '2021.04.28',
        stars: 5
    },
    {
        id: '3',
        user: {
            username: 'user3',
            avatar: 'https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg'
        },
        feedback: 'Irure cupidatat aliqua do velit. Excepteur sit aute nisi irure aliquip aliquip esse ad laborum.',
        date: '2021.04.01',
        stars: 1
    },
];


const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.feedback}</Text>
    </TouchableOpacity>
);

function CountryInfoPage({navigation, route}) {
    [starCount, setStarCount] = useState();

    const renderItem = (item) => {
        return <Item
                    item={item}
                    onPress={() => alert('selected item!')}
                />
    }

    const city_list = [	
        {name:'Seoul', number:1, index: 1},
        {name:'Busan', number:2, index: 2},
        {name:'Incheon', number:3, index: 3},
        {name:'Daegu', number:4, index: 4},
        {name:'Daejeon', number:5, index: 5},
        {name:'Gwangju', number:6, index: 6},
        {name:'Suwon', number:7, index: 7},
        {name:'Goyang', number:8, index: 8},
        {name:'Seongnam', number:9, index: 9},
        {name:'Ulsan', number:10, index: 10},
    ]
    const table = city_list.map((entry) => 
      <DataTable.Row onPress={()=> ( navigation.navigate('CountryInfoPage') )} >
        <DataTable.Cell>{entry.number}</DataTable.Cell>
        <DataTable.Cell>{entry.name}</DataTable.Cell>
        <DataTable.Cell>{((parseInt(entry.index) * 3413 + (parseInt(entry.index) + entry.name.length) * 1324637) % 31) + 42}</DataTable.Cell>
      </DataTable.Row>
    );
    
    return (
        <ScrollView style={{height:'90%'}} >
        <View style={styles.container}>
            

            <View style={styles.header}>
                <AntIcon name='arrowleft' style={styles.back} size={35} onPress={() => navigation.navigate('Map')}/>
                <View style={styles.imageContainer} onPress={() => alert('lsdfd')}>
                    <Image
                        source={{uri: 'https://www.lowyinstitute.org/sites/default/files/GettyImages-1134201090.jpeg'}}
                        style={{height: 200}}
                    />
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.titleText}> South Korea </Text>
                </View>
            </View>
            
            
            <View style={styles.separator}/>
            

            <View style={styles.content}>
            <Text>
                <Text style={styles.contentTitle}> Overview of Inclusivity Index </Text>    {'\n'}
                <Text style={ {fontWeight: 'bold'} }> Overall: </Text>  68{'\n'}

                <Text style={ {fontWeight: 'bold'} }> Public transport: </Text>  55{'\n'}
                <Text style={ {fontWeight: 'bold'} }> Road crossings: </Text>  83{'\n'}  
                <Text style={ {fontWeight: 'bold'} }> Ramps: </Text>  87{'\n'} 
                <Text style={ {fontWeight: 'bold'} }> Lifts: </Text>  51{'\n'} 
                <Text style={ {fontWeight: 'bold'} }> Parking: </Text>  66{'\n'} 
                <Text style={ {fontWeight: 'bold'} }> Toilets: </Text>  66
            </Text>

            </View>
            {// here
            }
            <View style={styles.separator}/>

            <View style={styles.content}>
                <Text style={styles.contentTitle}> Visitor Reviews <Text style={{fontWeight: 'normal'}}>  </Text> </Text>    
                
                <View style={{alignSelf: 'center'}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={starCount}
                        selectedStar={(rating) => setStarCount(rating)}
                    />
                </View>
                <TouchableOpacity
                        style={{...styles.button, backgroundColor: 'orange', width: 'auto', alignSelf: 'center'}}
                    >
                        <FaIcon
                            name='pencil'
                            size={20}
                            style={styles.buttonIcon}
                        />
                        <Text style={styles.buttonText}> Leave a review </Text>
                </TouchableOpacity>
            </View>
            


            <View style={styles.separator}/>
            <View style={styles.content}>
               
            
            <DataTable>

              <DataTable.Header>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title>city</DataTable.Title>
                <DataTable.Title>index</DataTable.Title>
              </DataTable.Header>
              {table}
            </DataTable>
    
            </View>

        </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    content: {
        padding: 10,
    },
    header: {
        paddingBottom: 10,
    },
    separator: {
        height: 16,
        width: '100%',
        backgroundColor: '#DCDCDC',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2,
        borderTopColor: '#D3D3D3',
        borderTopWidth: 2,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 100,
        padding: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
    },
    buttonIcon: {
        color: '#fff',
        marginRight: 10
    },
    imageContainer: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },
    container: {
        flex: 1
    },
    headerText: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
        // `alignItems: 'center',
    },
    back: {
        position: 'absolute',
        top: 25,
        left: 10,
        zIndex: 999,
        color: 'rgba(0,0,0,0.8)'
    },
    titleText: {
        fontSize: 27,
        fontWeight: "bold"
    }
});  

export default CountryInfoPage;