package com.fakebjtc.module;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.gexin.rp.sdk.base.IBatch;
import com.gexin.rp.sdk.base.IIGtPush;
import com.gexin.rp.sdk.base.IPushResult;
import com.gexin.rp.sdk.base.impl.AppMessage;
import com.gexin.rp.sdk.base.impl.SingleMessage;
import com.gexin.rp.sdk.base.impl.Target;
import com.gexin.rp.sdk.base.payload.APNPayload;
import com.gexin.rp.sdk.http.IGtPush;
import com.gexin.rp.sdk.template.NotificationTemplate;
import com.gexin.rp.sdk.template.style.Style0;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import androidx.annotation.NonNull;

public class PushModule extends ReactContextBaseJavaModule {

  private final static String TAG = "PushModule";

  private ReactApplicationContext context;

  private static String appId = "7iuy5xvB6L9pJcFOfxAgl9";
  private static String appKey = "BFwLGRrOPJ7XPoNnqWMIp6";
  private static String masterSecret = "MlquBPgUNh8tzYf3BkuEI7";
  private static String host = "http://sdk.open.api.igexin.com/apiex.htm";


  public PushModule(ReactApplicationContext context){
    super(context);
    this.context = context;
  }


  @ReactMethod
  public void push(Callback complete){
    Toast.makeText(this.context, "wolegequ", Toast.LENGTH_SHORT).show();
//    String javaVersion = System.getProperty("java.version");
//    Log.i(TAG, "push: java version  -->> " + javaVersion);
    IIGtPush push = new IGtPush(host, appKey, masterSecret);
    IBatch batch = push.getBatch();

    try {
      generateNotifyTemp("e96c20b869d81cbd1d04c04734b1fb41", batch);
      IPushResult result = batch.submit();
      complete.invoke(result.getResponse().toString());
    } catch (Exception e){
      Log.i(TAG, "push exception: ", e);
    }
  }

  private void generateNotifyTemp(String cid, IBatch iBatch) throws Exception{
    Style0 style = new Style0();
    // STEP2：设置推送标题、推送内容
    style.setTitle("请输入通知栏标题");
    style.setText("请输入通知栏内容");
    style.setLogo("push.png");  // 设置推送图标
    // STEP3：设置响铃、震动等推送效果
    style.setRing(true);  // 设置响铃
    style.setVibrate(true);  // 设置震动

    // STEP4：选择通知模板
    NotificationTemplate template = new NotificationTemplate();
    template.setAppId(appId);
    template.setAppkey(appKey);
    template.setStyle(style);
    template.setTransmissionType(1);  // 透传消息设置，收到消息是否立即启动应用： 1为立即启动，2则广播等待客户端自启动
    template.setTransmissionContent("请输入您要透传的内容");
    template.setAPNInfo(getAPNPayload());

    SingleMessage message = new SingleMessage();
    message.setData(template);
    message.setOffline(true);
    message.setOfflineExpireTime(1000 * 600);  // 时间单位为毫秒
    // 厂商通道下发策略
    message.setStrategyJson("{\"ios\":4,\"st\":4}");


    Target target = new Target();
    target.setAppId(appId);
    target.setClientId(cid);
    iBatch.add(message, target);
  }

  private void generateTranTemp(){

  }


  private APNPayload getAPNPayload() {
    APNPayload payload = new APNPayload();
    //在已有数字基础上加1显示，设置为-1时，在已有数字上减1显示，设置为数字时，显示指定数字
    payload.setAutoBadge("+1");
    payload.setContentAvailable(1);
    //ios 12.0 以上可以使用 Dictionary 类型的 sound
    payload.setSound("default");

    //简单模式APNPayload.SimpleMsg
    payload.setAlertMsg(new APNPayload.SimpleAlertMsg("hello--wolegqu"));
    // payload.setAlertMsg(getDictionaryAlertMsg());  //字典模式使用APNPayload.DictionaryAlertMsg

    return payload;
  }




  @NonNull
  @Override
  public String getName() {
    return "PushModule";
  }
}
