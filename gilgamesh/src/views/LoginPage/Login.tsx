import React from 'react';
import store from '../../store';
import {setUserInfo} from "../../store/userInfo";
import {Button, Card, Col, Input, Row} from 'antd';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, KeyOutlined } from '@ant-design/icons';
import './Login.scss'

export function LoginPage(){
    let cardStyle = {
        width: 500,
        marginRight: "auto",
        marginLeft:"auto",
        marginTop: 200,
        borderRadius: 25,
        border: 0,
    };
    let inputBoxStyle = {
        borderRadius: 20,
    }

    let username: string = "";
    let password: string = "";

    let submit = () => {
        console.log(username, password)
    }

    return (
        <div>
            <Card style={cardStyle} className="login-card">
                <h1>Gilgamesh</h1>
                <Input size="large"
                       placeholder="Username"
                       onChange={(e) => {username = e.target.value}}
                       prefix={<UserOutlined />}
                       style={inputBoxStyle}
                />
                <br/>
                <br/>
                <Input.Password
                    size="large"
                    placeholder="Password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={(e) => {password = e.target.value}}
                    prefix={<KeyOutlined />}
                    style={inputBoxStyle}
                />
                <br/>
                <br/>
                <Row gutter={16} justify="end">
                    <Col span={6}>
                        <Button type="default" shape="round" size="large">Register</Button>
                    </Col>
                    <Col span={5}>
                        <Button
                            type="primary"
                            shape="round"
                            size="large"
                            onClick={submit}>Login</Button>
                    </Col>
                </Row>

            </Card>
            <div className="ocean">
                <div className="wave"> </div>
                <div className="wave"> </div>
            </div>
        </div>
    );
}