package com.teammsn.mercaditotecmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class LogIn extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase
     */
    EditText email, password;
    Button signin, signup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);

        /**
         * Se inicializan las variables globales de la clase y se ligan al ID de la vista
         */
        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        signin = (Button) findViewById(R.id.btnsignin);
        signup = (Button) findViewById(R.id.btnsignup);

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