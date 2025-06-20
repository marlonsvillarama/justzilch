<script>
	import { onMount } from "svelte";
    import DateRangeFilter from "./DateRangeFilter.svelte";
    import * as d3 from "d3";

    let {
        id,
        data,
        filter = 'year',
        title = 'Chart',
        x,
        y
    } = $props();

    const MARGIN = 20;
    const WIDTH = 800;
    const HEIGHT = 240;

    onMount(() => {
        console.log('data', data);
        console.log(`x = ${x}; y = ${y}`);

        const svg = d3.select(`#${id}`);
        // Set up scales
        const xScale = d3.scaleBand()
            .domain(data.map(d => d[x]))
            .range([0, WIDTH])
            .padding(0.1);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d[y])])
            .nice()
            .range([HEIGHT, 0]);
        // Add X-axis
        svg.append("g")
            .attr("transform", `translate(0,${HEIGHT})`)
            .call(d3.axisBottom(xScale))
            .attr("class", "axis");
        // Add Y-axis
        svg.append("g")
            .attr("transform", `translate(0,0)`)
            .call(d3.axisLeft(yScale))
            .attr("class", "axis");
        // Draw bars
        /* svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d[x]))
            .attr("y", d => yScale(d[y]))
            .attr("width", xScale.bandwidth())
            .attr("height", d => HEIGHT  - yScale(d[y])); */
        // Add labels
        /* svg.selectAll(".label")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "label")
            .attr("x", d => xScale(d[x]) + xScale.bandwidth() / 2)
            .attr("y", d => yScale(d[x]) - 5)
            .attr("text-anchor", "middle")
            .text(d => d[y]); */
    });
</script>

<div class="card">
    <div class="header">
        <span class="title">{title}</span>
        <DateRangeFilter {filter} />
    </div>
    <svg {id} class="chart"></svg>
</div>

<style>
    .header {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .header > .title {
        color: var(--color-font);
        font-size: clamp(var(--fs-sm), 3vw, var(--fs-md));
        font-weight: 300;
    }
    .chart {
        /* border: 1px solid red; */
        margin-top: 1rem;
        height: clamp(15rem, 3vw, 20rem);
        width: 100%;
    }
</style>