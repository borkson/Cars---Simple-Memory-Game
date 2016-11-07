$(function() {

    $(document).ready(function() {
        var row = 3; // od usera
        var col = 6; // od usera
        var divSizeWidth = '200px';
        var divSizeHeight = '180px'; // rozmiar kwadratu pozniej bedzie zmienione na piksele
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
        //zawiera wszystkie 18 elementów
        var imgRandomArr = $.merge(imgFaces, imgFaces);

        var outerDiv = $('<div>'); // kontener na obrazki
        outerDiv.height(row * divSizeHeight).width(col * divSizeWidth); // ustawiasz wymiar kontenera
        for (var i = 0; i < size; i++) { // petla do dodawania obrazkow do kontenera
            var randomImg = Math.floor(Math.random() * imgRandomArr.length);
            console.log(imgRandomArr.length);
            console.log(randomImg); //losuje spośród 18 zdjęc
            var faceUp = imgRandomArr[randomImg];
            // Remove from faces array so we don't re-pick
            imgFaces.splice(randomImg, 1);
            var div = $('<div>'); // tworzysz div
            div.addClass('block'); // ustawiasz mu wymiar
            outerDiv.append(div); // dodajesz do kontenera
            div.css({
                'background-image': 'url(' + faceUp + ')'
            });
        }
        game.append(outerDiv); // kontener dodajesz do body

    });
});
