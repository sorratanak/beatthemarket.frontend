import { getDeviceIdFromStorage } from './storage';

export async function getDeviceUniqueId() {
  return getDeviceIdFromStorage();
}
