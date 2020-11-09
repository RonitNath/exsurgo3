<section id="Events">
    <section class="buttons items-center p-5 border-b  bg-cover bg-no-repeat bg-right-bottom bg-fixed" style="background-image: url(/assets/haas.jpg)">

        <h1 class="w-full my-0 text-5xl font-bold leading-tight text-center text-white p-8">Events</h1>

        
        <div class="container mx-auto flex flex-col md:flex-row text-gray-800">

            <div class=" md:w-1/2 flex-1 flex-col md:mx-5 rounded-lg bg-white mt-4 sm:-mt-6 hover:shadow-lg z-10">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden hover:shadow">
                    <div class="w-full p-8 text-3xl font-bold text-center">11/10 @ 8PM PST</div>
                    <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                    <ul class="w-full text-center text-base font-bold text-xl">
                        <li class="border-b py-4">&middot Valley Consulting Group <br>&middot Berkeley Business Society</li>
                        <li class="border-b py-4">Consutling case workshop <br> and how to break into Haas</li>
                        <button class="text-black mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg"><a href="https://tinyurl.com/exsurgo11">Register here</a></button>
                    </ul>					
                </div>
            </div>

            <div class="md:w-1/2 flex-1 flex-col md:mx-5 rounded-lg bg-white mt-4 sm:-mt-6 hover:shadow-lg z-10">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden hover:shadow">
                    <div class="w-full p-8 text-3xl font-bold text-center">11/12 @ 8PM PST</div>
                    <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                    <ul class="w-full text-center text-base font-bold text-xl">
                        <li class="border-b py-4 m-4">&middot Berkeley Consulting<br></li>
                        <li class="border-b py-4">Consulting case workshop<br>and how to break into consulting</li>
                        <button class="text-black mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg"><a href="https://tinyurl.com/exsurgo12">Register here</a></button>
                    </ul>					
                </div>
            </div>

        </div>



<!-- 
        <a href="https://tinyurl.com/exsurgo11" class="btn btn-5">   Valley Consulting and<br>Berkeley Business Society  <br> 11/10 8PM PST</a> 
        <a href="https://tinyurl.com/exsurgo12" class="btn btn-5"> Berkeley Consulting <br> 11/12 8PM PST</a>  -->

    </section>
</section>



<style lang="scss">

.buttons {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%;
}

//default button
.btn {
  color: #ffffff;
  cursor: pointer;
  // display: block;
  font-size:16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 25em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%; 
  background: #F7931E;
  border-radius: 15px;

}

.btn-5 {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
} 

.btn-5:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(248, 247, 247, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px; 
}
</style>