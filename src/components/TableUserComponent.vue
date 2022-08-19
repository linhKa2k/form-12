<template>
    <a-layout-header style="background: #fff; margin: 0 16px" class="abc">

        <div class="form-add">
            <a-input style="width: 200px" placeholder="add" v-model:value="name_User" enterButton />

            <a-select  ref ='select' style="width: 120px" v-model:value="id_Status" @change="handleChange">
                <a-select-option v-for="(item,key) in statusReducer.listItem" :key="key" :value="item.id_Status">{{
                        item.name_Status
                }}</a-select-option>
            </a-select>

            <a-button type="primary" @click="addData(name_User, id_Status)">
                <a-icon type="plus" />
                Add
            </a-button>

        </div>
        <div class="form-update">
            <a-button type="primary" @click="updateData(name_User, level, id_User)">
                <a-icon type="edit" />
                Update
            </a-button>
        </div>


    </a-layout-header>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>DANH SÁCH NGƯỜI DÙNG TRONG HỆ THỐNG</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- <a-table :columns="columns" :data-source="userReducer.$state.listItem" bordered>
    <template #bodyCell="{ column, record }">
      <template v-if="['stt','name_User', 'level', 'update_at','hr_hold','action'].includes(column.dataIndex)">
      </template>
      <template v-else-if="column.dataIndex === 'action'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.id_User]">
            <a-typography-link @click="save(record.id_User)">Save</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id_User)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.id_User)">Edit</a>
          </span>
        </div>
      </template>
    </template>
  </a-table> -->
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
                    <a-button type="primary" shape="circle">
                        <template #icon>
                            <delete-outlined />
                        </template>
                    </a-button>

                    <a-button type="primary" shape="circle">
                        <template #icon>
                            <edit-outlined />
                        </template>
                    </a-button>
                </span>
            </template>
        </template>
    </a-table>
    <button @click="handleLog">Log</button>
</template>
<script>
import { SmileOutlined, DownOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { defineComponent, onMounted, ref } from 'vue';
import { useUserStore } from "../reducer/UserReducer";
import { useStatusStore } from "../reducer/StatusReducer";
import { getUser, addUser } from '../saga/UserSaga';
import { getStatus } from '../saga/StatusSaga'

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
    dataIndex: 'action',
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
        const statusReducer = useStatusStore()
        const level = ref("")
        const id_User = ref("")
        const name_User = ref("")
        const id_Status = ref("")
        const name_Status = ref("")
        const handleLog = () => {
            console.log(id_Status)
        }
        onMounted(() => {
            getUser()
        })
        getStatus()
        const handleChange=value=>{
            
            id_Status.value = value
        }
        return {
            columns,
            userReducer,
            statusReducer,
            level,
            id_User,
            name_User,
            handleLog,
            id_Status,
            name_Status, level, id_Status,
            getStatus,handleChange


        };
    },
    methods: {
        addData(name_User, level) {
            addUser({ name_User: name_User, level: level })
        },
        
    }

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