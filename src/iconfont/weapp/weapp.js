Component({
  properties: {
    // tixingtianchong | tixing1 | kog | all | lol | dota | ow | csgo | first_round | last_round | five_round | tk | czd | fdy | bz | klt | yixie | sha | sha1 | tafang | dalong | xiaolong | sousuo | qianbao | xinxi | chazhaobiaodanliebiao | rili | jinru | shijian | shoucang1 | zhibo | tixing | jinbi | laba | huo1 | qiandao | shezhi | jinbidefuben | guanbi | yanjingx | yanjing | weixin | weibo | QQ | cuo | gou | bofang | rili1 | dianzan | dianzan- | pinglun | jinbidefuben1 | guanbidefuben | jubao | tuijian | zhiding | fenxiangdefuben | gengduo | nv | nan | xinxidefuben | weixin1 | bangzhu | jiahaotianjia | biaoqing | tianjia | naozhong | shijianhaojin | pingguo | anzhuo | xiala | jiantou | jiantou-copy | jinru-copy | kog-h5 | csgo-h5 | ow-h5 | dota-h5 | lol-h5 | gouwuche | yiliao | maoyijinqianshangye | yanjing1 | sanjiaoxiabiaozhengfangxing | sanjiaoxiabiaozhengfangxing-copy | shouji | yanzhengma | suo | jinru-copy-copy | jinru-copy-copy-copy
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
