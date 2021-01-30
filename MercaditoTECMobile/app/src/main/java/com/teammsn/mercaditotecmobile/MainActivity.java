package com.teammsn.mercaditotecmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import com.google.firebase.auth.FirebaseAuth;
import com.teammsn.me.Chats;
import com.teammsn.me.Profile;
import com.teammsn.products.MyProducts;
import com.teammsn.products.Products;
import com.teammsn.services.MyServices;
import com.teammsn.services.Services;

public class MainActivity extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase.
     *
     * @param: chat
     * @param: account
     * @param: exit
     * @param: bproducts
     * @param: sproducts
     * @param: bservices
     * @param: sservices
     */
    ImageView chat, account, exit, bproducts, sproducts, bservices, sservices;

    /**
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Se inicializan las variables con los valores correspondientes a su ID en la vista.
        chat = (ImageView) findViewById(R.id.chat);
        account = (ImageView) findViewById(R.id.account);
        exit = (ImageView) findViewById(R.id.exit);
        bproducts = (ImageView) findViewById(R.id.bproducts);
        sproducts = (ImageView) findViewById(R.id.sproducts);
        bservices = (ImageView) findViewById(R.id.bservices);
        sservices = (ImageView) findViewById(R.id.sservices);

        // Se asigna la funcionalidad al icono.
        chat.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), Chats.class));
            }
        });

        // Se asigna la funcionalidad al icono.
        account.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), Profile.class));
            }
        });

        // Se asigna la funcionalidad al icono.
        exit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                FirebaseAuth.getInstance().signOut();
                startActivity(new Intent(getApplicationContext(), LogIn.class));
                finish();
            }
        });

        // Se asigna la funcionalidad a la imagen.
        bproducts.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), Products.class));
            }
        });

        // Se asigna la funcionalidad a la imagen.
        sproducts.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MyProducts.class));
            }
        });

        // Se asigna la funcionalidad a la imagen.
        bservices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), Services.class));
            }
        });

        // Se asigna la funcionalidad a la imagen.
        sservices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MyServices.class));
            }
        });
    }
}