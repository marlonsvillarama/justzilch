<script>
    import Metric from "../components/Metric.svelte";
    import TransactionIcon from '/static/images/gift.svg';
    import HeartIcon from '/static/images/heart.svg';
    import WeightIcon from '/static/images/weight.svg';
</script>

<div class="dash">
    <div class="metrics">
        <Metric img={TransactionIcon} title="Transactions" value='87485' context='3.45' />
        <Metric img={HeartIcon} title="People Fed" value='13691622' context='-1.5' />
        <Metric img={WeightIcon} title="Weight (kg)" value='388652' context='4.33' />
        <Metric img={WeightIcon} title="Weight (kg)" value='388652' context='4.33' />
    </div>
</div>

<style>
    .dash {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    .metrics {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* gap: 1rem; */
        width: 100%;
    }
    @media (min-width: 32rem) {
        .metrics {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 80rem) {
        .metrics {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>