let menu = document.querySelector(".top")
let section = document.querySelector(".leftSection")
let menuClose = document.querySelector("#closeSideBar")

const close = `<div class="top">
                    <i class="ri-menu-line menu"></i>
                </div>
                <div class="bottom">
                    <div>
                        <i class="ri-home-2-line"></i>
                        <p>Home</p>
                    </div>
                    <div>
                        <i class="ri-film-line"></i>
                        <p>Shorts</p>
                    </div>
                    <div>
                        <i class="ri-pass-valid-line"></i>
                        <p>Subscription</p>
                    </div>
                    <div>
                        <i class="ri-presentation-fill"></i>
                        <p>You</p>
                    </div>
                </div>`

const open = `
                <div class="logo">
                    <img src="../devImage/Leonardo_Phoenix_A_modern_sleek_and_minimalist_logo_featuring_3-removebg-preview.png" alt="DevTube">
                    <button class="" id="closeSideBar">
                        <i class="ri-close-large-fill"></i>
                    </button>
                </div>
                <div class="middle">
                    <p>You -></p>
                    <a href="">
                        <div class="yourChannel">
                            <p>Your Channel</p>
                            <i class="ri-account-box-line"></i>
                        </div>
                    </a>
                    <a href="">
                        <div class="yourVideos">
                            <p>Your Videos</p>
                            <i class="ri-video-line"></i>
                        </div>
                    </a>
                    <a href="">
                        <div class="likedVideos">
                            <p>Liked Videos</p>
                            <i class="ri-thumb-up-line"></i>
                        </div>
                    </a>
                </div>
                <div class="subs">
                    <span class="head"><p>Subscription -></p></span>
                    <div class="">
                        <img src="../devImage/defaultProfilePic.png" alt="">
                        <p>Code with Harry</p>
                    </div>
                    <div class="">
                        <img src="../devImage/defaultProfilePic.png" alt="">
                        <p>Code with Harry</p>
                    </div>
                    <div class="">
                        <img src="../devImage/defaultProfilePic.png" alt="">
                        <p>Code with Harry</p>
                    </div>
                    <div class="">
                        <img src="../devImage/defaultProfilePic.png" alt="">
                        <p>Code with Harry</p>
                    </div>
                    <div class="">
                        <img src="../devImage/defaultProfilePic.png" alt="">
                        <p>Code with Harry</p>
                    </div>
                    <div class="">
                        <img src="../devImage/defaultProfilePic.png" alt="">
                        <p>Code with Harry</p>
                    </div>
                </div>`

menu.addEventListener("click", () => {
    section.style.width = "200px"
    section.style.justifyContent = "none"
    section.style.padding = "20px 0px"
    section.innerHTML = open
});

menuClose.addEventListener("click", () => {
    section.style.width = "70px"
    section.style.justifyContent = "space-between"
    section.style.padding = "20px"
    section.innerHTML = close
})