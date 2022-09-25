/*
 * @Author: Topskys
 * @Date: 2022-09-24 23:32:22
 * @LastEditTime: 2022-09-25 09:55:07
 * 如果有没有src/layout/index.tsx文件，src/pages/index.tsx会成为初始主页、根组件
 */
import { Redirect } from 'umi';
// import styles from './index.less';

export default function IndexPage() {
  return (
    // <div>
    //   <h1 className={styles.title}>Page index</h1>
    // </div>
    <Redirect to="/film" />
  );
}
