<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String
    }
}

</script>
