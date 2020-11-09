<!-- <section class="bg-gray-400 overflow-hidden flex flex-col md:flex-row items-center content-center justify-items-auto box-border p-4 m-4">

    <div class="max-w-x1 w-1/7 p-6 m-6 md:m-0 md:p-2 "> <img src="/assets/partners/bbs.png" alt="berkeley business society's logo"/>   </div>
    <div class="w-1/7 p-6 m-6 md:m-0 md:p-2"> <img src="/assets/partners/bc.png" alt="berkeley consulting's logo"/>    </div>
    <div class="w-1/7 p-6 m-6 md:m-0 md:p-2"> <img src="/assets/partners/hcg.png" alt="healthcare consulting group's logo"/>   </div>
    <div class="w-1/7 p-6 m-6 md:m-0 md:p-2"> <img src="/assets/partners/pcg.png" alt="phoenix consulting group's logo"/>   </div>
    <div class="w-1/7 p-6 m-6 md:m-0 md:p-2"> <img src="/assets/partners/ufa.png" alt="undergraduate financial association's logo"/>   </div>
    <div class="w-1/7 p-6 m-6 md:m-0 md:p-2"> <img src="/assets/partners/vcg.png" alt="valley consulting group's logo"/>   </div>
    <div class="w-1/7 p-6 m-6 md:m-0 md:p-2"> <img src="/assets/partners/delta.png" alt="delta consulting group's logo"/> </div>

</section> -->



<section id="Partners" class=" py-8 text-center bg-gradient-to-b from-white to-orange-400 ">

    <div class="container mx-auto pt-4 pb-12 ">

        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 m-4 mb-10"> Partners</h1>

        <!-- <ul class='container flex flex-col md:flex-row flex-grow flex-shrink md:flex-row items-center '>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/bbs.png"   alt="Berkeley Business Society"/></li></div>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/pcg.png"   alt="Phoenix Consulting Group"/></li></div>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/hcg.png"   alt="Healthcare Consulting Group"/></li></div>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/bc.png"    alt="Berkeley Consulting"/></li></div>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/ufa.png"   alt="Undergraduate Financial Association"/></li></div>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/vcg.png"   alt="Valley Consulting Group"/></li></div>
            <div class='bg-black h-10 w-full'><li class='object-fill'><img src="/assets/partners/delta.png" alt="Delta Consulting Group"/></li></div>
         </ul> -->

         <ul class='circle-container'>
            <li class='grow'><img src="/assets/partners/bbs.png"   alt="Berkeley Business Society"/></li>
            <li class='grow'><img src="/assets/partners/pcg.png"   alt="Phoenix Consulting Group"/></li>
            <li class='grow'><img src="/assets/partners/hcg.png"   alt="Healthcare Consulting Group"/></li>
            <li class='grow'><img src="/assets/partners/bc.png"    alt="Berkeley Consulting"/></li>
            <li class='grow'><img src="/assets/partners/ufa.png"   alt="Undergraduate Financial Association"/></li>
            <li class='grow'><img src="/assets/partners/vcg.png"   alt="Valley Consulting Group"/></li>
            <li class='grow'><img src="/assets/partners/nothing.png"   alt=""/></li>
            <li class='grow'><img src="/assets/partners/delta.png" alt="Delta Consulting Group"/></li>
         </ul>

    </div>
</section>


<style lang="scss">

    $blue: #6699FF;
    $white: #FFFFFF;

    body {
        background-color: $blue;
        color: $white;
        font-family: 'Droid Sans', sans-serif;
        text-align: center;
        
        h1 {
            font-size: 2.5em;
        }
        
        ul {
            padding: 0;
            font-size: 2em;

            li {
                display: inline-block;
                width: 1.2em;

                &.grow {
                    transition: all .8s ease-in;

                    &:hover {
                       transform: scale(1.5);
                    }
                }
            }
        }
    }



    @mixin distribute-on-circle( 
    $nb-items,
    $circle-size,
    $item-size,
    $class-for-IE: false
    ) {
    $half-item: ($item-size / 2);
    $half-parent: ($circle-size / 2);
    
    position: relative; /* 1 */
    width:  $circle-size;
    height: $circle-size;
    padding: 0;
    border-radius: 50%; 
    list-style: none; /* 2 */ 
    box-sizing: content-box; /* 3 */ 
    
    > * { /* 4 */
        display: block;
        position: absolute;
        top:  50%; 
        left: 50%;
        width:  $item-size;
        height: $item-size;
        margin: -$half-item;
    }
    
    $angle: (360 / $nb-items);
    $rot: 0;

    @for $i from 1 through $nb-items {
        @if not $class-for-IE {
        > :nth-of-type(#{$i}) {
            transform: rotate($rot * 1deg) translate($half-parent) rotate($rot * -1deg);
        }
        } @else {
        > .#{$class-for-IE}#{$i} {
            // If CSS transforms are not supported
            $mt: sin($rot * pi() / 180) * $half-parent - $half-item;
            $ml: cos($rot * pi() / 180) * $half-parent - $half-item;
            margin: $mt 0 0 $ml;
        }
        }

        $rot: ($rot + $angle);
    }
    }

    .circle-container {
    @include distribute-on-circle(8, 20em, 6em, false); 
    margin: 5em auto 0;
    border: solid 0px tomato;
    }

    // .circle-container img { 
    // display: block; 
    // width: 100%; 
    // border-radius: 50%;
    // filter: grayscale(100%);

    // &:hover {
    //     filter: grayscale(0);
    // }
    // }


</style>