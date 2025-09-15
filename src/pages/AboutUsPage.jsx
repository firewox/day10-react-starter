import React from 'react';
import { Card, Col, Row, Typography, Divider } from 'antd';
import '../App.css';

const { Title, Paragraph } = Typography;

export const AboutUsPage = () => {
    return (
        <div style={{ padding: '24px' }}>
            <Title level={1}>关于我们</Title>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card title="我们的故事" bordered={false}>
                        <Paragraph>
                            我们是一家致力于提高个人和团队效率的公司。通过创新的技术解决方案，
                            我们帮助用户更好地管理时间和任务，实现工作与生活的平衡。
                        </Paragraph>
                        <Paragraph>
                            自成立以来，我们一直专注于开发简单易用、功能强大的待办事项管理工具，
                            为全球数百万用户提供服务。
                        </Paragraph>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                    <Card title="我们的使命" bordered={false}>
                        <Paragraph>
                            帮助每个人和团队更好地管理工作和生活，提高生产力，实现目标。
                        </Paragraph>
                    </Card>
                </Col>
                <Col xs={24} sm={12}>
                    <Card title="我们的愿景" bordered={false}>
                        <Paragraph>
                            成为全球领先的生产力工具提供商，推动个人和组织效率的持续提升。
                        </Paragraph>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Title level={2}>联系我们</Title>

            <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                    <Card title="客服热线" bordered={false}>
                        <Paragraph>400-123-4567</Paragraph>
                        <Paragraph>周一至周日 9:00-21:00</Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="商务合作" bordered={false}>
                        <Paragraph>business@example.com</Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="技术支持" bordered={false}>
                        <Paragraph>support@example.com</Paragraph>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card title="公司地址" bordered={false}>
                        <Paragraph>
                            上海市浦东新区张江高科技园区XX路XX号
                        </Paragraph>
                        <Paragraph>
                            北京市朝阳区望京SOHO T1座XX层
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
