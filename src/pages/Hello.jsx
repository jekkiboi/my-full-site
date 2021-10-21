import { Alert, Button, Linking, View } from 'react-native';


function Hello() {

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url)
        if (isSupported) {
            await Linking.openUrl(url)
        } else {
            Alert.alert(`Dont know how to open this url: ${url}`)
        }
    }


    return (
                    <View>
                        <Button className='email' title="Email" img={`${process.env.PUBLIC_URL}/images/email.png`} 
                        onPress={() => Linking.openURL('mailto:jackiemayer14@gmail.com') }
                              />
                    </View> 
    )

}
export default Hello