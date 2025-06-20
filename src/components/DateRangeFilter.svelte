<script>
    let { filter = 'year' } = $props();
</script>

<select class={[
    "filter",
    { hidden: filter !== 'year' }
]}>
    <option>2025</option>
    <option>2024</option>
    <option>2023</option>
</select>

<style>
    .filter {
        /* position: relative; */
        background-color: white;
        border: 1px solid var(--color-border);
        border-radius: 0.5rem;
        cursor: pointer;
        padding: 0.5rem 0.75rem;
    }
    /* select {
        display: none;
    }
    .selected {
        background-color: white;
    }
    .selected:after {
        position: absolute;
        content: '';
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: white transparent transparent transparent;
    }

    .selected.arrow:after */
</style>