<template>
    <div id="app">

        <div class="teacher">
            <h1 class="title">Post</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id_Post</th>
                        <th>Name_Post</th>
                        <th>MoTa</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="post in PostReducer.$state.listItem" :key="post">
                        <th>{{ post.id_post }}</th>
                        <th>{{ post.name_post }}</th>
                        <th>{{ post.mota }}</th>
                        <th><button @click="handleDelete(post.id_post)">Delete</button>
                            <button @click="handleSelect(post.id_post, post.name_post, post.mota)">Put</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div class="form-inputT">
                <input placeholder="namePost" v-model="name_post" />
                <input placeholder="mota" v-model="mota" />
                <button @click="add(name_post, mota)">Add</button>
                <button @click="update(name_post, mota, id_post)">Update</button>
            </div>
        </div>
        <div>
            <select  v-model="id_post">
                    <option v-for="comments in PostReducer.$state.listItem" :key="comments" :value="comments.id_post">{{
                            comments.name_post
                    }}</option>
            </select>
        </div>
        <div class="teacher">
            <h1 class="title">Comments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id_Comments</th>
                        <th>Name_Comments</th>
                        <th>ID_Post</th>
                        <th>Name_Post</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="comments in CommentsReducer.$state.listItem" :key="comments">
                        <th>{{ comments.id_comments }}</th>
                        <th>{{ comments.name_comments }}</th>
                        <th>{{ comments.id_post }}</th>
                        <th>{{ comments.name_post }}</th>
                        <th><button @click="deleteSv(comments.id_comments)">Delete</button>
                            <button
                                @click="handlePutSv(comments.id_comments, comments.name_comments, comments.id_post)">Put</button>
                        </th>
                    </tr>
                </tbody>

            </table>

            <div class="form-inputS">
                <input placeholder="Name_comments" v-model="name_comments" />

                <button @click="addSv(name_comments, id_post)">Add</button>
                <button @click="updateSv(id_comments, name_comments, id_post)">Update</button>
            </div>
        </div>
    </div>
</template>
 
<script>
import { ref, defineComponent, onMounted } from "vue";
import { usePostStore } from "../reducer/UserReducer";
import { useCommentsStore } from '../reducer/StatusReducer'
import { getPost, addPost, deletePost, updatePost } from "../saga/UserSaga"
import { getComments, addComments, deleteComments, updateComments } from '../saga/StatusSaga'
export default defineComponent({
    name: "App",
    setup() {
        const PostReducer = usePostStore();
        const CommentsReducer = useCommentsStore()
        // post
        const id_post = ref("")
        const name_post = ref("")
        const mota = ref("")
        // comments 
        const id_comments = ref("");
        const name_comments = ref("");



        onMounted(() => { getPost(), getComments() })
        return {
            PostReducer, CommentsReducer, id_post, name_post, mota, id_comments, name_comments
        }
    },
    methods: {
        // post
        add(name_post, mota) {
            addPost({ name_post: name_post, mota: mota })
        },
        handleDelete(id_post) {
            deletePost({
                id: id_post
            })
        },
        handleSelect(id_post, name_post, mota) {
            this.id_post = id_post,
                this.name_post = name_post,
                this.mota = mota
        },
        update(name_post, mota) {
            updatePost({
                id: this.id_post,
                name_post: name_post,
                mota: mota
            })
        },
        // comments
        addSv(name_comments, id_post) {
            addComments({ name_comments: name_comments, id_post: id_post })
        },
        deleteSv(id_comments) {
            deleteComments({
                id: id_comments
            })
        },
        handlePutSv(id_comments, name_comments, id_post) {
            this.id_comments = id_comments,
                this.name_comments = name_comments,
                this.id_post = id_post
        },
        updateSv() {
            updateComments({
                id: this.id_comments,
                name_comments: this.name_comments,
                id_post: this.id_post
            })
        }
    }
});

</script>
 
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
}

table,
th {
    border-collapse: collapse;
    border: 1px solid #ddd;
}

tr,
th {
    padding: 15px;
}

button {
    padding: 10px;
    margin: 0 5px 0 0;
}

.teacher {
    padding: 30px;
}

.title {
    font-size: 30px;
    font-weight: 700;
}

.form-inputT {
    display: flex;
    flex-direction: column
}

.form-inputS {
    display: flex;
    flex-direction: column
}

.student-form {
    display: flex !important;
    flex-direction: column;
}

footer {
    font-size: 0.75rem;
    text-align: right;
    color: darkgray;
}
</style>
