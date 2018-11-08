/**
 * 移动端rem转px自适应
 * max_w 最大宽度
 * min_w 最小宽度
 * design_w 设计尺寸，设计图给定的尺寸
 * def_fz 设计图给定的字体大小
 * 在页面初始化前执行，fontlayout.init({max_w:1080, min_w: 320, design_w: 375})
 */
var fontlayout = {
    opt: {
        max_w: 0,
        min_w: 0,
        design_w: 1080,
        def_fz: 100
    },
    screen: document.documentElement.clientWidth,
    html: document.getElementsByTagName('html')[0],
    init: function(option) {
        var self = this;
        this.extend(this.opt, option);
        this.setHtmlFontSize();

        window.addEventListener('resize', function() {
            clearTimeout(self.tid);
            self.setHtmlFontSize()
        }, false);
    },
    /**
     * 将option参数赋值到this.opt中
     * @param {*} old_o 默认参数
     * @param {*} new_o 传入参数
     */
    extend: function(old_o, new_o) {
        for(var p in new_o){
            if(new_o.hasOwnProperty(p) && old_o.hasOwnProperty(p)){
                old_o[p] = new_o[p];
            }
        }
    },
    setHtmlFontSize: function() {

        var opt = this.opt
        // 以当前屏幕为基础，判断当前屏幕宽度是否在给定范围内
        var width = window.document.documentElement.getBoundingClientRect().width;
        if(opt.max_w && width > opt.max_w) {
            width = opt.max_w
        } else if(opt.min_w && width < opt.min_w) {
            width = opt.min_w
        }
        
        /* 
         * 当前屏幕宽度 / 设计宽度 => 设计图比例
         * 设计图比例 * 设计图字体 => 显示的字体
         */
        fz = (width / opt.design_w) * opt.def_fz;

        this.html.style.fontSize = fz + "px";
    }
}

fontlayout.init({max_w: 1080, min_w: 320, design_w: 375})
