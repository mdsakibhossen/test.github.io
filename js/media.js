window.addEventListener("scroll", ()=>{

    let scrolled = window.scrollY;

    console.log(scrolled);
    let width_mx_1200 = window.matchMedia("(max-width: 1200px)");
    let width_mx_992 = window.matchMedia("(max-width: 992px)");
    let width_mx_768 = window.matchMedia("(max-width: 768px)");
    let width_mx_576 = window.matchMedia("(max-width: 576px)");
    let width_mx_320 = window.matchMedia("(max-width: 320px)");
    if (width_mx_1200.matches) {

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
        if ((scrolled > 1650) && (scrolled < 2800)) {

            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


            single_my_team_box_0.classList.add("anim_single_my_team_box_mx_1200");
            single_my_team_box_1.classList.add("anim_single_my_team_box_mx_1200");
            single_my_team_box_2.classList.add("anim_single_my_team_box_mx_1200");
            single_my_team_box_3.classList.add("anim_single_my_team_box_mx_1200");


        } else {
            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


            single_my_team_box_0.classList.remove("anim_single_my_team_box_mx_1200");
            single_my_team_box_1.classList.remove("anim_single_my_team_box_mx_1200");
            single_my_team_box_2.classList.remove("anim_single_my_team_box_mx_1200");
            single_my_team_box_3.classList.remove("anim_single_my_team_box_mx_1200");

        }


        // ----------services section----------
        if ((scrolled > 2400) && (scrolled < 3450)) {

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


            single_projects_box_0.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_1.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_2.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_3.classList.add("anim_single_projects_box_mx_1200");


        } else {
            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_1.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_2.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_3.classList.remove("anim_single_projects_box_mx_1200");

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





    if (width_mx_992.matches) {

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
        if ((scrolled > 1800) && (scrolled < 2600)) {

            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


            single_my_team_box_0.classList.add("anim_single_my_team_box_mx_1200");
            single_my_team_box_1.classList.add("anim_single_my_team_box_mx_1200");
            single_my_team_box_2.classList.add("anim_single_my_team_box_mx_1200");
            single_my_team_box_3.classList.add("anim_single_my_team_box_mx_1200");


        } else {
            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


            single_my_team_box_0.classList.remove("anim_single_my_team_box_mx_1200");
            single_my_team_box_1.classList.remove("anim_single_my_team_box_mx_1200");
            single_my_team_box_2.classList.remove("anim_single_my_team_box_mx_1200");
            single_my_team_box_3.classList.remove("anim_single_my_team_box_mx_1200");

        }


        // ----------services section----------
        if ((scrolled > 2500) && (scrolled < 3300)) {

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
        if ((scrolled > 3200) && (scrolled < 3800)) {

            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_1.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_2.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_3.classList.add("anim_single_projects_box_mx_1200");


        } else {
            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_1.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_2.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_3.classList.remove("anim_single_projects_box_mx_1200");

        }


        // ----------count section----------
        if ((scrolled > 4900) && (scrolled < 5240)) {

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





    if (width_mx_768.matches) {

        // ----------about section----------
        if ((scrolled > 250) && (scrolled < 900)) {

            const left_about = document.querySelector(".left_about");

            left_about.classList.add("anim_left_about");
        } else {
            const left_about = document.querySelector(".left_about");

            left_about.classList.remove("anim_left_about");
        }

        if ((scrolled > 600) && (scrolled < 1300)) {

            const right_about = document.querySelector(".right_about");

            right_about.classList.add("anim_right_about");
        } else {
            const right_about = document.querySelector(".right_about");

            right_about.classList.remove("anim_right_about");
        }


        // ----------skill section----------
        if ((scrolled > 1250) && (scrolled < 1800)) {


            const left_skill = document.querySelector(".left_skill");

            left_skill.classList.add("anim_left_skill");

        } else {

            const left_skill = document.querySelector(".left_skill");

            left_skill.classList.remove("anim_left_skill");
        }
        if ((scrolled > 1600) && (scrolled < 2150)) {

            const html = document.querySelector(".html");
            const css = document.querySelector(".css");
            const js = document.querySelector(".js");
            const php = document.querySelector(".php");

            html.classList.add("anim_html");
            css.classList.add("anim_css");
            js.classList.add("anim_js");
            php.classList.add("anim_php");

        } else {
            const html = document.querySelector(".html");
            const css = document.querySelector(".css");
            const js = document.querySelector(".js");
            const php = document.querySelector(".php");

            html.classList.remove("anim_html");
            css.classList.remove("anim_css");
            js.classList.remove("anim_js");
            php.classList.remove("anim_php");
        }


        // ----------my team section----------   
        if ((scrolled > 2300) && (scrolled < 3150)) {

            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
           


            single_my_team_box_0.classList.add("anim_single_my_team_box_mx_768");
            single_my_team_box_1.classList.add("anim_single_my_team_box_mx_768");
           

        } else {
            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
           


            single_my_team_box_0.classList.remove("anim_single_my_team_box_mx_768");
            single_my_team_box_1.classList.remove("anim_single_my_team_box_mx_768");
           

        }
        if ((scrolled > 2700) && (scrolled < 3550)) {

           
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


          
            single_my_team_box_2.classList.add("anim_single_my_team_box_mx_768");
            single_my_team_box_3.classList.add("anim_single_my_team_box_mx_768");


        } else {
           
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


           
            single_my_team_box_2.classList.remove("anim_single_my_team_box_mx_768");
            single_my_team_box_3.classList.remove("anim_single_my_team_box_mx_768");

        }


        // ----------services section----------
        if ((scrolled > 3300) && (scrolled < 4000)) {

            const single_services_box_0 = document.querySelectorAll(".single_services_box")[0];
            const single_services_box_1 = document.querySelectorAll(".single_services_box")[1];
            // const single_services_box_2 = document.querySelectorAll(".single_services_box")[2];


            single_services_box_0.classList.add("anim_single_services_box");
            single_services_box_1.classList.add("anim_single_services_box");
            // single_services_box_2.classList.add("anim_single_services_box");


        } else {
            const single_services_box_0 = document.querySelectorAll(".single_services_box")[0];
            const single_services_box_1 = document.querySelectorAll(".single_services_box")[1];
            // const single_services_box_2 = document.querySelectorAll(".single_services_box")[2];


            single_services_box_0.classList.remove("anim_single_services_box");
            single_services_box_1.classList.remove("anim_single_services_box");
            // single_services_box_2.classList.remove("anim_single_services_box");

        }

        // ----------projects section----------
        if ((scrolled > 4000) && (scrolled < 5000)) {

            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_1.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_2.classList.add("anim_single_projects_box_mx_1200");
            single_projects_box_3.classList.add("anim_single_projects_box_mx_1200");


        } else {
            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


            single_projects_box_0.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_1.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_2.classList.remove("anim_single_projects_box_mx_1200");
            single_projects_box_3.classList.remove("anim_single_projects_box_mx_1200");

        }


        // ----------count section----------
        if ((scrolled > 4900) && (scrolled < 5240)) {

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
        if ((scrolled > 6800) && (scrolled < 7700)) {

            const footer_container_fluid = document.querySelector(".footer_container_fluid");
            
            footer_container_fluid.classList.add("anim_footer_container_fluid");


        } else {
            const footer_container_fluid = document.querySelector(".footer_container_fluid");


            footer_container_fluid.classList.remove("anim_footer_container_fluid");
           

        }

    }




    if (width_mx_576.matches) {

        // ----------about section----------
        if ((scrolled > 250) && (scrolled < 900)) {

            const left_about = document.querySelector(".left_about");

            left_about.classList.add("anim_left_about");
        } else {
            const left_about = document.querySelector(".left_about");

            left_about.classList.remove("anim_left_about");
        }

        if ((scrolled > 600) && (scrolled < 1300)) {

            const right_about = document.querySelector(".right_about");

            right_about.classList.add("anim_right_about");
        } else {
            const right_about = document.querySelector(".right_about");

            right_about.classList.remove("anim_right_about");
        }


        // ----------skill section----------
        if ((scrolled > 1250) && (scrolled < 1800)) {


            const left_skill = document.querySelector(".left_skill");

            left_skill.classList.add("anim_left_skill");

        } else {

            const left_skill = document.querySelector(".left_skill");

            left_skill.classList.remove("anim_left_skill");
        }
        if ((scrolled > 1600) && (scrolled < 2150)) {

            const html = document.querySelector(".html");
            const css = document.querySelector(".css");
            const js = document.querySelector(".js");
            const php = document.querySelector(".php");

            html.classList.add("anim_html");
            css.classList.add("anim_css");
            js.classList.add("anim_js");
            php.classList.add("anim_php");

        } else {
            const html = document.querySelector(".html");
            const css = document.querySelector(".css");
            const js = document.querySelector(".js");
            const php = document.querySelector(".php");

            html.classList.remove("anim_html");
            css.classList.remove("anim_css");
            js.classList.remove("anim_js");
            php.classList.remove("anim_php");
        }


        // ----------my team section----------   
        if ((scrolled > 2300) && (scrolled < 3000)) {

            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
           


            single_my_team_box_0.classList.add("anim_single_my_team_box_mx_576");
           

        } else {
            const single_my_team_box_0 = document.querySelectorAll(".single_my_team_box")[0];
           


            single_my_team_box_0.classList.remove("anim_single_my_team_box_mx_576");
           

        }
        
        if ((scrolled > 2700) && (scrolled < 3400)) {

            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
           


            single_my_team_box_1.classList.add("anim_single_my_team_box_mx_576");
           

        } else {
            const single_my_team_box_1 = document.querySelectorAll(".single_my_team_box")[1];
           


            single_my_team_box_1.classList.remove("anim_single_my_team_box_mx_576");
           

        }
        if ((scrolled > 3100) && (scrolled < 4300)) {

           
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];


          
            single_my_team_box_2.classList.add("anim_single_my_team_box_mx_576");


        } else {
           
            const single_my_team_box_2 = document.querySelectorAll(".single_my_team_box")[2];

           
            single_my_team_box_2.classList.remove("anim_single_my_team_box_mx_576");

        }
        if ((scrolled > 3500) && (scrolled < 4200)) {

           
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


          
            single_my_team_box_3.classList.add("anim_single_my_team_box_mx_576");


        } else {
           
            const single_my_team_box_3 = document.querySelectorAll(".single_my_team_box")[3];


           
            single_my_team_box_3.classList.remove("anim_single_my_team_box_mx_576");

        }


        // ----------services section----------
        
        if ((scrolled > 4300) && (scrolled < 5000)) {

            const single_services_box_0 = document.querySelectorAll(".single_services_box")[0];


            single_services_box_0.classList.add("anim_single_services_box_mx_576");


        } else {
            const single_services_box_0 = document.querySelectorAll(".single_services_box")[0];


            single_services_box_0.classList.remove("anim_single_services_box_mx_576");

        }
        if ((scrolled > 4600) && (scrolled < 5900)) {

            const single_services_box_1 = document.querySelectorAll(".single_services_box")[1];


            single_services_box_1.classList.add("anim_single_services_box_mx_576");


        } else {
            const single_services_box_1 = document.querySelectorAll(".single_services_box")[1];


            single_services_box_1.classList.remove("anim_single_services_box_mx_576");

        }
        if ((scrolled > 5000) && (scrolled < 5800)) {

            const single_services_box_2 = document.querySelectorAll(".single_services_box")[2];


            single_services_box_2.classList.add("anim_single_services_box_mx_576");


        } else {
            const single_services_box_2 = document.querySelectorAll(".single_services_box")[2];


            single_services_box_2.classList.remove("anim_single_services_box_mx_576");

        }

        // ----------projects section----------
        if ((scrolled > 5800) && (scrolled < 6400)) {

            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
           


            single_projects_box_0.classList.add("anim_single_projects_box_mx_576");
           

        } else {
            const single_projects_box_0 = document.querySelectorAll(".single_projects_box")[0];
           


            single_projects_box_0.classList.remove("anim_single_projects_box_mx_576");
           

        }
        
        if ((scrolled > 6100) && (scrolled < 6700)) {

            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
           


            single_projects_box_1.classList.add("anim_single_projects_box_mx_576");
           

        } else {
            const single_projects_box_1 = document.querySelectorAll(".single_projects_box")[1];
           


            single_projects_box_1.classList.remove("anim_single_projects_box_mx_576");
           

        }
        if ((scrolled > 6400) && (scrolled < 7400)) {

           
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];


          
            single_projects_box_2.classList.add("anim_single_projects_box_mx_576");


        } else {
           
            const single_projects_box_2 = document.querySelectorAll(".single_projects_box")[2];

           
            single_projects_box_2.classList.remove("anim_single_projects_box_mx_576");

        }
        if ((scrolled > 6700) && (scrolled < 7400)) {

           
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


          
            single_projects_box_3.classList.add("anim_single_projects_box_mx_576");


        } else {
           
            const single_projects_box_3 = document.querySelectorAll(".single_projects_box")[3];


           
            single_projects_box_3.classList.remove("anim_single_projects_box_mx_576");

        }


        // ----------count section----------
        if ((scrolled > 7300) && (scrolled < 8500)) {

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
        if ((scrolled > 9700) && (scrolled < 10600)) {

            const footer_container_fluid = document.querySelector(".footer_container_fluid");
            
            footer_container_fluid.classList.add("anim_footer_container_fluid");


        } else {
            const footer_container_fluid = document.querySelector(".footer_container_fluid");


            footer_container_fluid.classList.remove("anim_footer_container_fluid");
           

        }

    }
});