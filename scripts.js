// times for fade animations, in ms
var inTime = 450;
var outTime = 250;




// on page load
$(function () {
    // fade in page on load
    console.log("fade in");
    $("#wapper").removeClass("hidden");
    $("#wrapper").fadeIn(inTime, "easeInQuad");
    
    // fade out on link click
    $(".link-anim").click(function (link) {
        var href = $(this).attr("href");
        var currentHref = $(location).attr("href");
        // if old link and new one are the same (update this to check more thoroughly)
        if (currentHref != href) {
            link.preventDefault();
            $("#wrapper").fadeOut(outTime, "easeOutQuad", function () {
                $("#wapper").addClass("hidden");
                location.href = href;
            });
        }
    });

    // bxslider carousel stuff
    $(".bxslider").bxSlider({
        auto: true,
        pager: false,
        stopAutoOnClick: true,
        captions: true,
        mode: "horizontal",
        slideWidth: 800
    });

    $("#contact").submit(function(event) {
        var isValid = true;

        // validate the name entry
        if ($("#name").val().trim() == "") {
            $("#name").next().text("Oops! Looks like you forgot your name.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }

        // validate the email entry with a regular expression
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("#email").val().trim();
        if (email == "" || !emailPattern.test(email)) {
            $("#email").next().text("Oops! Please enter a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        // validate the comments entry
        var comments = $("#comments").val().trim();
        if (comments == "") {
            $("#comments").next().text("Hmm. Surely you have something to say...right?");
            isValid = false;
        } else {
            $("#comments").next().text("");
        }

        // prevent the default action of submitting the form if any entries are invalid 
        if (isValid == false) {
            console.log("bad");
            $("#email").next().addClass("text-warning");
            $("#name").next().addClass("text-warning");
            $("#comments").next().addClass("text-warning");
            console.log("bad");
            event.preventDefault();
        } else {
            console.log("good");
            $("#email").next().removeClass("text-warning");
            $("#name").next().removeClass("text-warning");
            $("#comments").next().removeClass("text-warning");
            console.log("good");
            alert("Success!");
            $("#name").val("");
            $("#email").val("");
            $("#comments").val("");
            event.preventDefault(); // maybe remove this later
        }
    });
});