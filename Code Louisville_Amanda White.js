// JavaScript source code

        function displayMobileMenu() {
            $(".bodyContainer .mobileHeaderContainer .menuNavigation").show();
        }

function hideMobileMenu() {
    $(".bodyContainer .mobileHeaderContainer .menuNavigation").hide();
}

var currentGalleryPosition = 0;
var galleryImageArray = ["band-659435_1920 (1).jpg", "instruments-801271_1920.jpg", "lead-singer-455750_1280.jpg", "music-594275_1280.jpg", "violin-516023_1280.jpg"];
var galleryImageAltTags = ["singer", "drum kit", "lead singer", "female singer", "violin"];

$(function () {
    $(galleryImageArray).each(function (index) {
        var currentImageUrl = galleryImageArray[index];
        var currentImageAlt = galleryImageAltTags[index];
        var currentImageTag = "<img src='" + currentImageUrl + "' alt='" + currentImageAlt + "' />";

        $(".bodyContainer div .galleryContainer .imageContainer .pictureContainer").append(currentImageTag);
    });

    setTimeout(function () {
        var galleryImageContainerWidth = $(".bodyContainer div .galleryContainer .imageContainer").width();
        var firstImageWidth = $(".bodyContainer div .galleryContainer .imageContainer img:first").width();

        var firstImageLeftPosition = (galleryImageContainerWidth / 2) - (firstImageWidth / 2);

        $(".bodyContainer div .galleryContainer .imageContainer .pictureContainer").css("left", firstImageLeftPosition + "px");
    }, 0);
});

function scrollGalleryLeft() {
    currentGalleryPosition--;

    if (currentGalleryPosition < 0) {
        currentGalleryPosition = galleryImageArray.length - 1;
    }

    scrollGalleryToPosition(currentGalleryPosition);
}

function scrollGalleryRight() {
    currentGalleryPosition++;

    if (currentGalleryPosition > galleryImageArray.length - 1) {
        currentGalleryPosition = 0;
    }

    scrollGalleryToPosition(currentGalleryPosition);
}

function scrollGalleryToPosition(galleryPosition) {
    var previousImageWidths = 0;

    for (previousImageIndex = 0; previousImageIndex < galleryPosition; previousImageIndex++) {
        var currentImageWidth = $($(".bodyContainer div .galleryContainer .imageContainer img")[previousImageIndex]).width();

        previousImageWidths += currentImageWidth + 20;
    }

    var galleryImageContainerWidth = $(".bodyContainer div .galleryContainer .imageContainer").width();
    var newImageWidth = $($(".bodyContainer div .galleryContainer .imageContainer img")[galleryPosition]).width();

    var newImageLeftPosition = -previousImageWidths + ((galleryImageContainerWidth / 2) - (newImageWidth / 2));

    $(".bodyContainer div .galleryContainer .imageContainer .pictureContainer").animate({
        left: newImageLeftPosition + "px"
    }, 2000);
}
