package com.centrocomercial;

import android.os.Bundle;
import org.apache.cordova.*;

public class MainCComercial extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl(Config.getStartUrl());
    }

}
