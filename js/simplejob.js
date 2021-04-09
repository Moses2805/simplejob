var removed = document.querySelectorAll(".removed");
var deleted = document.querySelectorAll(".deleted");
var clear = document.querySelector(".col-lg-7 .right button");
var created = document.querySelector(".col-lg-7 .left");
var show = document.querySelector("header .col-lg-7");
var show_result = document.querySelector("header .row")
var distance = document.querySelector("header");
var main = document.querySelector("main");

console.log(distance.style.height)



for (var i = 0; i < removed.length; i++) {

    removed[i].addEventListener('click', function () {

        for (var i = 0; i < deleted.length; i++) {

            for (var j = 0; j < deleted[i].children[0].children[1].children.length; j++) {

                if (deleted[i].children[0].children[1].children[j].id == this.id) {
                    if (deleted[i].children[0].children[1].id != this.id) {

                        deleted[i].children[0].children[1].setAttribute("id", this.id);
                        show_result.classList.remove("closed")

                        if (deleted[i].children[0].children[1].children[j].style.color != "azure") {
                            var created_element = document.createElement("BUTTON")
                            deleted[i].children[0].children[1].children[j].style.color = "azure"



                        }

                    }

                }

            }

            if (deleted[i].children[0].children[1].id != this.id) {

                deleted[i].classList.add("closed");

            }

        }

        created_element.innerText = this.innerText;
        created_element.id = this.id;
        created.parentElement.setAttribute("id", this.id)
        created_element.className = this.className;
        created.appendChild(created_element);


        clear.addEventListener('click', function () {

            for (var i = 0; i < deleted.length; i++) {

                deleted[i].classList.remove("closed");
                created_element.classList.add("closed");

                deleted[i].children[0].children[1].setAttribute("id", "no_info");

                show_result.classList.add("closed");



                for (var j = 0; j < deleted[i].children[0].children[1].children.length; j++) {


                    deleted[i].children[0].children[1].children[j].style.color = "white";
                }




            }

            function play() {
                var audio2 = document.querySelector(".sound2");
                audio2.play();
            }

            play();

            created_element.remove()

        });



        function play() {
            var audio1 = document.querySelector(".sound1");
            audio1.play();
        }
        play();


    });

}






