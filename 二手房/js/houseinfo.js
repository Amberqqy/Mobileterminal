var info = new Vue({
	el: '#new-box',
	data: {
       isPosition: false,
       lists: [],
	},
	mounted:function(){
		this.getData();
		window.addEventListener('scroll', this.handleScroll);
	},
	methods:{
		destroyed () {
		    window.removeEventListener('scroll', this.handleScroll)
		},
        handleScroll:function(){
               var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
               var offsetTop = document.querySelector('.li-app').offsetTop
               console.log(offsetTop)
               if (scrollTop > offsetTop) {
                   this.isPosition = true
               } else {
                   this.isPosition = false
          }
        },
		getData:function(){
        var that = this;
        var infoId = window.location.search.split("=")[1];
        $.ajax({
          url: 'http://lianjia.com/api/ershoufang/info',
          type: 'get',
          dataType: 'json',
          data: {
            id: infoId,
          },
          success:function(res){
            that.lists = res.data.house_info;
            console.log(that.lists)
            // that.listban = res.data.banner;
          }
        })
		}
	}
})