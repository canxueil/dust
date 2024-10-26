/***********************************

> 应用名称：Bilibili大会员通用破解模板
> 软件版本：7.8.2
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ Bilibili大会员（2022-12-05）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header BilibiliProCrack.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'Buvid=ZB410FBF112A98D54B3D81EBDB19C7A2A500; DedeUserID=129099554; DedeUserID__ckMd5=fdac1cbc4364a101; SESSDATA=1e841168%2C1689225943%2C86b1b111; bili_jct=d1935e1558e0a842cda667b2909a1dc0; sid=7388pb69; _uuid=92CD31D2-1D60-FEF5-168F-731D46312BAC08054infoc; buvid3=9B72EB97-3FE7-4CB1-988C-3931EE4A7BED167641infoc';
modifiedHeaders['x-bili-device-bin'] = 'CAEQpPWFIhokWkI0MTBGQkYxMTJBOThENTRCM0Q4MUVCREIxOUM3QTJBNTAwIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoIaVBob25lIFhSBjE0LjQuMWoGNy4xNC4wckBBOTNBRjMzNTVCNTFDREYxRDJBNUIyRjNGMDI2NTI1QTIwMjEwMzIwMTkyMjA3OTlEODcyMEMyQzU1NTI1RDE4eKyygfjLMA==';
modifiedHeaders['Authorization'] = 'identify_v1 d6a72eaafdd3322e50965e8064d87b11';
modifiedHeaders['User-Agent'] = 'bili-universal/71400100 os/ios model/iPhone X mobi_app/iphone osVer/14.4.1 network/2';
modifiedHeaders['buvid'] = 'ZB410FBF112A98D54B3D81EBDB19C7A2A500';
modifiedHeaders['x-bili-metadata-bin'] = 'CiBkNmE3MmVhYWZkZDMzMjJlNTA5NjVlODA2NGQ4N2IxMRIGaXBob25lGgVwaG9uZSCk9YUiKgVhcHBsZTIkWkI0MTBGQkYxMTJBOThENTRCM0Q4MUVCREIxOUM3QTJBNTAwOgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDllZTc5NDJl';
modifiedHeaders['x-bili-trace-id'] = 'bd9aedd68397c5238acffe76c84f4204:8acffe76c84f4204:0:0';
modifiedHeaders['x-bili-exps-bin'] = 'CgIIAQ==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
$done({'headers': modifiedHeaders});