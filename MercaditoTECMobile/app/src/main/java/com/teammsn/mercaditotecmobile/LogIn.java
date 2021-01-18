package com.teammsn.mercaditotecmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.text.SpannableString ;
import android.text.style.UnderlineSpan ;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class LogIn extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase
     */
    EditText email, password;
    TextView signup;
    Button signin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);
/**
        SpannableString content = new SpannableString( "Content" ) ;
        content.setSpan( new UnderlineSpan() , 0 , content.length() , 0 ) ;
        signup.setText(content) ; */

        /**
         * Se inicializan las variables globales de la clase y se ligan al ID de la vista
         */
        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        signin = (Button) findViewById(R.id.btnsignin);
        signup = (TextView) findViewById(R.id.btnsignup);

        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
            }
        });

        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), SignUp.class));
            }
        });

    }
}