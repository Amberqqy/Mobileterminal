var user = new Vue({
    el: '#user-header',
    data: {
      list: [],
      listTab: [],
      listban: [],
      isShowPrice:false,
      isShowMore:false,
      isShowHouse:false,
      isShowCity:false,
      isPrice:false,
      isMore:false,
      isHouse:false,
      isCity:false,
      isTalcity: true,
      isTalsub:false,
      isShowBg:false,
      isPosition:false,
      isNewPosition: false,
      isa:false,
      isSelected: false,
      condition:null,
      isRegion:false,
      clickTa:true,
      listTwo: [],
      isbg: false,
      isbga: false,
      listlala:[],
      istest: null,
      ist: null,
      textname: '区域',
      housepeice: '房价',
      housename: '房型',
      morename: '更多',
      houseer: '房型',
      bor: false,
      condi:null,
      housebigId:null,
      moreid: null,
      iscolor:null,
      box_num: [],
      boxs: [],
      headerbg: false,
    },
    mounted:function(){
      this.getData();
      this.clickTab();
      window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
      destroyed:function(){
        window.removeEventListener('scroll', this.handleScroll)
      },
      handleScroll:function(){
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
       var offsetTop = document.querySelector('.house-list').offsetTop
       console.log(offsetTop)
       if (scrollTop > offsetTop) {
           this.isPosition = true
       } else {
           this.isPosition = false
      }
      },
      bgcolor:function(){
        this.headerbg = true;
      },
    	clickCity:function(){
        this.isShowCity = !this.isShowCity;
        this.isCity = !this.isCity;
        this.isHouse = false;
        this.isMore = false;
        this.isPrice = false;
    		this.isShowHouse = false;
    		this.isShowMore = false;
    		this.isShowPrice = false;
        this.isPosition = true;
        console.log(this.isShowCity)
        if(this.isShowCity == true){
            this.isPosition = true;
            window.removeEventListener('scroll', this.handleScroll)      
        }else {
            this.isPosition = false
             window.addEventListener('scroll', this.handleScroll);
        }
    	},
    	clickPrice:function(){
    		this.isShowPrice = !this.isShowPrice;
    		this.isShowHouse = false;
    		this.isShowMore = false;
    		this.isShowCity = false;
        this.isPrice = !this.isPrice;
        this.isHouse = false;
        // this.isMore = false;
        this.isCity = false;
        if(this.isShowPrice == true){
            this.isPosition = true;
            window.removeEventListener('scroll', this.handleScroll)
        }else {
            this.isPosition = false;
            window.addEventListener('scroll', this.handleScroll);
        }
           
    	},
    	clickHouse:function(){
    		this.isShowHouse = !this.isShowHouse;
    		this.isShowCity = false;
    		this.isShowMore = false;
    		this.isShowPrice = false;
        this.isHouse = !this.isHouse;
        this.isCity = false;
        this.isMore = false;
        this.isPrice = false;
        if(this.isShowHouse == true){
            this.isPosition = true;
            this.isHouse = true;
             window.removeEventListener('scroll', this.handleScroll)      
        }else {
            this.isPosition = false;
            window.addEventListener('scroll', this.handleScroll);
        }
    	},
    	clickMore:function(){
        var that = this;
    		that.isShowMore = !that.isShowMore;
    		that.isShowHouse = false;
    		that.isShowCity = false;
    		that.isShowPrice = false;
        that.isMore = !that.isMore;
        that.isHouse = false;
        that.isCity = false;
        that.isPrice = false;
        if(that.isShowMore == true){
            that.isPosition = true;
            window.removeEventListener('scroll', that.handleScroll)      
        }else {
            that.isPosition = false;
            window.addEventListener('scroll', that.handleScroll);
        }
    	},
      clickPri:function(tabb,index){
        this.housepeice = tabb.name;
        this.isShowCity = false;
        this.iscolor = index;
      },
    	clickNewcity:function(){
            this.isTalcity = true;
            this.isTalsub = false;
    	},
    	clickNewsub:function(){
            // this.isTalsub = true;
            // this.isTalcity = false;
            // this.clickTa = false;
            // this.isRegion = false;
    	},
    	clickBg:function(tabc,index){
            var that = this;
            that.isShowBg = !that.isShowBg;
            tabc.isSelected = !tabc.isSelected;
              if(tabc.isSelected == true){
                that.box_num.push(tabc.name);
                // var hash = {}; 
                // that.box_num = that.box_num.reduce(function(item, next) { 
                // hash[next] ? '' : hash[next] = true && item.push(next); 
                // return item 
                // }, []) 
              }else{
                  that.box_num.forEach(function(j,index){
                    if(tabc.name == j){
                      that.box_num.splice(index,1);
                    }
                  })
              }
    	},
      talnum:function(){
        var that = this;
        console.log(that.box_num)
        var lengthNum = that.box_num.length;
        console.log(lengthNum)
        if(lengthNum >= 2){
           that.housename = '多选';
           that.isShowHouse = false;
           that.isMore = true;
        }
        else{
          that.box_num.forEach(function(k){
             that.housename = k;
             that.isShowHouse = false;
             that.isMore = true;
          })
         
        }
      },
    	swiperBanner:function(){
	        var mySwiper = new Swiper ('.swiper-container', {
		        loop: true,
		        autoplay: {
				    delay: 2500,
				    disableOnInteraction: false,
				},
		        observer: true,
		        pagination: {
		            el: '.swiper-pagination',
                    clickable: true,
		        },
            observer:true,
		        observeParents:true,
	       }) 
	    },
      clickTab:function(){
        var that = this;
        $.ajax({
          url: 'http://lianjia.com/api/ershoufang/condition',
          type: 'get',
          dataType: 'json',
          data: {
             
          },
          success:function(res){
            if(that.condition == null){
            res.data.house_type.forEach(function(tabc){
                tabc.isSelected = false;
            })
            res.data.region.forEach(function(tabtwo){
                tabtwo.isbga = false;
            })
             
              that.condition = res.data.house_type;
              
            }
            if(that.condi == null) {
              res.data.orientation.forEach(function(tabd){
                  tabd.bor = false;
              })
              res.data.tab.forEach(function(tabe){
                  tabe.bor = false;
              })
              that.condi = res.data.orientation;
                that.condi.forEach(function(a){
                  if(that.moreid == a.id){
                    that.morename = a.name;
                      that.isMore = true;
                      a.bor = true;
                }
              })
            }
            that.listTab = res.data;
          }
        })
      },
      clicklala:function(tabd){
        var that = this;
        that.listTab.orientation.forEach(function(t){
          t.bor = false;
        })
        tabd.bor = true;
      },
      clickbebe:function(tabe){
        var that = this;
        that.listTab.tab.forEach(function(y){
          y.bor = false;
        })
        tabe.bor = true;
        console.log(that.boxs)
      },
      talsure:function(){
        this.morename = '更多',
        this.isShowMore = false;
      },
      talno:function(){
        this.listTab.orientation.forEach(function(t){
          t.bor = false;
        })
        this.listTab.tab.forEach(function(y){
          y.bor = false;
        })
        this.isShowMore = false;
      },
      clickTaba: function(taba, index){
          var that = this;
          that.ist = index;
          that.isRegion = true;
          that.isTalcity = true;
          that.clickTa = true;
          that.listTab.region.forEach(function(t){
              if(taba.id == t.id){
                  that.listTwo = t.region2;
              }
          })
          taba.isbg = true;

      },
      clickthree:function(tabtwo,index) {
        console.log(tabtwo)
        var that = this;
        that.istest = index;
        that.textname = tabtwo.name;
        that.isShowCity = false;
        that.isPosition = false;
        window.addEventListener('scroll', this.handleScroll);
      },
      getData:function(){
        this.swiperBanner();
        var that = this;
        $.ajax({
          url: 'http://lianjia.com/api/ershoufang/index',
          type: 'get',
          dataType: 'json',
          data: {
             
          },
          success:function(res){
            that.list = res.data;
            that.listban = res.data.banner;
          }
        })
      }
    }
})