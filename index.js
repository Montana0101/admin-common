import BasicRouter from './routes/router'
import React from 'react'
import ReactDOM from 'react-dom'
import '/utils/default.less'
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';


const App = () => {
    return (
        <>
            <ConfigProvider direction="ltf">
                <BasicRouter />
            </ConfigProvider>
        </>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)