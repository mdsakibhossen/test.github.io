

const container_fluid = document.querySelector(".container_fluid");
const nav_btn = document.querySelector(".nav_btn");
const menu_search_btn = document.querySelector("#menu_search_btn");
const search_cross = document.querySelector(".search_cross");
const nav_bar = document.querySelector(".nav_bar");
const search_box = document.querySelector(".search_box");
const top_nav_bar = document.querySelector(".top_nav_bar");
const blog_menu_li = document.querySelector(".blog_menu_li");
const blog_menu_i = document.querySelector(".blog_menu_icon");
const sub_blog_menu = document.querySelector(".sub_blog_menu");
const toggle_menu_search_box = document.querySelector('.toggle_menu_search_box');
const container = document.querySelector(".container");
const search_box_overfollow = document.querySelector(".search_box_overfollow");
const pre_loader = document.querySelector(".pre_loader");
const content_wrapper = document.querySelector(".content_wrapper");
const menu_wrapper = document.querySelector(".menu_wrapper");





window.addEventListener("load", () => {
    pre_loader.classList.add("load_complete");
    container_fluid.classList.add("animation_container_fluid");
    content_wrapper.classList.add("animation_content_wrapper");

    const show = document.querySelector('#show');
    const texts = ['Web Designer', 'Web Developer', 'Graphic Designer'];
    let count = 0;
    let index = 0;

    (function type() {

        if (count === texts.length) {
            count = 0;
        }
        let currentText = texts[count];
        let letter = currentText.slice(0, ++index);

        show.innerHTML = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 300);

    }());


});

menu_search_btn.addEventListener("click", () => {
    search_box_overfollow.style.display = "block";
    nav_bar.style.display = "none";
    search_box.classList.add("anim_search_box_on");
    menu_wrapper.classList.add("menu_wrapper_hidden");


});

search_cross.addEventListener("click", () => {
    search_box_overfollow.style.display = "none";
    nav_bar.style.display = "block";
    nav_bar.classList.add("anim_nav_bar_on");


    setTimeout(() => {
        menu_wrapper.classList.remove("menu_wrapper_hidden");
    }, 2000);

});








nav_btn.addEventListener("click", () => {
    top_nav_bar.classList.toggle("active_top_nav_bar");
    nav_btn.classList.toggle("active_nav_btn");
    container_fluid.classList.toggle("black_color_container_fluid");

});

top_nav_bar.addEventListener("click", () => {
    top_nav_bar.classList.remove("active_top_nav_bar");
    nav_btn.classList.remove("active_nav_btn");
    container_fluid.classList.remove("black_color_container_fluid");
});

// blog_menu_li.addEventListener("click", () => {
//     blog_menu_i.classList.toggle("active_blog_menu_i");
//     sub_blog_menu.classList.toggle("active_sub_blog_menu");
// });



window.addEventListener("resize", () => {
    location.reload();
});

let height = window.innerHeight;
// console.log(height);
if (height < 400) {
    toggle_menu_search_box.style.display = "none";
}

// ----------form validation----------


function check_form() {
    const user = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const contact_submit_btn = document.querySelector("#contact_submit_btn");
    const show_name_problem = document.querySelector("#show_name_problem");
    const show_email_problem = document.querySelector("#show_email_problem");
    const show_message_problem = document.querySelector("#show_message_problem");
    if ((user == "") && (email == "") && (message == "")) {
        show_name_problem.innerHTML = "please enter your name";
        show_email_problem.innerHTML = "please enter your email";
        show_message_problem.innerHTML = "please write your message";
        return false;
    }
    if ((email == "") && (message == "")) {
        show_email_problem.innerHTML = "please enter your email";
        show_message_problem.innerHTML = "please write your message";
        return false;
    }
    if ((user == "") && (email == "")) {
        show_name_problem.innerHTML = "please enter your name";
        show_email_problem.innerHTML = "please enter your email";
        return false;
    }
    if ((user == "") && (message == "")) {
        show_name_problem.innerHTML = "please enter your name";
        show_message_problem.innerHTML = "please write your message";
        return false;
    }
    if (user == "") {
        show_name_problem.innerHTML = "please enter your name";
        return false;
    }
    if (email == "") {
        show_email_problem.innerHTML = "please enter your email";
        return false;
    }
    if (message == "") {
        show_message_problem.innerHTML = "please write your message";
        return false;
    }

    if((user.length < 3) || (!isNaN(user))){
        show_name_problem.innerHTML = "enter valid name";
        return false;
    }

    if(((email.length - email.lastIndexOf(".")) > 4) || ((email.length - email.lastIndexOf(".")) < 3)){
        show_email_problem.innerHTML = "enter valid email";
        return false;
    }

    // console.log(user);
    // console.log(email);
    // console.log(message);
}




