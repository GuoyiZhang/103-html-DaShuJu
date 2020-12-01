/*青 岛 研 锦 网 络 科 技 有 限 公 司   版权所有*/
(function () {
    'use strict';
    setRemUnit();
    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        var docEl = document.documentElement;
        var ratio = 10;
        var viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;

        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})();