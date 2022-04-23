import React from 'react';
import logo from './logo.svg';
import './App.less';
import {ConfigProvider} from 'antd'
import pt_BR from 'antd/es/locale/pt_BR';

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <div className="App">
      
      </div>
    </ConfigProvider>

  );
}

export default App;
