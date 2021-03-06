import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { TabBar, Toast } from 'zarm';
import s from './style.model.less'
import CustomIcon from '../CustomIcon';

const NavBar = (showNav) => {
  const [activeKey, setActiveKey] = useState('/');
  const history = useHistory()
  const changeTab = useCallback(
    (path) => {
      const token = localStorage.getItem('token')
      if (!token) {
        Toast.show('请先登录')
        return
      }
      setActiveKey(path)
      history.push(path)
    }
  ) 
  return (
      <TabBar visible={showNav} className={s.tab} activeKey={activeKey} onChange={changeTab}>
        <TabBar.Item 
          itemKey="/" 
          title="账单"
          icon={<CustomIcon type="zhangdan"></CustomIcon>} 
        />
        <TabBar.Item
          itemKey="/data"
          title="统计"
          icon={<CustomIcon type="tongji"></CustomIcon>}
        />
        <TabBar.Item
          itemKey="/user"
          title="我的"
          icon={<CustomIcon type="wode"></CustomIcon>}
        />
      </TabBar>
  );
};
NavBar.PropTypes = {
  showNav: PropTypes.bool
}

export default NavBar
