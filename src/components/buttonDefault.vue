<template>
    <button class="signup-button">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Insert Text'
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
    background-color: #595ad4;
    color: #fff;
    font-weight: 300;
    padding: 16px 32px;
    transition: 0.1s ease background-color;
    font-size: 1em;
}
</style>
