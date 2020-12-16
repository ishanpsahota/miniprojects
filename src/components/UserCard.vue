<template>
    <div class="card-body">
        <h1> {{results.name}} (@{{results.login}}) </h1>
        <p class="card-text"> {{results.bio}} </p>
        <a :href="results.html_url" class="mx-1">
            <button class="btn btn-primary" type="button"> Visit Repository </button>
        </a>
        <a v-if="results.email" :href="'mailto:' + results.email" class="mx-1">
            <button class="btn btn-primary" type="button"> E-Mail User </button>
        </a>
        <a v-if="results.blog" :href="results.blog" class="mx-1">
            <button class="btn btn-primary" type="button"> Visit Blog </button>
        </a>
    </div>    
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        results: Object
    }
}
</script>

<style>

</style>