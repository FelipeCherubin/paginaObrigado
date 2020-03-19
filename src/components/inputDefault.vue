<template>
    <input class="signup-input"
        v-model="content"
        @input="handleInput"
        :type="type" :placeholder="placeholder">
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Insert text'
        },
        value: {
            type: String
        }
    },
    data () {
        return {
            content: this.value
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('input', this.content)
        }
    }
}
</script>

<style lang="scss" scoped>
.signup-input {
    font-size: 1em;
    padding: 16px 24px;
    -webkit-appearance: none;
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid;
    border-color: #ccc;
    outline: none;
    text-align: left;
    -webkit-transition: border-color 0.1s ease-in-out;
    transition: border-color 0.1s ease-in-out;
    margin: 8px 0;
    &:hover {
        &::placeholder {
            color: #42a5f5;
        }
    }
    &:focus {
        background-color: #fff;
        border-color: #42a5f5;
        &::placeholder {
            color: #42a5f5;
        }
    }
}
</style>
