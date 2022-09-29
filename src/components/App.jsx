import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './Box';

import GreetBlock from './Header/GreetBlock/GreetBlock';
import ThemeButton from './Header/ThemeButton/ThemeButton';
import PhoneBook from './PhoneBook/PhoneBook';
import Feedback from './Feedback/Feedback';
import Videoplayer from './Videoplayer/Videoplayer';
import Reader from './Reader/Reader';
import LangSwitcher from './LangSwitcher/LangSwitcher';
// import ImageFinder from './ImageFinder/ImageFinder';
// import EmailButton from 'components/Header/EmailButton/EmailButton';
// import NotificationButton from './Header/NotificationButton/NotificationButton';
// import SettingsButton from './Header/SettingsButton/SettingsButton';
// import Header from './Header/Header';

export class App extends Component {
  state = {
    email: 44,
    notification: 12,
    name: 'Andrey',
    darkTheme: false,
    query: '',
  };

  changeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }));
  };

  render() {
    const { darkTheme, name } = this.state;
    // const { email, notification } = this.state;
    return (
      <Box
        display="flex"
        // width="100vw"
        minHeight="100vh"
        p={4}
        bg={darkTheme ? 'text' : 'body'}
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Box width="100%">
          <Box
            as="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #e0e0e0"
          >
            <GreetBlock name={name} darkTheme={darkTheme} />

            <Box display="flex" gridGap={4} alignItems="center">
              <LangSwitcher />
              <ThemeButton darkTheme={darkTheme} onClick={this.changeTheme} />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gridGap="20px"
            justifyContent="center"
            alignItems="center"
          >
            {/* <Box width="70%" p={4} mb={5} display="block">
              <ImageFinder />
            </Box> */}
            <Box width="300px">
              <PhoneBook />
            </Box>
            <Box width="300px" display="block">
              <Feedback />
            </Box>
            <Box width="70%" p={4} display="block">
              <Videoplayer />
            </Box>
            <Box width="50%" p={4} display="block">
              <Reader />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
