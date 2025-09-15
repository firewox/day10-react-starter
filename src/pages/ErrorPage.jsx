import { useRouteError } from "react-router";

/**
 * 错误页面组件
 * 用于显示路由错误信息，根据不同的错误状态码展示不同的错误内容
 */
/**
  // 使用React Router的useRouteError钩子获取路由错误信息
 * 错误页面组件
 * 用于显示不同类型的错误信息，特别是404错误
 */
function ErrorPage() {
  const error = useRouteError(); 
  return (
    <div>
      {error.status === 404 ? <div><h1>404 not found</h1><span>Try</span></div>: <div>{JSON.stringify(error)}</div>}
    </div>
  );
}

export default ErrorPage;