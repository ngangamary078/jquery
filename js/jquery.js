$(document).ready(function () {

    $(window).resize(function () {

        $(".my-btns").css("display", "block");

    });

    $("#btn-one").click(function () {

        alert("Do something");

    });



    $("#p-one").click(function () {

        $(this).text("updated")//css

        // document.getElementById("p-one").innerHTML = "updated";

    });



    $(".p-two").click(function () {

        alert("Do something for p 2");

    });

    $("#image").hover(function () {

        $(this).mouseenter(function () {

            $("#image-span").show()

        })

        $(this).mouseleave(function () {

            $("#image-span").hide();

        })



    });

});
