<template>
    <div class="footer-container-wrapper">
        <div class="footer-text-container">
            <div class="footer-text home" @click="$emit('move-section', 'home')">Home</div>
            <div class="footer-text about" @click="$emit('move-section', 'about')">About me</div>
            <div class="footer-text work" @click="$emit('move-section', 'work')">Work</div>
            <div class="footer-text contact" @click="$emit('move-section', 'contact')">Contact</div>
        </div>

        <div class="social-icon-wrap">
            <button class="social-btn instagram"></button>
            <button class="social-btn twitter"></button>
            <button class="social-btn linkedin"></button>
            <button class="social-btn facebook"></button>
            <button class="social-btn youtube"></button>
        </div>

        <div class="divider"></div>
        <div class="bottom-text">Terms of Service - Privacy Policy</div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    emits: ["move-section"],
};
</script>
