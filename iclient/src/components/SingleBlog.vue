<template >
    <div id="single-blog">
        <router-link to="/">cd..</router-link>
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
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

        axios.get('http://127.0.0.1:7001/detailBlog/',{params:{id:this.id}})
        .then(data=>{
            const a=JSON.parse(JSON.stringify(data.data))
            this.blog.title=a[0].title
            this.blog.content=a[0].content
        })
    },
}
</script>
<style >
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
    .router-link-active {
        color: black;
        text-decoration: none
    }
</style>