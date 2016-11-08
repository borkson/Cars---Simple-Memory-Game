$(function() {

    $(document).ready(function() {
        var row = 3;
        var col = 6;
        var divSizeWidth = '200px';
        var divSizeHeight = '180px';
        var size = row * col;
        var body = $('body');
        var game = $('#game');
        var imgFaces = [
            'images/bc.png',
            'images/chiron.png',
            'images/f60.png',
            'images/ferr.png',
            'images/lykan.png',
            'images/mansory.png',
            'images/ragera.png',
            'images/trevita.png',
            'images/veneno.png'
        ];
        //Merge the contents of two arrays together into the first array (total 18 images)
        var imgRandomArr = $.merge(imgFaces, imgFaces);

        var outerDiv = $('<div>'); // container for images
        outerDiv.height(row * divSizeHeight).width(col * divSizeWidth); // container size
        for (var i = 0; i < size; i++) { // loop for add images to container
            var randomImg = Math.floor(Math.random() * imgRandomArr.length); //shuffle img in container
            var carImg = imgRandomArr[randomImg];
            // Remove from faces array so we don't re-pick
            imgFaces.splice(randomImg, 1);
            var div = $('<div>').data('index', i).data('imgName', carImg);
            div.addClass('block');
            outerDiv.append(div);
            var faceUp = $('<div>').addClass('face-up');
            var faceDown = $('<div>').addClass('face-down');
            div.append(faceUp);
            div.append(faceDown);
            faceUp.css({
                'background-image': 'url(' + carImg + ')'
            });
        }
        game.append(outerDiv); // add container to game

        //flip over the cards
        var numFlipped = 0;
        var cards = $('.block');
        //variable with last card index(data i)
        var lastCardClick = null;
        var lastCardElement = $('[data-index="' + lastCardClick + '"]');
        cards.on('click', function() {
            if (numFlipped < 2) {
                // if (lastCardClick === $(this).data('index')) {
                if (lastCardElement.data('imgName') === $(this).data('imgName')) {
                    $(this).addClass('hide');
                }

                //flip the card if it hasn't already been turned face up.
                else if (lastCardClick != $(this).data('index') || !$(this).hasClass('visible')) {
                    $(this).addClass('visible animated flipInY');
                    setTimeout(function() {
                        cards.removeClass('visible animated flipInY');
                        numFlipped = 0;
                    }, 2000);
                    numFlipped++;
                }
            } else {
                cards.removeClass('visible animated flipInY');
                numFlipped = 0;
            }
            lastCardClick = $(this).data('index');
        });


    });
});
