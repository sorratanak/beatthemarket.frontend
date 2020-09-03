import { getUniqueId } from 'react-native-device-info';

export async function getDeviceUniqueId() {
  return getUniqueId();
}
