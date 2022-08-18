<template>
    <a-layout-header style="background: #fff; margin: 0 16px" class="abc">

        <div class="form-add">
            <a-input style="width: 200px" placeholder="add" v-model="search" enterButton @on-search="searchData" />
            <a-button type="primary" @click="addData">
                <a-icon type="plus" />
                Add
            </a-button>

        </div>


        <div class="form-update">
            <a-input style="width: 200px" placeholder="update" v-model="search" enterButton @on-search="searchData" />
            <a-button type="primary" @click="updateData">
                <a-icon type="edit" />
                Update
            </a-button>
        </div>


    </a-layout-header>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>DANH SÁCH TÀI KHOẢN TRONG HỆ THỐNG</a-breadcrumb-item>
    </a-breadcrumb>
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'id'">
                <span>
                    ID
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'id'">
                <a>
                    {{ record.id }}
                </a>
            </template>
            <template v-else-if="column.key === 'action'">
                <span class="btn">
                    <a-button type="primary" shape="circle" :size="size">
                        <template #icon>
                            <delete-outlined />
                        </template>
                    </a-button>

                    <a-button type="primary" shape="circle" :size="size">
                        <template #icon>
                            <edit-outlined />
                        </template>
                    </a-button>
                </span>
            </template>
        </template>
    </a-table>
</template>
<script>
import { SmileOutlined, DownOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const columns = [{
    id: 'ID',
    dataIndex: 'id',
    key: 'id',
}, {
    title: 'USERNAME',
    dataIndex: 'username',
    key: 'username',
}, {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
}, {
    title: 'Action',
    key: 'action',
}];
const data = [{
    key: '1',
    id: '1',
    username: 'John Brown',
    email: "John Brown@gmail.com",
}, {
    key: '2',
    id: '2',
    username: 'Joe Black',
    email: "Joe Black@gmail.com",
}, {
    key: '3',
    id: '3',
    username: 'Joe White',
    email: "Joe White@gmail.com",
}];
export default defineComponent({
    components: {
        SmileOutlined,
        DownOutlined,
        DeleteOutlined,
        EditOutlined
    },

    setup() {
        return {
            data,
            columns,
        };
    },

});
</script>
<style >
.btn {
    display: flex;
    justify-content: space-around;
}

.abc {
    display: flex;
    justify-content: center;
}
</style>