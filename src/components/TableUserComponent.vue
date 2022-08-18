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
        <a-breadcrumb-item>DANH SÁCH NGƯỜI DÙNG TRONG HỆ THỐNG</a-breadcrumb-item>
    </a-breadcrumb>
    <a-table :columns="columns" :data-source="userReducer.$state.listItem">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'stt'">
                <span>
                    STT
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'stt'">
                <a>
                    {{ record.stt }}
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
import { defineComponent, onMounted } from 'vue';
import { useUserStore } from "../reducer/UserReducer";
import { getUser } from '../saga/UserSaga'
const columns = [{
    stt: 'STT',
    dataIndex: 'stt',
    key: 'stt',
}, {
    title: 'NAME_USER',
    dataIndex: 'name_User',
    key: 'name_user',
}, {
    title: 'LEVEL',
    dataIndex: 'level',
    key: 'level',
}, {
    title: 'DATE',
    dataIndex: 'update_at',
    key: 'date',
}, {
    title: 'HR_HOLD',
    dataIndex: 'hr_hold',
    key: 'hr_hold',
},
{
    title: 'Action',
    key: 'action',
}];
export default defineComponent({
    components: {
        SmileOutlined,
        DownOutlined,
        DeleteOutlined,
        EditOutlined
    },

    setup() {
        const userReducer = useUserStore()
        onMounted(() => {
            getUser()
        })
        return {
            columns,
            userReducer
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