<template lang="">
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submmited">
        <label >博客标题</label>
        <input type="text" v-model="blog.title" required>
        <label >博客内容</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkboxes">
            <label >Vue</label>
            <input type="checkbox" value="Vue" v-model="blog.categories">
            <label >Node</label>
            <input type="checkbox" value="Node" v-model="blog.categories">
            <label >Git</label>
            <input type="checkbox" value="Git" v-model="blog.categories">
        </div>
        <button @click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
        <h3>博客发布成功</h3>
    </div>
    </div>
</template>
<script>
export default {
    name: 'add-blog',
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories:[],
            },
            submmited:false,
        }
    },
    methods: {
        post(){
            this.$http.post('https://myblog-f02b1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',this.blog)
            .then((data)=>{
                console.log(data);
                this.submmited=true
            });
        }
    },
}
</script>
<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type='text'],textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea{
        height: 200px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 19px;
        cursor: pointer;
    }
</style>