import ProLayout, { PageContainer, ProBreadcrumb } from '@ant-design/pro-layout';
import { Suspense, useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './style.module.less';
import routes from '@/routes';
import Logo from '@/assets/logo.svg';

const BasicLayout = () => {
  const location = useLocation();

  const menus = useMemo(() => routes.find((item) => item.path === '/')!.children, []);

  return (
    <div className={styles.basicLayout}>
      <ProLayout
        fixSiderbar
        fixedHeader
        route={{
          path: '/',
          routes: menus,
        }}
        title="Admin"
        location={location}
        logo={Logo}
        breadcrumbRender={(routers = []) => routers}
        breadcrumbProps={{
          itemRender: (route) => <Link to={route.path}>{route.breadcrumbName}</Link>,
        }}
        headerContentRender={() => <ProBreadcrumb />}
        menuItemRender={({ path }, dom) => <Link to={path!}>{dom}</Link>}
      >
        <PageContainer breadcrumbRender={false}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default BasicLayout;
