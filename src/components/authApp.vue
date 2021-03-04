<template>
	<div>
		<p>正在登录中,请稍侯......</p>
	</div>
</template>

<script>
	import dingtalk from './../js/dingtalk.js';
	import { dd_getconfig, dd_getuserinfo } from './../api/api';
	import { Cookie } from './../js/common';

	export default {
		name: 'auth',		
		//props: ['href'],
		data() {
			
			return {
				msg: 'Welcome to Your Vue.js App' ,
				//agentkey:'502001',
				agentkey:STATIC_CONFIG.agentkey,
				//platform:STATIC_CONFIG.platform,
				//href:'home'
				href:''
			}
		},
		methods: {

			loginFromDing: function() {
				console.log('auth from ding begin...');
				let _this = this; 
			
				let token = Cookie.Get('token');
				

				//let myhref = 'home'
				let myhref = STATIC_CONFIG.home
// 				if(this.href !== undefined){
// 					myhref = this.href.path;
// 				}
//				alert(JSON.stringify(this.href));
//				alert(myhref);
				
				
				if(token != "" && token != null){
					window.location.href="/#/"+myhref;
					return;					
				}
				 
				 
				dd_getconfig(_this.agentkey).then(res => {
					var _config = res;
					dd.config({
						agentId: _config.agentId,
						corpId: _config.corpId,
						timeStamp: _config.timeStamp,
						nonceStr: _config.nonceStr,
						signature: _config.signature,
						jsApiList: ['runtime.info', 'biz.contact.choose',
							'device.notification.confirm', 'device.notification.alert',
							'device.notification.prompt', 'biz.ding.post',
							'biz.util.openLink'
						]
					});
					
					dd.ready(function() {
						dd.runtime.info({
							onSuccess: function(info) {
								console.log('runtime info: ' + JSON.stringify(info));
							},
							onFail: function(err) {
								console.log('fail: ' + JSON.stringify(err));
							}
						});
						dd.runtime.permission.requestAuthCode({
							corpId: _config.corpId,
							
							onSuccess: function(info) { //成功获得code值,code值在info中
								dd_getuserinfo(_this.agentkey+'|'+ info.code).then(res => {
									if(res.errcode == 0) {
										Cookie.Set("token", res.token, 0);
										Cookie.Set("uname", res.name, 0);
										// alert("登录成功,欢迎你"+res.name);
										// this.$router.push("/");
										window.location.href="/#/"+myhref;

									} else {
										alert("获取用户失败,请用钉钉打开此页面或刷新页面!");
									}

								});

							},
							onFail: function(err) { //获得code值失败
								alert('fail: ' + JSON.stringify(err));
							}	
						});

					}); 

					dd.error(function(err) {
						alert('dd error: ' + JSON.stringify(err));
					});
				})

			}

		},
		created: function() {
			this.href = this.$route.query.props;
			console.log('auth mounted begin...');
			this.loginFromDing();
		}
	}
</script>

<style>

</style>