import React from 'react';
import {
    StatusBar,
    SafeAreaView,
} from 'react-native';
import styles from '../styles/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import InitComponent from '../components/initComponent/InitComponent';
import CarsDetailsForm from '../components/carsDetailsForm/CarsDetailsForm';
import FirstScreen from '../components/firstScreen/FirstScreen';
import Auth1 from '../components/auth/Auth1';
import Terms from '../components/terms/Terms';
import Error from '../components/error/Error';
import AuthCarDetails from '../components/carsDetailsForm/AuthCarDetails';
import Auth2 from '../components/auth/Auth2';
import PaymentStage1 from '../components/paymants/PaymentStage1';
import PaymentStage2 from '../components/paymants/PaymentStage2';
import Payments from '../components/paymants/Payments';
import Footer from '../components/home/Footer';
import WrapHome from '../components/home/WrapHome';
import Home from '../components/home/Home';
import TryDialog from '../components/dialog/TryDialog';
import Setting from '../components/settings/Setting';
import Gate from '../components/gate/Gate';
import Parkings from '../components/parkings/Parkings';
import Messages from '../components/messages/Messages';
import AuthCarDetailsBeforeContinue from '../components/carsDetailsForm/AuthCarDetailsBeforeContinue';
import Auth3 from '../components/auth/Auth3';
import RequestParkingList from '../components/home/RequestParkingList';
import ReservedParkingsList from '../components/home/ReservedParkingsList';
import GeneralManagement from '../components/settings/generalManagement/GeneralManagement';
import WrapSettings from '../components/settings/WrapSettings';
import ChooseLanguage from '../components/settings/generalManagement/ChooseLanguage'
import NotificationsManagement from '../components/settings/generalManagement/NotificationsManagement';
import About from '../components/settings/generalManagement/About';
import EmptyParkings from '../components/parkings/EmptyParkings';
import GuestsList from '../components/guests/GuestsList';
import AccountManagement from '../components/settings/accountManagement/AccountManagement';
import Wrap from '../components/settings/Wrap';
import UserDetails2 from '../components/settings/accountManagement/UserDetails2';
import UserDetails1 from '../components/settings/accountManagement/UserDetails1';
import PaymentManagement from '../components/settings/accountManagement/PaymentManagement';
import ContactUs from '../components/genericComponents/ContactUs';
import CarNumManagement from '../components/settings/carNumManagement/CarNumManagement';
import AuthorizedManagement from '../components/settings/authorizedManagement/AuthorizedManagement';
import History from '../components/settings/history/History';
import MyReqParkingList from '../components/parkings/MyReqParkingList';
import Welcome from '../components/try/Welcome';
import AdminPrivileges from '../components/settings/administratorPrivileges/AdminPrivileges';
import UsersList from '../components/settings/administratorPrivileges/UsersList';
import AddUsers from '../components/settings/administratorPrivileges/AddUsers';
import SerialNumber from '../components/signUp/SerialNumber';
import CarDetailsForm from '../components/carsDetailsForm/CarsDetailsForm'
import GateMain from '../components/gate/GateMain';

const Stack = createNativeStackNavigator();

export const navigateScreen = (props, screen, params) => {
    props._tab && props._setTab && props._setTab(params && params.tab ? params.tab : screen)
    props.navigation.navigate(screen, params && params);
}

export const goBack = (props) => {
    props.navigation.goBack();
}

const addStaticBackground = (props, Component) => {
    return (
        <>
            <SafeAreaView
                style={styles.background}>
                <Component {...props} />
            </SafeAreaView>
        </>
    )
}


