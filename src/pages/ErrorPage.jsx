import { useRouteError, useNavigate } from "react-router";
import { Button, Result, Typography } from 'antd';
import '../App.css';

const { Title, Paragraph } = Typography;

/**
 * 错误页面组件
 * 用于显示路由错误信息，根据不同的错误状态码展示不同的错误内容
 */
function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    // 检查是否为404错误
    if (error?.status === 404 || (error?.status === undefined && error?.message && error.message.includes('404'))) {
        return (
            <div className="App">
                <Result
                    status="404"
                    title="404"
                    subTitle="抱歉，您访问的页面不存在。"
                    extra={
                        <Button type="primary" onClick={handleGoHome}>
                            返回首页
                        </Button>
                    }
                >
                    <div className="desc">
                        <Paragraph>
                            <Title level={4}>您可能遇到了以下问题:</Title>
                            <ul>
                                <li>该页面已被移除</li>
                                <li>该页面暂时不可用</li>
                                <li>输入的网址有误</li>
                            </ul>
                        </Paragraph>
                    </div>
                </Result>
            </div>
        );
    }

    // 处理其他类型的错误
    return (
        <div className="App">
            <Result
                status="error"
                title="出错了"
                subTitle="抱歉，处理您的请求时发生了错误。"
                extra={
                    <Button type="primary" onClick={handleGoHome}>
                        返回首页
                    </Button>
                }
            >
                <div className="desc">
                    <Paragraph>
                        <Title level={4}>错误详情:</Title>
                        <pre style={{
                            textAlign: 'left',
                            backgroundColor: '#f0f0f0',
                            padding: '16px',
                            borderRadius: '6px',
                            overflowX: 'auto'
                        }}>
              {JSON.stringify(error, null, 2)}
            </pre>
                    </Paragraph>
                    <Paragraph>
                        <Button onClick={() => window.location.reload()}>刷新页面</Button>
                    </Paragraph>
                </div>
            </Result>
        </div>
    );
}

export default ErrorPage;
