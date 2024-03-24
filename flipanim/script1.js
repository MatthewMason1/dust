// FLIPANIM PLUS

function changePageAndMetaTitle() {
    // Get the title from the element with class "anim_title"
    var pageTitleElement = document.querySelector('.anim_title');
    if (pageTitleElement) {
        var pageTitle = pageTitleElement.textContent.trim();

        // Append " - FlipAnim Plus" to the title
        var newTitle = pageTitle + " - FlipAnim Plus";

        // Update page title
        document.title = newTitle;

        // Update og:title meta tag
        var ogTitleMetaTag = document.querySelector('meta[property="og:title"]');
        if (ogTitleMetaTag) {
            ogTitleMetaTag.setAttribute("content", newTitle);
        }

        // Update twitter:title meta tag
        var twitterTitleMetaTag = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitleMetaTag) {
            twitterTitleMetaTag.setAttribute("content", newTitle);
        }
    } else {
        console.error("Element with class 'anim_title' not found.");
    }
}

// Example usage:
changePageAndMetaTitle();

// Changes the background color of the body to dark grey
function changeBackgroundToDarkGrey() {
    document.body.style.backgroundColor = "#1b1e2b"; // color
}

// Changes the background color of the mainDiv to black
function changeMainDivBackgroundToBlack() {
    var mainDiv = document.getElementById("mainDiv");
    if (mainDiv)
        mainDiv.style.backgroundColor = "#101011";
}

function changeImgDiv() {
    var mainDiv = document.querySelector(".browse-img");
    var imgDivs = document.querySelectorAll(".browse_item a img ~ div");
    imgDivs.forEach(function(div) {
        div.style.backgroundColor = "#101011";
    });
}

// Removes border from elements with class ".button-sprite-selected"
function removeButtonSpriteSelectedBorderColor() {
    var buttons = document.querySelectorAll(".button-sprite-selected");
    buttons.forEach(button => {
        button.style.border = "none";
    });
}

// Changes the background color of elements with class ".flipButton" to black
function changeButtonFlipButtonToBlack() {
    var buttons = document.querySelectorAll(".flipButton");
    buttons.forEach(button => {
        button.style.backgroundColor = "#555"; // Dark grey color
        button.style.border = "none";
    });
}

// Changes the border color of elements with the specified className to black
function changeSeparatorBorderColorToBlack(className) {
    var separators = document.querySelectorAll(className);
    separators.forEach(separator => {
        separator.style.border = "1px solid grey";
        separator.style.backgroundColor = "white";
    });
}

// Changes the styles of elements with class "._89n_"
function change_89n_Styles() {
    var elements = document.querySelectorAll("._89n_");
    elements.forEach(element => {
        element.style.background = "#323c49";
        element.style.border = "0";
    });
}

// Changes the background color and sprites of elements with class ".button-sprite"
function changeButtonsToBlue() {
    var buttons = document.querySelectorAll(".button-sprite");
    buttons.forEach(button => {
        button.style.backgroundImage = "url('https://media.discordapp.net/attachments/702591685984780289/1221297064760311808/spone.png?ex=66121086&is=65ff9b86&hm=b4694ff160ab20764d195ea0160a92e19faa2c7baa0d0342101563654468836a&=&format=webp&quality=lossless')";
        button.style.border = "none";
    });
}

// Changes the background color of elements with class ".inputFormGroup"
function changeInputFormGroupColor(color) {
    var elements = document.querySelectorAll(".inputFormGroup");
    elements.forEach(element => {
        element.style.backgroundColor = color;
        element.style.border = "none";
    });
}

// Changes the color of specified text elements to white
function changeTextToWhite() {
    var elements = document.querySelectorAll(".browse_author, .browse_time, .commentDate, .comment_link_button:link, .report_button, .anim_author, .hline, .text_normal");
    elements.forEach(element => {
        element.style.color = "#ffffff"; // White color
        element.style.border = "none";
    });
}

// Changes the color of like icons to white
function changeLikeTextToWhite() {
    var elements = document.querySelectorAll(".likeIcon");
    elements.forEach(element => {
        element.style.color = "#ffffff"; // White color
        element.style.border = "none";
    });
}

// Changes the background color of the second sprites
function changeSecondButtonsToBlue() {
    var buttons = document.querySelectorAll(".logo, .menu_item");
    buttons.forEach(button => {
        button.style.backgroundImage = "url('https://media.discordapp.net/attachments/702591685984780289/1221301906580705370/edp446.png?ex=66121509&is=65ffa009&hm=4e01598647f298f05aadae010aa05982fd601eedb525833e227c8aeaa9745918&=&format=webp&quality=lossless')";
        button.style.border = "none";
    });
}

