<script>
    import Menu from "./Menu.svelte";
</script>

<div class="sidebar">
    <img src="/images/logo.svg" class="logo">
    <Menu />
</div>

<style>
    .sidebar {
        border-right: 1px solid var(--color-border);
        height: 100%;
        width: calc(var(--spacing) * 72);
    }
    .logo {
        border: 1px solid red;
        /* margin: 0 auto; */
        margin-inline: 0 auto;
        padding: 1rem;
        width: calc(var(--spacing) * 48);
    }
</style>