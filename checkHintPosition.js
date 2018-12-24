var CheckHintPosition = function (selector, hint) {

    this.selector = selector;
    this.hint = hint;

    this.calcHintPosition = function () {

        $(selector).each(function () {

            var selectorWidth = $(this).innerWidth();
            var findHint = $(this).find(hint);
            var hintWidth = findHint.innerWidth();
            var checkWidth = $(this).offset().left + hintWidth + (selectorWidth / 2);
            var checkDifference = $(window).innerWidth() - checkWidth;

            if (checkDifference < 70) {
                findHint.css({
                    left: 'initial',
                    right: '50%'
                });
            }
            else {
                findHint.css({
                    left: '50%',
                    right: 'initial'
                });
            }
        });
    }; 

};
