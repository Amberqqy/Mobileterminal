var login = new Vue({
	el: '#box-login',
	data: {
       isShow: true,
       password:'',
       phone:'',
       isClickShow: true,
       showtext: '',
	},
	mounted:function(){
      
	},
	methods: {
        clickPhone:function(){
            this.isShow = true;
        },
        clickElse:function(){
        	this.isShow = false;
        },
        clickLogin:function(){
        	var myPhone = this.phone;
        	var myPassword = this.password;
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/; //手机号
            var passWord=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
            //密码用户名正则，4到16位（字母，数字，下划线，减号）
            if(myPhone == '' || myPassword == ''){
            	var that = this;
            	that.isClickShow = false;
            	that.showtext = '手机账号/密码不能为空';
            	setTimeout(function(){
            	   
                   that.isClickShow = true;
            	},3000)
            	return false;
            }
            if(!myreg.test(myPhone)){
                var that = this;
            	that.isClickShow = false;
            	that.showtext = '手机格式错误';
            	setTimeout(function(){
                   that.isClickShow = true;
            	},3000)
            	return false;
            }
            if(!passWord.test(myPassword)){
                var that = this;
            	that.isClickShow = false;
            	that.showtext = '密码格式错误';
            	setTimeout(function(){
                   that.isClickShow = true;
            	},3000)
            	return false;
            }
        }
	}
})