function applyWhiteBoxShadow() {
    var animView = document.getElementById("animView");
    if (animView) {
        animView.style.boxShadow = "0px 0px 15px 0px rgba(255, 255, 255, 0.75)";
    }
}

function changeProgressBarColor() {
    var progressBar = document.getElementById("animationProgress");
    if (progressBar) {
        progressBar.style.backgroundColor = "#ffffff"; // Set background color to white
    }
}

function changeLogoText() {
    var logoTextElements = document.querySelectorAll(".logo_text");
    logoTextElements.forEach(function(element) {
        element.textContent = " - created by @MatthewMason";
    });
}


// Changes the color of comment text to white
function changeCommentTextToWhite() {
    var elements = document.querySelectorAll(".commentText, .anim_date");
    elements.forEach(element => {
        element.style.color = "#ffffff"; // White color
        element.style.border = "none";
    });
}

// Changes the background color and border of comment containers
function changeCommentContainerToLightGrey() {
    var elements = document.querySelectorAll(".commentContainer, .opsComment, .flipInput.replyTextArea");
    elements.forEach(element => {
        element.style.borderRadius = "25px"; // Adjust border radius as needed
        element.style.border = "1px solid #ccc"; // Border style
    });
}

// Changes the border radius of avatars
function changeAvatarBorderRadius() {
    var avatars = document.querySelectorAll(".avatar, .avatar_halfsize, .avatar_small");
    avatars.forEach(avatar => {
        avatar.style.borderRadius = "200px"; // makes avatar a circle
    });
}

function changeHighlightedItemStyle() {
    var highlightedItems = document.querySelectorAll(".browse_item_highlighted");
    highlightedItems.forEach(function(item) {
        item.style.backgroundColor = "#101011"; // Dark grey with 70% transparency
        item.style.animationName = "none"; // Remove animation
    });
}

// Changes the color and border of like buttons
function changeLikeButtonColor() {
    var likeButtons = document.querySelectorAll(".likeButton");
    likeButtons.forEach(button => {
        button.style.border = "none";
        button.style.backgroundColor = "#3498db";
        button.style.color = "white"; // 
    });
}

// Changes the border radius of comment containers
function changeCommentContainerBorderRadius() {
    var elements = document.querySelectorAll(".commentContainer");
    elements.forEach(element => {
        element.style.borderRadius = "25px"; // New border radius: 25px
    });
}

// Styles images within comment containers
function styleCommentContainerImages() {
    var containers = document.querySelectorAll(".commentContainer");
    containers.forEach(container => {
        var images = container.querySelectorAll("img");
        images.forEach(image => {
            // Check if the image is not within an element with class ".commentAvatar"
            if (!image.closest(".commentAvatar")) {
                image.style.borderRadius = "25px"; // Border radius: 25px
                image.style.width = "80px"; // Width: 80px
                image.style.height = "80px"; // Height: 80px
            }
        });
    });
}

// Execute the new function
styleCommentContainerImages();

// Exclude certain elements
document.querySelectorAll('.button-sprite:not(.exclude)').forEach(function(element) {
    if (element !== document.querySelector("#root > div > div > div:nth-child(5)")) {
        element.classList.add('modified');
    }
});

// Functions execution
changeBackgroundToDarkGrey();
changeMainDivBackgroundToBlack();
removeButtonSpriteSelectedBorderColor();
changeSeparatorBorderColorToBlack(".tools-vertical-separator");
changeSeparatorBorderColorToBlack(".tools-horizontal-separator");
changeSeparatorBorderColorToBlack(".hline");
changeButtonFlipButtonToBlack();
change_89n_Styles();
changeButtonsToBlue();
changeInputFormGroupColor("#555");
changeSecondButtonsToBlue();
changeTextToWhite();
changeCommentTextToWhite();
changeCommentContainerToLightGrey();
changeAvatarBorderRadius();
changeLikeButtonColor();
styleCommentContainerImages();
changeImgDiv();
changeHighlightedItemStyle();
changeLogoText();
changeProgressBarColor();
applyWhiteBoxShadow();
////TEXT (IGNORE)
//https://media.discordapp.net/attachments/702591685984780289/1220401019457110177/sprites.png?ex=660ece04&is=65fc5904&hm=9830fb292efbc8351b0ea178ddc0fd6f07c523f5e640c891149895e96b52acde&=&format=webp&quality=lossless
//.browse_author
//.menu_item
//.browse_time
//element.style
//.hline
//.commentText
//.commentDate
//.comment_link_button:link
//.report_button
//.anim_author
