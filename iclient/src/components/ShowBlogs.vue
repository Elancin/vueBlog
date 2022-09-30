<template lang="">
    <div id="show-blogs" >
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索标题" >
        
        <div  class="single-blog" v-for="(blog,id) in filteredBlogs" :key="id">
            <router-link :to="'/blog/'+blog.id">
                <h2 >{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.content | snippet}}</article>
        </div> 
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    name:'show-blogs',
    data() {
        return {
            blogs:[],
            search:''
        }
    },
    created() {
        axios.get('http://127.0.0.1:7001/blogs')
        .then(data=>{
            // console.log(data);
            this.blogs=data.data;
        })
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter(blog=>{
                return blog.title.match(this.search)
            })
        }
    },
    filters:{
        // 全大写
        toUppercase(value){
            return value.toUpperCase()
        },
        snippet(value){
            return value.slice(0,100)+'...'
        }
    }
}
</script>
<style scoped>
    #show-blogs{
        max-width: 800px;
        padding: 20px;
        margin: 0 auto;
        border-radius: 10px;
        border:1px solid #aaa;
    }
    .single-blog{
        padding: 20px;
        margin: 20px;
        box-sizing: border-box;
        background-color: #eee;
        border: 1px solid #aaa;
        border-radius: 10px;
    }
    #show-blogs a{
        color: black;
        text-decoration: none;
    }
    input[type='text']{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }

</style>