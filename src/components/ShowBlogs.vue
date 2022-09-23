<template lang="">
    <div id="show-blogs" v-theme:column="'normal'">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索" >
        
        <div  class="single-blog" v-for="blog in filteredBlogs">
            <router-link :to="'/blog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.content | snippet}}</article>
        </div> 
    </div>
</template>
<script>
export default {
    name:'show-blogs',
    data() {
        return {
            blogs:[],
            search:''
        }
    },
    created() {
        this.$http.get('https://myblog-f02b1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
        .then(data=>{
            // console.log(data.json());
            // this.blogs=data.body.slice(0,10);
            return data.json();
        })
        .then(data=>{
            let blogsArray=[];
            for(let key in data){
                // console.log(data[key]);
                data[key].id=key
                blogsArray.push(data[key])
            }
            // console.log(blogsArray);
            this.blogs=blogsArray
        })
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    },
    filters:{
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
        margin: 0 auto;
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
        color: #444;
        text-decoration: none;
    }
    input[type='text']{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }

</style>