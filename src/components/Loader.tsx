import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40, color: '#FFD700' }} spin />;
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;