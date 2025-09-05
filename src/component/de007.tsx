import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme, Flex } from 'antd';

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 2 }).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const TodoList: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'center',
                        gap: '20px',
                        backgroundColor: 'blueviolet',
                    }}
                />
                {/* center */}
            </Header>
            <Content style={{ padding: '0 500px' , alignItems: 'center', backgroundColor: 'blueviolet'}}>
                <Breadcrumb
                    style={{ margin: '16px 0', backgroundColor: 'blue' }}
                    items={[{ title: 'Lọc theo:' }, { title: 'Tat ca' },]}
                />
                    <Button type="primary" danger style={{ marginBottom: '10px', marginLeft: '150px' }}>Tạo bài viết</Button>
                    

                
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        width: 400,
                    }}
                >
                    <h2>Tiêu để 1:</h2>
                    <h4>Nội dung 1</h4>
                    <textarea name="" id="" placeholder="Nội dung"></textarea><br />
                    <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }}></i>



                </div>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Tiêu đề 1:
                </div>
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default TodoList;