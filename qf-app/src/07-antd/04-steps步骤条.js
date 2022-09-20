import './css/layout.css'
import './css/steps步骤条.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {
    Layout,
    Menu,
    Steps,
    Button,
    message,
} from 'antd';

import React, { useState } from 'react';

const { Step } = Steps;
const { Header, Sider, Content } = Layout;


const steps = [{
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];



const StepApp= () => {
    const [current, setCurrent] = useState(1);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
        <Steps current={current}>
            {steps.map(item => (
            <Step key={item.title} title={item.title} />
            ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>

        {current>0 && <button type="primary" onClick={()=>prev()} >上一步</button>}
        {current===2 && <button type="primary" danger="true">完成</button>}
        {(steps.length>0) && <button type="primary" onClick={()=>next()}>下一步</button>}


        {/* <div className="steps-action">
            {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
            </Button>
            )}
            {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
            </Button>
            )}
        </div> */}
        </>
    );
};




const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                    },
                    {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                    },
                    {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                    },
                ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
                >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
                </Header>
                <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                >

                    {/* 步骤条 */}
                    <StepApp/>

                </Content>
            </Layout>
        </Layout>
    );
};

export default App;