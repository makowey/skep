<script>
    export let text = 'name';
</script>
<div class="content">
    <svg viewBox="0 0 700 200">

        <!-- Symbol -->
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">
                {text}
            </text>
        </symbol>

        <!-- Duplicate symbols -->
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>

    </svg>
</div>

<style>
    /* Main stuff */
    .text {
        fill: none;
        stroke-width: 3;
        stroke-linejoin: round;
        stroke-dasharray: 70 330;
        stroke-dashoffset: 0;
        -webkit-animation: stroke 6s infinite linear;
        animation: stroke 6s infinite linear;
    }

    .text:nth-child(5n + 1) {
        stroke: #F2385A;
        -webkit-animation-delay: -1.2s;
        animation-delay: -1.2s;
    }

    .text:nth-child(5n + 2) {
        stroke: #F5A503;
        -webkit-animation-delay: -2.4s;
        animation-delay: -2.4s;
    }

    .text:nth-child(5n + 3) {
        stroke: #E9F1DF;
        -webkit-animation-delay: -3.6s;
        animation-delay: -3.6s;
    }

    .text:nth-child(5n + 4) {
        stroke: #56D9CD;
        -webkit-animation-delay: -4.8s;
        animation-delay: -4.8s;
    }

    .text:nth-child(5n + 5) {
        stroke: #3AA1BF;
        -webkit-animation-delay: -6s;
        animation-delay: -6s;
    }

    @-webkit-keyframes stroke {
        100% {
            stroke-dashoffset: -400;
        }
    }

    @keyframes stroke {
        100% {
            stroke-dashoffset: -400;
        }
    }

    .content {
        font: 500 10.5rem/1 'Menlo';
    }

    svg {
        width: 80%;
        margin: 0 auto;
        display: block;
        text-transform: uppercase;
    }
</style>