export const RoutesApp = (props) => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="WrapHome"
            >

                <Stack.Screen
                    name="Home"
                    component={
                        (props) => addStaticBackground(props, Home)
                    } />


                <Stack.Screen
                    name="RequestParkingList"
                    component={
                        (props) => addStaticBackground(props, RequestParkingList)
                    }
                />
                <Stack.Screen
                    name="ReservedParkingsList"
                    component={
                        (props) => addStaticBackground(props, ReservedParkingsList)
                    }
                />

                <Stack.Screen
                    name="Parkings"
                    component={
                        (props) => addStaticBackground(props, Parkings)
                    }
                />
                <Stack.Screen
                    name="Messages"
                    component={
                        (props) => addStaticBackground(props, Messages)
                    }
                />
                <Stack.Screen
                    name="EmptyParkings"
                    component={
                        (props) => addStaticBackground(props, EmptyParkings)
                    }
                />
                <Stack.Screen
                    name="GuestsList"
                    component={
                        (props) => addStaticBackground(props, GuestsList)
                    }
                />
                <Stack.Screen
                    name="Gate"
                    component={
                        (props) => addStaticBackground(props, GateMain)
                    }
                />
                <Stack.Screen
                    name="Setting"
                    component={
                        (props) => addStaticBackground(props, Setting)
                    }
                />
                <Stack.Screen
                    name="About"
                    component={
                        (props) => addStaticBackground(props, About)
                    }
                />
                <Stack.Screen
                    name="GeneralManagement"
                    component={
                        (props) => addStaticBackground(props, GeneralManagement)
                    }
                />

                <Stack.Screen
                    name="AccountManagement"
                    component={
                        (props) => addStaticBackground(props, AccountManagement)
                    }
                />
                <Stack.Screen
                    name="UserDetails1"
                    component={
                        (props) => addStaticBackground(props, UserDetails1)
                    }
                />
                <Stack.Screen
                    name="UserDetails2"
                    component={
                        (props) => addStaticBackground(props, UserDetails2)
                    }
                />
                <Stack.Screen
                    name="PaymentManagement"
                    component={
                        (props) => addStaticBackground(props, PaymentManagement)
                    }
                />
                <Stack.Screen
                    name="ChooseLanguage"
                    component={
                        (props) => addStaticBackground(props, ChooseLanguage)
                    }
                />
                <Stack.Screen
                    name="NotificationsManagement"
                    component={
                        (props) => addStaticBackground(props, NotificationsManagement)
                    }
                />
                <Stack.Screen
                    name="ContactUs"
                    component={
                        (props) => addStaticBackground(props, ContactUs)
                    }
                />
                <Stack.Screen
                    name="CarNumManagement"
                    component={
                        (props) => addStaticBackground(props, CarNumManagement)
                    }
                />
                <Stack.Screen
                    name="MyReqParkingList"
                    component={
                        (props) => addStaticBackground(props, MyReqParkingList)
                    }
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                // component={
                //     (props) => addStaticBackground(props, Welcome)
                // }
                />
                <Stack.Screen
                    name="AdminPrivileges"
                    component={
                        (props) => addStaticBackground(props, AdminPrivileges)
                    }
                />
                <Stack.Screen
                    name="UsersList"
                    component={
                        (props) => addStaticBackground(props, UsersList)
                    }
                />
            </Stack.Navigator>
        </>
    )
}

export const Routes = () => {

    return (
        <>
            <StatusBar
                backgroundColor="#0A2550"
                barStyle="light-content"
            />

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="FirstScreen"
                >


                    <Stack.Screen
                        name="SerialNumber"
                        component={
                            (props) => addStaticBackground(props, SerialNumber)
                        } />


                    <Stack.Screen
                        name="Registration"
                        component={
                            (props) => addStaticBackground(props, CarsDetailsForm)
                        }
                    />


                    <Stack.Screen
                        name="WrapSettings"
                        component={
                            (props) => addStaticBackground(props, WrapSettings)
                        }
                    />

                    <Stack.Screen
                        name="Auth3"
                        component={
                            (props) => addStaticBackground(props, Auth3)
                        }
                    />

                    {/* <Stack.Screen
                        name="Setting"
                        component={
                            (props) => addStaticBackground(props, Setting)
                        }
                    /> */}

                    <Stack.Screen
                        name="AuthCarDetailsBeforeContinue"
                        component={
                            (props) => addStaticBackground(props, AuthCarDetailsBeforeContinue)
                        }
                    />
                    <Stack.Screen
                        name="AddUsers"
                        component={
                            (props) => addStaticBackground(props, AddUsers)
                        }
                    />
                    <Stack.Screen
                        name="InitComponent"
                        component={
                            (props) => addStaticBackground(props, InitComponent)
                        }
                    />
                    <Stack.Screen
                        name="WrapHome"
                        component={WrapHome}
                    />
                    <Stack.Screen
                        name="PaymentStage2"
                        component={
                            (props) => addStaticBackground(props, PaymentStage2)
                        }
                    />
                    <Stack.Screen
                        name="Payments"
                        component={
                            (props) => addStaticBackground(props, Payments)
                        }
                    />
                    <Stack.Screen
                        name="AuthCarDetails"
                        component={
                            (props) => addStaticBackground(props, AuthCarDetails)
                        }
                    />

                    <Stack.Screen
                        name="Footer"
                        component={
                            (props) => addStaticBackground(props, Footer)
                        }
                    />
                    <Stack.Screen
                        name="FirstScreen"
                        component={
                            (props) => addStaticBackground(props, FirstScreen)
                        }
                    />
                    <Stack.Screen
                        name="Auth1"
                        component={
                            (props) => addStaticBackground(props, Auth1)
                        }
                    />
                    <Stack.Screen
                        name="Terms"
                        component={
                            (props) => addStaticBackground(props, Terms)
                        }
                    />
                    <Stack.Screen
                        name="TryDialog"
                        component={
                            (props) => addStaticBackground(props, TryDialog)
                        }
                    />
                    <Stack.Screen
                        name="Auth2"
                        component={
                            (props) => addStaticBackground(props, Auth2)
                        }
                    />
                    <Stack.Screen
                        name="AuthorizedManagement"
                        component={
                            (props) => addStaticBackground(props, AuthorizedManagement)
                        }
                    />
                    <Stack.Screen
                        name="History"
                        component={
                            (props) => addStaticBackground(props, History)
                        }
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
