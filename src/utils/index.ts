export const init = (win: any) => {
    var doc = win.document,
        docElem = doc.documentElement,
        designDraftWidth = 750, //设计稿宽度
        dpr = Math.min(win.devicePixelRatio, 3),
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';

    //设置dpr，安卓6以下不支持initial-scale小于1
    var userAgent = navigator.userAgent.toLowerCase();
    var check: any = userAgent.match(/android\s([0-9.]*)/);
    if (check && check[1] && check[1].split(".")[0] - 6 < 0) {
        dpr = 1;
    }
    var scale = 1 / dpr;

    docElem.dataset.dpr = dpr;
    var metaElem = doc.createElement('meta');
    metaElem.name = 'viewport';
    metaElem.content = 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ", user-scalable=no, viewport-fit=cover";
    docElem.firstElementChild.appendChild(metaElem);
    var recalc = function () {
        var width = docElem.getBoundingClientRect().width;
        docElem.style.fontSize = 100 * (width / designDraftWidth) + 'px';
        win.htmlFontSize = 100 * (width / designDraftWidth)
    };
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    win.recalc = recalc;
}

init(window)

