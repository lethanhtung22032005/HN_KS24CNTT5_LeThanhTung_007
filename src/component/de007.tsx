import React, { useState } from "react";
import {
    Layout,
    Row,
    Col,
    Statistic,
    Select,
    Button,
    Modal,
    Form,
    Input,
    Card,
} from "antd";
import {
    HeartOutlined,
    HeartFilled,
    PlusCircleOutlined,
} from "@ant-design/icons";

const {Content } = Layout;

interface Post {
    id: number;
    title: string;
    content: string;
    liked: boolean;
}

const BlogApp: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filter, setFilter] = useState<string>("all");
    const [open, setOpen] = useState<boolean>(false);
    const [form] = Form.useForm();

    const handleAddPost = () => {
        form.validateFields().then((values) => {
            const newPost: Post = {
                id: Date.now(),
                title: values.title,
                content: values.content,
                liked: false,
            };
            setPosts([...posts, newPost]);
            form.resetFields();
            setOpen(false);
        });
    };

    const toggleLike = (id: number) => {
        setPosts(
            posts.map((p) =>
                p.id === id ? { ...p, liked: !p.liked } : p
            )
        );
    };

    const filteredPosts =
        filter === "liked" ? posts.filter((p) => p.liked) : posts;

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content
                style={{
                    padding: 24,
                    background: "linear-gradient(to right, #a18cd1, #fbc2eb)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 20,
                    }}
                >
                    <Row gutter={16} style={{ marginBottom: 20 }}>
                        <Col>
                            <Statistic title="Bài viết" value={posts.length} />
                        </Col>
                        <Col>
                            <Statistic
                                title="Lượt thích"
                                value={posts.filter((p) => p.liked).length}
                            />
                        </Col>
                    </Row>

                    <div>
                        <Select
                            defaultValue="all"
                            style={{ width: 200, marginRight: 10 }}
                            onChange={(v) => setFilter(v)}
                            options={[
                                { value: "all", label: "Tất cả bài viết" },
                                { value: "liked", label: "Yêu thích" },
                            ]}
                        />
                        <Button
                            type="primary"
                            icon={<PlusCircleOutlined />}
                            onClick={() => setOpen(true)}
                        >
                            Tạo bài viết
                        </Button>
                    </div>
                </div>

                <Row gutter={[16, 16]} justify="center">
                    {filteredPosts.map((post) => (
                        <Col key={post.id} span={8}>
                            <Card
                                title={post.title}
                                actions={[
                                    post.liked ? (
                                        <HeartFilled
                                            style={{ color: "red" }}
                                            onClick={() => toggleLike(post.id)}
                                        />
                                    ) : (
                                        <HeartOutlined
                                            onClick={() => toggleLike(post.id)}
                                        />
                                    ),
                                ]}
                            >
                                {post.content}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Content>


            <Modal
                title="Bài viết của bạn"
                open={open}
                onOk={handleAddPost}
                onCancel={() => setOpen(false)}
                okText="Đăng"
                cancelText="Huỷ"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Tiêu đề"
                        name="title"
                        rules={[{ required: true, message: "Nhập tiêu đề!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Nội dung"
                        name="content"
                        rules={[{ required: true, message: "Nhập nội dung!" }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
};

export default BlogApp;
