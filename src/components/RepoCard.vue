<template>
    <div class="card-body" data-aos="fade-up">
        <h1> {{item.name}} (By @{{item.owner.login}}) </h1>
        <p> {{item.description}} </p>

        <a :href="item.html_url" class="mx-1">
        <button class="btn btn-primary" type="button"> Visit Repository </button>
        </a>
        <a v-if="item.email" :href="'mailto:' + item.email" class="mx-1">
        <button class="btn btn-primary" type="button"> E-Mail User </button>
        </a>
        <a v-if="item.blog" :href="results.blog" class="mx-1">
        <button class="btn btn-primary" type="button"> Visit Blog </button>
        </a>
    </div>
</template>

<script>
export default {

    name: 'RepoCard',
    props: {
        item: Object
    }

}
</script>

<style>

</style>