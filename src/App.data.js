const apiEndpint = 'https://api.github.com/'

export const GitApi = {
    getUsers: `${apiEndpint}search/users`
}

export const Columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar_url',
        key: 'avatar_url',
        render: (text, row) => <img src={text} style={{ width: '50px' }} alt={row.user} className="img-thumbnail" />,
    },
    {
        title: 'User',
        dataIndex: 'login',
        key: 'login',
        sorter: (a, b) => a.login.toString().localeCompare(b.login),
        defaultSortOrder: 'ascend'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'id',
    }
];