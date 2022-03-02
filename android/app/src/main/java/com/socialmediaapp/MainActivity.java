package com.socialmediaapp;

import com.facebook.react.ReactActivity;

import com.blitzapp.animatedsplash.animation.AddImageView;
import com.blitzapp.animatedsplash.animation.GroupAnimation;

import static com.blitzapp.animatedsplash.animation.Splash.SPLASHSLIDELEFT;
import static com.blitzapp.animatedsplash.animation.Splash.SCALE;
import static com.blitzapp.animatedsplash.animation.Splash.SLIDE;
import static com.blitzapp.animatedsplash.animation.Splash.createSplashView;
import static com.blitzapp.animatedsplash.animation.Splash.performSingleAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;

import static com.blitzapp.animatedsplash.animation.AddImageView.FIT_XY;
import static com.blitzapp.animatedsplash.animation.AddImageView.getCenterX;
import static com.blitzapp.animatedsplash.animation.AddImageView.getCenterY;

import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "socialMediaApp";
  }

  public void onCreate(Bundle saved) {
    super.onCreate(saved);
    initiateSplash();
  }

  public void initiateSplash() {

    //create dialog
    createSplashView(MainActivity.this);

    //set background
    setBackgroundImage(R.drawable.splash);

    // set splash hide animation
    setSplashHideAnimation(SPLASHSLIDELEFT);

    // set splash hide delay
    setSplashHideDelay(1500);

    // Create and add images to view
//    AddImageView image1 = new AddImageView(R.drawable.header, screenHeight * 0.15, screenWidth, 0, 0, FIT_XY, false);
//    AddImageView image2 = new AddImageView(R.drawable.footer, screenHeight * 0.15, screenWidth, 0, screenHeight - screenHeight * 0.15, FIT_XY, false);
    AddImageView logoimage = new AddImageView(R.drawable.logo, screenHeight * 0, screenWidth * 0, getCenterX(screenWidth * 0), getCenterY(screenHeight * 0), FIT_XY, false);

    // add group animation
//    GroupAnimation group1 = new GroupAnimation();
//    group1.performGroupAnimation(image1, SLIDE, 780, 0f, 0f, -screenHeight * 0.15f, 0f);
//    group1.performGr0oupAnimation(image2, SLIDE, 780, 0f, 0f, screenHeight * 0.15f, 0f);


    // add single animation
    performSingleAnimation(logoimage, SCALE, 780, 0.2f, 1f, 0.2f, 1f);

    splashShow();

  }
}