window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        container_fluid.classList.add("after_scroll_container_fluid");
    } else {
        container_fluid.classList.remove("after_scroll_container_fluid");
    }


    if ((scrolled >= 0) && (scrolled < 500)) {
        container_fluid.classList.add("animation_container_fluid");
        content_wrapper.classList.add("animation_content_wrapper");
    } else {
        container_fluid.classList.remove("animation_container_fluid");
        content_wrapper.classList.remove("animation_content_wrapper");
    }
    // console.log(scrolled);


    let width = window.matchMedia("(min-width: 1200px)");
    if (width.matches) {

        // ----------about section----------
        if ((scrolled > 350) && (scrolled < 1200)) {

            const left_about = document.querySelector(".left_about");
            const right_about = document.querySelector(".right_about");

            left_about.classList.add("anim_left_about");
            right_about.classList.add("anim_right_about");
        } else {
            const left_about = document.querySelector(".left_about");
            const right_about = document.querySelector(".right_about");

            left_about.classList.remove("anim_left_about");
            right_about.classList.remove("anim_right_about");
        }


        // ----------skill section----------
        if ((scrolled > 1000) && (scrolled < 2000)) {

            const html = document.querySelector(".html");
            const css = document.querySelector(".css");
            const js = document.querySelector(".js");
            const php = document.querySelector(".php");
            const left_skill = document.querySelector(".left_skill");

            html.classList.add("anim_html");
            css.classList.add("anim_css");
            js.classList.add("anim_js");
            php.classList.add("anim_php");
            left_skill.classList.add("anim_left_skill");

        } else {
            const html = document.querySelector(".html");
            const css = document.querySelector(".css");
            const js = document.querySelector(".js");
            const php = document.querySelector(".php");
            const left_skill = document.querySelector(".left_skill");

            html.classList.remove("anim_html");
            css.classList.remove("anim_css");
            js.classList.remove("anim_js");
            php.classList.remove("anim_php");
            left_skill.classList.remove("anim_left_skill");
        }


        // ----------my team section----------
        if ((scrolled > 1650) && (scrolled < 2500)) {

            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


            single_my_team_box_0.classList.add("anim_single_my_team_box");
            single_my_team_box_1.classList.add("anim_single_my_team_box");
            single_my_team_box_2.classList.add("anim_single_my_team_box");
            single_my_team_box_3.classList.add("anim_single_my_team_box");


        } else {
            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


            single_my_team_box_0.classList.remove("anim_single_my_team_box");
            single_my_team_box_1.classList.remove("anim_single_my_team_box");
            single_my_team_box_2.classList.remove("anim_single_my_team_box");
            single_my_team_box_3.classList.remove("anim_single_my_team_box");

        }


        // ----------services section----------
        if ((scrolled > 2500) && (scrolled < 3450)) {

            const single_services_box_0 = document.querySelectorAll(".single_services_box")[0];
            const single_services_box_1 = document.querySelectorAll(".single_services_box")[1];
            const single_services_box_2 = document.querySelectorAll(".single_services_box")[2];


            single_services_box_0.classList.add("anim_single_services_box");
            single_services_box_1.classList.add("anim_single_services_box");
            single_services_box_2.classList.add("anim_single_services_box");


        } else {
            const single_services_box_0 = document.querySelectorAll(".single_services_box")[0];
            const single_services_box_1 = document.querySelectorAll(".single_services_box")[1];
            const single_services_box_2 = document.querySelectorAll(".single_services_box")[2];


            single_services_box_0.classList.remove("anim_single_services_box");
            single_services_box_1.classList.remove("anim_single_services_box");
            single_services_box_2.classList.remove("anim_single_services_box");

        }

        // ----------projects section----------
        if ((scrolled > 3400) && (scrolled < 4150)) {

            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.add("anim_single_projects_box");
            single_projects_box_1.classList.add("anim_single_projects_box");
            single_projects_box_2.classList.add("anim_single_projects_box");
            single_projects_box_3.classList.add("anim_single_projects_box");


        } else {
            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.remove("anim_single_projects_box");
            single_projects_box_1.classList.remove("anim_single_projects_box");
            single_projects_box_2.classList.remove("anim_single_projects_box");
            single_projects_box_3.classList.remove("anim_single_projects_box");

        }


        // ----------count section----------
        if ((scrolled > 3900) && (scrolled < 4500)) {

            const single_count_box_0 = document.querySelectorAll(".single_count_box")[0];
            const single_count_box_1 = document.querySelectorAll(".single_count_box")[1];
            const single_count_box_2 = document.querySelectorAll(".single_count_box")[2];
            const single_count_box_3 = document.querySelectorAll(".single_count_box")[3];


            single_count_box_0.classList.add("anim_single_count_box");
            single_count_box_1.classList.add("anim_single_count_box");
            single_count_box_2.classList.add("anim_single_count_box");
            single_count_box_3.classList.add("anim_single_count_box");




            const box_1 = document.querySelector("#team_member_count");
            const box_2 = document.querySelector("#project_count");
            const box_3 = document.querySelector("#client_count");
            const box_4 = document.querySelector("#experience_count");

            let a = 299;
            let b = 359;
            let c = 189;
            let d = 221;
            let start_1 = 0;
            let start_2 = 0;
            let start_3 = 0;
            let start_4 = 0;

            let box_1_call = setInterval(box_1_fun, 15);
            let box_2_call = setInterval(box_2_fun, 15);
            let box_3_call = setInterval(box_3_fun, 15);
            let box_4_call = setInterval(box_4_fun, 15);

            function box_1_fun() {
                start_1++;
                box_1.innerHTML = start_1;

                if (box_1.innerHTML == a) {
                    clearInterval(box_1_call);
                }

            }
            function box_2_fun() {
                start_2++;
                box_2.innerHTML = start_2;

                if (box_2.innerHTML == b) {
                    clearInterval(box_2_call);
                }

            }

            function box_3_fun() {
                start_3++;
                box_3.innerHTML = start_3;

                if (box_3.innerHTML == c) {
                    clearInterval(box_3_call);
                }

            }

            function box_4_fun() {
                start_4++;
                box_4.innerHTML = start_4;

                if (box_4.innerHTML == d) {
                    clearInterval(box_4_call);
                }

            }


        } else {
            const single_count_box_0 = document.querySelectorAll(".single_count_box")[0];
            const single_count_box_1 = document.querySelectorAll(".single_count_box")[1];
            const single_count_box_2 = document.querySelectorAll(".single_count_box")[2];
            const single_count_box_3 = document.querySelectorAll(".single_count_box")[3];


            single_count_box_0.classList.remove("anim_single_count_box");
            single_count_box_1.classList.remove("anim_single_count_box");
            single_count_box_2.classList.remove("anim_single_count_box");
            single_count_box_3.classList.remove("anim_single_count_box");

        }

        // ----------footer section----------
        if ((scrolled > 5000) && (scrolled < 5500)) {

            const footer_container_fluid = document.querySelector(".footer_container_fluid");
            
            footer_container_fluid.classList.add("anim_footer_container_fluid");


        } else {
            const footer_container_fluid = document.querySelector(".footer_container_fluid");


            footer_container_fluid.classList.remove("anim_footer_container_fluid");
           

        }

    }
});


