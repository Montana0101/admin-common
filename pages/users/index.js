import React from 'react'
import './index.less'
import { Table, Input, Button, Divider  } from 'antd';


const columns = [
    {
      title: 'Serial',
      dataIndex: 'name',
    },
    {
      title: 'Account',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Nickname',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Identity',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
        title: 'Createtime',
        dataIndex: 'name',
      },
      {
        title: 'Recently Login',
        dataIndex: 'name',
      },
      {
        title: 'Disable / Enable',
        dataIndex: 'name',
      },
      {
        title: 'Action',
        dataIndex: 'name',
      },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  
  
const UserMode = () => {
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <div className='container'>
            <header>
                <span>User Module</span>
                <Button>Add User</Button>
            </header>
            <Divider style={{margin:0}}/>
            <main>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            </main>
        </div>
    )
}

export default UserMode