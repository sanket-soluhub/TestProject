package com.testproject;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import java.util.HashMap;

public class CalculateModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  CalculateModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
@Override
   public String getName() {
    return "CalculateExample";
  }
@ReactMethod
  public void show(Callback successCallback) {      
    long sum = 0;
    for (int i = 0; i < 1000; i++) {
    for (int j = 0; j < 1000; j++) {
      for (int k = 0; k < 1000; k++) {
         sum = sum + i + j + k;
      }
    }
  }
  String result = Long.toString(sum);
  successCallback.invoke(result);

    // Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}