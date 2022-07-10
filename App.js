import React, { useEffect } from 'react';
import {
  Text, View, Linking
} from 'react-native';
import { Routes } from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DevService from './src/services/dev.service';
import { ToastProvider } from 'react-native-fast-toast'
import ScrollBox from './src/components/try/ScrollBox';
import Try1 from './src/components/home/Try1';


function App() {

  useEffect(() => {
    DevService.setDevOption();
  }, [])

  return (
    <>
     <ToastProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ToastProvider>
    
      {/* <ScrollBox /> */}
    </>
  );
};

export default App;

// import React from 'react';
// import T from './src/components/genericComponents/T';
// import { Bold } from './src/styles/SystemFonts';

// export default () => {
//   return (
//     <>
//       <T
//         text={'13e29ru34854t54813e29ru34854t54813e29ru34854t54813e29ru34854t54813e29ru34854t54813e29ru34854t548'}
//         numberOfLines={1}
//         style={{ color: 'black', fontFamily: Bold }}
//         fontSize={18}
//       />
//     </>
//   )
// }
