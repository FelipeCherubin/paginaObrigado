<template>
    <a :href="link"><button class="signup-button">{{text}}</button></a>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Insert Text'
        },
        link: {
            type: String,
            default: '#contact-ref'
        }
    }
}
</script>

<style lang="scss" scoped>
.signup-button {
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    background-color: #fff;
    color: #595ad4;
    border: 1px solid;
    padding: 6px 16px;
    transition: 0.1s ease background-color;
    font-size: 1em;
    &:hover {
        background-color: #595ad4;
        color: #fff;
    }
}
</style>
