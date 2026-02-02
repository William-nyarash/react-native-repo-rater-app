import { StyleSheet } from "react-native";
import { View,Image,  Text } from "react-native"

const RepositoryItem =( {repository} ) => {
    const  style = StyleSheet.create({
        container: {
            padding:"20px",
            backgroundColor:"white",
            marginBottom: 12
        },
        columnLayout: {
            display: "flex",
            flexDirection: "column",
            width: '80%',
            padding:'23',
            gap: 12
        },
        title: {
            fontSize: "1.2rem",
            fontWeight: "700",
            color:"#282727"
        },
        text:{
            fontSize:"0.95rem",
            fontWeight:"400"
        },
        rowLayout: {
            display: "flex",
            flexDirection: "row",
            gap: 20
        },
        stats: {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: 'center',
            alignItems: "center",
            gap: 8
        },
        statsNums: {
            fontWeight: "700",
            fontSize: "1.4rem",
        },
        lang: {
              padding:"3%",
              borderRadius:"7%",
              backgroundColor:"#0366d6",
              color:"white",
              width:"28%",
              display:"flex",
              justifyContent: "center",
              alignItems:"center" ,
              marginBottom:20
        }
    })

    return (
        <View style={style.container} >
            <View style={style.rowLayout}>
                <View>
                <Image 
                    source={{ uri: repository.ownerAvatarUrl}}
                    style={{ width: 60, height: 60, borderRadius:8}}
                 />
                 </View>
                 <View style={style.columnLayout}>
                     <Text style={style.title} >{repository.fullName}</Text>
                     <Text style={style.text}>{repository.description}</Text>
                     <Text style={style.lang}>{repository.language}</Text>
                 </View>
            </View>
            <View style={{
                display: "flex",
                gap:12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                paddingTop: 12
            }}>
                <View style={style.stats} ><Text style={style.text}>Stars</Text> <Text style={style.statsNums}>{repository.stargazersCount >= 1000 ? `${(repository.stargazersCount /1000).toFixed(1)} K`: repository.stargazersCount }</Text></View>
                <View style={style.stats}><Text style={style.text}>Reviews</Text>
                <Text style={style.statsNums}>{repository.reviewCount >= 1000 ? `${(repository.reviewCount / 1000).toFixed(1)} K` : repository.reviewCount}</Text></View>
                <View  style={style.stats}> <Text style={style.text}>Rating</Text> <Text style={style.statsNums}>{repository.ratingAverage}</Text> </View>
            </View>
        </View>
    )
};

export default RepositoryItem;