<script>
    import Menu from "./Menu.svelte";
</script>

<div class="sidebar">
    <div class="logo">
        <img src="/images/logo.svg" alt="">
    </div>
    <Menu />
</div>

<style>
    /* .sidebar {
        display: none;
        border-right: 1px solid var(--color-border);
        height: 100vh;
    }
    @media (min-width: 40rem) {
        .sidebar {
            display: block;
        }
    } */
    .sidebar {
        border-right: 1px solid var(--color-border);
        height: 100vh;
    }
    .logo {
        margin: 0 2.5rem 2rem;
        padding-top: 1.5rem;
    }
</style>