import React from 'react';
import { Text } from 'react-native';

import HeaderLogo from '~/components/HeaderLogo';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <Text>MEU PERFIL</Text>
    </Background>
  );
}

Profile.navigationOptions = {
  headerTitle: () => <HeaderLogo />,
  headerStyle: {
    backgroundColor: '#08264A',
    height: 60,
  },
  headerTitleAlign: 'center',
};
