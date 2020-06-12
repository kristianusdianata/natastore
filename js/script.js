$(document).ready(function() {
    searchNavbar()
    toogleNavbar()
    dropdownAnimate_navbar()
    filterMenu_sale()
    loadContent_cart()
    loadContent_sort()
    carousel_behavior()
    dropdownAnimate_sale()
    loadContent_confirmCheckout()
    href_target()
    toggleSubNavBar()

    // set zoom hover on single page (desktop only)
    if (window.innerWidth >= 992) {
        $('#carousel-single .carousel-item.active span.zoom').zoom()
    }
})

// -----------------------------------------------
// mobile view
// -----------------------------------------------

// -------- navbar --------
function toogleNavbar() {
    $("#menu-navbar").on("click", function() {
        $(this).next("#layer-content-navbar").toggleClass("slide")
        $(this).next("#layer-content-navbar").next("#navbar-mobile-content").toggleClass("slide")
    })

    $("#layer-content-navbar").on("click", function() {
        $(this).toggleClass("slide")
        $(this).next("#navbar-mobile-content").toggleClass("slide")
    })
}

function searchNavbar() {
    $("#search-menu").on("click", function() {
        $("#search-field-navbar").addClass("slide")
    })

    $("#close-search").on("click", function() {
        $("#search-field-navbar").removeClass("slide")
    })
}

function dropdownAnimate_navbar() {
    $(".category-dropdown").on("click", function() {
        $(this).find("span").toggleClass("d-none")
        $(this).next(".category-list-mobile").toggleClass("dropdown")
    })
}

// -------- Sale Page --------
function filterMenu_sale() {
    $("#show-filter-menu").on("click", function() {
        $("#filter-menu").addClass("slide")
    })

    $('#close-filter-menu').on("click", function() {
        $("#filter-menu").removeClass("slide")
    })
}

function dropdownAnimate_sale() {
    $('#accordionSingle').on('show.bs.collapse', function (e) {
        $(e.target).parent().find(".card-header button > span").toggleClass("d-none")
    })

    $('#accordionSingle').on('hide.bs.collapse', function (e) {
        $(e.target).parent().find(".card-header button > span").toggleClass("d-none")
    })
}

// -------- Content brand Page --------
function href_target() {
    $("#content-brand  > #navbar-brand > li > a").on("click", function(e) {
        e.preventDefault()
        let target = $(this).attr("href")
        if (window.innerWidth < 992) {
            $('html,body').animate({
                scrollTop: $(target).offset().top - 80
            }, 100, "easeInOutExpo");
        } else {
            $('html,body').animate({
                scrollTop: $(target).offset().top - 160
            }, 100, "easeInOutExpo");
        }
    })
}

// -----------------------------------------------
// end of mobile view
// -----------------------------------------------

// -----------------------------------------------
// desktop view
// -----------------------------------------------

function toggleSubNavBar() {
    $("#nav-content-2 > ul > li > a").hover(function() {
        if ($(this).attr("data-target")) {
            $(this).parent().toggleClass("active")
            let target = $(this).attr("data-target")
            $(target).toggleClass("show")
        }
    })

    $("#nav-content-2 > ul > li > a").next().hover(function () {
        $(this).parent().toggleClass("active")
        $(this).toggleClass("show")
    })
}

// -----------------------------------------------
// end of desktop view
// -----------------------------------------------

// -----------------------------------------------
// Modal content async
// -----------------------------------------------
function loadContent_cart() {
    $("#cart-menu").on("click", function(e) {
        e.preventDefault()
        $.ajax({
            url: "modal/modal_cart_mobile.html",
            success: function (result) {
                $('#modal').modal('show')
                $("#modal .modal-content").html("")
                $("#modal .modal-content").html(result)
            }
        });
    })

    $("#menu-navbar-desktop #cart-menu").on("click", function (e) {
        e.preventDefault()
        $.ajax({
            url: "modal/modal_cart_mobile.html",
            success: function (result) {
                $('#modal').modal('show')
                $("#modal .modal-content").html("")
                $("#modal .modal-content").html(result)
            }
        });
    })
}

function loadContent_sort() {
    $("#cta-sort-menu").on("click", function (e) {
        e.preventDefault()
        $.ajax({
            url: "modal/modal_sort_mobile.html",
            success: function (result) {
                $('#modal').modal('show')
                $("#modal .modal-content").html("")
                $("#modal .modal-content").html(result)
            }
        });
    })
}

function loadContent_confirmCheckout() {
    $("#cta-confirm-checkout").on("click", function (e) {
        e.preventDefault()
        $.ajax({
            url: "modal/modal_checkout_confirm.html",
            success: function (result) {
                $('#modal').modal('show')
                $("#modal .modal-content").html("")
                $("#modal .modal-content").html(result)
            }
        });
    })
}
// -----------------------------------------------
// End of Modal content async
// -----------------------------------------------

// -----------------------------------------------
// carousel
// -----------------------------------------------
function carousel_behavior() {
    // carousel single
    $("#carousel-single #carousel-single-product").on('slid.bs.carousel', function () {
        let target = $(this).find(".carousel-item.active").attr("data-target")

        // set active image priview
        $(".preview-img-product").removeClass("active")
        $(target).addClass("active")

        // set zoom hover on active carousel item (desktop only)
        if (window.innerWidth >= 992) {
            $('#carousel-single .carousel-item.active span.zoom').zoom()
        }
    })
}
// -----------------------------------------------
// End of carousel
// -----------------------------------------------

