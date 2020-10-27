import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem(
        `${this.namespace}:token`
    );
    return rawAccessToken ? JSON.parse(rawAccessToken) : [];
  }

  async setAccessToken(accessToken) {
    const currentAccessToken = await this.getAccessToken();
    const newAccessToken = [...currentAccessToken, accessToken];

    await AsyncStorage.setItem(
        `${this.namespace}:token`,
        JSON.stringify(newAccessToken)
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(
        `${this.namespace}:token`
        );
  }
}

export default AuthStorage;