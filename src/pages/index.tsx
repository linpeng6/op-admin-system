import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Timeline, Tag } from 'antd';
import announcement from '@/assets/icons/announcement.svg';
import guide from '@/assets/icons/guide.svg';
import news from '@/assets/icons/news.svg';
import gift from '@/assets/icons/gift.svg';
import code from '@/assets/icons/code.svg';
import book from '@/assets/icons/book.svg';
import advertisement from '@/assets/icons/advertisement.svg';
import coffee from '@/assets/icons/coffee.svg';
import { getUpdateLogListApi } from '@/services';
import { UpdateLog } from '@/interface/home';
import './index.less';

const essays = [
  '此项目创建的初衷是为了记录一些常见的业务场景的解决方案。',
  '感恩相遇,希望所有看到这个项目的伙伴都有心得和收获。',
  '愿每个人都能如愿...',
];

const index: React.FC = () => {
  const [updateLogs, setUpdateLogs] = useState<UpdateLog[]>([]);

  const iconList = [
    {
      icon: guide,
      name: '引导',
    },
    {
      icon: announcement,
      name: '公告',
    },
    {
      icon: news,
      name: '新闻',
    },
    {
      icon: gift,
      name: '礼物',
    },
    {
      icon: code,
      name: '源码',
    },
    {
      icon: book,
      name: '书籍',
    },
    {
      icon: advertisement,
      name: '广告',
    },
    {
      icon: coffee,
      name: '休息',
    },
  ];

  useEffect(() => {
    getUpdateLogList();
  }, []);

  const getUpdateLogList = async () => {
    const res = await getUpdateLogListApi();
    if (res.code === 1) {
      const { data = [] } = res;
      setUpdateLogs(data);
    }
  };

  return (
    <div className="home">
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Card>
            <p>遇见是美好，之后便是造化。</p>
          </Card>
        </Col>
        <Col span={12}>
          <Row gutter={[10, 10]}>
            {iconList.map((item) => (
              <Col span={6} key={item.name}>
                <Card className="quick-access">
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          <Card title="更新日志">
            <Timeline>
              {updateLogs.map((item) => (
                <Timeline.Item key={item.time}>{item.content}</Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="作者随笔" extra={<Tag color="#87d068">相遇相识</Tag>}>
            {essays.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default index;
