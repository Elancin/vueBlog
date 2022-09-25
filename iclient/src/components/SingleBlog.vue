<template >
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <!-- <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
            {{category}}
            </li>
        </ul> -->
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    name:'single-blog',
    data() {
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created() {
        axios.get('http://127.0.0.1:7001/singleBlog')
        .then(data=>{
            console.log(data.data);
            this.blog=data.data
            // console.log(blog);
            // return data.json()
        })
        // .then(data=>{
        //     this.blog=data
        //     console.log(blog);
        // })
    },
}
</script>
<style>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>