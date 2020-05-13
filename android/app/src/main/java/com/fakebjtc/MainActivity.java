package com.fakebjtc;

import android.os.Bundle;
import android.os.Handler;
import android.os.PersistableBundle;

import com.facebook.react.ReactActivity;

import androidx.annotation.Nullable;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "FakeBJTC";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
    Handler splashHandle = new Handler();
    splashHandle.postDelayed(new Runnable() {
      @Override
      public void run() {
        SplashScreen.hide(MainActivity.this);
      }
    }, 2000);

  }
}
