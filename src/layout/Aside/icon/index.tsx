import { Typography } from 'antd'

const { Title } = Typography

const Component: React.FC = () => {
  return (
    <div className="h-[56px] py-2 m-[4px] pl-[24px] pr-[16px] flex items-center">
      <img width={24} height={24} src="/icon.png" />
      <Title className="!mb-0" level={5}>
        React Template
      </Title>
    </div>
  )
}

export default Component
