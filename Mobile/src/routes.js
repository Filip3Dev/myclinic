import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

/** Routes for both users */
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';

/** Routes for Doctors */
import DocDashboard from '~/pages/DocDashboard';
import Employees from '~/pages/Employees';
import RegisterEmployee from '~/pages/RegisterEmployee';

/** Routes for Clients */
import ClientDashboard from '~/pages/ClientDashboard';
import SelectDoctor from '~/pages/CreateAppointment/SelectDoctor';
import SelectDateTime from '~/pages/CreateAppointment/SelectDateTime';
import Confirm from '~/pages/CreateAppointment/Confirm';

export default (signedIn = false, isDoctor) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        DoctorApp: createBottomTabNavigator(
          {
            Employees: {
              screen: createStackNavigator({
                Employees,
                RegisterEmployee,
              }),
              navigationOptions: {
                tabBarLabel: 'Meus Funcionarios',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="group" size={20} color={tintColor} />
                ),
              },
            },
            DocDashboard: {
              screen: createStackNavigator({
                DocDashboard,
              }),
              navigationOptions: {
                tabBarLabel: 'Agenda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="event-note" size={20} color={tintColor} />
                ),
              },
            },
            Profile: {
              screen: createStackNavigator({
                Profile,
              }),
              navigationOptions: {
                tabBarLabel: 'Meu Perfil',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="person-pin" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#00FF2B',
              inactiveTintColor: 'rgba(35, 160, 257, 0.9)',
              style: {
                backgroundColor: 'rgba(8,38,74,0.91)',
              },
            },
          }
        ),
        ClientApp: createBottomTabNavigator(
          {
            ClientDashboard: {
              screen: createStackNavigator({
                ClientDashboard,
              }),
              navigationOptions: {
                tabBarLabel: 'Meus agendamentos',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="event-available" size={20} color={tintColor} />
                ),
              },
            },
            CreateAppointment: {
              screen: createStackNavigator({
                SelectDoctor,
                SelectDateTime,
                Confirm,
              }),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'AGENDAR',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="schedule" size={20} color={tintColor} />
                ),
              },
            },
            Profile: {
              screen: createStackNavigator({
                Profile,
              }),
              navigationOptions: {
                tabBarLabel: 'Meu Perfil',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="person-pin" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#00FF2B',
              inactiveTintColor: 'rgba(35, 160, 257, 0.9)',
              style: {
                backgroundColor: 'rgba(8,38,74,0.91)',
              },
            },
          }
        ),
      },
      {
        initialRouteName:
          signedIn && isDoctor
            ? 'DoctorApp'
            : signedIn && !isDoctor
            ? 'ClientApp'
            : 'Sign',
      }
    )
  );
