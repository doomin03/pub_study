<template>
    <div class="header-container-wrapper">
        <div class="header-container">
            <div class="header-text" @click="$emit('move-section', 'home')">Home</div>
            <div class="header-text" @click="$emit('move-section', 'about')">About me</div>
            <div class="header-logo" @click="$emit('move-section', 'home')"></div>
            <div class="header-text" @click="$emit('move-section', 'work')">Work</div>
            <div class="header-text" @click="$emit('move-section', 'contact')">Contact</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    emits: ["move-section"],
};
</script>