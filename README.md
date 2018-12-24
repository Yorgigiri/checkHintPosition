# checkHintPosition
CheckHintPosition - mini plugin for a cheking position of your hints by window size

# HTML example
<div class="hint__container">
  <div class="hint">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sapien eu malesuada tempor.</p>
  </div>
</div>

# CSS example
.hint {
    max-width: 370px;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    min-width: 300px;
    left: 50%;
    top: 30%;
    padding: 25px 20px;
    background: #ffffff;
    border: 1px solid #000000;
    z-index: 10;
    -webkit-transition: .2s opacity linear, .2s visibility linear, .2s top linear;
    transition: .2s opacity linear, .2s visibility linear, .2s top linear;
}
.hint__container {
    position: relative;
}
.hint__container:hover .hint {
    visibility: visible;
    opacity: 1;
    top: 50%;
}

# Initializing example
var checkAllPartnersHint = new CheckHintPosition('.hint__container', '.hint');

$(window).load(function () {
    checkAllPartnersHint.calcHintPosition();
});

$(window).resize(function () {
    checkAllPartnersHint.calcHintPosition();
});
