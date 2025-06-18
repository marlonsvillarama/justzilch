<script>

</script>

<nav>
    <ul>
        <li>
            <img src="/images/chart.svg">
            <a href="/">Dashboard</a>
        </li>
        <li class="active">
            <img src="/images/donor.svg">
            <a href="#">Donors</a>
        </li>
        <li>
            <img src="/images/community.svg">
            <a href="#">Community Groups</a>
        </li>
        <li>
            <img src="/images/volunteer.svg">
            <a href="#">Volunteers</a>
        </li>
        <li>
            <img src="/images/data.svg">
            <a href="#">Data Import</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        /* border: 1px solid green; */
        font-size: var(--fs-xs);
        /* min-width: calc(var(--spacing) * 72); */
        /* padding: 1rem; */
        width: 100%;
    }
    ul {
        list-style: none;
    }
    li {
        align-items: center;
        /* border: 1px solid red; */
        cursor: pointer;
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        padding: 0.75rem 1.5rem;
        transition: 150ms all ease-in-out;
    }
    li.active {
        /* border-bottom: 1px solid var(--color-border);
        border-top: 1px solid var(--color-border); */
        background-color: var(--color-body);
        border-right: 0.25rem solid var(--color-accent);
    }
    li:hover {
        background-color: var(--color-border);
    }
    li > img {
        color: var(--color-font-lite);
        width: 1.5rem;
    }
    li > a {
        color: var(--color-font-lite);
        letter-spacing: 0.25px;
        text-decoration: none;
        transition: 150ms all ease-in-out;
    }
    li.active > a {
        color: var(--color-font);
        font-weight: 500;
    }
    li:hover > a {
        color: var(--color-font);
    }
</style>