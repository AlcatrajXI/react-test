import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { GitApi } from '../App.data.js';

const { Search } = Input;

const SearchInput = React.memo(props => {
    const { onSearch, pageSize, page } = props;
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let processResult = (res = undefined) => {
            let data = {
                page,
                pageSize,
                query: searchQuery,
                tableData: {
                    items: [],
                    total_count: 0
                }
            }
            if(res?.items) {
                data.tableData.items = res.items;
                data.tableData.total_count = res.total_count;
            }
            return data;
        };

        if (searchQuery.trim()) {
            fetch(`${GitApi.getUsers}?per_page=${pageSize}&page=${page}&q=${searchQuery}`)
                .then((response) => response.json())
                .then((res) => {
                    onSearch(processResult(res));
                })
                .catch((error) => {
                    onSearch(processResult());
                });
        } else {
            onSearch(processResult());
        }
    }, [searchQuery, onSearch, page, pageSize]);

    return (
        <Search
            placeholder="Search users"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={query => setSearchQuery(query)}
        />
    );
});

export default SearchInput;
