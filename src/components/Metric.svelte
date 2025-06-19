<script>
    let { img, context = '0', title = 'Title', value = 0 } = $props();
    context = parseFloat(context);

    const shortenValue = () => {
        if (value < 1000) { return value; }
        if (value < 1e6) {
            return parseInt(value / 1e3);
        }
        if (value < 1e9) {
            return parseInt(value / 1e6);
        }
    };

    const getValueUnits = () => {
        if (value < 1000) { return ''; }
        if (value < 1e6) {
            return 'K';
        }
        if (value < 1e9) {
            return 'M';
        }
    };
</script>

<div class="metric">
    <div class="header">
        <img src={img} alt={title} />
        <span>{title}</span>
    </div>
    <div class="stat">
        <span class="value">{shortenValue()}</span>
        <div class="units">{getValueUnits()}</div>
    </div>
    <div class="context">
        <div class={[
            "indicator",
            { up : context > 0 },
            { down : context < 0 }
        ]}>{ context > 0 ? '+' : '-'}{Math.abs(context)}%</div>
        <span>from last week</span>
    </div>
</div>

<style>
    .metric {
        background-color: white;
        /* border: 1px solid var(--color-border); */
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: 2rem;
        width: 100%;
        /* width: 20rem; */
    }
    .header {
        display: flex;
        flex-direction: row;
        /* gap: 1rem; */
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    .header > img {
        width: 1.5rem;
    }
    .header > span {
        color: var(--color-font-lite);
        font-size: var(--fs-md);
        font-weight: 500;
    }
    .stat {
        /* border: 1px solid red; */
        align-items: baseline;
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
        justify-content: center;
        margin-bottom: 0.25rem;
        /* text-align: center; */
    }
    .stat > .value {
        color: var(--color-accent);
        font-size: 2.125rem;
        font-weight: 700;
        letter-spacing: 2px;
    }
    @media (min-width: 24rem) {
        .stat > .value {
            font-size: 2.5rem;
        }
    }
    .stat > .units {
        color: var(--color-font-lite);
        font-size: var(--fs-2xl);
        font-weight: bold;
    }
    @media (min-width: 24rem) {

    }
    .context {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: baseline;
        justify-content: center;
    }
    .context > * {
        letter-spacing: 0.25px;
    }
    .indicator {
        /* background-color: var(--color-border); */
        border: 0;
        border-radius: var(--border-radius);
        color: var(--color-font);
        font-size: var(--fs-md);
        font-weight: 600;
        letter-spacing: 0.25px;
        /* padding: 0.5rem 0.75rem; */
    }
    /* .indicator.up {
        background-color: rgb(32 183 153 / 1);
    }
    .indicator.down {
        background-color: var(--color-accent);
    } */
    .context > span {
        color: var(--color-font-lite);
        font-size: var(--fs-xs);
        font-weight: 300;
    }
</style>