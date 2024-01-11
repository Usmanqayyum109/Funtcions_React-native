import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform, Alert, Linking} from 'react-native';

const openSettings = () => {
  Linking.openSettings();
};

export const RequestNotificationPermission = async () => {
  try {
   
    // Check the platform to determine which permission logic to use
    if (Platform.OS === 'ios') {
      const authorizationStatus = await messaging().requestPermission();

      switch (authorizationStatus) {
        case messaging.AuthorizationStatus.AUTHORIZED:
          console.log('User has notification permissions enabled.');
          // Call GetDeviceToken after permission is granted on iOS
          // await GetDeviceToken();
          break;
        case messaging.AuthorizationStatus.PROVISIONAL:
          console.log('User has provisional notification permissions.');
          break;
        case messaging.AuthorizationStatus.EPHEMERAL:
          console.log('App is authorized to create ephemeral notifications.');
          break;
        case messaging.AuthorizationStatus.DENIED:
          console.log('User has notification permissions disabled.');
          Alert.alert(
            'Permission Denied',
            'Please enable notification permissions manually in your device settings.',
            [
              {
                text: 'Open Settings',
                onPress: () => openSettings(),
                style: 'destructive',
              },
              {
                text: 'Cancel',
                onPress: () =>
                  console.log('Permission Denied - User Cancelled'),
                style: 'cancel',
              },
            ],
          );
          break;
        default:
          console.log('User Permission status before request');
      }
    }

   

  
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
};

// Function to get the device token for push notifications
const GetDeviceToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('Push notification token:', token);
  } catch (error) {
    console.error('Error getting device token:', error);
  }
};






