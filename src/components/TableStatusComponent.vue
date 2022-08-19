<template>
    <a-layout-header style="background: #fff; margin: 0 16px" class="abc">

        <div class="form-add">
            <a-input style="width: 200px" placeholder="add" v-model:value="name_Status" enterButton />
            <a-input style="width: 100px" placeholder="level" v-model:value="level" enterButton />
            <a-button type="primary" @click="addData(name_Status, level)">
                <a-icon type="plus" />
                Add
            </a-button>

        </div>


        <div class="form-update">
            <!-- <a-input style="width: 200px" placeholder="update" v-model:value="id_Status" enterButton /> -->
            <a-button type="primary" @click="updateData(name_Status, level, id_Status)">
                <a-icon type="edit" />
                Update
            </a-button>
        </div>

        <!-- <div>
            <a-select style="width: 120px" v-model:value="id_Status">
                <option v-for="status in statusReducer.listItem" :key="status" :value="status.level">{{
                        status.level
                }}</option>
            </a-select>
        </div> -->


    </a-layout-header>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>DANH SÁCH TRẠNG THÁI TRONG HỆ THỐNG</a-breadcrumb-item>
    </a-breadcrumb>
    <a-table :columns="columns" :data-source="statusReducer.listItem">
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
                <span>
                    <a-button type="primary" shape="circle" @click="put(record)">
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
import { defineComponent, onMounted, ref } from 'vue';
import { useStatusStore } from "../reducer/StatusReducer";
import { getStatus, addStatus, updateStatus } from '../saga/StatusSaga'
const columns = [{
    stt: 'STT',
    dataIndex: 'stt',
    key: 'stt',
}, {
    title: 'Name',
    dataIndex: 'name_Status',
    key: 'name',
}, {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
}, {
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
        const statusReducer = useStatusStore()
        const name_Status = ref("")
        const id_Status = ref("")
        const level = ref("")



        onMounted(() => {
            getStatus()
        })
        return {
            columns,
            statusReducer,
            name_Status,
            id_Status,
            level
        };
    },
    methods: {
        addData(name_Status, level) {
            addStatus({ name_Status: name_Status, level: level })
        },
        put(record) {
            this.id_Status = record.id_Status
            this.name_Status = record.name_Status
            this.level = record.level
        },
        updateData(name_Status, level, id_Status) {
            updateStatus({ name_Status: name_Status, level: level, id: id_Status })
        }
    }

});
</script>
  <style >
  .btn {
      display: flex;
  }
  
  .abc {
      display: flex;
      justify-content: center;
  }
  </style>