$(document).ready(function() {
    const emojis = ['🎮', '🎯', '🎨', '🎪', '🎭', '🎸', '🎺', '🎲'];
    let cards = [];
    let flippedCards = [];
    let moves = 0;
    let pairs = 0;
    let isLocked = false;

    // Initialize game
    function init() {
        cards = [...emojis, ...emojis];
        shuffle(cards);
        moves = 0;
        pairs = 0;
        flippedCards = [];
        isLocked = false;
        
        $('#moves').text(0);
        $('#pairs').text(0);
        renderBoard();
    }

    // Fisher-Yates shuffle
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Render game board
    function renderBoard() {
        const $board = $('#gameBoard');
        $board.empty();

        cards.forEach((emoji, index) => {
            const $card = $(`
                <div class="card" data-index="${index}" data-emoji="${emoji}">
                    <div class="card-face card-back"></div>
                    <div class="card-face card-front">${emoji}</div>
                </div>
            `);
            $board.append($card);
        });
    }

    // Handle card click
    $('#gameBoard').on('click', '.card', function() {
        const $card = $(this);
        
        // Ignore if locked, already flipped, or matched
        if (isLocked || $card.hasClass('flipped') || $card.hasClass('matched')) {
            return;
        }

        $card.addClass('flipped');
        flippedCards.push($card);

        if (flippedCards.length === 2) {
            moves++;
            $('#moves').text(moves);
            checkMatch();
        }
    });

    // Check for match
    function checkMatch() {
        const [card1, card2] = flippedCards;
        const match = card1.data('emoji') === card2.data('emoji');

        if (match) {
            card1.addClass('matched');
            card2.addClass('matched');
            pairs++;
            $('#pairs').text(pairs);
            flippedCards = [];

            if (pairs === 8) {
                setTimeout(() => alert('GAME COMPLETE!\nMOVES: ' + moves), 300);
            }
        } else {
            isLocked = true;
            setTimeout(() => {
                card1.removeClass('flipped');
                card2.removeClass('flipped');
                flippedCards = [];
                isLocked = false;
            }, 800);
        }
    }

    // Reset button
    $('#reset').on('click', init);

    // Start game
    init();
});
