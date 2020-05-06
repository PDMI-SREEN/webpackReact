import React from "react"
import { Layout, Menu, Breadcrumb ,Button} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Cout from "./view/cout";
import FriendStatus from "./view/friendStatus"
import { connect } from 'react-redux';
import {  increase ,add , getUserInfo} from "./actions"
import { getList  } from  "./api/api"
  
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            data:[],
            number:0
        }
    }
    componentWillMount(){
        this.props.getUserInfo()
        // getList()
        // console.log("Home -> componentWillMount -> getList()", getList())
        console.log(process.env,this.props,this.props.increase(),this.props.getUserInfo())
    }

    componentDidMount(){
        // this.getAjax()
        // getList()
        this.props.getUserInfo()
    }

    getAjax(){
        let newXml= new XMLHttpRequest()
        newXml.onreadystatechange=function(){
            // console.log(this.readyState,this)
            if(this.readyState==4){
                    // this.responseText
                    // this.response
                    // console.log("Home -> newXml.onreadystatechange -> this.response", this.response)
                    // console.log("Home -> newXml.onreadystatechange -> this.responseText", this.responseText)
            }
        }

        newXml.open("get","http://mock.studyinghome.com/mock/5e8e9339301a4f07a0c8a866/react/getlist")
        newXml.send()
    }


    onClick(){
        this.props.increase()
    }

    onClickAdd(){
        this.props.add()
        this.props.getUserInfo()
        this.props.getList()
        console.log("Home -> onClickAdd -> getList", this.props)
        // this.props.getList()
    }

    render(){
        // console.log(this.props.counter.userInfo)
        console.log("Home -> render -> this.props.counter.userInfo", this.props)
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
                        <div>{this.props.count}</div>
                        <Button onClick={()=>this.onClick()}>--(减)</Button>
                        <Button onClick={()=>this.onClickAdd()}>++加</Button>
                        {//<FriendStatus  status={false} />
                    }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) => {
    console.log(state,ownProps)
   return  {
    count: state.counter.count,
    userInfo:state.counter.userInfo,
    list:state.counter.list
  }}

// const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => {
//     return {
//         increase:()=>dispatch({
//             type:"increase"
//         }),
//     }
// }

const mapDispatchToProps = {
    increase,
    add,
    getUserInfo,
    getList
}

export default connect(mapStateToProps,mapDispatchToProps)(Home) 