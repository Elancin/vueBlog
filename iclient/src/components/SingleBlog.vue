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
            blog:{
                title:'',
                content:''
            },
        }
    },
    created() {
        // axios.get('http://127.0.0.1:7001/singleBlog',this.id)
        // .then(data=>{
        //     data=this.id
        //     console.log(data);
        // })
        axios.get('http://127.0.0.1:7001/singleBlog')
        .then(data=>{
             const a=JSON.parse(JSON.stringify(data.data))
            this.blog.title=a[0].title
            this.blog.content=a[0].content
            console.log(this.blog);
        })
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