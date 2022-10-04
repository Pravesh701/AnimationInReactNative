import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'

const MyScreen = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        myDelhiveryApi()
    }, [])

    const myDelhiveryApi = () => {
        Axios.get("https://dlv-web-api.delhivery.com/v3/unified-tracking?wbn=2827715709421").then((response) => {
            const { data, status } = response;
            if (status === 200 && data?.data) {
                setData(data.data)
            }
            console.log(response);
        }).catch((error) => {
            console.log("Api Failed", error.response);
        })
    }

    const myLables = (item) => {
        const { label = "" } = item || {}
        return (
            <View>
                <Text style={styles.lableText}>{label}</Text>
            </View>
        )
    }

    const renderListData = ({ item, index }) => {
        const { awb = "", destination = "", trackingStates = [] } = item || {}
        const { instructions, status = "" } = item?.status || {};
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.destinationStyle}>{`Destination: ${destination}`}</Text>
                <Text style={styles.orderId}>{`Order ID:  ${awb}`}</Text>
                <Text style={styles.statusStyle}>{`Status: ${status}`}</Text>
                <Text style={styles.instructions}>Instructions: <Text style={styles.instructionsText}>{instructions}</Text></Text>
                <Text style={styles.labelStyle}>{`Label`}</Text>
                {Array.isArray(trackingStates) && trackingStates.length !== 0 &&
                    trackingStates.map(myLables)
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>DelhiVery</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => `${index}`}
                renderItem={renderListData}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.listContainer}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </SafeAreaView>
    )
}

export default MyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'lightblue'
    },
    listContainer: {
        flex: 1
    },
    contentContainerStyle: {
        flexGrow: 1,
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "black",
    },
    cardContainer: {
        padding: 16,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    orderId: {
        fontSize: 16,
        fontWeight: "500",
        color: "black",
        marginTop: 20
    },
    instructions: {
        fontSize: 18,
        fontWeight: "500",
        color: "black",
        marginTop: 10
    },
    instructionsText: {
        fontSize: 16,
        fontWeight: "200",
        color: "black",
    },
    labelStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "black",
        marginTop: 20,
        marginBottom: 4
    },
    statusStyle: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: "500",
        color: "black",
    },
    destinationStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "black",
    },
    lableText: {
        fontSize: 14,
        fontWeight: "400",
        color: "black",
    }
})