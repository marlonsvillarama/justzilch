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

<div class="card">
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
    /* .metric {
        background-color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: clamp(1.25rem, 3vw, 2rem);
        width: 100%;
    } */
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    .header > img {
        width: clamp(1.25rem, 3vw, 1.5rem);
    }
    .header > span {
        color: var(--color-font-lite);
        font-size: clamp(var(--fs-xs), 3vw, var(--fs-sm));
    }
    .stat {
        align-items: baseline;
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
        justify-content: center;
        margin-bottom: 0.25rem;
    }
    .stat > .value {
        color: var(--color-accent);
        font-size: clamp(var(--fs-xl), 3vw, var(--fs-3xl));
        font-weight: 700;
        letter-spacing: 2px;
    }
    .stat > .units {
        color: var(--color-font-lite);
        font-size: clamp(var(--fs-lg), 3vw, var(--fs-2xl));
        font-weight: bold;
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
        font-size: clamp(var(--fs-2xs), 3vw, var(--fs-sm));
    }
    .indicator {
        color: var(--color-font);
        font-weight: 600;
    }
    .context > span {
        color: var(--color-font-lite);
        font-weight: 300;
    }
</style>