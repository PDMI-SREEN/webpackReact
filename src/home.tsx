import React from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Cout from "./view/cout";
import FriendStatus from "./view/friendStatus"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component{
    componentWillMount(){
        console.log(process.env)
    }

    componentDidMount(){
        this.getAjax()
    }

    getAjax(){
        let newXml= new XMLHttpRequest()
        newXml.onreadystatechange=function(){
            console.log(this.readyState,this)
            if(this.readyState==4){
                    // this.responseText
                    // this.response
                    console.log("Home -> newXml.onreadystatechange -> this.response", this.response)
                    console.log("Home -> newXml.onreadystatechange -> this.responseText", this.responseText)
            }
        }

        newXml.open("get","http://mock.studyinghome.com/mock/5e8e9339301a4f07a0c8a866/react/getlist")
        newXml.send()
    }

    render(){
        return (
             <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <UserOutlined />
                            subnav 1
                        </span>
                        }
                    >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <LaptopOutlined />
                            subnav 2
                        </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                        <span>
                            <NotificationOutlined />
                            subnav 3
                        </span>
                        }
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        <Cout />
                        {//<FriendStatus  status={false} />
                    }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Home