import React from 'react';
import './App.less';
import {ConfigProvider} from 'antd'
import pt_BR from 'antd/es/locale/pt_BR';
import { Hello } from '@components/Hello';

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <div className="App">
        <Hello></Hello>
      </div>
    </ConfigProvider>

  );
}

export default App;
