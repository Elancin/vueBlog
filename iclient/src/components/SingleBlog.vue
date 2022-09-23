<template >
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
            {{category}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'single-blog',
    data() {
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created() {
        this.$http.get('https://myblog-f02b1-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+this.id+'.json')
        .then(data=>{
            // console.log(data);
            // this.blog=data.body
            return data.json()
        })
        .then(data=>{
            this.blog=data
            // console.log(blog);
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